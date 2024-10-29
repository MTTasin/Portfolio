import { Link } from "react-router-dom";
import { Clipboard } from "flowbite-react";

export default function Footer() {
  return (
    <footer className="p-10 bg-white text-white">
      <div>
        <Clipboard
          valueToCopy="npm install flowbite-react"
          value="hello"
          className="bg-red-500"
        />
      </div>
    </footer>
  );
}
