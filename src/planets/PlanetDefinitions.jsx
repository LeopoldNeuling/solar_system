//components
import { PlanetSkeleton } from "./PlanetTemplates";
import { __displacementScale } from "../App";

export const earthRadius = 4,
	planetData = {
		mercury: {
			r: earthRadius * 0.383,
			tilt: 0.03,
			name: "Mercury",
			col: 0xad9795,
		},
		venus: {
			r: earthRadius * 0.949,
			tilt: 2.6,
			name: "Venus",
			col: 0xd49e17,
		},
		earth: {
			r: earthRadius,
			tilt: 23.5,
			name: "Earth",
			col: 0x167d06,
		},
		mars: {
			r: earthRadius * 0.532,
			tilt: 25.19,
			name: "Mars",
			col: 0xcc4818,
		},
		jupiter: {
			r: earthRadius * 10.97,
			tilt: 3.13,
			name: "Jupiter",
			col: 0xccc64e,
		},
		saturn: {
			r: earthRadius * 9.14,
			tilt: 26.73,
			name: "Saturn",
			col: 0x969130,
		},
		uranus: {
			r: earthRadius * 3.98,
			tilt: 97.77,
			name: "Uranus",
			col: 0x40b2bd,
		},
		neptune: {
			r: earthRadius * 3.81,
			tilt: 28.32,
			name: "Neptune",
			col: 0x3535bd,
		},
	},
	planets = [
		<Mercury tiltDeg={planetData.mercury.tilt} radius={planetData.mercury.r} />,
		<Venus tiltDeg={planetData.venus.tilt} radius={planetData.venus.r} />,
		<Earth tiltDeg={planetData.earth.tilt} radius={earthRadius} />,
		<Mars tiltDeg={planetData.mars.tilt} radius={planetData.mars.r} />,
		<Jupiter tiltDeg={planetData.jupiter.tilt} radius={planetData.jupiter.r} />,
		<Saturn tiltDeg={planetData.saturn.tilt} radius={planetData.saturn.r} />,
		<Uranus tiltDeg={planetData.uranus.tilt} radius={planetData.uranus.r} />,
		<Neptune tiltDeg={planetData.neptune.tilt} radius={planetData.neptune.r} />,
	];

export function Mercury({ radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			radius={radius}
			tilTAngleDeg={tiltDeg}
			colorMapPath={"./mercury/colorMap.jpg"}
			bumpMapPath={"./mercury/bumpMap.jpg"}
		/>
	);
}
export function Venus({ radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			radius={radius}
			tilTAngleDeg={tiltDeg}
			colorMapPath={"./venus/colorMap.jpg"}
			bumpMapPath={"./venus/bumpMap.jpg"}
		/>
	);
}
export function Earth({ radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			radius={radius}
			tilTAngleDeg={tiltDeg}
			colorMapPath={"./earth/colorMap.jpg"}
			bumpMapPath={"./earth/bumpMap.jpg"}
			specularMapPath={"./earth/specularMap.jpg"}
			normalMapPath={"./earth/normalMap.jpg"}
			displacementScale={__displacementScale}
		/>
	);
}
export function Mars({ radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			radius={radius}
			tilTAngleDeg={tiltDeg}
			colorMapPath={"./mars/colorMap.jpg"}
			bumpMapPath={"./mars/bumpMap.jpg"}
			normalMapPath={"./mars/normalMap.jpg"}
			displacementScale={__displacementScale}
		/>
	);
}
export function Jupiter({ radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			radius={radius}
			tilTAngleDeg={tiltDeg}
			colorMapPath={"./jupiter/colorMap.jpg"}
		/>
	);
}
export function Saturn({ radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			radius={radius}
			tilTAngleDeg={tiltDeg}
			colorMapPath="./saturn/colorMap.jpg"
			ringColorMapPath="./saturn/ringColorMap.jpg"
			ringAlphaMapPath="./saturn/ringAlphaMap.gif"
			ringOrientation="horizontal"
		/>
	);
}
export function Uranus({ radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			radius={radius}
			tilTAngleDeg={tiltDeg}
			colorMapPath={"./uranus/colorMap.jpg"}
			ringColorMapPath={"./uranus/ringColorMap.jpg"}
			ringAlphaMapPath={"./uranus/ringAlphaMap.gif"}
			ringOrientation="vertical"
		/>
	);
}
export function Neptune({ radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			radius={radius}
			tilTAngleDeg={tiltDeg}
			colorMapPath={"./neptune/colorMap.jpg"}
		/>
	);
}
