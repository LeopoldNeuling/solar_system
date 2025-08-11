//components
import { PlanetSkeleton } from "./PlanetTemplates";
import { __displacementScale } from "../App";

export function Mercury({ pos, radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			tilTAngleDeg={tiltDeg}
			colorMapPath={"./mercury/colorMap.jpg"}
			bumpMapPath={"./mercury/bumpMap.jpg"}
		/>
	);
}
export function Venus({ pos, radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			tilTAngleDeg={tiltDeg}
			colorMapPath={"./venus/colorMap.jpg"}
			bumpMapPath={"./venus/bumpMap.jpg"}
		/>
	);
}
export function Earth({ pos, radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
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
export function Mars({ pos, radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			tilTAngleDeg={tiltDeg}
			colorMapPath={"./mars/colorMap.jpg"}
			bumpMapPath={"./mars/bumpMap.jpg"}
			normalMapPath={"./mars/normalMap.jpg"}
			displacementScale={__displacementScale}
		/>
	);
}
export function Jupiter({ pos, radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			tilTAngleDeg={tiltDeg}
			colorMapPath={"./jupiter/colorMap.jpg"}
		/>
	);
}
export function Saturn({ pos, radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			tilTAngleDeg={tiltDeg}
			colorMapPath="./saturn/colorMap.jpg"
			ringColorMapPath="./saturn/ringColorMap.jpg"
			ringAlphaMapPath="./saturn/ringAlphaMap.gif"
			ringOrientation="horizontal"
		/>
	);
}
export function Uranus({ pos, radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			tilTAngleDeg={tiltDeg}
			colorMapPath={"./uranus/colorMap.jpg"}
			ringColorMapPath={"./uranus/ringColorMap.jpg"}
			ringAlphaMapPath={"./uranus/ringAlphaMap.gif"}
			ringOrientation="vertical"
		/>
	);
}
export function Neptune({ pos, radius, tiltDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			tilTAngleDeg={tiltDeg}
			colorMapPath={"./neptune/colorMap.jpg"}
		/>
	);
}
