
type navProps = {
    isSignInActive: boolean;
    isSignUpActive: boolean;
    onSignInClick: () => void;
    onSignUpClick: () => void;
  };
  
  export const Navigator = ({
    isSignInActive,
    isSignUpActive,
    onSignInClick,
    onSignUpClick,
  }: navProps) => {
    return (
      <>
        <div className="flex h-16 w-96 bg-backgroundColor m-4 rounded-2xl ">
          <div
            onClick={onSignInClick}
            className={`w-1/2 hover:opacity-50 transition-all duration-300 cursor-pointer ${
              isSignInActive
                ? "border border-white"
                : "border-r-2 border-primaryColor2"
            }`}
          >
            <h1 className="font-satoshi tracking-tighter font-extrabold text-lg text-white text-center p-4">
              Login
            </h1>
          </div>
          <div
            onClick={onSignUpClick}
            className={`w-1/2 hover:opacity-50 transition-all duration-300 cursor-pointer ${
              isSignUpActive ? "border border-white" : ""
            }`}
          >
            <h1 className="font-satoshi tracking-tighter font-extrabold text-lg text-white text-center p-4">
              SignUp
            </h1>
          </div>
        </div>
      </>
    );
  };
  