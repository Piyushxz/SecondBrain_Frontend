import { IconProps } from ".";
import { iconStyles } from ".";

interface YoutubeIconProps extends IconProps {
  isRed?: boolean;
}

export const YoutubeIcon = ({ isRed, ...props }: YoutubeIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconStyles[props.variant]} ${props.className}`}
      height="800px"
      width="800px"
      version="1.1"
      id="Layer_1"
      viewBox="0 0 461.001 461.001"
      fill={isRed ? "#FF0000" : "#FFFFFF"} // Apply red color if isRed is true
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z" />
        </g>
      </g>
    </svg>
  );
};
