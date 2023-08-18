import React from "react";
import ToastCard from "../toast-card/ToastCard";
import { useSelector } from "react-redux";
import { toastItems } from "stores/toasts/ToastSlice";
import styles from "./Toasts.module.scss";

const Toasts = ()=>{

 const toasts = useSelector(toastItems)

    if (toasts.length === 0) {
      return null;
    }

    return (
      <div className={styles.tostwrapper}>
        {toasts.map(model => (
          <ToastCard key={model.id} item={model} />
        ))}
      </div>
    );
  
}

export default Toasts
