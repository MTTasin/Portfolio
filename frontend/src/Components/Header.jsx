import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Button, Drawer, Navbar } from "flowbite-react";
import { FaXTwitter, FaX } from "react-icons/fa6";
import { LuFacebook, LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { TbMenuDeep } from "react-icons/tb";
import axios from "axios";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleClose = () => setIsOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

  
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 100);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);




    const [socialLinks, setSocialLinks] = useState([]);

  function fetchSocialLinks() {
    axios
      .get("https://tasinportfolio.pythonanywhere.com/social_link/")
      .then((response) => {
        setSocialLinks(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchSocialLinks();
  }, []);
  

  return (
    <>
      <Navbar
        id="navbar"
        className={`navbar z-10 ${isScrolled ? "fixed" : "absolute"} top-0 flex items-center justify-beetween bg-black w-full mx-auto`}
      >
        <div className={`navbar-start mx-5 md:mx-20 ${isScrolled ? "my-0" : "my-10"}`}>
          <Link to="/" onClick={scrollToTop}>
            <img
              src="/logo.png"
              alt="M.T. Tasin"
              className="w-[40px] h-[40px] md:w-[40px] md:h-[40px]"
            />
          </Link>
        </div>
        <div className={`navbar-center ${isScrolled ? "my-0 block" : "hidden"}`}>
          <Link
            className="text-white text-xl monoton-regular"
            to="/"
            onClick={scrollToTop}
          >
            M.T.Tasin
          </Link>
        </div>
        <div className={`navbar-end mx-5 md:mx-20 ${isScrolled ? "my-0" : "my-10"}`}>
          <TbMenuDeep
            className="text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </Navbar>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        className="w-full duration-700 league-spartan "
      >
        {/* <h2 className="text-3xl text-black">Menu</h2> */}
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2">
          <div className="grid grid-cols-6">
            <div className="col-span-1 flex flex-col justify-start items-end mt-24 md:mt-28">
              <h2 className="-rotate-90 text-3xl">Menu</h2>
            </div>
            <div className="col-span-5 flex flex-col justify-center items-start md:text-7xl text-6xl font-bold md:m-20">
              <NavLink onClick={handleClose} className={`my-5 hover:text-white hover:bg-black ${location.pathname === "/" ? "text-white bg-black p-5" : "text-black"}`} to="/">
                Home
              </NavLink>
              <NavLink onClick={handleClose} className={`my-5 hover:text-white hover:bg-black ${location.pathname === "/projects" ? "text-white bg-black p-5" : "text-black"}`} to="/projects">
                Projects
              </NavLink>
              <NavLink onClick={handleClose} className={`my-5 hover:text-white hover:bg-black ${location.pathname === "/about" ? "text-white bg-black p-5" : "text-black"}`} to="/about">
                About
              </NavLink>
              <NavLink onClick={handleClose} className={`my-5 hover:text-white hover:bg-black ${location.pathname === "/contact" ? "text-white bg-black p-5" : "text-black"}`} to="/contact">
                Contact
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:justify-end md:my-32  text-xl md:text-3xl text-center">
            <div className="my-3">m.t.tasin20@gmail.com</div>
            <div className="my-3">+880 1974 283081</div>
            <div className="my-3 flex flex-row justify-center md:justify-start gap-5">
              <a href={socialLinks.facebook} target="_blank" className="hover:text-white hover:bg-black">
                <LuFacebook />
              </a>
              <a href={socialLinks.twitter} target="_blank" className="hover:text-white hover:bg-black">
                <FaXTwitter />
              </a>
              <a href={socialLinks.github} target="_blank" className="hover:text-white hover:bg-black">
                <FiGithub />
              </a>
              <a href={socialLinks.linkedin} target="_blank" className="hover:text-white hover:bg-black"><LuLinkedin className="text-3xl" /></a>
            </div>
          </div>
        </div>
        <div className="absolute top-5 right-5">
          <FaX onClick={handleClose} className="text-3xl md:m-14" />
        </div>
      </Drawer>
    </>
  );
}
