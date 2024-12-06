import { useRecoilValue } from "recoil";
import { showAlertModal } from "../atoms";


export interface AlertModaProps{
    type :"invalidPassword" | "SignUpFail" |"SignUpSuccess" | "LoginFail" |"LoginSuccess" |"none" |
    "contentAddSuccess" |"contentAddFail"|"contentDeleteSuccess" |"contentDeleteFail"|
    "contentLinkCopied",
}

const typeStyles = {
    invalidPassword:"text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400 h-24",
    SignUpFail:"text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400 h-12",
    LoginFail: "text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400 h-12",
    LoginSuccess: "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400 h-12",
    SignUpSuccess:"text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400 h-12",
    contentAddSuccess:"text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400 h-12",
    contentAddFail:"text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400 h-12",
    contentDeleteSuccess:"text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400 h-12",
    contentDeleteFail:"text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400 h-12",
    contentLinkCopied:"text-black bg-white dark:bg-gray-800 dark:text-white h-12",
  
    none:""
}
const alertContent = {
    invalidPassword: 
        <div>
            <span className="font-medium">Ensure that these requirements are met:</span>
            <ul className="mt-1.5 list-disc list-inside">
                <li>At least 10 characters (and up to 100 characters)</li>
                <li>At least one lowercase character</li>
            </ul>
        </div>
    ,
    SignUpFail: <span className="font-medium">Sign-up failed. Please try again.</span>,
    SignUpSuccess: <span className="font-medium">Sign-up successful! Welcome aboard.</span>,
    LoginFail: <span className="font-medium">Login failed. Please check your credentials.</span>,
    LoginSuccess: <span className="font-medium">Login successful! Redirecting...</span>,
    contentAddSuccess: <span className="font-medium">Content Added Successfully</span>,
    contentAddFail:<span className="font-medium">Could Not Add Content</span>,
    contentDeleteSuccess:<span className="font-medium">Content Deleted Successfully</span>,
    contentDeleteFail:<span className="font-medium">Could Not delete Content</span>,
    contentLinkCopied:<span className="font-medium">Link Copied</span>,
    none:<span>Test</span>
};
const PasswordAlertModal = (props:AlertModaProps) => {
  const showAlert = useRecoilValue(showAlertModal);

  return (
    <div className={`w-screen top-0 left-0 max-h-12 fixed flex justify-center `}>
      <div
        className={` flex p-4 mt-8 text-sm  rounded-lg w-96 translate-all duration-500 ease-in-out ${
          showAlert ? "translate-y-0 " : "-translate-y-72 "
        } ${typeStyles[props.type]}`}
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3 mt-[2px]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 1 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        
        {
        alertContent[props.type]
        }

      </div>
    </div>
  );
};

export default PasswordAlertModal;
