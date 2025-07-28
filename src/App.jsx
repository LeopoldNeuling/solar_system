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
			<ambientLight intensity={2} />
			<BackgroundTexture bgType={"simple"} />

			<Saturn />
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
