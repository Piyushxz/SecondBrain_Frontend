import { useRecoilState } from "recoil";
import { contentModalType } from "../../atoms";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import {  LinkIcon, StickyNote, Twitter } from "lucide-react";

export const Options = () => {
  const [contentModal,setContentModal] = useRecoilState(contentModalType);

  return (
    <>
      <form className=" mt-6 ml-4 mr-4">
        <label
          htmlFor="countries"
          className="block mb-2 text-md font-medium text-white dark:text-white font-montserrat"
        >
          Select an option
        </label>
        {/* <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled>
            Choose a Type
          </option>
          <option value="tweet">Tweet</option>
          <option value="youtube">YouTube</option>
          <option value="link">Link</option>
        </select> */}

        <div className=" h-18 border border-white/30 rounded-lg flex gap-2 p-2 cursor-pointer">
            <div id="tweet" onClick={()=>setContentModal('tweet')}
             className={` h-18 w-24  flex flex-col p-3 gap-2 border rounded-lg  ${contentModal === 'tweet' ? "border-blue-500 bg-blue-500/40" :" border-white/30 "}`}>
                <Twitter className="text-blue-500"/>
                <h1 className="text-white font-montserrat  text-sm">Tweet</h1>
            </div>
            <div id="youtube" onClick={()=>setContentModal('youtube')}
             className={` h-18 w-24  flex flex-col p-3 gap-2 border rounded-lg  ${contentModal === 'youtube' ? "border-red-500 bg-red-500/40" :" border-white/30 "}`}>
                <YoutubeIcon variant="md" isRed/>
                <h1 className="text-white font-montserrat  text-sm">Youtube</h1>
            </div>
            <div id="document" onClick={()=>setContentModal('document')}
             className={` h-18 w-24  flex flex-col p-3 gap-2 border rounded-lg  ${contentModal === 'document' ? "border-yellow-500 bg-yellow-500/40" :" border-white/30 "}`}>
                <StickyNote className="text-yellow-500"/>
                <h1 className="text-white font-montserrat  text-sm">Note</h1>
            </div>
            <div id="link" onClick={()=>setContentModal('link')}
           className={` h-18 w-24  flex flex-col p-3 gap-2 border rounded-lg  ${contentModal === 'link' ? "border-purple-500 bg-purple-500/40" :" border-white/30 "}`}>
                <LinkIcon className="text-purple-500"/>
                <h1 className="text-white font-montserrat  text-sm">Link</h1>
            </div>
        </div>
      </form>
    </>
  );
};
