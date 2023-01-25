interface Props {
	address: {
		as: string;
		domains: string;
		ip: string;
		isp: string;
		location: { city: string; region: string; timezone: string; lat: number; lng: number };
	};
}

const AddressInfo: React.FC<Props> = ({ address }) => {
	return (
		<div
			className=" max-w-sm lg:max-w-4xl lg:flex-row w-full flex flex-col justify-center items-center text-center rounded-2xl z-1000
bg-white lg:py-4 lg:justify-start lg:items-start lg:text-left p-6 "
			style={{ zIndex: 10000 }}>
			<div className="lg:pl-4 lg:pr-10 lg:border-r-[1px] lg:mr-4 lg:border-DarkGray">
				<h2 className="uppercase text-DarkGray pb-2">IP Address</h2>
				<p className="font-bold text-VeryDarkGray">{address.ip}</p>
			</div>
			<div className="lg:pl-4 lg:pr-10 py-4 lg:py-0 lg:border-r-[1px] lg:mr-4 border-DarkGray">
				<h2 className="uppercase text-DarkGray pb-2">Location</h2>
				<p className="font-bold text-VeryDarkGray lg:break-words">
					{address.location.city}, {address.location.region}
				</p>
			</div>
			<div className="lg:pl-4  pb-4 lg:pb-0 lg:border-r-[1px] lg:mr-4 border-DarkGray">
				<h2 className="uppercase text-DarkGray pb-2">TIMEZONE</h2>
				<p className="font-bold text-VeryDarkGray w-40">UTC {address.location.timezone}</p>
			</div>
			<div className="lg:pl-4 lg:pr-10  border-DarkGray">
				<h2 className="uppercase text-DarkGray pb-2">ISP</h2>
				<p className="font-bold text-VeryDarkGray">{address.isp}</p>
			</div>
		</div>
	);
};

export default AddressInfo;
