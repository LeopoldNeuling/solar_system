//react
import { createRoot } from "react-dom/client";
//mui
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
//components
import App from "./App.jsx";
import { AnimationProvider } from "./provider/AnimationProvider.jsx";

createRoot(document.getElementById("root")).render(
	<ThemeProvider
		theme={createTheme({
			palette: {
				mode: "dark",
			},
		})}
	>
		<CssBaseline />
		<AnimationProvider>
			<App />
		</AnimationProvider>
	</ThemeProvider>
);
