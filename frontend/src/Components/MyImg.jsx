import me from "./../assets/img/me.jpg"
import { useState, useEffect } from "react";
import axios from "axios";


export default function MyImg() {

    const [proPic, setHobbyText] = useState("");



    function fetchProPic() {
        axios
          .get("https://backend.tasinblog.com/pro_pic/")
          .then((response) => {
            setHobbyText(response.data[0].pro_pic);
          })
          .catch((error) => {
            console.log(error);
          });
      }



    useEffect(() => {
        fetchProPic();

    }, []);


    return (
        <>
            
            
            <div className="me mt-10 flex justify-center items-center"><img src={proPic} alt="Mohammad Tahmim Tasin" className="w-3/5 md:w-2/6 rounded-full mx-auto border-4 border-black border-dotted"/></div>
           
        </>
    )
}