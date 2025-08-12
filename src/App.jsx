//react
import { useContext, useEffect, useRef, useState } from "react";
//three.js
import { Canvas } from "@react-three/fiber";
//components
import UserController from "./userInteract/UserController";
import PlanetDataDisplay from "./planets/PlanetDataDisplay";
import BackgroundTexture from "./planets/BackgroundTexture";
import { UserInfoDialog } from "./userInteract/userInfoDialog";
import { AnimationContext } from "./provider/AnimationProvider";
import { planets, planetData } from "./planets/PlanetDefinitions";
import "./style.css";

export const __displacementScale = 0.25;
export const sphereSegments = [64, 64];
export const unsetPosZ = -100;

export default function App() {
	// *** DEFINITIONS *** --------------------------------------------------------------
	const { setUserTouch } = useContext(AnimationContext);
	const [planetPointer, setPlanetPointer] = useState(0);
	const [bgTexture, setBgTexture] = useState("stars");
	const dialogRef = useRef();
	const sunColor = 0xfff5e1;

	// *** HELPER *** -------------------------------------------------------------------
	const handlePlanetSkip = () => {
		setPlanetPointer((prev) => (prev + 1) % Object.keys(planets).length);
		setUserTouch(false);
	};

	// *** DEPENDENCIES *** -------------------------------------------------------------
	useEffect(() => {
		dialogRef.current.openDialog();
	}, []);

	return (
		<>
			<UserInfoDialog ref={dialogRef} />
			<Canvas camera={{ position: [0, 0, 0] }}>
				<pointLight color={sunColor} intensity={1.5} decay={0} />

				<BackgroundTexture textureName={bgTexture} />
				{planets[planetPointer]}
				<PlanetDataDisplay data={Object.values(planetData)[planetPointer]} />

				<UserController
					skipPlanet={handlePlanetSkip}
					planetRadius={Object.values(planetData)[planetPointer].r}
					swapBg={() =>
						setBgTexture((prev) => (prev === "stars" ? "milkyway" : "stars"))
					}
				/>
			</Canvas>
		</>
	);
}
