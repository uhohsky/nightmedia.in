import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Safari detection & fix (AFTER imports)
const isSafari =
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
  document.documentElement.classList.add("safari");
}

createRoot(document.getElementById("root")!).render(<App />);

