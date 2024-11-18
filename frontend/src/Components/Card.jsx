import { Link } from "react-router-dom";

export default function Card(props) {
  const technologies = props.technologies_used.map((item) => {
    return <span>{item}, </span>;
  });
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Link to={`/projects/${props.id}`} onClick={scrollToTop}>
        <div className="relative w-[80%] mx-auto hover:scale-105 transition duration-500 cursor-pointer ">
          <div className="absolute top-5 left-5 text-white">
            <h3 className="text-3xl">{props.title}</h3>
            <p className="text-xl text-">{technologies}</p>
          </div>
          <div>
            <img src={props.images} alt="" />
          </div>
        </div>
      </Link>
    </>
  );
}
