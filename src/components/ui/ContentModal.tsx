import { useRecoilValue } from "recoil";
import { CloseIcon } from "../../icons/CloseIcon";
import { toggleModal } from "../../atoms";
import { useSetRecoilState } from "recoil";
import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";

export const ContentModal = () => {
    const isModalOpen = useRecoilValue(toggleModal)
    const setModal = useSetRecoilState(toggleModal)

    const [title, setTitle] = useState("")
    const [type, setType] = useState("")
    const [link, setLink] = useState("")
    const [tags, setTags] = useState("")
    const [content, setContent] = useState("")

    const handleCloseModal = () => {
        setModal(val => !val);
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setType(e.target.value);
    }
    const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value);
    }
    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTags(e.target.value);
    }
    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
        console.log(content)
    }

    const handleAddContentClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({
            title,
            type,
            link,
            tags,
            content
        });
    }

    return (
        <>
            <div className={`bg-[#0000004d] h-screen w-screen fixed top-0 left-0 flex justify-center items-center transition-all duration-350
                ${isModalOpen ? " bg-opacity-50 opacity-1" : " bg-opacity-100 opacity-0 "}`}>
                <div className="w-[600px] h-[680px] rounded-2xl bg-[#0F1825] shadow-2xl border-2 border-black/50">

                    <div className="flex pl-4 pr-4 py-4 flex justify-between items-center border-b border-gray-700">
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
                            <Input label="Type" value={type} htmlFor="type" onChange={handleTypeChange} />
                        </div>
                        <div>
                            <Input label="Link(Optional)" value={link} htmlFor="link" onChange={handleLinkChange} />
                        </div>
                        <div>
                            <Input label="Tags" htmlFor="tags" value={tags} onChange={handleTagsChange} />
                        </div>
                        <div>
                            <Input label="Content(Optional)" value={content} htmlFor="content" onChange={handleContentChange} />
                        </div>

                        <div className="flex justify-center pl-4 pr-4 py-4 border-t border-gray-700 mt-8">
                            
                            <Button variant="primary" size="lg" text="Add Content" onClick={() => {}} type="submit" />
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};
