import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-xl font-bold bg-gray-200 h-[3.5rem] flex justify-center items-center gap-6 font-mono">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
        }
      >
        HOME
      </NavLink>
      <NavLink
        to="/reviews"
        className={({ isActive }) =>
          isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
        }
      >
        REVIEWS
      </NavLink>
      <NavLink
        to="/dashBoard"
        className={({ isActive }) =>
          isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
        }
      >
        DASHBOARD
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
        }
      >
        BLOGS
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
        }
      >
        ABOUT
      </NavLink>
    </div>
  );
};

export default Header;
