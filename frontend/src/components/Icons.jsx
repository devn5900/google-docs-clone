import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Icons = () => {
  return (
    <div className="p-5 flex flex-col gap-10">
      <a
        className="hover:bg-gray-200 p-2 rounded-full"
        href="https://calendar.google.com/calendar/u/0/r"
      >
        <img
          className="w-6"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
          alt="Calender"
        />
      </a>
      <a
        className="hover:bg-gray-200 p-2 rounded-full"
        href="https://keep.google.com/"
      >
        <img
          className="w-5"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Google_Keep_icon_%282020%29.svg"
          alt="Keep"
        />
      </a>
      <a
        href="https://developers.google.com/tasks"
        className="hover:bg-gray-200 p-2 rounded-full"
      >
        <img
          className="w-6"
          src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Tasks_2021.svg"
          alt="Tasks"
        />
      </a>
      <a
        className="hover:bg-gray-200 p-2 rounded-full"
        href="https://contacts.google.com/"
      >
        <img
          className="w-6"
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Google_Contacts_icon.svg"
          alt="Contact"
        />
      </a>
      <a
        className="hover:bg-gray-200 p-2 rounded-full"
        href="https://maps.google.com/"
      >
        <img
          className="w-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/627px-Google_Maps_icon_%282020%29.svg.png"
          alt="Map"
        />
      </a>
      <div className="text-lg">
        <AiOutlinePlus />
      </div>
    </div>
  );
};

export default Icons;
