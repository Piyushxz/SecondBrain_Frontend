import { useSetRecoilState } from "recoil";
import { contentModalType } from "../../atoms";

export const Options = () => {
  const setContentModal = useSetRecoilState(contentModalType);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setContentModal(event.target.value);
  };

  return (
    <>
      <form className=" mt-6 ml-4 mr-4">
        <label
          htmlFor="countries"
          className="block mb-2 text-md font-medium text-white dark:text-white font-montserrat"
        >
          Select an option
        </label>
        <select
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
        </select>
      </form>
    </>
  );
};
