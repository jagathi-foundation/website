import React from "react";
import { Link } from "react-router-dom";
import { NavLinksType } from "../types/NavFooterTypes";

interface Props {
  navLinks: NavLinksType;
  page: string;
  url: any;
}

const Navbar: React.FC<Props> = ({ navLinks, page, url }) => {
  React.useEffect(() => {
    //Menu Opening
    const s = (key: any) => {
      return document.querySelector(key);
    };
    const menuopen = s(".menuicon");
    const menuclose = s(".closeicon");
    menuopen.addEventListener("click", (e: any) => {
      s("nav").style = "animation: diagonal 200ms linear; top: 0;";
    });
    menuclose.addEventListener("click", (e: any) => {
      s("nav").style = " top: -100vh;";
    });
  }, []);

  return (
    <header>
      <section className="nav-wrap">
        <Link to="/" className="my-8 ml-12">
          <div className="flex items-center cursor-pointer">
            <img src="/logo.png" alt="Logo" className="w-11 h-11" />
            <h1 className="text-3xl px-3 jf">
              Jagathi Foundation
            </h1>
          </div>
        </Link>
        <i className="icon ion-md-menu menuicon"></i>
        <nav>
          <i className="icon ion-md-close closeicon"></i>
          {navLinks.map((link, key) => {
            if (link.externalLink) {
              return (
                <a
                  href={link.url}
                  key={key}
                  className={`px-5  cursor-pointer hover:underline hover:text-yellow-600 ${
                    link.url === url.path && "underline text-yellow-600"
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
                className={`px-5  cursor-pointer hover:underline hover:text-yellow-600 ${
                  link.url === url.path && "underline text-yellow-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
