import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import AllPhones from "../../Pages/AllPhones/AllPhones";
import AvailablePhones from "../../Pages/AvailablePhones/AvailablePhones";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import img from '../../assets/404.jpg';
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";
import Reports from "../../Pages/Dashboard/Reports/Reports";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import SellerRoute from "../SellerRoute/SellerRoute";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/products',
                element: <AllPhones></AllPhones>
            },
            {
                path: '/categories/:id',
                element: <AvailablePhones></AvailablePhones>,
                loader: ({ params }) => fetch(`https://easy-phones.vercel.app/categories/${params.id}`)

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/buyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/sellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reports',
                element: <AdminRoute><Reports></Reports></AdminRoute>
            },
            {
                path: '/dashboard/my-products',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/add-product',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/my-orders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            }
        ]
    },
    {
        path: '*',
        element: <div className="text-center md:mx-28 lg:mx-48">
            <img src={img} alt='' />
            <h2 className="text-red-600 text-4xl text-center font-bold mt-10" >404 page no found</h2>
        </div>
    }
])

export default router;