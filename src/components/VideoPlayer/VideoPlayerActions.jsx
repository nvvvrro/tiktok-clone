import React from "react";
import { Heart, Share, Comment } from "../../../assets/icons";
import styles from "./styles.module.css";

export const VideoPlayerActions = ({
  likes = 12,
  comments = 22,
  shares = 31,
  hearted = false,
}) => {
  const handleLike = () => {
    window.alert("You liked this video");
  };

  const handleComment = () => {
    window.alert("You commented this video");
  };

  const handleShare = () => {
    window.alert("You shared this video");
  };

  return (
    <aside className={styles.actions}>
      <button className={styles.action} onClick={handleLike}>
        <Heart witdh={45} />
        <span title="Likes">{likes}</span>
      </button>

      <button className={styles.action} onClick={handleComment}>
        <Comment witdh={45} />
        <span title="comments">{comments}</span>
      </button>

      <button className={styles.action} onClick={handleShare}>
        <Share witdh={45} />
        <span title="shares">{shares}</span>
      </button>
    </aside>
  );
};
