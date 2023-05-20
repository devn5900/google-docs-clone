import { useEffect } from "react";

export const useSave = (saveData, id, data) => {
  useEffect(() => {
    const keyEvent = (e) => {
      if ((e.key === "s" || e.key === "S") && e.ctrlKey) {
        e.preventDefault();
        saveData({ id, data });
      }
    };
    document.addEventListener("keydown", keyEvent);

    return () => {
      document.removeEventListener("keydown", keyEvent);
    };
  });
};
