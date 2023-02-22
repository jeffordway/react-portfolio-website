import { Popover, Transition } from "@headlessui/react";
import React, { Fragment, useContext } from "react";
import { HiChevronDoubleDown } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../contexts/DarkModeContext";

function NavBarMobile() {
  const { enableDarkMode, lightModeStyle, darkModeStyle } =
    useContext(DarkModeContext);

  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Projects",
      to: "/projects",
    },
  ];

  return (
    // <Popover className="relative">
    //   <Popover.Button className={`${lightModeStyle} ${darkModeStyle} group flex items-center border rounded-full px-4 py-2 gap-x-2 text-sm font-medium shadow backdrop-blur`}>
    //     Menu
    //     <HiChevronDoubleDown />
    //   </Popover.Button>

    //   <Popover.Panel className="absolute z-10">
    //     <ul role="list" className="divide-y divide-stone-200 w-48 border">
    //       <li className="py-4">Home</li>
    //       <li className="py-4">About</li>
    //       <li className="py-4">Projects</li>
    //     </ul>
    //   </Popover.Panel>
    // </Popover>

    <Popover className="relative md:hidden">
      <Popover.Button
        className={`${
          enableDarkMode
            ? "dark:bg-stone-600 dark:border-stone-500 dark:text-stone-200 dark:hover:bg-stone-700 dark:hover:border-stone-600 dark:hover:text-sky-500"
            : "bg-white border-stone-200 text-stone-600 hover:bg-stone-100 hover:border-stone-200 hover:text-sky-600"
        } relative -ml-px inline-flex items-center border rounded-full p-2 text-sm font-medium gap-x-2 shadow shadow-stone-300 dark:shadow-stone-600`}
      >
        <span>Menu</span>
        <HiChevronDoubleDown />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-6 z-10 mt-3 w-36 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
          <div className="overflow-hidden rounded-lg shadow shadow-stone-300 dark:shadow-stone-600">
            <div className={`bg-white dark:bg-stone-600 relative grid  `}>
              {links.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="-m-3 flex items-center p-2 transition duration-150 ease-in-out"
                >
                  <div>
                    <p className={`text-stone-600 hover:text-sky-600 dark:text-stone-200 dark:hover:text-sky-500 m-2 p-4 text-sm font-medium`}>
                      {item.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default NavBarMobile;
