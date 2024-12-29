import { IconProps } from ".";
import { iconStyles } from ".";

export const HomeIcon = ({ variant }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFFFFF" // Fill the icon with white color
      viewBox="0 0 960 960"
      strokeWidth="1.5"
      stroke="#FFFFFF" // Define the stroke color as white
      className={iconStyles[variant] || ""}
      width="24" 
      height="24"
    >
      <path d="M240 760h120V520h240v240h120V400L480 220 240 400v360Zm-80 80V360l320-240 320 240v480H520V520h-80v320H160Zm320-430Z" />
    </svg>
  );
};
