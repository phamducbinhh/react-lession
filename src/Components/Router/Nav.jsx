import React from "react";
import { NavLink } from "react-router-dom";

const ListLink = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/profile",
    title: "Blog",
  },
  {
    id: 3,
    to: "/blog",
    title: "Profile",
  },
  {
    id: 4,
    to: "/contact",
    title: "contact",
  },
];

const Nav = () => {
  return (
    <div className="flex items-center justify-center p-5 bg-white shadow-md gap-x-5">
      {/* <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "text-green-500" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"profile"}
        className={({ isActive }) => (isActive ? "text-green-500" : "")}
      >
        Blog
      </NavLink>
      <NavLink
        to={"blog"}
        className={({ isActive }) => (isActive ? "text-green-500" : "")}
      >
        Profile
      </NavLink> */}
      {ListLink.map((item) => (
        <NavLink
          to={item.to}
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
          key={item.id}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;
