import * as React from "react";
import { useDispatch } from "react-redux";

import ToastStatusEnum from "../../../../constants/ToastStatusEnum";
import { removeToast } from "stores/toasts/ToastSlice";

const ToastCard = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const buttonColorMap = {
    [ToastStatusEnum.Error]: "bg-danger",
    [ToastStatusEnum.Warning]: "bg-warning",
    [ToastStatusEnum.Success]: "bg-success",
    [ToastStatusEnum.Info]: "bg-info",
  };

  const onClickRemoveNotification = () => {
    dispatch(removeToast({ toastID: item.id }));
  };

  return (
    //Alert Classes --> Success = alert-success | Error = alert-danger | Info= alert-info | Warning = alert-warning
    <div className={" p-2 position-relative m-2 rounded-1 toster " + buttonColorMap[item.type]}>
      <div className="content">
        <h3 className="head fs18 fw700 text-uppercase"> {item.type} !</h3>
        <p className="description fs14">{item.message}</p>
      </div>
      <div className="tost-close position-absolute top-0 end-0 px-3 py-2">
        <em
          className="fa fa-times c-pointer"
          onClick={() => onClickRemoveNotification()}
        />
      </div>
    </div>
  );
};

export default ToastCard;
