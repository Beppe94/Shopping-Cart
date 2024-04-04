import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import WomenShop from './WomenShop';
import ShoppingCart from './Cart';

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />
        },
        {
            path: "womenShop",
            element: <WomenShop />
        },
        {
            path:"cart",
            element: <ShoppingCart />
        }
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router;