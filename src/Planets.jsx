/**
 * @struct of sphere args
 * @radius
 * @widthSegments 1->64
 * @heightSegments 1->32
 */

import { useTexture } from "@react-three/drei";

export function Mercury() {
	const textureMap = useTexture("./mercury.jpg");
	return (
		<mesh position={[0, 0, -10]}>
			<sphereGeometry args={[5, 32, 32]} />
			<meshBasicMaterial map={textureMap} />
		</mesh>
	);
}
