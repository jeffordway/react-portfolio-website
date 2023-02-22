import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface BrandProps {
  to: string;
  children: ReactNode;
}

function Footer() {
  function NavLink({ to, children }: BrandProps) {
    return (
      <Link
        to={to}
        className="text-sm font-medium text-stone-600 hover:text-sky-600 dark:text-stone-200 dark:hover:text-sky-500"
      >
        {children}
      </Link>
    );
  }
  return (
    <footer className="pt-8 mt-32 border-t border-stone-200 dark:border-stone-600 flex-col md:flex-row flex items-center justify-between">
      <div className="flex gap-6 mb-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
      <div className="text-sm font-medium text-stone-400">
        &#169; 2023 Jeff Ordway. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
