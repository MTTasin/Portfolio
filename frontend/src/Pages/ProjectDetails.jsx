import { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaHome, FaCalendarDay } from "react-icons/fa";
import { FaRegCircleDot, FaXTwitter } from "react-icons/fa6";
import { LuLinkedin, LuFacebook } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function ProjectDetails() {
  const params = useParams();
  const [socialLinks, setSocialLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  function fetchSocialLinks() {
    setLoading(true);
    axios
      .get("https://backend.tasinblog.com/social_link/")
      .then((response) => {
        setSocialLinks(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchData() {
    setLoading(true);
    axios
      .get(`https://backend.tasinblog.com/portfolio/${params.id}/`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchSocialLinks();
    fetchData();
  }, []);

  const technology = data.technologies?.map((item) => {
    return (
      <div className="flex">
        <FaRegCircleDot className="text-2xl" />
        <p className="text-xl ml-2">{item}</p>
      </div>
    );
  });


  const images = data.images?.map((item) => {
    return (
      <SwiperSlide>
        <img src={item.image} alt="" />
      </SwiperSlide>
    );
  });


  return (
    <>
      <div
        className={
          loading
            ? "bg-black h-[100vh] flex justify-center items-center"
            : "hidden"
        }
      >
        <Loader />
      </div>
      <div className={loading ? "hidden" : "block"}>
        <div className="bg-black h-[60vh] text-6xl md:text-8xl w-full flex flex-col justify-center items-center text-white">
          <h1 className="uppercase">{data.title}</h1>
          <div className="flex">
            <Link to="/" className="text-xl flex mx-2 underline">
              <FaHome className="mt-1 mx-2" />
              Home
            </Link>{" "}
            <span className="text-xl">/</span>{" "}
            <Link to="/projects" className="text-xl flex mx-2 underline">
              Projects
            </Link>{" "}
            <span className="text-xl">/ {data.title}</span>
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
          
          {images}
        </Swiper>

        <div className="text-center mt-10">
          <h2 className="text-3xl league-spartan-bold mb-2">{data.title}</h2>
          <h3 className="text-2xl mb-2 text-gray-700">{data.tagline}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 my-10">
          <div className="md:col-span-3 w-[90%] mx-auto">
            <h2 className="text-2xl league-spartan-bold mb-2">
              Project Summary
            </h2>
            <div
              className="roboto-regular text-lg"
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></div>

            <p className="text-xl flex my-5">
              <FaCalendarDay className="mr-2 mt-1" />
              {data.date_time}
            </p>
            {data.url ? (
              <a href={data.url} target="_blank">
              <button className="bg-black text-white py-2 px-5 rounded-full w-full hover:bg-gray-800">
                View live project
              </button>
            </a>
            ): null}
            {data.github ? (
              <a href={data.github} target="_blank">
              <button className="bg-gray-700 text-white py-2 px-5 rounded-full w-full hover:bg-gray-800 mt-5">
                View on Github
              </button>
            </a>
            ):
            null}
          </div>

          <div className="md:col-span-1 w-[90%] mx-auto">
            <h2 className="text-2xl league-spartan md:my-2 mt-10 md:mb-2">Technology Used</h2>

            <div className="flex flex-col gap-2">
              
              {technology}
            </div>

            <div>
              <h2 className="text-2xl league-spartan mb-2 mt-10">Follow me</h2>
              <div className="my-3 flex flex-row justify-start gap-5 text-2xl">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  className="hover:text-gray-500"
                >
                  <LuFacebook />
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  className="hover:text-gray-500"
                >
                  <FaXTwitter />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  className="hover:text-gray-500"
                >
                  <FiGithub />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  className="hover:text-gray-500"
                >
                  <LuLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
