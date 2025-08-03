/**
 * @imports
 */
//react
import { useEffect } from "react";
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
} from "./Planets";
import CameraMover from "./Camera";
import "./style.css";

export const __displacementScale = 0.25;
export const sphereSegments = [64, 64];
export const unsetPosZ = -100;

const earthRadius = 2;
const radiiRatioToEarth = {
	mercury: earthRadius * 0.383,
	venus: earthRadius * 0.949,
	mars: earthRadius * 0.532,
	jupiter: earthRadius * 10.97,
	saturn: earthRadius * 9.14,
	uranus: earthRadius * 3.98,
	neptune: earthRadius * 3.81,
};

export default function App() {
	return (
		<Canvas camera={{ position: [0, 0, 0] }}>
			<CameraMover />
			<ambientLight intensity={0.5} />
			<BackgroundTexture bgType={"simple"} />

			<Mercury
				tilTAngleDeg={0.03}
				pos={[-25, 0, -distanceToSun.mercury * distMultiplier]}
				radius={radiiRatioToEarth.mercury}
			/>
			<Venus
				tilTAngleDeg={177.4}
				pos={[-20, 0, -distanceToSun.venus * distMultiplier]}
				radius={radiiRatioToEarth.venus}
			/>
			<Earth
				tilTAngleDeg={23.5}
				pos={[-10, 0, -distanceToSun.earth * distMultiplier]}
				radius={earthRadius}
			/>
			<Mars
				tilTAngleDeg={25.19}
				pos={[0, 0, -distanceToSun.mars * distMultiplier]}
				radius={radiiRatioToEarth.mars}
			/>
			<Jupiter
				tilTAngleDeg={3.13}
				pos={[10, 0, -distanceToSun.jupiter * distMultiplier]}
				radius={radiiRatioToEarth.jupiter}
			/>
			<Saturn
				tilTAngleDeg={26.73}
				pos={[20, 0, -distanceToSun.saturn * distMultiplier]}
				radius={radiiRatioToEarth.saturn}
			/>
			<Uranus
				tilTAngleDeg={97.77}
				pos={[30, 0, -distanceToSun.uranus * distMultiplier]}
				radius={radiiRatioToEarth.uranus}
			/>
			<Neptune
				tilTAngleDeg={28.32}
				pos={[40, 0, -distanceToSun.neptune * distMultiplier]}
				radius={radiiRatioToEarth.neptune}
			/>
		</Canvas>
	);
}

function BackgroundTexture({ bgType }) {
	const { scene } = useThree();
	const texture = useTexture(
		`./universe/${bgType === "simple" ? "starts" : "milkyway"}.jpg`
	);

	useEffect(() => {
		scene.background = texture;
	}, [scene, texture]);

	return null;
}
