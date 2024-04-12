import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
const router = createBrowserRouter([
    {
        path: "/",
       element: <MainLayout />,
       children:[
        {
            index: true,
            element: <Home/>
        },
        {
            path: "/settings",
            element: <Settings/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path: "/admin",
            element:<Admin/>
        },
        {
            path:"/users",
            element:<Users/>
        },
        {
            path:"*",
            element:<h1>What the fuck do you want 😒</h1>
        }
       ]
    },
]);
export default router;