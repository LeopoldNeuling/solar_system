//react
import { useContext, useEffect, useRef, useState } from "react";
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
} from "./planets/PlanetDefinitions";
import UserController from "./userInteract/UserController";
import { UserInfoDialog } from "./userInteract/userInfoDialog";
import { AnimationContext } from "./AnimationProvider";
import "./style.css";

export const __displacementScale = 0.25;
export const sphereSegments = [64, 64];
export const unsetPosZ = -100;

const earthRadius = 4;
const planetData = {
	mercury: {
		r: earthRadius * 0.383,
		tilt: 0.03,
	},
	venus: {
		r: earthRadius * 0.949,
		tilt: 177.4,
	},
	earth: {
		r: earthRadius,
		tilt: 23.5,
	},
	mars: {
		r: earthRadius * 0.532,
		tilt: 25.19,
	},
	jupiter: {
		r: earthRadius * 10.97,
		tilt: 3.13,
	},
	saturn: {
		r: earthRadius * 9.14,
		tilt: 26.73,
	},
	uranus: {
		r: earthRadius * 3.98,
		tilt: 97.77,
	},
	neptune: {
		r: earthRadius * 3.81,
		tilt: 28.32,
	},
};
const planets = [
	<Mercury tiltDeg={planetData.mercury.tilt} radius={planetData.mercury.r} />,
	<Venus tiltDeg={planetData.venus.tilt} radius={planetData.venus.r} />,
	<Earth tiltDeg={planetData.earth.tilt} radius={earthRadius} />,
	<Mars tiltDeg={planetData.mars.tilt} radius={planetData.mars.r} />,
	<Jupiter tiltDeg={planetData.jupiter.tilt} radius={planetData.jupiter.r} />,
	<Saturn tiltDeg={planetData.saturn.tilt} radius={planetData.saturn.r} />,
	<Uranus tiltDeg={planetData.uranus.tilt} radius={planetData.uranus.r} />,
	<Neptune tiltDeg={planetData.neptune.tilt} radius={planetData.neptune.r} />,
];

export default function App() {
	const { setUserTouch } = useContext(AnimationContext);

	const handleControllerSkip = () => {
		setPlanetPointer((prev) => (prev + 1) % Object.keys(planets).length);
		setUserTouch(false);
	};

	const [planetPointer, setPlanetPointer] = useState(0);
	return (
		<>
			<UserInfo />
			<Canvas camera={{ position: [0, 0, 0] }}>
				<ambientLight intensity={0.5} />
				<UserController
					skipPlanet={handleControllerSkip}
					planetRadius={Object.values(planetData)[planetPointer].r}
				/>

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
}

function UserInfo() {
	const dialogRef = useRef();
	useEffect(() => {
		dialogRef.current.openDialog();
	}, []);
	return <UserInfoDialog ref={dialogRef} />;
}
