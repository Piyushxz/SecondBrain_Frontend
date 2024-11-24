import { IconProps } from ".";  
import { iconStyles } from ".";

export const CloseIcon = (props: IconProps) => {
  return (
    <svg
    onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 14 14"
      width="24px"
      fill="#FFFFFF"
      className={`${iconStyles[props.variant]} `}
    >
      <path
        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
