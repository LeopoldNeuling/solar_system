//react
import { useContext, useRef } from "react";
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
import { sphereSegments, unsetPosZ } from "../App";
import { AnimationContext } from "../provider/AnimationProvider";

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
	const { rotateLeft, rotateRight, userTouch, setUserTouch } =
		useContext(AnimationContext);
	const meshRef = useRef();
	const axisTilt = new Vector3(0, MathUtils.degToRad(tilTAngleDeg), 0);

	let angle;
	let activeAngle = 0.05;
	useFrame(() => {
		angle = 0.01;
		if (rotateLeft)
			setUserTouch((_) => {
				angle = -activeAngle;
				return true;
			});
		else if (rotateRight)
			setUserTouch((_) => {
				angle = activeAngle;
				return true;
			});

		if (userTouch && !rotateLeft && !rotateRight) return;
		const q = new Quaternion();
		q.setFromAxisAngle(axisTilt.normalize(), angle);
		meshRef.current.quaternion.multiply(q);
	});

	return (
		<group
			ref={meshRef}
			position={pos}
			rotation={[0, 0.5, MathUtils.degToRad(tilTAngleDeg)]}
		>
			<PlanetConstructor
				textures={{
					color: colorMapPath,
					bump: bumpMapPath,
					specular: specularMapPath,
					normal: normalMapPath,
				}}
				radius={radius}
				displacementScale={displacementScale}
			/>
			{ringColorMapPath && (
				<RingConstructor
					parentRadius={radius}
					textures={{
						color: ringColorMapPath,
						alpha: ringAlphaMapPath,
					}}
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

	const geometry = new RingGeometry(innerR, outerR, 100);

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
