import { useRef, useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { VideoPlayerActions } from "./VideoPlayerActions";
import { VideoDescription } from "./VideoDescription";

export const VideoPlayer = ({ src, author, description, albumCover }) => {
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const { current: videoElement } = video;
    playing ? videoElement.pause() : videoElement.play();

    setPlaying(!playing);
  };

  const playerCn = clsx(styles.player, {
    [styles.hidden]: playing,
  });

  return (
    <div>
      <video
        loop
        ref={video}
        className={styles.video}
        src={src}
        controls={false}
        onClick={handlePlay}
      />
      <i className={playerCn} onClick={handlePlay} />
      <VideoPlayerActions />
      <VideoDescription
        albumCover={albumCover}
        autho={author}
        description={description}
      />
    </div>
  );
};
