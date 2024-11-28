import Features from "../components/Features";

export const Home = () => {
    return (
    <>
    <div className="h-screen bg-gradient-to-b from-backgroundColor via-secondaryColor to-primaryColor-2">
        <div className="flex justify-center   px-4">
            <div className="mt-14 flex flex-col   text-center">
                <h1 className="text-6xl md:text-7xl font-montserrat font-black text-white">
                    vX Brainly
                </h1>
                <h2 className="font-montserrat md:text-xl text-lg font-extrabold text-white mt-10 max-w-lg sm:max-w-lg text-center">
                    "Never Lose a Link Again! Store, Manage, and Revisit Your Favorite Online Resources Effortlessly."
                </h2>
            </div>
            
        </div>
        <Features/>
    </div>

        
    </>
    );
};
