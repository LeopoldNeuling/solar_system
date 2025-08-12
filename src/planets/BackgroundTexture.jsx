//react
import { useEffect } from "react";
//three.js
import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export default function BackgroundTexture({ textureName }) {
	const { scene } = useThree();
	const texture = useTexture(`./bg/${textureName}.jpg`);
	useEffect(() => {
		scene.background = null;
		scene.background = texture;
		return () => {
			scene.background = null;
		};
	}, [texture, scene]);
}
