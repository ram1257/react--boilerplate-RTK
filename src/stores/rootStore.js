import { configureStore } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import reduxFreeze from "redux-freeze";
import environment from "environment";
import rootReducer from "./rootReducer";
import errorToastMiddleware from "../middlewares/errorToastMiddleware";

const store = (initialState, history) => {
  const middleware = (getDefaultMiddleware) => {
    const customMiddleware = [routerMiddleware(history), errorToastMiddleware];

    if (environment.isDevelopment) {
      customMiddleware.push(reduxFreeze);
    }

    return [
      ...getDefaultMiddleware({
        serializableCheck: { ignoredActions: ["toast-slice/addToast"] },
      }),
      ...customMiddleware,
    ];
  };

  const store = configureStore({
    reducer: rootReducer(history),
    preloadedState: initialState,
    middleware,
    devTools: environment.isProduction ? false : true,
  });

  return store;
};

export default store;
