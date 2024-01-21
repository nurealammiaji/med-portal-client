import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";

const Public = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default Public;