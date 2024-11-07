import me from "./../assets/img/me.jpg"



export default function MyImg() {
    return (
        <>
            
            
            <div className="me mt-10 flex justify-center items-center"><img src={me} alt="Mohammad Tahmim Tasin" className="w-3/5 md:w-2/6 rounded-full mx-auto border-4 border-black border-dotted"/></div>
           
        </>
    )
}