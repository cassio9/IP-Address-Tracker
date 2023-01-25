import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerPosition from "./MarkerPosition";

interface Props {
	address: {
		location: {
			lat: number;
			lng: number;
		};
	};
}
const Map: React.FC<Props> = ({ address }) => {
	return (
		<MapContainer
			center={[address.location.lat, address.location.lng]}
			zoom={13}
			scrollWheelZoom={false}
			style={{ height: "600px", width: "100%" }}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<MarkerPosition address={address} />
		</MapContainer>
	);
};

export default Map;
