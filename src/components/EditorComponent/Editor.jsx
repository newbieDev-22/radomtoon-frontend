import { useRef, useState, useCallback } from "react";
import ReactQuill, { Quill } from "react-quill";
import ResizeModule from "@botom/quill-resize-module";
import { formats, toolbarOptions } from "./config";
import mockData from "./mock-data";
import uploadToCloudinary from "./upload-cloudinary";
import "./editor-snow.css";
import "./editor-bubble.css";

// Register the resize module with Quill
Quill.register("modules/resize", ResizeModule);

export default function Editor({ isCreator }) {
  const quillRef = useRef(null);
  const [content, setContent] = useState(mockData);

  // Handle form submission
  const handleSubmit = () => {
    const getData = JSON.stringify(content);
    console.log(getData);
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
    <div className="editor">
      {isCreator && (
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      )}
      <ReactQuill
        ref={quillRef}
        theme={isCreator ? "snow" : "bubble"}
        placeholder="Start writing..."
        modules={isCreator ? modules : readOnlyModules}
        formats={formats}
        value={content}
        onChange={handleChange}
        style={{ width: "100%" }}
        readOnly={!isCreator}
      />
    </div>
  );
}
