import { useNavigate } from "react-router-dom";
import Features from "../components/Features";
import { Footer } from "../components/Footer";
import {motion} from "motion/react"
import { ArrowIcon } from "../icons/ArrowIcon";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-component";
import { BrainIcon } from "../icons/BrainIcon";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
import LiquidChrome from "../Backgrounds/LiquidChrome/LiquidChrome";
export const Home = () => {
    const navigate = useNavigate()

    const handleButtonClick = ()=>{
        navigate("/signin")
    }
    return (
    <>

    <div className="h-screen bg-gradient-to-b from-backgroundColor via-secondaryColor to-primaryColor-2 z-100">
    <ShootingStars className="absolute inset-0 h-full w-full z-1 pointer-events-none"/>
    <StarsBackground className="absolute inset-0 h-full w-full z-1 pointer-events-none"/>

      <motion.div initial={{opacity:0,y:-20}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.2,duration:0.2,ease:"easeInOut"}}
      
      className="w-full flex justify-center border-b border-white border-opacity-20 ">

          <div 
          className="w-[80vw] flex justify-between items-center">
              <h1  className="text-xl md:text-3xl  font-satoshi tracking-tighter  font-black text-white py-5">xv</h1>
              <button className="transition-all duration-300 hover:opacity-70 bg-transparent font-satoshi tracking-tighter text-white font-normal text-xs px-5 py-2 lg:text-sm  border rounded-lg border-gray-600/50">Login</button>
          </div>
      </motion.div>
        <div className="flex justify-center   px-4 mt-24">
            <div className="mt-14 flex flex-col gap-2  justify-center items-center text-center">
                <motion.h1 initial={{opacity:0,y:30}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.5,duration:0.5,ease:"easeInOut"}}
      
                 style={{ fontFamily: 'Satoshi, sans-serif' }}
                 className="text-6xl md:text-7xl  font-satoshi tracking-tighter  font-black text-white">
                    xvBrainly
                </motion.h1>
                <motion.h2 initial={{opacity:0,y:30}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.5,duration:0.5,ease:"easeInOut"}}

                 className="font-satoshi  tracking-tighter  md:text-xl text-lg font-bold text-white/70  max-w-lg sm:max-w-lg text-center">
            "Your Second Brain for the Web – Save, Organize & Recall Links, Tweets, Notes, and More Effortlessly!"                </motion.h2>
                <motion.button  initial={{opacity:0,y:30}}
                animate={{opacity:1.2,y:0}}
                transition={{delay:0.8,ease:"easeInOut",}}
                onClick={handleButtonClick}
                 className="flex gap-2 items-center mt-6 px-8 py-3 text-white rounded-lg font-satoshi font-normal  tracking-tighter  bg-backgroundColor hover:bg-opacity-60 ">
                    <ArrowIcon variant="sm"/>
                    <div>                    Start Now                    </div>
                </motion.button>
            
            </div>

        </div>
        <Features/>
        <div className="w-screen flex justify-center mt-24">
  <div className="w-[70vw] grid grid-cols-12 relative ">
    
    <div className="absolute inset-0 -z-10 opacity-40">
    <div className="w-full md:w-1/2 h-full relative opacity-50">
  <LiquidChrome
    baseColor={[0.2, 0.18, 0.5]}
    speed={1}
    amplitude={0.6}
    interactive={true}
  />
</div>

    </div>

    {/* Left Section */}
    <div className="md:col-span-6 col-span-12 h-96 flex justify-center items-center border border-gray-600/50 relative z-10">
      <h1 className="text-3xl p-6 font-satoshi tracking-tighter font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 drop-shadow-lg">
      Keep Your Mind Organized: Your Second Brain for Everything
      </h1>
    </div>

    {/* Right Section */}
    <div className="flex justify-center items-center md:col-span-6 col-span-12 border  border-gray-600/50 h-96 relative z-10">
      
      <BrainIcon variant="3xl" />
    </div>

  </div>
</div>


        <div className="mt-24 grid grid-cols-12 gap-4">
  <div className="md:col-span-5 col-span-12 h-auto flex justify-center md:justify-end">
    <SpotlightCard className="p-4 bg-transparent w-96 h-80 border border-white/20  flex flex-col justify-center gap-4" spotlightColor="rgba(82, 78, 183, 1)">
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bot text-white  border border-white/30 size-12 p-2 size-18 rounded-lg"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
      </div>

      <div>
          <h1 className="font-satoshi tracking-tighter font-bold text-4xl text-white ">

    AI Assistant 
    </h1>
    <h2 className="font-satoshi tracking-tighter font-normal text-sm text-white/40">
    Chat with AI about your Links
    </h2>
        </div>

      </SpotlightCard>


  </div>

    
        <div className="md:col-span-7 col-span-12 space-y-4 mb-10 mx-4">
        <SpotlightCard className="bg-transparent md:w-[40vw] h-auto md:h-48 rounded-lg border border-white/30 flex flex-col gap-4 p-4 text-white" spotlightColor="rgba(82, 78, 183, 1)">
        <div className="p-2 border border-white/30 w-fit rounded-lg">
          <ArrowIcon variant="lg" />
        </div>

        <h1 className="font-satoshi tracking-tighter font-bold md:text-3xl text-2xl text-white">
          Share all your stored links with anyone.
        </h1>
      </SpotlightCard>



            
            <SpotlightCard spotlightColor="rgba(82, 78, 183, 1)" className="bg-transparent w-full md:w-[40vw] h-24 rounded-lg border border-white/30 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-panels-top-left text-white p-2 size-12 border border-white/20 rounded-lg"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>

          <div className="flex flex-col">
          <h1 className="font-satoshi tracking-tighter font-bold md:text-3xl text-2xl text-white">
          Easy to use.
        </h1>
        <h1 className="font-satoshi  font-normal text-sm text-white/50">
          The UI is kinda cool ig.
        </h1>
            </div>  

            </SpotlightCard>
        </div>
        </div>

        <div className="mb-14">
        <Footer/>

        </div>
    </div>
    
    
        
    </>
    );
};
