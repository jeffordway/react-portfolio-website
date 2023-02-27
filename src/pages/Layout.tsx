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
        <div className="relative flex-col min-h-screen m-auto max-w-6xl border-x border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800  p-4 sm:p-12 lg:p-16">
          <Header />
          <main className="2xs:mx-4 2xs:my-8 sm:mx-12 sm:my-32 min-h-[60vh]">
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
