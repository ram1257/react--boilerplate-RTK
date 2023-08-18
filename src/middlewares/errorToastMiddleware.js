import { addToast } from "stores/toasts/ToastSlice";
import ToastStatusEnum from "../constants/ToastStatusEnum";

const errorToastMiddleware =  (storeAPI) => (next) => (action) => {
  if (action.error && action?.payload?.message) {
    const errorAction = action;
    storeAPI.dispatch(
      addToast({
        message: errorAction.payload.message,
        status: ToastStatusEnum.Error,
      })
    );
  }

  return next(action);
};

export default errorToastMiddleware;
