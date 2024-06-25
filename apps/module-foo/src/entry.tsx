import { RouteObject } from "react-router-dom";
import App from "./App";

export const routes: RouteObject[] = [{
  path: '',
  element: <App />,
  children: [
    {
      path: "",
      index: true,
      element: <div>index</div>,
    },
    {
      path: "greet",
      element: <div>Hello</div>
    }
  ]
}]
