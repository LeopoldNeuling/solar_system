import { PlanetSkeleton } from "./PlanetTemplates";

const __displacementScale = 0.25;
export const sphereSegments = [64, 64];
export const unsetPosZ = -20;

export function Mercury({ pos, radius, tilTAngleDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			tilTAngleDeg={tilTAngleDeg}
			colorMapPath={"./mercury/colorMap.jpg"}
			bumpMapPath={"./mercury/bumpMap.jpg"}
		/>
	);
}
export function Venus({ pos, radius, tilTAngleDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			tilTAngleDeg={tilTAngleDeg}
			colorMapPath={"./venus/colorMap.jpg"}
			bumpMapPath={"./venus/bumpMap.jpg"}
		/>
	);
}
export function Earth({ pos, radius, tilTAngleDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			tilTAngleDeg={tilTAngleDeg}
			colorMapPath={"./earth/colorMap.jpg"}
			bumpMapPath={"./earth/bumpMap.jpg"}
			specularMapPath={"./earth/specularMap.jpg"}
			normalMapPath={"./earth/normalMap.jpg"}
			displacementScale={__displacementScale}
		/>
	);
}
export function Mars({ pos, radius, tilTAngleDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			tilTAngleDeg={tilTAngleDeg}
			colorMapPath={"./mars/colorMap.jpg"}
			bumpMapPath={"./mars/bumpMap.jpg"}
			normalMapPath={"./mars/normalMap.jpg"}
			displacementScale={__displacementScale}
		/>
	);
}
export function Jupiter({ pos, radius, tilTAngleDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			tilTAngleDeg={tilTAngleDeg}
			colorMapPath={"./jupiter/colorMap.jpg"}
		/>
	);
}
export function Saturn({ pos, radius, tilTAngleDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			tilTAngleDeg={tilTAngleDeg}
			colorMapPath="./saturn/colorMap.jpg"
			ringColorMapPath="./saturn/ringColorMap.jpg"
			ringAlphaMapPath="./saturn/ringAlphaMap.gif"
			ringOrientation="horizontal"
		/>
	);
}
export function Uranus({ pos, radius, tilTAngleDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			tilTAngleDeg={tilTAngleDeg}
			colorMapPath={"./uranus/colorMap.jpg"}
			ringColorMapPath={"./uranus/ringColorMap.jpg"}
			ringAlphaMapPath={"./uranus/ringAlphaMap.gif"}
			ringOrientation="vertical"
		/>
	);
}
export function Neptune({ pos, radius, tilTAngleDeg }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			tilTAngleDeg={tilTAngleDeg}
			colorMapPath={"./neptune/colorMap.jpg"}
		/>
	);
}
