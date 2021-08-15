import React from "react";
import { Link } from "react-router-dom";
import { NavLinksType } from "../types/NavFooterTypes";

interface Props {
  navLinks: NavLinksType;
  page: string;
}

const Navbar: React.FC<Props> = ({ navLinks, page }) => {
  return (
    <nav className="flex justify-between items-center py-7 px-8">
      <Link to="/">
        <div className="flex items-center cursor-pointer">
          <img src="logo.svg" alt="Logo" className="w-11 h-11" />
          <h1 className="text-3xl px-3">Jagathi Foundation</h1>
        </div>
      </Link>
      <div className="item-center hidden lg:flex">
        {navLinks.map((link, key) => {
          if (link.externalLink) {
            return (
              <a
                href={link.url}
                key={key}
                className={`px-5 text-lg cursor-pointer underline ${
                  link.name === page && "underline"
                }`}
                target="_blank"
                rel="noreferrer"
              >
                {link.name}
              </a>
            );
          }

          return (
            <Link
              to={link.url}
              key={key}
              className={`px-5 text-lg cursor-pointer hover:underline ${
                link.name === page && "underline"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="block lg:hidden">
        <img
          src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
          className="w-10"
          alt="Hamburgur"
        />
      </div>
    </nav>
  );
};

export default Navbar;
