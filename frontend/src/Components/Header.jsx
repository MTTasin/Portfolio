import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Button, Drawer, Navbar } from "flowbite-react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaX } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { TbMenuDeep } from "react-icons/tb";





export default function Header (){

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Navbar className="navbar absolute top-0 flex items-center justify-beetween bg-black w-full mx-auto">
        <div className="navbar-start mx-20 my-10"><img src="/logo.png" alt="M.T. Tasin" className="w-[40px] h-[40px] md:w-[40px] md:h-[40px]" /></div>
        <div className="navbar-end mx-20 my-10">
        <TbMenuDeep className="text-white text-3xl" onClick={() => setIsOpen(!isOpen)} />
        </div>
      </Navbar>
      <Drawer open={isOpen} onClose={handleClose} className="w-full duration-700 league-spartan ">
        {/* <h2 className="text-3xl text-black">Menu</h2> */}
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center items-center md:text-7xl text-6xl font-bold md:m-20">
                <NavLink className="my-5" to="/">Home</NavLink>
                <NavLink className="my-5" to="/projects">Projects</NavLink>
                <NavLink className="my-5" to="/about">About</NavLink>
                <NavLink className="my-5" to="/contact">Contact</NavLink>
            </div>
            <div className="flex flex-col items-center justify-start md:justify-end md:my-32  text-xl md:text-3xl text-center">
                <div className="my-3">m.t.tasin20@gmail.com</div>
                <div className="my-3">+880 1974 283081</div>
                <div className="my-3 flex flex-row justify-center md:justify-start gap-5">
                  <a href="https://x.com/MTTasin1" target="_blank"><FaXTwitter /></a> <a href="https://github.com/MTTasin" target="_blank"><FiGithub /></a>
                </div>
            </div>
        </div>
        <div className="absolute top-5 right-5"><FaX onClick={handleClose} /></div>
      </Drawer>
    </>
  )
}