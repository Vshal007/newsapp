// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
// import LogoText from "../../assets/LogoText.png";
// import LogoTextLong from "../../assets/LogoTextLong.png";
// import LogoTextSmall from "../../assets/LogoTextSmall.png";
// import Button from "../Button";
// import NavLinks from "./NavLinks";
// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <nav className="bg-yellow-200">
//       <div className="flex items-center font-medium justify-around">
//         <div className="z-50 p-5 md:w-auto w-full flex justify-between">
//           <img src={Logo} alt="logo" className="md:cursor-pointer md:h-12 h-12 w-14 md:mx-0 mx-2" />
//           <img src={LogoTextLong} alt="logo" className="hidden md:inline md:cursor-pointer h-12" />
//           <img src={LogoTextSmall} alt="logo" className="inline md:hidden md:cursor-pointer h-16 w-64" />
//           <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
//             <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
//           </div>
//         </div>
//         <ul className="md:flex hidden uppercase items-center gap-8 font-sans font-semibold">
//           <li>
//             <Link to="/" className="py-7 px-3 inline-block">
//               Home
//             </Link>
//           </li>
//           <NavLinks />
//         </ul>

//         {/* Mobile nav */}
//         <ul
//           className={`z-10
//         md:hidden bg-yellow-200 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
//         duration-500 ${open ? "left-0" : "left-[-100%]"}
//         `}
//         >
//           <li>
//             <Link to="/" className="py-7 px-3 inline-block">
//               Home
//             </Link>
//           </li>
//           <NavLinks />

//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import LogoTextLong from "../../assets/LogoTextLong.png";
import LogoTextSmall from "../../assets/LogoTextSmall.png";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>
        {`
          .navbar {
            background-color: #fef08a;
          }
          .navbar-container {
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-weight: 500;
          }
          .navbar-logo-container {
            position: relative;
            z-index: 50;
            padding: 20px;
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .navbar-logo {
            cursor: pointer;
            height: 48px;
            width: 56px;
            margin: 0 8px;
          }
          .navbar-logo-text-long {
            display: none;
            cursor: pointer;
            height: 48px;
          }
          .navbar-logo-text-small {
            display: inline;
            cursor: pointer;
            height: 64px;
            width: 256px;
          }
          .navbar-menu-icon {
            font-size: 24px;
            cursor: pointer;
          }
          .navbar-links {
            display: none;
            align-items: center;
            gap: 32px;
            font-family: sans-serif;
            font-weight: 600;
            text-transform: uppercase;
          }
          .navbar-mobile-links {
            position: fixed;
            z-index: 10;
            background-color: #fef08a;
            width: 100%;
            top: 0;
            bottom: 0;
            padding: 96px 16px;
            overflow-y: auto;
            transition: left 0.5s ease;
            left: -100%;
          }
          .navbar-mobile-links-open {
            left: 0;
          }
          .navbar-links .navbar-link,
          .navbar-mobile-links .navbar-link {
            padding: 28px 12px;
            display: inline-block;
            text-decoration: none;
            color: inherit;
          }

          /* Media Query for Screens Above Medium Size */
          @media (min-width: 768px) {
            .navbar-logo-text-long {
              display: inline;
            }
            .navbar-logo-text-small {
              display: none;
            }
            .navbar-links {
              display: flex;
            }
            .navbar-menu-icon {
              display: none; /* Hide menu icon on larger screens */
           }
          }
        `}
      </style>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo-container">
            <img
              src={Logo}
              alt="logo"
              className="navbar-logo"
            />
            <img
              src={LogoTextLong}
              alt="logo-text-long"
              className="navbar-logo-text-long"
            />
            <img
              src={LogoTextSmall}
              alt="logo-text-small"
              className="navbar-logo-text-small"
            />
            <div
              className="navbar-menu-icon"
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <NavLinks />
          </ul>
          <ul
            className={`navbar-mobile-links ${open ? "navbar-mobile-links-open" : ""}`}
          >
            <li>
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <NavLinks />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
