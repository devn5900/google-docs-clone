import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as editorReducer } from "../redux/editor/reducer";
const rootReducer = combineReducers({ editorReducer });
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);
