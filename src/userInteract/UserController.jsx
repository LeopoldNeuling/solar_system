//react
import { useContext, useEffect, useRef } from "react";
//three.js
import { useFrame, useThree } from "@react-three/fiber";
//components
import { unsetPosZ } from "../App";
import { AnimationContext } from "../AnimationProvider";

export default function UserController({ skipPlanet, planetRadius }) {
	// *** DEFINITIONS *** --------------------------------------------------------------
	const { camera } = useThree();
	const { setRotateLeft, setRotateRight, setUserTouch } =
		useContext(AnimationContext);
	const zoomIn = useRef(false);
	const zoomOut = useRef(false);

	// *** HELPER *** -------------------------------------------------------------------
	const isTooNear = (pos2) => camera.position.z >= pos2;
	const isTooFar = (pos2) => camera.position.z <= pos2;
	const handleKeyDown = (e) => {
		const lower = e.key.toLowerCase();
		if (lower === "w") zoomIn.current = true;
		else if (lower === "s") zoomOut.current = true;
		else if (lower === "a") setRotateLeft(true);
		else if (lower === "d") setRotateRight(true);
	};
	const handleKeyUp = (e) => {
		const lower = e.key.toLowerCase();
		if (lower === "w") zoomIn.current = false;
		else if (lower === "s") zoomOut.current = false;
		else if (lower === "enter") skipPlanet();
		else if (lower === "a") setRotateLeft(false);
		else if (lower === "d") setRotateRight(false);
		else if (lower === "r") setUserTouch(false);
	};

	// *** DEPENDENCIES *** -------------------------------------------------------------
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, []);

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
