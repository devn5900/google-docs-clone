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
  if (editor) {
    editor.on("text-change", (d, oldData, source) => {
      setContent(editor.getContents().ops);
    });
  }
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
  useSave(saveData, id, data);
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
