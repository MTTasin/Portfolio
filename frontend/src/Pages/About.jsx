import { Helmet } from "react-helmet-async";
import Card from "../Components/Card";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useState, useEffect } from "react";

export default function About() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        <meta property="og:image" content="/favicon.png" />
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
        <meta name="twitter:image" content="/favicon.png" />
        <meta name="twitter:url" content="https://tasinblog.com" />
        <title>About M.T. Tasin</title>
        {/* <base href="https://tasinblog.com" /> */}
      </Helmet>

      <div className="bg-black h-[100vh] text-8xl w-full flex flex-col justify-center items-center text-white">
        <h1 className="uppercase text-center">About Me</h1>
        <p className="text-3xl league-spartan text-center letspace">
          IT'S ME, MOHAMMAD TAHMIM TASIN!
        </p>
      </div>

      <div className="mt-20 mx-auto xl:w-1/2 lg:w-1/2 md:w-2/3 w-[90%] flex flex-col justify-center">
        <h2 className="text-3xl league-spartan-bold mb-5">My Background</h2>
        <p className="roboto-regular text-lg">
          Hi! I am Mohammad Tahmim Tasin. I have a strong and diverse background
          in both technology and design. My skills range from web development
          using HTML, CSS, and JavaScript to advanced programming in Python,
          ReactJS, and Django. I have experience with SQL, and I’m proficient in
          using Tailwind and Git, making me well-rounded in both front-end and
          back-end development. <br />
          <br />I earned a Diploma in Computer Technology from Shyamoli Ideal
          Polytechnic Institute in Chittagong, which established a solid
          foundation for my technical skills. I’ve completed official courses in
          Office Management, Graphic Design, and Django, further expanding my
          expertise. <br />
          <br />
          Currently, I’m pursuing AMIE in Computer Science and Engineering from
          the Institute of Engineers, Bangladesh, an education that’s equivalent
          to a Bachelor’s degree. <br />
          <br />
          My continuous quest for knowledge and skill enhancement makes me a
          valuable asset in the tech world.
        </p>

        <h2 className="text-3xl league-spartan-bold mt-16 mb-5">
          My hobbies & interests
        </h2>
        <p className="roboto-regular text-lg">
          I have a range of hobbies and interests that keep me engaged and
          constantly learning. <br /> <br /> I love playing football, which keeps me active
          and energized. I'm also an avid gamer, and you'll often find me
          immersed in games like PUBG Mobile and Clash of Clans. <br /><br /> My curiosity
          extends to Islamic History, where I enjoy delving into the rich
          tapestry of events and figures that have shaped the world. <br /><br />Technology
          fascinates me, and I like to stay updated on the latest advancements
          and innovations. <br /><br /> I also dabble in politics, keeping a keen eye on
          current events and developments. <br /><br /> All these interests make my life
          vibrant and dynamic.
        </p>
      </div>

      <div className="my-10 flex justify-center">
        <Link to="/contact" className="mx-auto">
          <Button color="light" onClick={scrollToTop} className="px-16 md:px-32">
            <HiOutlineArrowRight className="mr-2 h-5 w-5" />
            Contact me
          </Button>
        </Link>
      </div>
    </>
  );
}
