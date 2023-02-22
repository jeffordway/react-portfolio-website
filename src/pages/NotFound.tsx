import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-full">
      <div className="relative w-full h-full grid grid-flow-row auto-rows-auto gap-6 md:gap-8">
        <img
          src="https://images.unsplash.com/photo-1485847791529-09ed2263da0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="Jeff Ordway Photo"
          className="absolute z-0 rounded-3xl aspect-video object-cover"
        />
        <div className="absolute flex-row w-full h-fill  z-10 justify-center p-12 text-stone-800">
          <div className="flex justify-center text-sm font-bold">404</div>
          <div className=" flex justify-center mb-4 text-4xl md:text-5xl font-bold">
            page not found
          </div>
          <div className=" flex mb-2 justify-center text-sm font-semibold">
            Sorry, we couldn’t find the page you’re looking for.
          </div>
          <div className="flex justify-center ">
            <Link
              to="/"
              className="flex gap-2 justify-start items-center text-sm font-semibold text-stone-800 hover:text-sky-600 "
            >
              <div>back home</div>
              <HiArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
