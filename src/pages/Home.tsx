import { useNavigate } from "react-router-dom";
import Features from "../components/Features";
import { Footer } from "../components/Footer";
import {motion} from "motion/react"

export const Home = () => {
    const navigate = useNavigate()

    const handleButtonClick = ()=>{
        navigate("/signin")
    }
    return (
    <>
    <div className="h-screen bg-gradient-to-b from-backgroundColor via-secondaryColor to-primaryColor-2">
      <motion.div initial={{opacity:0,y:-20}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.2,ease:"easeInOut"}}
      
      className="w-full flex justify-center border-b border-white border-opacity-20">
          <div 
          className="w-[80vw] flex justify-between">
              <h1  className="text-xl md:text-3xl  font-satoshi tracking-tighter  font-black text-white py-5">xV</h1>
          </div>
      </motion.div>
        <div className="flex justify-center   px-4 mt-24">
            <div className="mt-14 flex flex-col  justify-center items-center text-center">
                <motion.h1 initial={{opacity:0,y:30}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.5,ease:"easeInOut"}}
      
                 style={{ fontFamily: 'Satoshi, sans-serif' }}
                 className="text-6xl md:text-7xl  font-satoshi tracking-tighter  font-black text-white">
                    xvBrainly
                </motion.h1>
                <motion.h2 initial={{opacity:0,y:30}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.5,ease:"easeInOut"}}

                 className="font-satoshi tracking-tighter md:text-2xl text-lg font-bold text-white mt-6 max-w-lg sm:max-w-lg text-center">
                    Never Lose a Link Again! Store, Manage, and Revisit Your Favorite Online Resources Effortlessly.
                </motion.h2>
                <motion.button  initial={{opacity:0,y:30}}
                animate={{opacity:1.2,y:0}}
                transition={{delay:0.8,ease:"easeInOut",}}
                onClick={handleButtonClick}
                 className=" mt-6 px-8 py-3 text-white rounded-lg font-satoshi font-medium  bg-backgroundColor hover:bg-opacity-60 ">
                    Start Now
                </motion.button>
            
            </div>

        </div>
        <Features/>
        <div className="mt-10 grid grid-cols-12 gap-4">
  <div className="md:col-span-5 col-span-12 h-auto flex justify-center md:justify-end">
    <div className="w-full md:w-96 h-auto md:h-80 bg-backgroundColor rounded-lg border border-white border-opacity-40 flex flex-col p-4">
      <h1 className="font-satoshi tracking-tighter font-extrabold text-4xl md:text-6xl text-white mb-2">
        AI Assistant adding{" "}
        <span className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 text-transparent bg-clip-text">
          soon,
        </span>
      </h1>
      <h2 className="font-satoshi tracking-tighter font-extrabold text-base md:text-xl text-white">
        Chat with AI about your Links
      </h2>
    </div>
  </div>

    
        <div className="md:col-span-7 col-span-12 space-y-4 mb-10">
            
            <div className="w-full md:w-[40vw] h-auto md:h-48 rounded-lg border border-white border-opacity-40 flex flex-col p-4">
            <h1 className="font-satoshi tracking-tighter font-extrabold text-3xl md:text-5xl text-white">
                <div className="">
                Share all your stored links with anyone.
                </div>
            </h1>
            </div>

            
            <div className="w-full md:w-[40vw] h-24 rounded-lg border border-white border-opacity-40"></div>
        </div>
        </div>

        <div className="mb-14">
        <Footer/>

        </div>
    </div>
    
    
        
    </>
    );
};
