import ForumLayout from "../Layouts/ForumLayout";
import Main from "../Layouts/Main";
import CategoryPosts from "../Pages/Forum/CategoryPosts";
import CreatePost from "../Pages/Forum/CreatePost";
import Forum from "../Pages/Forum/Forum";
import MyPosts from "../Pages/Forum/MyPosts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import TravelAdvice from "../Pages/TravelAdvice/TravelAdvice";
import PrivateRoute from "./PrivateRoute";

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
            },
            {
                path: "/travelAdvice",
                element: <TravelAdvice></TravelAdvice>
            }
        ]
    },
    {
        path: "/forum",
        element: <PrivateRoute><ForumLayout></ForumLayout></PrivateRoute>,
        children: [
            {
                path: "/forum",
                element: <Forum></Forum>
            },
            {
                path: "/forum/createpost",
                element: <CreatePost></CreatePost>
            },
            {
                path: "/forum/myposts",
                element: <MyPosts></MyPosts>
            },
            {
                path: "/forum/category/:title",
                element: <CategoryPosts></CategoryPosts>,
                loader: ({ params }) => fetch(`http://localhost:5000/categoryposts/${params.title}`)
            }
        ]
    }
])