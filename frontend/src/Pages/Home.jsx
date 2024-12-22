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
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import Loader from "../Components/Loader";
import axios from "axios";
import { useState, useEffect, useId } from "react";


export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [loading, setLoading] = useState(false);
  const [aboutText, setAboutText] = useState("");
  const [featured_portfolio, setFeatured_portfolio] = useState([]);
  

  function fetchAboutText() {
    setLoading(true);
    axios
      .get("https://tasinportfolio.pythonanywhere.com/about_me/")
      .then((response) => {
        setAboutText(response.data[0].about);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }



  function fetchFeaturedPortfolio() {
    setLoading(true);
    axios
      .get("https://tasinportfolio.pythonanywhere.com/featured_portfolio/")
      .then((response) => {
        setFeatured_portfolio(response.data.reverse());
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  useEffect(() => {
    fetchAboutText();
    fetchFeaturedPortfolio();
  }, []);

const cards = featured_portfolio.map((item) =>{
  return (
    <Card 
    key = {item.id}
    id = {item.title.id}
    title = {item.title.title}
    technologies_used = {item.technologies_used}
    images = {item.title.thumbnail}
    />
  )
})

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

      <div className={loading ? "bg-black h-[100vh] flex justify-center items-center" : "hidden"}>
        <Loader />
      </div>
      <div className={loading ? "hidden" : "block"}>
        <div className="bg-black h-[100vh] text-6xl md:text-8xl w-full flex flex-col justify-center items-center text-white">
          <h1 className="uppercase">M.T. Tasin</h1>
          <p className="md:text-3xl text-xl league-spartan text-center letspace">
            I am a Full Stack Web Developer.
          </p>
        </div>

        <div className="mt-20 mx-auto xl:w-1/3 lg:w-1/2 md:w-2/3 w-[90%] flex flex-col justify-center">
          <h2 className="text-3xl league-spartan-bold mb-5">About me</h2>
          <div
            className="roboto-regular text-lg"
            dangerouslySetInnerHTML={{ __html: aboutText }}
          ></div>
        </div>
        <div className="mt-20 mx-auto xl:w-1/3 lg:w-1/2 md:w-2/3 w-[90%] flex flex-col justify-center">
          <h2 className="text-3xl league-spartan-bold mb-5">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-7">
            <div className="roboto-regular flex flex-row items-center gap-2 w-28">
              <img
                src={html}
                alt="Mohammad Tahmim Tasin"
                className="w-[30px]"
              />
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
              <img
                src={react}
                alt="Mohammad Tahmim Tasin"
                className="w-[30px]"
              />
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
              <img
                src={figma}
                alt="Mohammad Tahmim Tasin"
                className="w-[30px]"
              />
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
         {cards}
        </div>
        <div>
          <div className="w-full md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20  mx-auto mb-10">
            <Link to="/projects" className="mx-auto">
              <Button
                color="dark"
                onClick={scrollToTop}
                className="px-16 md:px-32"
              >
                <HiOutlineArrowRight className="mr-2 h-5 w-5" />
                All Projects
              </Button>
            </Link>
            <Link to="/contact" className="mx-auto">
              <Button
                color="light"
                onClick={scrollToTop}
                className="px-16 md:px-32"
              >
                <HiOutlineArrowRight className="mr-2 h-5 w-5" />
                Contact me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
