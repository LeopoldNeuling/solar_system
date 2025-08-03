import { useFrame, useThree } from "@react-three/fiber";

export default function CameraMover() {
	const { camera } = useThree();
	// useFrame(() => (camera.position.z -= 0.1));
}
