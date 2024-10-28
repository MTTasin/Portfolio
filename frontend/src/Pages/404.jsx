import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="bg-black h-[100%] text-8xl w-full flex flex-col justify-center items-center text-white">
          <h1>404</h1>
          <p className="text-3xl league-spartan uppercase">Page Not Found</p>
          <Link to="/" className="text-3xl mt-20 text-blue-500">Back to Home</Link>
        </div>
    );
}