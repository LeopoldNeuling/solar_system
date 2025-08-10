/**
 * @imports
 */
//react
import { useEffect, useState } from "react";
//three.js
import { useTexture } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
//components
import {
	Earth,
	Jupiter,
	Mars,
	Mercury,
	Neptune,
	Saturn,
	Uranus,
	Venus,
} from "./PlanetDefinitions";
import CameraMover from "./Camera";
import "./style.css";

export const __displacementScale = 0.25;
export const sphereSegments = [64, 64];
export const unsetPosZ = -100;

const earthRadius = 4;
const radiiRatioToEarth = {
	mercury: earthRadius * 0.383,
	venus: earthRadius * 0.949,
	mars: earthRadius * 0.532,
	jupiter: earthRadius * 10.97,
	saturn: earthRadius * 9.14,
	uranus: earthRadius * 3.98,
	neptune: earthRadius * 3.81,
};
const planets = [
	<Mercury tilTAngleDeg={0.03} radius={radiiRatioToEarth.mercury} />,
	<Venus tilTAngleDeg={177.4} radius={radiiRatioToEarth.venus} />,
	<Earth tilTAngleDeg={23.5} radius={earthRadius} />,
	<Mars tilTAngleDeg={25.19} radius={radiiRatioToEarth.mars} />,
	<Jupiter tilTAngleDeg={3.13} radius={radiiRatioToEarth.jupiter} />,
	<Saturn tilTAngleDeg={26.73} radius={radiiRatioToEarth.saturn} />,
	<Uranus tilTAngleDeg={97.77} radius={radiiRatioToEarth.uranus} />,
	<Neptune tilTAngleDeg={28.32} radius={radiiRatioToEarth.neptune} />,
];

export default function App() {
	function handleKeyDown(e) {
		if (e.key === "Enter")
			setPlanetPointer((prev) => (prev + 1) % Object.keys(planets).length);
	}
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		alert('Press "Enter" to change the planet');

		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	const [planetPointer, setPlanetPointer] = useState(0);
	return (
		<>
			<Canvas camera={{ position: [0, 0, 0] }}>
				<CameraMover />
				<ambientLight intensity={0.5} />
				<BackgroundTexture />

				{planets[planetPointer]}
			</Canvas>
		</>
	);
}

function BackgroundTexture() {
	const { scene } = useThree();
	const texture = useTexture("stars.jpg");

	useEffect(() => {
		scene.background = texture;
	}, [scene, texture]);

	return null;
}
