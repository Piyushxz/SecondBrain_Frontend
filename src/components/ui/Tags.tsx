import { CloseIcon } from "../../icons/CloseIcon";

interface tagProps {
  text: string;
  variant: "modal" | "card";
  handleTagDelete: () => void; 
}

export const Tags = (props: tagProps) => {
  return (
    <>
      {props.variant === "card" ? (
        <p className="font-montserrat text-white bg-backgroundColor px-4 py-2 text-sm rounded-2xl">
          #{props.text}
        </p>
      ) : (
        <div className="flex items-center">
          <p className="border-2 flex items-center border-white font-montserrat text-white bg-backgroundColor px-4 py-2 text-sm rounded-2xl">
            #{props.text}
            <button
              className="ml-2 bg-red-600 hover:bg-red-500 transition ease-in-out p-2 rounded-md"
              onClick={props.handleTagDelete} 
              aria-label="Delete Tag"
            >
              <CloseIcon variant="xs" />
            </button>
          </p>
        </div>
      )}
    </>
  );
};
