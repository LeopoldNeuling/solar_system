//react
import { useContext, useEffect, useRef } from "react";
//three.js
import { useFrame, useThree } from "@react-three/fiber";
//components
import { unsetPosZ } from "../App";
import { AnimationContext } from "../provider/AnimationProvider";

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
		switch (e.key.toLowerCase()) {
			case "w":
				zoomIn.current = true;
				break;
			case "s":
				zoomOut.current = true;
				break;
			case "a":
				setRotateLeft(true);
				break;
			case "d":
				setRotateRight(true);
		}
	};
	const handleKeyUp = (e) => {
		switch (e.key.toLowerCase()) {
			case "w":
				zoomIn.current = false;
				break;
			case "s":
				zoomOut.current = false;
				break;
			case "a":
				setRotateLeft(false);
				break;
			case "d":
				setRotateRight(false);
				break;
			case "enter":
				skipPlanet();
				break;
			case "r":
				setUserTouch(false);
		}
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
