import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { DarkModeContext } from "../contexts/DarkModeContext";

function Layout() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`${darkMode}`}>
      <div className="dark:bg-stone-900 dark:text-stone-200">
        <div className="relative flex-col min-h-screen m-auto max-w-6xl border-x border-stone-200 dark:border-stone-700 bg-white p-16 dark:bg-stone-800 xs:px-4 md:px-8 lg:px-12">
          <Header />
          <main className="mx-12 my-32 min-h-[60vh]">
            <Outlet />
          </main>
          <div>
          <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
