import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Protocol";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
