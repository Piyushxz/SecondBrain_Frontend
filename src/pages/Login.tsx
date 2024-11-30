import { useState } from "react";
import { LoginModal } from "../components/LoginModal";
import { Navigator } from "../components/Navigator";
import { SignUpModal } from "../components/SignUpModal";
import PasswordAlertModal from "../components/PasswordAlert";
import { useSetRecoilState } from "recoil";
import { showAlertModal } from "../atoms";
export const Login = () => {
  const [isSignInActive, setIsSignInActive] = useState(true);
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const setShowAlert = useSetRecoilState(showAlertModal)

  const handleSignInClick = () => {
    setIsSignInActive(true);
    setIsSignUpActive(false);
  };

  const handleSignUpClick = () => {
    setIsSignInActive(false);
    setIsSignUpActive(true);
  
  };

  return (
    <>
      <PasswordAlertModal type="invalidPassword"/>
      <div className="h-screen w-screen bg-gradient-to-b from-backgroundColor via-secondaryColor to-primaryColor2 flex flex-col justify-center items-center">
        <Navigator
          isSignInActive={isSignInActive}
          isSignUpActive={isSignUpActive}
          onSignInClick={handleSignInClick}
          onSignUpClick={handleSignUpClick}
        />
         {
            isSignInActive && 
            <LoginModal/>
         }
         {
            isSignUpActive &&
            <SignUpModal/>
         }

        
      </div>
    </>
  );
};
