import { ViteReactSSG } from "vite-react-ssg";
import App from "./app/App.tsx";
import "./styles/index.css";

export const createRoot = ViteReactSSG({
  routes: [{ path: "/", element: <App /> }],
});