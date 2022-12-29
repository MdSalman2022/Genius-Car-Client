import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Cart from "../../Pages/Cart/Cart";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import PaymentFail from "../../Pages/CheckOut/PaymentFail";
import PaymentSuccess from "../../Pages/CheckOut/PaymentSuccess";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path: '/payment/success',
                element: <PaymentSuccess></PaymentSuccess>
            },
            {
                path: '/payment/fail',
                element: <PaymentFail></PaymentFail>
            },
        ]
    }
])

export default router;