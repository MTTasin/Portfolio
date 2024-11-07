import { Helmet } from "react-helmet-async";
import Card from "../Components/Card";
import { FaRegCircleDot, FaXTwitter } from "react-icons/fa6";
import { LuLinkedin, LuFacebook } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Contact() {

  const [socialLinks, setSocialLinks] = useState([]);

  function fetchSocialLinks() {
    axios
      .get("http://192.168.0.105:8000/social_link/")
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
      <Helmet>
        <meta name="title" content="Contact M.T. Tasin" />
        <meta
          name="description"
          content="Contact M.T. Tasin for more information about my projects, services and expertise."
        />
        <meta property="og:title" content="Contact M.T. Tasin" />
        <meta
          property="og:description"
          content="Contact M.T. Tasin for more information about my projects, services and expertise."
        />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://tasinblog.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact M.T. Tasin" />
        <meta
          name="twitter:description"
          content="Contact M.T. Tasin for more information about my projects, services and expertise."
        />
        <meta name="twitter:image" content="/favicon.png" />
        <meta name="twitter:url" content="https://tasinblog.com" />
        <title>Contact M.T. Tasin</title>
        {/* <base href="https://tasinblog.com" /> */}
      </Helmet>

      <div className="bg-black h-[100vh] text-6xl md:text-8xl w-full flex flex-col justify-center items-center text-white">
        <h1 className="uppercase text-center">Contact Me</h1>
        <p className="md:text-3xl text-xl league-spartan text-center letspace">
          SAY HELLO TO ME.
        </p>
      </div>

      <div>

        <div>
        <p className="text-4xl league-spartan-bold text-center mt-10">Contact me on my social media</p>
        <div className="mt-10 flex flex-row justify-center gap-5 text-5xl">
        
              <a href={socialLinks.facebook} target="_blank" className="hover:text-gray-500">
                <LuFacebook />
              </a>
              <a href={socialLinks.twitter} target="_blank" className="hover:text-gray-500">
                <FaXTwitter />
              </a>
              <a href={socialLinks.github} target="_blank" className="hover:text-gray-500">
                <FiGithub />
              </a>
              <a href={socialLinks.linkedin} target="_blank" className="hover:text-gray-500"><LuLinkedin /></a>
            </div>
        </div>
        
          <div className="mx-5 mt-16 mb-10 flex items-center justify-start bg-white">
            <div className="mx-auto w-full max-w-lg">
              <p className="text-4xl league-spartan-bold text-center">Or</p>
              <p className="mt-3">
                Email me at m.t.tasin20@gmail.com<br />
                <span className="bg-yellow-100">The form below is not a working form. As it leads to spam.</span>
              </p>

              <form className="mt-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative z-0">
                    <input
                      type="text"
                      name="name"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Your name
                    </label>
                  </div>
                  <div className="relative z-0">
                    <input
                      type="text"
                      name="email"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Your email
                    </label>
                  </div>
                  <div className="relative z-0 col-span-2">
                    <textarea
                      name="message"
                      rows="5"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    ></textarea>
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Your message
                    </label>
                  </div>
                </div>
                <div className="flex justify-center">
                <button
                  type="submit"
                  onClick={(e) => e.preventDefault()}
                  className="mt-5 rounded-md bg-black px-10 py-2 text-white"
                >
                  Send Message
                </button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </>
  );
}
