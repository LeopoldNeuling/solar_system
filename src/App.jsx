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
import "./style.css";

export default function App() {
	return (
		<Canvas camera={{ position: [0, 0, 0] }}>
			<ambientLight intensity={0.5} />
			<BackgroundTexture bgType={"simple"} />

			{/* <Mercury tilTAngleDeg={0.03} /> */}
			{/* <Venus tilTAngleDeg={177.4} /> */}
			{/* <Earth tilTAngleDeg={23.5} /> */}
			{/* <Mars tilTAngleDeg={25.19}/> */}
			{/* <Jupiter tilTAngleDeg={3.13} /> */}
			{/* <Saturn tilTAngleDeg={26.73} /> */}
			<Uranus tilTAngleDeg={97.77} />
			{/* <Neptune tilTAngleDeg={28.32} /> */}
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
