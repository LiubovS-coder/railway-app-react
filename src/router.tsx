import {createBrowserRouter, Outlet} from "react-router";
import HomePage from "./pages/home/HomePage.tsx";
import MainLayout from "./shared/layout/MainLayout.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout> <Outlet /></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage />
            }
        ]
    }
])

export default router;