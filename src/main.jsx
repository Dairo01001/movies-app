import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LanguagesProvider from "./contexts/LanguagesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguagesProvider>
    <App />
  </LanguagesProvider>
);
