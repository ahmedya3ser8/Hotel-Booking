import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import { HomePage, RoomPage, RoomsDetailsPage } from "@pages/index";

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'rooms',
        element: <RoomPage />
      },
      {
        path: 'rooms/:id',
        element: <RoomsDetailsPage />
      },
    ]
  }
])

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter;
