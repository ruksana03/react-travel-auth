import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Private from "../PrivateRoute/Private";
import News from "../Pages/News/News";
import Destination from "../Pages/Destination/Destination";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/LogIn/Register";
import BookingForm from "../Pages/Home/HomePart/RightHome/BookingForm/BookingForm";




const Router = createBrowserRouter(
    [
        {
            path:'/',
            element: <MainLayout></MainLayout>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader: () => fetch('/data.json'),
                },
                {
                    path: '/news',
                    element: <Private><News></News></Private>
                },
                {
                    path: '/destination',
                    element: <Private><Destination></Destination></Private>
                },
                {
                    path: '/blog',
                    element:<Blogs></Blogs>,
                },
                {
                    path:'/contact',
                    element:<Private><Contact></Contact></Private>,
                },
                {
                    path: '/login',
                    element: <Login></Login>,
                },
                {
                    path: '/register',
                    element:<Register></Register>
                },
                {
                    path:'/booking/:id',
                    element:<BookingForm></BookingForm>,
                    loader: () => fetch('data.json')
                }

            ]
        }
    ]
)


export default Router;
