import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Mercury } from "./Planets";
import "./style.css";

export default function App() {
	return (
		<Canvas camera={{ position: [0, 0, 0] }}>
			<ambientLight intensity={0.5} />
			<OrbitControls />

			<Mercury />
		</Canvas>
	);
}
