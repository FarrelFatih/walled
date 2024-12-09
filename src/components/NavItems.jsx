import React from "react";
import { NavLink } from "react-router";

function NavItems({ menu }) {
  return (
    <div className="flex gap-x-8">
      {menu.map((item, index) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? "text[#19918F] fontBold" : "text-black"
          }
          key={index}
          to={item.href}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default NavItems;
