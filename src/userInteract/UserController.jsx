//react
import { useEffect, useRef } from "react";
//three.js
import { useFrame, useThree } from "@react-three/fiber";
//components
import { unsetPosZ } from "../App";

export default function UserController({ skipPlanet, planetRadius }) {
	// *** DEFINITIONS *** --------------------------------------------------------------
	const { camera } = useThree();
	const zoomIn = useRef(false);
	const zoomOut = useRef(false);

	// *** HELPER *** -------------------------------------------------------------------
	const isTooNear = (pos2) => camera.position.z >= pos2;
	const isTooFar = (pos2) => camera.position.z <= pos2;
	const handleKeyDown = (e) => {
		if (e.key === "w") zoomIn.current = true;
		else if (e.key === "s") zoomOut.current = true;
	};
	const handleKeyUp = (e) => {
		if (e.key === "w") zoomIn.current = false;
		else if (e.key === "s") zoomOut.current = false;
		else if (e.key === "Enter") skipPlanet();
	};

	// *** DEPENDENCIES *** -------------------------------------------------------------
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [skipPlanet]);

	useEffect(() => {
		camera.position.z = unsetPosZ + planetRadius + 40;
	}, [planetRadius]);

	// *** ANIMATIONS *** ----------------------------------------------------------------
	const zoomStep = 0.5;
	useFrame(() => {
		if (zoomIn.current && isTooNear(unsetPosZ + planetRadius + 5))
			camera.position.z -= zoomStep;
		else if (zoomOut.current && isTooFar(0)) camera.position.z += zoomStep;
	});
}
