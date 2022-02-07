import React from "react";
import styles from "./styles.module.css";

export const AlbumDisk = ({ albumCover }) => {
  return (
    <div className={styles.album}>
      <img src={albumCover} alt="albumCover" />
    </div>
  );
};
