
import React from 'react'
import { useState } from 'react'
const Navbar = () => {

  const [resmenu, setResmenu] = useState("top-[-100%]");

  const onToggleMenu = () => {
    if (resmenu === "top-[-100%]") {
      setResmenu("top-[12%]");
    } else if (resmenu === "top-[12%]") {
      setResmenu("top-[-100%]");
    }

  };

  return (
    <div>
      <header className="md:bg-white bg-green-500 ">
        <nav className="flex justify-between items-center w-[92%] mx-auto md:bg-white bg-green-500" >
          <div>
            <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." />
          </div>
          <div
            className={`nav-links duration-500 md:static absolute md:bg-white bg-green-500 md:text-black text-white md:min-h-fit min-h-[60vh] left-0 ${resmenu} md:w-auto w-full flex items-center px-5`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-500 font-semibold duration-500" href="#">About</a>
              </li>
              <li>
                <a className="hover:text-gray-500 font-semibold duration-500" href="#">Community</a>
              </li>
              <li>
                <a className="hover:text-gray-500 font-semibold duration-500" href="#">Expertise</a>
              </li>
              <li>
                <a className="hover:text-gray-500 font-semibold duration-500" href="#">Ventures</a>
              </li>
              <li>
                <a className="hover:text-gray-500 font-semibold duration-500" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6 md:hidden cursor-pointer">
            <ion-icon onClick={onToggleMenu} name="menu" className="text-3xl font-bold cursor-pointer text-slate-400"></ion-icon>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar




