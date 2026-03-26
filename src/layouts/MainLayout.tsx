import { Outlet } from "react-router-dom";

import { Footer, Header } from "@components/index";

const MainLayout = () => {
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
