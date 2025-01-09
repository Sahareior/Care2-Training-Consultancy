import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Hide services, testimonials, and contact if not on the Picture route
  const hide = location.pathname !== "/";

  return (
    <div>
      <div className="navbar bg-[#191919] p-3 text-white">
        <div className="navbar-start">
          <div className="dropdown md:hidden w-10">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {!hide && (
              <ul
                tabIndex={0}
                className="menu menu-sm z-50 dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
              >
                <li>
                  <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="testimonial"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <RouterLink to="/">
            <h3
              className="font-bold text-xl ml-3 md:ml-0 md:text-2xl"
              style={{
                background: "linear-gradient(to right, #4facfe, #00f2fe)",
                color: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              Care2
            </h3>
          </RouterLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          {!hide && (
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="testimonial"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline">
            <h2
              className=""
              style={{
                background: "linear-gradient(to right, #4facfe, #00f2fe)",
                color: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              Blog
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
