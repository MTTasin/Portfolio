import { IoCopyOutline, IoCallOutline } from "react-icons/io5";
import { LuCopyCheck, LuGithub, LuTwitter, LuLinkedin } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { Tooltip } from "flowbite-react";

export default function Footer() {
  const [copymail, setCopymail] = useState(false);
  const [copycall, setCopycall] = useState(false);

  function copyEmail() {
    copy("m.t.tasin20@gmail.com");
    setCopymail(true);
    // after 2 sec set copymail to false
    setTimeout(() => {
      setCopymail(false);
    }, 2000);
  }
  function copyCall() {
    copy("+8801974283081");
    setCopycall(true);
    // after 2 sec set copymail to false
    setTimeout(() => {
      setCopycall(false);
    }, 2000);
  }

  return (
    <footer className="p-10 bg-black text-white">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-gray-500 text-black text-sm md:text-xl rounded-full px-5 py-2">
          Get in touch
        </div>
        <div className="text-center my-5">
          <p className="text-xl md:text-2xl">
            What's next? Feel free to reach out to me if you're looking for a
            developer, <br /> have a query, or simply want to connect.{" "}
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 my-5">
          <span>
            <CiMail className="text-xl md:text-3xl" />
          </span>
          <span className="text-xl md:text-3xl font-bold">m.t.tasin20@gmail.com</span>
          <span>
            {copymail ? (
              <Tooltip content="Copied"><LuCopyCheck className="text-xl md:text-3xl" /></Tooltip>
            ) : (
              <Tooltip content="Copy Email"><IoCopyOutline className="text-xl md:text-3xl" onClick={copyEmail} /></Tooltip>
            )}
          </span>
        </div>
        <div className="flex justify-center items-center gap-2 my-5">
          <span>
            <IoCallOutline className="text-xl md:text-3xl" />
          </span>
          <span className="text-xl md:text-3xl font-bold">+880 1974 28 30 81</span>
          <span>
            {copycall ? (
              <Tooltip content="Copied"><LuCopyCheck className="text-xl md:text-3xl" /></Tooltip>
            ) : (
              <Tooltip content="Copy Phone Number"><IoCopyOutline className="text-xl md:text-3xl" onClick={copyCall} /></Tooltip>
            )}
          </span>
        </div>

        <div>
          <p className="text-center">You may also find me on this platforms!</p>
        </div>
        <div className="flex justify-center items-center gap-10 my-5">
          <span>
            <a href="https://github.com/MTTasin" target="_blank"><LuGithub className="text-3xl" /></a>
          </span>
          <span>
            <a href="https://x.com/MTTasin1" target="_blank"><LuTwitter className="text-3xl" /></a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/mttasin/" target="_blank"><LuLinkedin className="text-3xl" /></a>
          </span>
        </div>
      </div>
    </footer>
  );
}

// {copymail ?  (<LuCopyCheck className="text-3xl" />) : (<IoCopyOutline className="text-3xl" onClick={copyEmail} />)}
