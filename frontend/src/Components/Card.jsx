import img from './../assets/img/image.png'


export default function Card() {
    return(
        <div className="relative w-[80%] mx-auto ">
            <div className="absolute top-5 left-5 text-white">
                <h3 className="text-3xl">Project Name</h3>
                <p className="text-xl">Technology Used</p>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    )
}