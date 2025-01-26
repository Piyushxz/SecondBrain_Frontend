import { ThreeDot } from "react-loading-indicators";

export const SearchResultSkeleton = () => {
    return (
      
      <div className="grid grid-cols-12 md:w-[70vw] w-[80vw] mt-4 gap-4">

        <div className="md:col-span-9 col-span-12">

          <div className="border border-white rounded-2xl w-full h-40 border-opacity-30  space-y-2 p-4">
            <div className="flex gap-4 items-center">
            <h1 className="font-satoshi tracking-tighter font-normal animate-pulse text-white text-lg ">Searching Your Memories</h1>

            <ThreeDot variant="pulsate" color="#e0e5e0" size="small" text="" textColor="#e6caca" />
                        </div>

            <div className="h-3 bg-gray-200 rounded-full animate-pulse dark:bg-gray-700 w-full"></div>
            <div className="h-3 bg-gray-200 rounded-full animate-pulse dark:bg-gray-700 w-full"></div>
            <div className="h-3 bg-gray-200 rounded-full  animate-pulse dark:bg-gray-700 w-full"></div>
            <div className="h-3 bg-gray-200 rounded-full  animate-pulse dark:bg-gray-700 w-full"></div>

            <div className="h-3 bg-gray-200 rounded-full  animate-pulse dark:bg-gray-700 w-2/3"></div>
          </div>
        </div>
        <div className="md:col-span-3 col-span-12">
          <div className="px-4 h-24 border border-white rounded-lg bg-gray-300 animate-pulse space-y-2">

          </div>
        </div>
      </div>
    );
  };
  