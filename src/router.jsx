import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ExamsPage } from "./Layout/Main/ExamsPage/ExamsPage";
import { HomePage } from "./Layout/Main/HomePage/HomePage";
import MainLayout from "./Layout/Main/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
            path: "/",
            element: <HomePage />
           }, 
           {
            path: "/home",
            element: <HomePage />
           }, 
            {
            path: "/exams",
            element: <ExamsPage/>
           }
        ]
    },

]);
export const MainRouter = () => {
    return <RouterProvider router={router} />;
};