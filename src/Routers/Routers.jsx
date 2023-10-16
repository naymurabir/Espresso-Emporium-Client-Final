import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Users from "../Pages/Users/Users";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addCoffee',
                element: <PrivateRoute> <AddCoffee> </AddCoffee> </PrivateRoute>
            },
            {
                path: '/updateCoffee/:id',
                element: <PrivateRoute> <UpdateCoffee></UpdateCoffee> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
                element: <PrivateRoute> <ProductDetails></ProductDetails> </PrivateRoute>
            },
            {
                path: '/users',
                loader: () => fetch('http://localhost:5000/users'),
                element: <Users></Users>
            }
        ]
    }
])

export default router;