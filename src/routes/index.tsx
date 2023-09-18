import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/",
        element: <Login/>
    },
]);

export default routes;