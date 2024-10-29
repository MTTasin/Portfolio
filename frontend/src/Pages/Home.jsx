import { Helmet } from "react-helmet-async";
import html from "./../assets/icons/html.svg";
import css from "./../assets/icons/css.svg";
import js from "./../assets/icons/js.svg";
import python from "./../assets/icons/python.svg";
import react from "./../assets/icons/react.svg";
import django from "./../assets/icons/django.svg";
import sql from "./../assets/icons/sql.svg";
import tailwind from "./../assets/icons/tailwind.svg";
import bootstrap from "./../assets/icons/bootstrap.svg";
import github from "./../assets/icons/github.svg";
import git from "./../assets/icons/git.svg";
import figma from "./../assets/icons/figma.svg";
import vscode from "./../assets/icons/vscode.svg";
import Card from "../Components/Card";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta name="title" content="M.T. Tasin" />
        <meta
          name="description"
          content="I am a Full Stack Web Developer with the skills of React Django and SQL."
        />
        <meta property="og:title" content="M.T. Tasin" />
        <meta
          property="og:description"
          content="I am a Full Stack Web Developer with the skills of React Django and SQL."
        />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://tasinblog.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="M.T. Tasin" />
        <meta
          name="twitter:description"
          content="I am a Full Stack Web Developer with the skills of React Django and SQL."
        />
        <meta name="twitter:image" content="/favicon.png" />
        <meta name="twitter:url" content="https://tasinblog.com" />
        <title>M.T. Tasin</title>
        {/* <base href="https://tasinblog.com" /> */}
      </Helmet>

      <div className="bg-black h-[100vh] text-8xl w-full flex flex-col justify-center items-center text-white">
        <h1 className="uppercase">M.T. Tasin</h1>
        <p className="text-3xl league-spartan text-center">
          I am a Full Stack Web Developer.
        </p>
      </div>

      <div className="mt-20 mx-auto xl:w-1/3 lg:w-1/2 md:w-2/3 w-[90%] flex flex-col justify-center">
        <h2 className="text-3xl league-spartan-bold mb-5">About me</h2>
        <p className="roboto-regular text-lg">
          Hi! I am Tasin. I have been actively working as a Full Stack Web
          Developer for more than one year. My primary expertise lies in
          building custom-coded websites tailored to your specific requirements.
          I'm dedicated to implement clean, maintainable and secure code around
          all my projects. With over a year of expertise I'm proficient in
          React, Django, JavaScript, Python, Tailwind CSS, SQL and other
          technologies.
        </p>
      </div>
      <div className="mt-20 mx-auto xl:w-1/3 lg:w-1/2 md:w-2/3 w-[90%] flex flex-col justify-center">
        <h2 className="text-3xl league-spartan-bold mb-5">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-7">
          <div className="roboto-regular flex flex-row items-center gap-2 w-28">
            <img src={html} alt="Mohammad Tahmim Tasin" className="w-[30px]" />
            HTML
          </div>
          <div className="roboto-regular flex flex-row items-center gap-2 w-28">
            <img src={css} alt="Mohammad Tahmim Tasin" className="w-[30px]" />
            CSS
          </div>
          <div className="roboto-regular flex flex-row items-center gap-2 w-28">
            <img src={js} alt="Mohammad Tahmim Tasin" className="w-[30px]" />
            JavaScript
          </div>
          <div className="roboto-regular flex flex-row items-center gap-2 w-28">
            <img
              src={python}
              alt="Mohammad Tahmim Tasin"
              className="w-[30px]"
            />
            Python
          </div>
          <div className="roboto-regular flex flex-row items-center gap-2 w-28">
            <img src={react} alt="Mohammad Tahmim Tasin" className="w-[30px]" />
            ReactJS
          </div>
          <div className="roboto-regular flex flex-row items-center gap-2 w-28">
            <img
              src={django}
              alt="Mohammad Tahmim Tasin"
              className="w-[30px]"
            />
            Django
          </div>
          <div className="roboto-regular flex flex-row items-center gap-2 w-28">
            <img src={sql} alt="Mohammad Tahmim Tasin" className="w-[30px]" />
            SQL
          </div>
          <div className="roboto-regular flex flex-row items-center gap-2 w-28">
            <img
              src={tailwind}
              alt="Mohammad Tahmim Tasin"
              className="w-[30px]"
            />
            Tailwind
          </div>
          <div className="roboto-regular flex flex-row items-center gap-2 w-28">
            <img
              src={bootstrap}
              alt="Mohammad Tahmim Tasin"
              className="w-[30px]"
            />
            Bootstrap
          </div>
          <div className="roboto-regular flex flex-row items-center gap-2 w-28">
            <img src={git} alt="Mohammad Tahmim Tasin" className="w-[30px]" />
            Git
          </div>
          <div className="roboto-regular flex flex-row items-center gap-2 w-28">
            <img
              src={github}
              alt="Mohammad Tahmim Tasin"
              className="w-[30px]"
            />
            GitHub
          </div>
          <div className="roboto-regular flex flex-row items-center gap-2 w-28">
            <img src={figma} alt="Mohammad Tahmim Tasin" className="w-[30px]" />
            Figma
          </div>
          <div className="roboto-regular flex flex-row items-center gap-2 w-28">
            <img
              src={vscode}
              alt="Mohammad Tahmim Tasin"
              className="w-[30px]"
            />
            VS Code
          </div>
        </div>
      </div>
      <h2 className="text-4xl league-spartan-bold mt-20 mb-5 text-center ">
        My Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center mb-10">
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <div className="w-[80%] grid grid-cols-2 gap-20  mx-auto mb-10">
          <Link to="/projects" className="flex justify-center bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 md:py-5 px-4 rounded">
            <FaArrowRight className="text-lg my-auto mx-1" />
            All Projects
          </Link>
          <Link to="/contact" className="flex justify-center bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 md:py-5 px-4 rounded">
            <FaArrowRight className="text-lg my-auto mx-1" />
            Contact me
          </Link>
        </div>
      </div>
    </>
  );
}
