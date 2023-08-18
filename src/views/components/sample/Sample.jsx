import ToastStatusEnum from "constants/ToastStatusEnum";
import React from "react";
import { useDispatch } from "react-redux";
import { addToast } from "stores/toasts/ToastSlice";

const Sample = ({ Samplelist }) => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(
      addToast({
        message: "This is the example to toast message",
        type: ToastStatusEnum.Success,
        dispatch: dispatch,
      })
    );
  };
  return (
    <div>
      <h2> Sample Component </h2>
      <br />
      <button onClick={() => handleButtonClick()}>Show toast Message</button>
    </div>
  );
};

export default Sample;
