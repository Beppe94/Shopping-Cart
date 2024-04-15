import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import WomenShop from './WomenShop';
import ShoppingCart from './Cart';
import MenShop from './MenShop';
import JewelShop from './JewelShop';


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
            path: "menShop",
            element: <MenShop />
        },
        {
            path: "cart",
            element: <ShoppingCart />
        },
        {
            path: "jewelery",
            element: <JewelShop />
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router;