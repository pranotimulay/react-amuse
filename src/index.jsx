import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import "./components/CoreConcepts.css";
import "./components/Header.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
