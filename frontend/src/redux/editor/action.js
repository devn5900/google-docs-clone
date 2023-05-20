import { ADD_ID, ADD_NAME, ADD_TEXT, GET_TEXT } from "./actionType";
import axios from "axios";
export const addText = (payload) => {
  return { type: ADD_TEXT, payload };
};
export const addId = (payload) => {
  return { type: ADD_ID, payload };
};
export const getText = (data, name) => {
  return { type: GET_TEXT, payload: { name, data } };
};

export const addName = (payload) => {
  return { type: ADD_NAME, payload };
};

export const saveData = async (data) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/document/add",
      data
    );
  } catch (error) {
    console.log(error);
  }
};

export const getTextAPI = (id) => async (dispatch) => {
  try {
    const res = await axios(`http://localhost:8080/api/document/${id}/view`);

    dispatch(getText(res.data.data.content, res.data.data.name));
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateName = (id, data) => async (dispatch) => {
  try {
    const res = await axios.patch(
      `http://localhost:8080/api/document/${id}/name`,
      data
    );
    console.log(res);
    dispatch(addName(data.name));
  } catch (error) {
    console.log(error);
  }
};
