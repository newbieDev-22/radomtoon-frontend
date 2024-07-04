import { useRef, useState, useCallback } from "react";
import ReactQuill, { Quill } from "react-quill";
import ResizeModule from "@botom/quill-resize-module";
import uploadToCloudinary from "./upload-cloudinary";
import { formats, toolbarOptions } from "./config";
import Button from "../Button";
import { APPROVAL_STATUS_ID, USER_ROLE } from "../../constants";
import { useStore } from "../../store/useStore";
import { useParams } from "react-router-dom";
import "./editor-snow.css";
import "./editor-bubble.css";
import Spinner from "../Spinner";
import { toast } from "react-toastify";

// Register the resize module with Quill
Quill.register("modules/resize", ResizeModule);

export default function Editor() {
  const quillRef = useRef(null);
  const role = useStore((state) => state.authUser.role);
  const authUser = useStore((state) => state.authUser.user);
  const { productId } = useParams();
  const filterProductByProductId = useStore((state) => state.filterProductByProductId);
  const filterData = filterProductByProductId(+productId);
  const [content, setContent] = useState(JSON.parse(filterData?.story || "{}"));
  const productLoading = useStore((state) => state.productLoading);
  const updateStory = useStore((state) => state.updateStory);

  const isCreator = role === USER_ROLE.CREATOR && authUser.id === filterData?.creatorId;
  const isApproved = filterData?.approvalStatusId === APPROVAL_STATUS_ID.SUCCESS;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const updateStoryData = { story: JSON.stringify(content) };
      console.log(updateStoryData);
      await updateStory(+productId, updateStoryData);
      toast.success("Story updated successfully");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // Handle image upload
  const handleImage = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.onchange = async () => {
      if (input?.files[0]) {
        const file = input.files[0];
        const url = await uploadToCloudinary(file);
        const quill = quillRef.current;
        if (quill) {
          const range = quill.getEditor().getSelection();
          if (range) {
            quill.getEditor().insertEmbed(range.index, "image", url);
          }
        }
      }
    };
  }, []);

  // Define Quill modules
  const modules = {
    toolbar: {
      container: toolbarOptions,
      handlers: {
        image: handleImage,
      },
    },
    clipboard: {
      matchVisual: false,
    },
    resize: {
      showToolbar: false,
    },
  };

  // Define read-only modules for Quill
  const readOnlyModules = {
    toolbar: {
      container: toolbarOptions,
      handlers: {
        image: handleImage,
      },
    },
    clipboard: {
      matchVisual: false,
    },
  };

  // Handle content change
  const handleChange = (content, delta, source, editor) => {
    setContent(editor.getContents());
  };

  return (
    <>
      {productLoading && <Spinner transparent />}

      <div className="editor">
        {isCreator && !isApproved && (
          <div className="py-2 flex justify-end">
            <Button type="button" onClick={handleSubmit}>
              Save
            </Button>
          </div>
        )}
        <ReactQuill
          ref={quillRef}
          theme={isCreator && !isApproved ? "snow" : "bubble"}
          placeholder="Start writing..."
          modules={isCreator && !isApproved ? modules : readOnlyModules}
          formats={formats}
          value={content}
          onChange={handleChange}
          style={{ width: "100%" }}
          readOnly={!isCreator}
        />
      </div>
    </>
  );
}
