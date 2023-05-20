import {
  ADD_ID,
  ADD_NAME,
  ADD_TEXT,
  GET_TEXT,
  REMOVE_DATA,
} from "./actionType";

const init = {
  id: null,
  name: "Untitled Document",
  data: [],
};
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
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
