import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { IoDocumentTextSharp } from "react-icons/io5";
import { BiVideo, BiLockAlt } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import ShareModal from "./ShareModal";
import { updateName } from "../redux/editor/action";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    id,
    name: storeName,
    msg,
  } = useSelector((store) => store.editorReducer);
  const [name, setName] = useState("");
  const [show, setShow] = useState(true);
  /*
   It is used to change the name of the document or to remove the event from the input tag when it will on view mode.
  */
  const isEnable = (e) => {
    if (show) {
      e.target.removeAttribute("onChange");
      e.target.removeAttribute("onMouseOver");
      e.target.removeAttribute("onMouseOut");
      return;
    }
    if (e.target.disabled) {
      e.target.removeAttribute("disabled");
      e.target.focus();
    } else {
      e.target.setAttribute("disabled", "true");
      if (name && name !== storeName) {
        dispatch(updateName(id, { name }));
      }
    }
  };
  /*
  when the navbar is in view mode it will update the show state, true
  by default it is true
  */
  useEffect(() => {
    setName(storeName);
    if (location.pathname.includes("view")) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [storeName]);
  return (
    <div className="py-2 px-3 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <div className="text-blue-500 text-4xl">
          <IoDocumentTextSharp />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <input
              className="text-xl w-32"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled
              onMouseOver={isEnable}
              onMouseOut={isEnable}
            />
            <div>
              <AiOutlineStar />
            </div>
            <div>{msg}</div>
          </div>
          <div>
            <ul className="flex items-center gap-3 pointer">
              <li>File</li>
              <li>Edit</li>
              <li>View</li>
              <li>Insert</li>
              <li>Format</li>
              <li>Tools</li>
              <li>Extension</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-7 ">
        <div className="text-2xl">
          <BiMessageDetail />
        </div>
        <div>
          <div className="flex items-center gap-1 ">
            <div className="text-2xl">
              <BiVideo />
            </div>
            <IoMdArrowDropdown />
          </div>
        </div>
        <ShareModal show={show} />
        <div>
          <img
            className="rounded-full"
            src="https://lh3.googleusercontent.com/ogw/AOLn63GhEUlIaGo13tUkBiaVlKmnLVpX6ja_m6FCl-C9DQ=s32-c-mo"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
