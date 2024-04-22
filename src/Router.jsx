import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import WomenShop from './WomenShop';
import ShoppingCart from './Cart';
import MenShop from './MenShop';
import JewelShop from './JewelShop';
import TechShop from './TechShop';

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
        {
            path: "techShop",
            element: <TechShop />
        }
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router;