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
        <div className="relative w-[80%] mx-auto hover:scale-105 transition duration-200 cursor-pointer ">
          <div className="absolute top-5 left-5 text-white p-2">
            <h3 className="text-3xl textshad">{props.title}</h3>
            <p className="text-xl textshad">{technologies}</p>
          </div>
          <div>
            <img src={props.images} alt="" />
          </div>
        </div>
      </Link>
    </>
  );
}
