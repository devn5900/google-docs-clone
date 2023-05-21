import React, { useEffect, useState } from "react";
import { BiVideo, BiLockAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { FiLink2 } from "react-icons/fi";
const ShareModal = ({ show }) => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { id, name } = useSelector((store) => store.editorReducer);

  /*
    this is used to show the modal
  */
  const shareLink = (e) => {
    if (show) {
      e.target.removeAttribute("onClick");
      return;
    }
    setOpen(true);
  };
  /*
    this is used to close the modal
  */
  const closeModel = (e) => {
    if (e.target.id == "modal") {
      setOpen(false);
    }
  };
  /*
    it will copy the link in clipboard
  
  */
  const copyClipboard = (e) => {
    const url = `https://frontend-omega-ochre.vercel.app/document/${id}/view`;
    navigator.clipboard.writeText(url);
    setToggle(true);
    setTimeout(() => {
      setToggle(false);
      setOpen(false);
    }, 1500);
  };
  return (
    <div onClick={closeModel}>
      <div>
        <button
          onClick={shareLink}
          className="flex items-center bg-blue-300 gap-2 pointer px-5 py-2 rounded-full"
        >
          <BiLockAlt />
          {!show ? "Share" : "Request to edit"}
        </button>
      </div>
      {open && (
        <div className="fixed   inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-75 transition-opacity">
          <div
            id="modal"
            className="flex min-h-full justify-center p-4 text-center   items-center sm:p-0 "
          >
            <div className="bg-white p-4 rounded-md">
              <h1 className="text-lg">
                Share&nbsp;
                <q>{name}</q>
              </h1>
              <div className="flex gap-2 items-center">
                <img
                  className="rounded-full"
                  src="https://lh3.googleusercontent.com/a/AGNmyxb_eFrEa6Bf8WS2DdYwtTzS7z-H9Rd4B2UOilX_wA=s64-c"
                  alt="Devesh Kumar Mishra"
                />
                <div>
                  <h1 className="font-bold text-md">Devesh Kumar Mishra</h1>
                  <p className="text-sm">devn5900@gmail.com</p>
                </div>
              </div>
              <div className="p-3">
                <button
                  onClick={copyClipboard}
                  className="flex gap-2 items-center bg-blue-400 py-2 px-5 rounded-full text-white"
                >
                  <FiLink2 /> {toggle ? "Text copied !" : "Copy link"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareModal;
