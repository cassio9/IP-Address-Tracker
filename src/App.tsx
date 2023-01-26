import "./App.css";
import { useEffect, useState } from "react";
import HeroBg from "./assets/pattern-bg.png";
import axios from "axios";
import Map from "./components/Map";
import AddressInfo from "./components/AddressInfo";

interface dataAddress {
	as: string;
	domains: string;
	ip: string;
	isp: string;
	location: { city: string; region: string; timezone: string; lat: number; lng: number };
}

function App() {
	const [address, setAddress] = useState<dataAddress | null>(null);
	const [ipAddress, setIpAddress] = useState("");

	const VITE_KEY: string = import.meta.env.VITE_KEY;

	const checkIpAddress =
		/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
	const checkDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

	useEffect(() => {
		let ignore = false;
		try {
			async function startFetching() {
				const data = await axios.get(
					`https://geo.ipify.org/api/v2/country,city?apiKey=${VITE_KEY}&ipAddress=192.212.174.101`
				);
				if (!ignore) {
					setAddress(data.data);
				}
			}

			startFetching();
		} catch (error) {
			console.trace(error);
		}

		return () => {
			ignore = true;
		};
	}, []);

	const getInputIP = async () => {
		const data = await axios.get(
			`https://geo.ipify.org/api/v2/country,city?apiKey=${VITE_KEY}&${
				checkIpAddress.test(ipAddress)
					? `ipAddress=${ipAddress}`
					: checkDomain.test(ipAddress)
					? `domain=${ipAddress}`
					: "ipAddress=8.8.8.8"
			}`
		);
		setAddress(data.data);

		return;
	};

	const submitIp = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		getInputIP();
		setIpAddress("");
	};

	return (
		<div className="min-h-screen max-h-fit relative font-Rubik flex flex-col justify-center items-center">
			{address && (
				<>
					<div className="flex flex-col items-center justify-start lg:h-48 h-72 w-full relative px-4">
						<img
							className="w-full object-fill object-top -z-10 absolute inset-0 h-screen"
							src={HeroBg}
							alt=""
						/>
						<h1 className="text-white text-2xl font-medium pt-6">IP Address Tracker</h1>
						<form className="flex items-center w-full max-w-md" onSubmit={submitIp}>
							<input
								type="text"
								id="ipAddress"
								className="w-full my-4 rounded-l-2xl mx-auto   py-4 px-4 placeholder:text-DarkGray focus:outline-none"
								value={ipAddress}
								onChange={(e) => setIpAddress(e.target.value)}
								placeholder="Search for any IP address or domain"
								required
							/>
							<button className="bg-black py-[1.77rem] px-6 rounded-r-2xl bg-[url(./assets/icon-arrow.svg)] bg-no-repeat bg-center"></button>
						</form>
						<AddressInfo address={address} />
					</div>
					<Map address={address} />
				</>
			)}
		</div>
	);
}

export default App;
