import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import InputComponent from "./InputComponent";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <InputComponent />
  </StrictMode>
);
