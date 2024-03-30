import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import WomenShop from './WomenShop';

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
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router;