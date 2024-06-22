import Editor from "./components/EditorComponent/Editor";

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn btn-neutral">Button</button>
      <div className="px-4">
        <Editor />
      </div>
    </>
  );
}
