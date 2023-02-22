import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { IconProvider } from "./contexts/IconsContext";
import { ProjectProvider } from "./contexts/ProjectContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DarkModeProvider>
      <IconProvider>
        <ProjectProvider>
          <App />
        </ProjectProvider>
      </IconProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
