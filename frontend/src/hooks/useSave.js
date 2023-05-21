import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useSave = (saveData, id, data) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const keyEvent = (e) => {
      if ((e.key === "s" || e.key === "S") && e.ctrlKey) {
        e.preventDefault();
        dispatch(saveData({ id, data }));
      }
    };
    document.addEventListener("keydown", keyEvent);

    return () => {
      document.removeEventListener("keydown", keyEvent);
    };
  });
};
