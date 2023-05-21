import {
  ADD_ID,
  ADD_NAME,
  ADD_TEXT,
  GET_REQ,
  GET_SUCC,
  GET_TEXT,
  REMOVE_DATA,
} from "./actionType";

const init = {
  id: null,
  name: "Untitled Document",
  data: [],
  msg: "",
};
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_REQ:
      return { ...state, msg: payload };
    case GET_SUCC:
      return { ...state, msg: payload };
    case ADD_TEXT:
      return { ...state, data: [...state.data, payload] };
    case ADD_ID:
      return { ...state, id: payload };
    case REMOVE_DATA:
      return init;
    case GET_TEXT:
      return { ...state, data: payload.data, name: payload.name };
    case ADD_NAME:
      return { ...state, name: payload };
    default:
      return state;
  }
};
