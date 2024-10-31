import { GoMoveToTop } from "react-icons/go";
import { Button } from "flowbite-react";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` rounded-full bg-gray-300 hover:bg-blue-300 focus:bg-blue-700 p-2 fixed bottom-5 right-5 ${
        isScrolled ? "block" : "hidden"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <GoMoveToTop className="text-xl md:text-3xl" />
    </div>
  );
}
