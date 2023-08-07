import ReactDOM from "react-dom/client";
import { createContext } from "react";
import App from "./App";

export const AppContext = createContext();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContext.Provider value={{ id: 1, name: "Dog" }}>
    <App />
  </AppContext.Provider>
);
