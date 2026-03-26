import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import { HomePage } from "@pages/index";

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
])

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter;
