import { Helmet } from "react-helmet-async";
import Card from "../Components/Card";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useState, useEffect } from "react";


export default function Projects() {


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <>
        <Helmet>
        <meta name="title" content="Projects of Mohammad Tahmim Tasin" />
        <meta
          name="description"
          content="Projects of Mohammad Tahmim Tasin made with React, Django and SQL and lot's of  other tools."
        />
        <meta property="og:title" content="Projects of M.T. Tasin" />
        <meta
          property="og:description"
          content="Projects of Mohammad Tahmim Tasin made with React, Django and SQL and lot's of  other tools."
        />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://tasinblog.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects of M.T. Tasin" />
        <meta
          name="twitter:description"
          content="Projects of Mohammad Tahmim Tasin made with React, Django and SQL and lot's of  other tools."
        />
        <meta name="twitter:image" content="/favicon.png" />
        <meta name="twitter:url" content="https://tasinblog.com" />
        <title>Projects of M.T. Tasin</title>
        {/* <base href="https://tasinblog.com" /> */}
      </Helmet>



      <div className="bg-black h-[100vh] text-8xl w-full flex flex-col justify-center items-center text-white">
        <h1 className="uppercase text-center">My Projects</h1>
        <p className="text-3xl league-spartan text-center letspace">
          Made with Love.
        </p>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center mt-20 mb-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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