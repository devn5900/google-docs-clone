import { ADD_ID, ADD_NAME, ADD_TEXT, GET_REQ, GET_TEXT } from "./actionType";
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

export const getReq = (payload) => {
  return { type: GET_REQ, payload };
};
export const saveData = (data) => async (dispatch) => {
  dispatch(getReq("saving..."));

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/document/add`,
      data
    );
    dispatch(getReq("doc saved"));
  } catch (error) {
    dispatch(getReq("error please refresh"));

    console.log(error);
  }
};

export const getTextAPI = (id) => async (dispatch) => {
  dispatch(getReq("loading..."));
  try {
    const res = await axios(
      `${process.env.REACT_APP_API_URL}/api/document/${id}/view`
    );

    dispatch(getText(res.data.data.content, res.data.data.name));
    dispatch(getReq("success"));

    return res;
  } catch (error) {
    dispatch(getReq(""));
    console.log(error);
  }
};

export const updateName = (id, data) => async (dispatch) => {
  dispatch(getReq("saving..."));

  try {
    const res = await axios.patch(
      `${process.env.REACT_APP_API_URL}/api/document/${id}/name`,
      data
    );
    console.log(res);
    dispatch(addName(data.name));
    dispatch(getReq("saved"));
  } catch (error) {
    console.log(error);
    dispatch(getReq("error please refresh"));
  }
};
