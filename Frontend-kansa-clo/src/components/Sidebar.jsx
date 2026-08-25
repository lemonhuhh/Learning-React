import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const sidebar = [
    {
      name: "User",
      to: "/admin/user",
    },
    {
        name:"Products",
        to: "/admin/products"
    }
  ];

  return (
    <>
      <div className="bg-(--bg)">
        <div>
          {sidebar.map((l) => (
            <li
              key={l.name}
              onClick={() => navigate(l.to)}
              className="cursor-pointer p-2"
            >
              {l.name}
            </li>
          ))}
        </div>
        
      </div>
    </>
  );
}

export default Sidebar;
