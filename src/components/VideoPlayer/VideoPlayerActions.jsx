import React from "react";
import { Heart } from "../../../assets/icons/Heart";
import styles from "./styles.module.css";

export const VideoPlayerActions = () => {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
      </div>
      <div className={styles.action}>
        <Heart />
      </div>
      <div className={styles.action}>
        <Heart />
      </div>
    </aside>
  );
};
