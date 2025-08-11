/**
 * @imports
 */
//react
import { useRef } from "react";
//three.js
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
	RingGeometry,
	Vector3,
	DoubleSide,
	MathUtils,
	Quaternion,
} from "three";
//components
import { sphereSegments, unsetPosZ } from "./App";

export function PlanetSkeleton({
	//group (planet + ring)
	pos = [0, 0, unsetPosZ],
	radius = 5,
	tilTAngleDeg = 0,
	//planet
	colorMapPath,
	bumpMapPath,
	specularMapPath,
	normalMapPath,
	displacementScale = 0,
	//ring
	ringColorMapPath,
	ringAlphaMapPath,
	ringOrientation = "horizontal",
}) {
	const planetTextures = {
		color: colorMapPath,
		bump: bumpMapPath,
		specular: specularMapPath,
		normal: normalMapPath,
	};
	const ringTextures = {
		color: ringColorMapPath,
		alpha: ringAlphaMapPath,
	};

	const axisTilt = new Vector3(
		0,
		MathUtils.degToRad(tilTAngleDeg),
		0
	).normalize();

	const meshRef = useRef();

	useFrame((_, delta) => {
		const angle = 0.01; // radians per frame
		const q = new Quaternion();
		q.setFromAxisAngle(axisTilt, angle);
		meshRef.current.quaternion.multiply(q); // apply rotation
	});

	return (
		<group
			ref={meshRef}
			position={pos}
			rotation={[0, 0.5, MathUtils.degToRad(tilTAngleDeg)]}
		>
			<PlanetConstructor
				textures={planetTextures}
				radius={radius}
				displacementScale={displacementScale}
			/>
			{ringColorMapPath && (
				<RingConstructor
					parentRadius={radius}
					textures={ringTextures}
					orientation={ringOrientation}
				/>
			)}
		</group>
	);
}

function PlanetConstructor({ textures, radius, displacementScale }) {
	const { color, bump, specular, normal } = textures;
	const colorMap = color ? useTexture(color) : undefined;
	const bumpMap = bump ? useTexture(bump) : undefined;
	const specularMap = specular ? useTexture(specular) : undefined;
	const normalMap = normal ? useTexture(normal) : undefined;

	return (
		<mesh>
			<sphereGeometry args={[radius, ...sphereSegments]} />
			<meshPhongMaterial
				map={colorMap}
				bumpMap={bumpMap}
				specularMap={specularMap}
				normalMap={normalMap}
				displacementMap={bumpMap}
				displacementScale={displacementScale}
				emissive={0xffffff}
				emissiveIntensity={0.01}
			/>
		</mesh>
	);
}

function RingConstructor({ parentRadius, textures, orientation }) {
	const _90degInRad = Math.PI / 2;

	const colorMap = useTexture(textures["color"]);
	const alphaMap = useTexture(textures["alpha"]);

	const innerR = parentRadius * 1.2;
	const outerR = parentRadius * 1.5;

	const geometry = new RingGeometry(innerR, outerR, 64);

	const threshold = (innerR + outerR) / 2;
	let pos = geometry.attributes.position;
	let vectorBuffer = new Vector3();
	for (let i = 0; i < pos.count; i++) {
		vectorBuffer.fromBufferAttribute(pos, i);
		geometry.attributes.uv.setXY(i, vectorBuffer.length() < threshold ? 0 : 1, 1);
	}

	return (
		<mesh
			geometry={geometry}
			rotation={
				orientation === "horizontal" ? [_90degInRad, 0, 0] : [_90degInRad, 0, 0]
			}
		>
			<meshStandardMaterial
				map={colorMap}
				side={DoubleSide}
				transparent={true}
				alphaMap={alphaMap}
			/>
		</mesh>
	);
}
