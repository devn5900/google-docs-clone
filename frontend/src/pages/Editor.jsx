import React, { useCallback } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import { useEffect, useRef, useState } from "react";
import { toolbarOptions } from "../utills/editor.config";
import { useDispatch, useSelector } from "react-redux";
import {
  addId,
  addText,
  getReq,
  getTextAPI,
  saveData,
} from "../redux/editor/action";
import { useParams } from "react-router-dom";
import { useSave } from "../hooks/useSave";

const Editor = () => {
  const dispatch = useDispatch();
  const { data, id, name } = useSelector((store) => store.editorReducer);
  const param = useParams();
  const [editor, setEditor] = useState(null);
  const [content, setContent] = useState([]);
  /* 
  this function has reference of editor and appending the quill text editor into.
  and setting up the content which may available later.
  */
  const editorFun = useCallback((editorBox) => {
    if (!editorBox) return;
    editorBox.innerHTML = "";
    const shield = document.createElement("div");
    editorBox.append(shield);
    const edit = new Quill(shield, {
      theme: "snow",
      modules: { toolbar: toolbarOptions },
    });
    // edit
    if (data.length > 0) {
      data.forEach((el) => {
        edit.setContents(el);
      });
    }
    setEditor(edit);
    dispatch(addId(param.id));
  }, []);
  /*
    this function run everytime when you will type on editor. 
    and setting up typed text into state
  */
  if (editor) {
    editor.on("text-change", (d, oldData, source) => {
      setContent(editor.getContents().ops);
    });
  }
  /*
   this useEffect will called when content state will be changed.
   it will dispatch updated content of the state to the redux-store.
    when the component get unmounted it will clear the text-change event of editor.
   */
  useEffect(() => {
    if (content.length !== 0) {
      dispatch(addText(content));
    }
    return () => {
      if (editor) {
        editor.off("text-change", (d, oldData, source) => {
          setContent(editor.getContents().ops);
        });
      }
    };
  }, [content]);
  /*
    this is a custom hook which is making a post request to the server to save the editor content.
    it will run the saveData function when you press ctrl+s.
  */
  useSave(saveData, id, data);
  /*
  this useEffect is used to fetch the data from the server that may already present.
  and setting up the response into editor
  */
  useEffect(() => {
    dispatch(getTextAPI(param.id)).then((res) => {
      if (editor) {
        res?.data?.data?.content.forEach((el) => {
          editor.setContents(el);
        });
      }
    });
  }, [editor]);
  return <div className="editor " ref={editorFun}></div>;
};

export default Editor;
