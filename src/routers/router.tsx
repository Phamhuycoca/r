import Layout from "../modules/client/layout";
import type { IRouter } from "./interface";

const RouteIndex: IRouter[] = [
  {
    path: "/",
    element:<Layout/>,
    private: false,
    children: []
  }  
];
export { RouteIndex };