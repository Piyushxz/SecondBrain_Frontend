import { MenuIcon } from "../icons/MenuIcon";
import { showSidebar } from "../atoms";
import { CloseIcon } from "../icons/CloseIcon";
import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { HomeIcon } from "../icons/HomeIcons";
import { LogoutIcon } from "../icons/LogoutIcon";
import { useRecoilState,useSetRecoilState } from "recoil";
import { activeContentType ,isLogoutModalOpen} from "../atoms";

export const MobileSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(showSidebar);
  const [contentType, setContentType] = useRecoilState(activeContentType);
  const setIsLogoutModalOpen = useSetRecoilState(isLogoutModalOpen)

  const handleMenuClick = () => {
    setIsSidebarOpen((val) => !val);
  };

  return (
    <>
      <div
        onClick={handleMenuClick}
        className="p-2 hover:bg-gray-800 rounded-lg z-100"
      >
        <MenuIcon variant="lg" />
      </div>

      <div
        className={`bg-[#1a2439] top-0 left-0 w-64 h-screen fixed z-50 transition-all duration-500  ${
          isSidebarOpen ? " translate-x-0" : " -translate-x-full"
        }`}
      >
        <div className="flex justify-between pl-4 pr-4 mt-4 items-center">
          <div>
            <BrainIcon variant="lg" />
          </div>
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="p-4 hover:text-white rounded-lg"
          >
            <CloseIcon variant="sm" />
          </div>
        </div>

        <div className="mt-10">
          <ul>
            <li onClick={() => setContentType("home")}>
              <div
                className={`flex pl-8 mb-6 hover:bg-primaryColor2 p-4 ${
                  contentType === "home" ? " bg-primaryColor2 " : " "
                }`}
              >
                <HomeIcon variant="lg" />
                <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">
                  Home
                </h1>
              </div>
            </li>
            <li onClick={() => setContentType("tweet")}>
              <div
                className={`flex pl-8 mb-6 hover:bg-primaryColor2 p-4 ${
                  contentType === "tweet" ? " bg-primaryColor2 " : " "
                }`}
              >
                <TwitterIcon variant="lg" />
                <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">
                  Tweets
                </h1>
              </div>
            </li>
            <li onClick={() => setContentType("youtube")}>
              <div
                className={`flex pl-8 mb-6 hover:bg-primaryColor2 p-4 ${
                  contentType === "youtube" ? " bg-primaryColor2 " : " "
                }`}
              >
                <YoutubeIcon variant="lg" />
                <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">
                  Videos
                </h1>
              </div>
            </li>
            <li onClick={() => setContentType("link")}>
              <div
                className={`flex pl-8 mb-6 hover:bg-primaryColor2 p-4 ${
                  contentType === "link" ? " bg-primaryColor2 " : " "
                }`}
              >
                <LinkIcon variant="lg" />
                <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">
                  Links
                </h1>
              </div>
            </li>
            <li onClick={()=>setIsLogoutModalOpen(true)}>
              <div className="flex pl-6 hover:bg-primaryColor2 p-4">
                <LogoutIcon variant="lg" />
                <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">
                  LogOut
                </h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
