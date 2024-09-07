import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import "./app/output.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<NextUIProvider>
			<App />
		</NextUIProvider>
	</StrictMode>
);
