import { useNavigate } from "react-router-dom";
import Features from "../components/Features";

export const Home = () => {
    const navigate = useNavigate()

    const handleButtonClick = ()=>{
        navigate("/signin")
    }
    return (
    <>
    <div className="h-screen bg-gradient-to-b from-backgroundColor via-secondaryColor to-primaryColor-2">
        <div className="flex justify-center   px-4">
            <div className="mt-14 flex flex-col  justify-center items-center text-center">
                <h1 className="text-6xl md:text-7xl font-montserrat font-black text-white">
                    vX Brainly
                </h1>
                <h2 className="font-montserrat md:text-xl text-lg font-extrabold text-white mt-10 max-w-lg sm:max-w-lg text-center">
                    "Never Lose a Link Again! Store, Manage, and Revisit Your Favorite Online Resources Effortlessly."
                </h2>
                <button onClick={handleButtonClick}
                 className=" mt-4 px-4 py-2 text-2xl text-white rounded-full font-montserrat font-extrabold  bg-backgroundColor hover:bg-primaryColor2 ">
                    Start Now
                </button>
            
            </div>

        </div>
        <Features/>
    </div>
    
    
        
    </>
    );
};
