import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import ToastSlice from "./toasts/ToastSlice";

const rootReducer = (history) => {
  const reducerMap = {
    router: connectRouter(history),
    toastSlice: ToastSlice,
  };

  return combineReducers(reducerMap);
};

export default rootReducer;
