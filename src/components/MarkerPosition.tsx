import { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";
import icon from "../icon";

interface Props {
	address: {
		location: {
			lat: number;
			lng: number;
		};
	};
}

const MarkerPosition: React.FC<Props> = ({ address }) => {
	const position: [number, number] = [address.location.lat, address.location.lng];

	const map = useMap();

	useEffect(() => {
		map.flyTo(position, 13, {
			animate: true,
		});
	}, [map, position]);

	return (
		<div>
			<Marker icon={icon} position={position}></Marker>
		</div>
	);
};

export default MarkerPosition;
