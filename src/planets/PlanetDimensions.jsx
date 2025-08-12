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

export const earthRadius = 4,
	planetData = {
		mercury: {
			r: earthRadius * 0.383,
			tilt: 0.03,
		},
		venus: {
			r: earthRadius * 0.949,
			tilt: 2.6,
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
export const planets = [
	<Mercury tiltDeg={planetData.mercury.tilt} radius={planetData.mercury.r} />,
	<Venus tiltDeg={planetData.venus.tilt} radius={planetData.venus.r} />,
	<Earth tiltDeg={planetData.earth.tilt} radius={earthRadius} />,
	<Mars tiltDeg={planetData.mars.tilt} radius={planetData.mars.r} />,
	<Jupiter tiltDeg={planetData.jupiter.tilt} radius={planetData.jupiter.r} />,
	<Saturn tiltDeg={planetData.saturn.tilt} radius={planetData.saturn.r} />,
	<Uranus tiltDeg={planetData.uranus.tilt} radius={planetData.uranus.r} />,
	<Neptune tiltDeg={planetData.neptune.tilt} radius={planetData.neptune.r} />,
];
