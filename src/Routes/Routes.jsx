import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
// import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../Pages/AddFood/AddFood";
import MyItems from "../Pages/MyItems/MyItems";
import Fridge from "../Pages/Fridge/Fridge";
import Loading from "../Pages/Loading/Loading";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import CookiePolicy from "../Pages/CookiePolicy/CookiePolicy";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "../Pages/TermsOfUse/TermsOfUse";
import FAQ from "../Pages/Faq/Faq";
import About from "../Pages/About/About";
import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home/Home"));

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/login',
                Component: Login,
            },{
                path: '/register',
                Component: Register,
            },
            {
                path: '/add-food',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/my-items',
                element: <PrivateRoute><MyItems></MyItems></PrivateRoute>
            },
            {
                path: '/fridge',
                Component: Fridge,
                loader: () => fetch('https://food-pulse-server.vercel.app/foods'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/foods/:id',
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
            },
            {
                path: '/cookie-policy',
                Component: CookiePolicy,
            },
            {
                path: '/privacy-policy',
                Component: PrivacyPolicy,
            },
            {
                path: "/terms-of-use",
                Component: TermsOfUse
            },
            {
                path: '/not-found',
                Component: ErrorPage,
            },
            {
                path: '/faq',
                Component: FAQ,
            },
            {
                path: '/about',
                Component: About,
            }

        ]
    },
    {
        path: '/*',
        Component: ErrorPage
    }
])


export default router;