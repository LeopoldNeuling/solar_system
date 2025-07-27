import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function App() {
	return (
		<Canvas camera={{ position: [0, 0, 5] }}>
			<ambientLight intensity={0.5} />
			<OrbitControls />
			<TestBox />
		</Canvas>
	);
}

function TestBox() {
	return (
		<mesh>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="orange" />
		</mesh>
	);
}
