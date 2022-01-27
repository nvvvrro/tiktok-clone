import { useRef, useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { VideoPlayerActions } from "./VideoPlayerActions";

export const VideoPlayer = ({ src }) => {
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
    </div>
  );
};
