import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import MainLayout from "@/layouts/MainLayout";
import { BookingPage, HomePage, LoginPage, RegisterPage, RoomPage, RoomsDetailsPage } from "@/pages";
import GuestRoute from "./GuestRoute";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProtectedRoute> <HomePage /> </ProtectedRoute>
      },
      {
        path: 'rooms',
        element: <ProtectedRoute> <RoomPage /> </ProtectedRoute> 
      },
      {
        path: 'rooms/:id',
        element: <ProtectedRoute> <RoomsDetailsPage /> </ProtectedRoute>
      },
      {
        path: 'booking',
        element: <ProtectedRoute> <BookingPage /> </ProtectedRoute>
      },
      {
        path: 'register',
        element: <GuestRoute> <RegisterPage /> </GuestRoute>
      },
      {
        path: 'login',
        element: <GuestRoute> <LoginPage /> </GuestRoute>
      },
    ]
  }
])

const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  )
}

export default AppRouter;
