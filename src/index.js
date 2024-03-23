import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { testerFunction } from "./demo/functionAsValue.js";
import { mean } from "./demo/functionInsideFunction.js"
import { arrowFunctionDemo } from "./demo/arrowFunctions.js";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

testerFunction();
console.log(mean([3,5,2,6,7],5)); 
arrowFunctionDemo();
