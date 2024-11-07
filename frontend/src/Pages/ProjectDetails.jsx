import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaHome, FaCalendarDay } from "react-icons/fa";
import { FaRegCircleDot, FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";


import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function ProjectDetails() {






  return (
    <>
      <div className="bg-black h-[60vh] text-6xl md:text-8xl w-full flex flex-col justify-center items-center text-white">
        <h1 className="uppercase">Project Title</h1>
        <div className="flex">
          <Link to="/" className="text-xl flex mx-2 underline">
            <FaHome className="mt-1 mx-2" />
            Home
          </Link>{" "}
          <span className="text-xl">/</span>{" "}
          <Link to="/projects" className="text-xl flex mx-2 underline">
            Projects
          </Link>{" "}
          <span className="text-xl">/ Project Title</span>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper mt-10 w-[90%] mx-auto"
      >
        <SwiperSlide>
          <img
            src="https://picsum.photos/id/237/1200/600"
            alt=""
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/id/238/1200/600"
            alt=""
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/id/239/1200/600"
            alt=""
            className="mx-auto"
          />
        </SwiperSlide>
      </Swiper>

      <div className="text-center mt-10">
        <h2 className="text-3xl league-spartan-bold mb-2">Project Title</h2>
        <h3 className="text-2xl mb-2 text-gray-700">Project Tagline</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 my-10">
        <div className="md:col-span-3 w-[90%] mx-auto">
        <h2 className="text-2xl league-spartan-bold mb-2">Project Summary</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            nemo dolore? Labore quibusdam facilis quia hic atque magni iure
            nulla, aliquid ab vitae, culpa incidunt quo non nisi architecto
            sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor veniam voluptate, harum similique aspernatur eaque error quod
            ipsam fuga nihil distinctio, est sequi quam iure voluptatem. Sed vel
            itaque fugit. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Tenetur quo est autem. Voluptatem id soluta obcaecati odio qui
            debitis delectus atque suscipit, doloribus, eaque tempore possimus
            autem itaque asperiores praesentium.
          </p>
          
          <p className="text-xl flex my-5"><FaCalendarDay className="mr-2 mt-1"/>{new Date().toDateString()}</p>
          <a href=""><button className="bg-black text-white py-2 px-5 rounded-full w-full hover:bg-gray-800">View live project</button></a>
        </div>

        <div className="md:col-span-1 w-[90%] mx-auto">
          <h2 className="text-2xl league-spartan mb-2">Technology Used</h2>



          <div className="flex flex-col gap-2">
            <div className="flex">
              <FaRegCircleDot className="text-2xl" />
              <p className="text-xl ml-2">React</p>
            </div>
            <div className="flex">
              <FaRegCircleDot className="text-2xl" />
              <p className="text-xl ml-2">Django</p>
            </div>
            <div className="flex">
              <FaRegCircleDot className="text-2xl" />
              <p className="text-xl ml-2">Tailwind</p>
            </div>
          </div>


        <div>
          <h2 className="text-2xl league-spartan mb-2 mt-10">Follow me</h2>
          <div className="my-3 flex flex-row justify-start gap-5 text-2xl">
              <a href="https://x.com/MTTasin1" target="_blank" className="hover:text-gray-500">
                <FaXTwitter />
              </a>{" "}
              <a href="https://github.com/MTTasin" target="_blank" className="hover:text-gray-500">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/mttasin/" target="_blank" className="hover:text-gray-500"><LuLinkedin /></a>
            </div>
        </div>

        </div>
      </div>
    </>
  );
}
