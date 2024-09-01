import  { useState } from "react";
import { initialText } from "./InitialText.js";

const editorContent = localStorage.getItem('editor.content') ?? initialText;

const useText = (initialValue = editorContent) => {
  const [state, setState] = useState(initialValue);
  return [state, setState];
};
export default useText;
