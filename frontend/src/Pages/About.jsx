import { Helmet } from "react-helmet-async";
import Card from "../Components/Card";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useState, useEffect } from "react";
import MyImg from "../Components/MyImg";
import me from "./../assets/img/me.jpg";
import axios from "axios";
import Loader from "../Components/Loader";

export default function About() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [loading, setLoading] = useState(false);
  const [backgroundText, setBackgroundText] = useState("");
  const [hobbyText, setHobbyText] = useState("");

  function fetchBackgroundText() {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/my_background/")
      .then((response) => {
        setBackgroundText(response.data[0].background);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchHobbyText() {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/my_hobby_and_interest/")
      .then((response) => {
        setHobbyText(response.data[0].hobbies);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchBackgroundText();
    fetchHobbyText();
  }, []);

  

  return (
    <>
      <Helmet>
        <meta name="title" content="About Mohammad Tahmim Tasin" />
        <meta
          name="description"
          content="Hi! I am Mohammad Tahmim Tasin. I have been actively working as a Full Stack Web
          Developer for more than one year. My primary expertise lies in
          building custom-coded websites tailored to your specific requirements.
          I'm dedicated to implement clean, maintainable and secure code around
          all my projects. With over a year of expertise I'm proficient in
          React, Django, JavaScript, Python, Tailwind CSS, SQL and other
          technologies."
        />
        <meta property="og:title" content="About M.T. Tasin" />
        <meta
          property="og:description"
          content="Hi! I am Mohammad Tahmim Tasin. I have been actively working as a Full Stack Web
          Developer for more than one year. My primary expertise lies in
          building custom-coded websites tailored to your specific requirements.
          I'm dedicated to implement clean, maintainable and secure code around
          all my projects. With over a year of expertise I'm proficient in
          React, Django, JavaScript, Python, Tailwind CSS, SQL and other
          technologies."
        />
        <meta property="og:image" content={me} />
        <meta property="og:url" content="https://tasinblog.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About M.T. Tasin" />
        <meta
          name="twitter:description"
          content="Hi! I am Mohammad Tahmim Tasin. I have been actively working as a Full Stack Web
          Developer for more than one year. My primary expertise lies in
          building custom-coded websites tailored to your specific requirements.
          I'm dedicated to implement clean, maintainable and secure code around
          all my projects. With over a year of expertise I'm proficient in
          React, Django, JavaScript, Python, Tailwind CSS, SQL and other
          technologies."
        />
        <meta name="twitter:image" content={me} />
        <meta name="twitter:url" content="https://tasinblog.com" />
        <title>About M.T. Tasin</title>
        {/* <base href="https://tasinblog.com" /> */}
      </Helmet>


      <div className={loading ? "bg-black h-[100vh] flex justify-center items-center" : "hidden"}>
        <Loader />
      </div>
      <div className={loading ? "hidden" : "block"}>
      <div className="bg-black h-[100vh] text-6xl md:text-8xl w-full flex flex-col justify-center items-center text-white">
        <h1 className="uppercase text-center">About Me</h1>
        <p className="md:text-3xl text-xl league-spartan text-center letspace">
          IT'S ME, MOHAMMAD TAHMIM TASIN!
        </p>
      </div>
      <MyImg />
      <div className="mt-20 mx-auto xl:w-1/2 lg:w-1/2 md:w-2/3 w-[90%] flex flex-col justify-center">
        <h2 className="text-3xl league-spartan-bold mb-5">My Background</h2>

        <div
          className="roboto-regular text-lg"
          dangerouslySetInnerHTML={{ __html: backgroundText }}
        ></div>

        <h2 className="text-3xl league-spartan-bold mt-16 mb-5">
          My hobbies & interests
        </h2>

        <div
          className="roboto-regular text-lg"
          dangerouslySetInnerHTML={{ __html: hobbyText }}
        ></div>
      </div>

      <div className="my-10 flex justify-center">
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
    </>
  );
}
