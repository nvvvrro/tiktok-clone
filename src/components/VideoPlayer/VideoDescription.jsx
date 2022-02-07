import React from "react";
import { AlbumDisk } from "./AlbumDisk";
import styles from "./styles.module.css";

export const VideoDescription = ({ author, description, albumCover }) => {
  return (
    <footer className={styles.description}>
      <strong>
        <a href={`/user/${author}`}>@{author}</a>
      </strong>
      <p>{description}</p>
      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>
    </footer>
  );
};
