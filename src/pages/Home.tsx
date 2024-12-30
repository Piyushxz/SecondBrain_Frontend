import { useNavigate } from "react-router-dom";
import Features from "../components/Features";
import { Footer } from "../components/Footer";

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
        <div className="mt-10  grid grid-cols-12">
            <div className="md:col-span-5 col-span-12  h-96 flex justify-end">
                <div className="w-96 h-80 bg-backgroundColor rounded-lg border border-white border-opacity-40 flex justify-start flex-col">
                    <h1 className="font-montserrat font-extrabold text-6xl text-white p-2 ">AI Assitant adding <span className="bg-transparent bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 text-transparent bg-clip-text">soon,</span></h1>
                    <h1 className="font-montserrat font-extrabold text-xl text-white p-2 ">Chat with AI about your Links</h1>
                </div>
            </div>
            <div className=" md:col-span-7 col-span-12  ml-8 ">
                <div className="md:w-[40vw]  h-48 rounded-lg border border-white border-opacity-40 flex justify-center "  >
                <h1 className="font-montserrat font-extrabold text-5xl text-white p-2 "><div className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600">Share all your stored links with anyone.</div></h1>

                </div>
            </div>


        </div>
        <div className="mb-14">
        <Footer/>

        </div>
    </div>
    
    
        
    </>
    );
};
