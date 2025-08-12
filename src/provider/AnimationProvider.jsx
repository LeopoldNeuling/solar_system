import { createContext, useState } from "react";

export const AnimationContext = createContext();

export function AnimationProvider({ children }) {
	const [rotateLeft, setRotateLeft] = useState(false);
	const [rotateRight, setRotateRight] = useState(false);
	const [userTouch, setUserTouch] = useState(false);

	return (
		<AnimationContext.Provider
			value={{
				rotateLeft,
				setRotateLeft,
				rotateRight,
				setRotateRight,
				userTouch,
				setUserTouch,
			}}
		>
			{children}
		</AnimationContext.Provider>
	);
}
