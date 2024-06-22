import { useRef, useState, useCallback } from "react";
import ReactQuill, { Quill } from "react-quill";
import ResizeModule from "@botom/quill-resize-module";
import { formats, toolbarOptions } from "./config";
import "./editor-snow.css";
import "./editor-bubble.css";
import mockData from "./mock-data";
import uploadToCloudinary from "./upload-cloudinary";

// Register the resize module with Quill
Quill.register("modules/resize", ResizeModule);

export default function Editor() {
  const quillRef = useRef(null);
  const [disable, setDisable] = useState(false);
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
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      <ReactQuill
        ref={quillRef}
        theme={disable ? "bubble" : "snow"}
        placeholder="Start writing..."
        modules={disable ? readOnlyModules : modules}
        formats={formats}
        value={content}
        onChange={handleChange}
        style={{ width: "100%" }}
        readOnly={disable}
      />
    </div>
  );
}
