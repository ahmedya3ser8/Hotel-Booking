import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import { Footer, Header } from "@/components";
import { useAuthStore } from "@/store/authStore";

const MainLayout = () => {
  const { checkAuth, initialized } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (!initialized) return <div className="fixed inset-0 bg-gray-50 flex justify-center items-center">
    <span className="loader"></span>
  </div>

  return (
    <>
      <Header />
      <main className="min-h-[70vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout;
