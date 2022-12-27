import ForumLayout from "../Layouts/ForumLayout";
import Main from "../Layouts/Main";
import Forum from "../Pages/Forum/Forum";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
    {
        path: "/forum",
        element: <ForumLayout></ForumLayout>,
        children: [
            {
                path: "/forum",
                element: <Forum></Forum>
            }
        ]
    }
])