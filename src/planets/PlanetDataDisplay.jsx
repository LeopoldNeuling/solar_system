//react
import { useEffect, useRef, useState } from "react";
//three.js
import { Text3D } from "@react-three/drei";
import { Box3, Vector3 } from "three";
//components
import { unsetPosZ } from "../App";

export default function PlanetDataDisplay({ data }) {
	// *** DEFINITIONS *** --------------------------------------------------------------
	const textRef = useRef();
	const [width, setWidth] = useState(0);
	let size = 0.5;

	let yOff = data.r;
	switch (data.name) {
		case "Jupiter":
		case "Saturn":
		case "Uranus":
		case "Neptune":
			yOff *= 1.25;
			size = 4;
			break;
		default:
			yOff += 1.5;
	}

	// *** DEPENDENCIES *** -------------------------------------------------------------
	useEffect(() => {
		if (!textRef.current) return;
		const box = new Box3().setFromObject(textRef.current);
		const size = new Vector3();
		box.getSize(size); // size.x, size.y, size.z
		setWidth(size.x);
	}, [data]);

	return (
		<Text3D
			ref={textRef}
			font="/fonts/helvetiker_regular.typeface.json"
			size={size}
			height={0.3}
			bevelEnabled
			bevelThickness={0.03}
			bevelSize={0.02}
			bevelSegments={5}
			position={[-width / 2, yOff, unsetPosZ]}
		>
			{data.name}
			<meshStandardMaterial color={data.col} />
		</Text3D>
	);
}
