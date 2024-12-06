import { useRecoilValue, useSetRecoilState } from "recoil";
import { CloseIcon } from "../../icons/CloseIcon";
import { contentModalType, toggleModal } from "../../atoms";
import { v4 as uuid } from "uuid";
import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";
import { Options } from "./Options";
import axios from "axios";
import { useAlert } from "../../hooks/useAlert";
import { isValidString } from "../../utils";
import { Tags } from "./Tags";

type Tag = {
  id: string;
  tag: string;
};

export const ContentModal = () => {
  const showAlert = useAlert();
  const isModalOpen = useRecoilValue(toggleModal);
  const setModal = useSetRecoilState(toggleModal);
  const contentModalT = useRecoilValue(contentModalType);

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [finalTags, setFinalTags] = useState<Tag[]>([]);

  const handleCloseModal = () => {
    setModal((val) => !val);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleAddTagFinalList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isValidString(tags)) {
      setFinalTags((prev) => [...prev, { id: uuid(), tag: tags }]);
      setTags(""); 
    }
  };

  const handleDeleteTags = (id: string) => {
    console.log("Clicled")
    setFinalTags((prev) => prev.filter((tag) => tag.id !== id));
  };
  console.log(finalTags)

  const handleAddContentClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3003/api/v1/content",
        {
          title,
          link,
          type: contentModalT,
          content,
          tags:finalTags
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
      handleCloseModal();
      showAlert("contentAddSuccess");
    } catch (err) {
      console.error(err);
      showAlert("contentAddFail");
    }
  };

  return (
    <div
      className={`bg-[#0000004d] h-screen w-screen fixed top-0 left-0 flex justify-center items-center transition-all duration-350 ${
        isModalOpen ? " bg-opacity-50 opacity-1" : " bg-opacity-100 opacity-0 "
      }`}
    >
      <div className="max-w-[450px] rounded-2xl bg-[#0F1825] shadow-2xl border-2 border-black/50">
        <div className="flex pl-4 pr-4 py-4 justify-between items-center border-b border-gray-700">
          <h1 className="font-montserrat font-extrabold text-2xl text-white">Add Content</h1>
          <div onClick={handleCloseModal} className="p-2 hover:bg-gray-800 rounded-lg">
            <CloseIcon variant="sm" />
          </div>
        </div>

        <form onSubmit={handleAddContentClick}>
          <div>
            <Input label="Title" value={title} htmlFor="title" onChange={handleTitleChange} />
          </div>
          <div>
            <Options />
          </div>
          <div>
            <Input label="Link" value={link} htmlFor="link" onChange={handleLinkChange} />
          </div>
          <div className="flex">
            <Input label="Tags" htmlFor="tags" value={tags} onChange={handleTagsChange} />
            <button
              onClick={handleAddTagFinalList}
              className="px-4 rounded-lg mr-12 mt-14 text-md font-medium text-white font-montserrat bg-primaryColor max-h-12 hover:bg-primaryColor2 transition ease-in-out"
            >
              Add
            </button>
          </div>
          <div className="flex gap-2 m-4 flex-wrap">
            {finalTags.map((tag) => (
              <Tags
                variant="modal"
                text={tag.tag}
                key={tag.id}
                handleTagDelete={()=>handleDeleteTags(tag.id)}
              />
            ))}
          </div>
          {contentModalT === "link" && (
            <div>
              <Input label="Content" value={content} htmlFor="content" onChange={handleContentChange} />
            </div>
          )}

          <div className="flex justify-center pl-4 pr-4 py-4 border-t border-gray-700 mt-8">
            <Button variant="primary" size="lg" text="Add Content" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
