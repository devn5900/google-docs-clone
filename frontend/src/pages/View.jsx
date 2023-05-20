import React, { useCallback, useEffect, useState } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTextAPI } from "../redux/editor/action";
const View = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.editorReducer);
  const [editor, setEditor] = useState(null);
  const editorFun = useCallback((editorBox) => {
    if (!editorBox) return;
    editorBox.innerHTML = "";
    const shield = document.createElement("div");
    editorBox.append(shield);
    const edit = new Quill(shield, {
      theme: "snow",
    });
    setEditor(edit);
    edit.disable();
  }, []);
  useEffect(() => {
    dispatch(getTextAPI(id))
      .then((res) => {
        if (editor) {
          res?.data?.data?.content?.forEach((el) => {
            editor.setContents(el);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [editor]);
  return <div className="editor " ref={editorFun}></div>;
};

export default View;
