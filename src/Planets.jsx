/**
 * @imports
 */
//react
import { useRef } from "react";
//three.js
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const __sphereSegments = [64, 64];
const __displacementScale = 0.25;
const __unsetPosZ = -10;

function PlanetSkeleton({
	pos,
	radius,
	colorMapPath,
	bumpMapPath,
	specularMapPath,
	normalMapPath,
	displacementScale = 0,

	ringColorMapPath,
	ringColorOrientation = "horizontal", // 'horizontal' or 'vertical'
}) {
	const colorMap = colorMapPath ? useTexture(colorMapPath) : undefined;
	const bumpMap = bumpMapPath ? useTexture(bumpMapPath) : undefined;
	const specularMap = specularMapPath ? useTexture(specularMapPath) : undefined;
	const normalMap = normalMapPath ? useTexture(normalMapPath) : undefined;

	const ringColorMap = ringColorMapPath
		? useTexture(ringColorMapPath)
		: undefined;

	const meshRef = useRef();
	useFrame((_, delta) => (meshRef.current.rotation.y += 0.5 * delta));

	return (
		<>
			<mesh ref={meshRef} position={pos}>
				<sphereGeometry args={[radius, ...__sphereSegments]} />
				<meshPhongMaterial
					map={colorMap}
					bumpMap={bumpMap}
					specularMap={specularMap}
					normalMap={normalMap}
					displacementMap={bumpMap}
					displacementScale={displacementScale}
				/>
			</mesh>
		</>
	);
}

export function Mercury({ pos = [0, 0, __unsetPosZ], radius = 5 }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			colorMapPath={"./mercury/colorMap.jpg"}
			bumpMapPath={"./mercury/bumpMap.jpg"}
		/>
	);
}
export function Venus({ pos = [0, 0, __unsetPosZ], radius = 5 }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			colorMapPath={"./venus/colorMap.jpg"}
			bumpMapPath={"./venus/bumpMap.jpg"}
		/>
	);
}
export function Earth({ pos = [0, 0, __unsetPosZ], radius = 5 }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			colorMapPath={"./earth/colorMap.jpg"}
			bumpMapPath={"./earth/bumpMap.jpg"}
			specularMapPath={"./earth/specularMap.jpg"}
			normalMapPath={"./earth/normalMap.jpg"}
			displacementScale={__displacementScale}
		/>
	);
}
export function Mars({ pos = [0, 0, __unsetPosZ], radius = 5 }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			colorMapPath={"./mars/colorMap.jpg"}
			bumpMapPath={"./mars/bumpMap.jpg"}
			normalMapPath={"./mars/normalMap.jpg"}
			displacementScale={__displacementScale}
		/>
	);
}
export function Jupiter({ pos = [0, 0, __unsetPosZ], radius = 5 }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			colorMapPath={"./jupiter/colorMap.jpg"}
		/>
	);
}
export function Saturn({ pos = [0, 0, __unsetPosZ], radius = 5 }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			colorMapPath={"./saturn/colorMap.jpg"}
		/>
	);
}
export function Uranus({ pos = [0, 0, __unsetPosZ], radius = 5 }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			colorMapPath={"./uranus/colorMap.jpg"}
		/>
	);
}
export function Neptune({ pos = [0, 0, __unsetPosZ], radius = 5 }) {
	return (
		<PlanetSkeleton
			pos={pos}
			radius={radius}
			colorMapPath={"./neptune/colorMap.jpg"}
		/>
	);
}
