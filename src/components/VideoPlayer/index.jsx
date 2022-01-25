import { useRef, useState } from "react";
import styles from "./styles.module.css";

const videoSRC =
  "https://v16-webapp.tiktok.com/7b4fa75e68a50e07647624fb9d4a90e5/61f07861/video/tos/useast2a/tos-useast2a-pve-0068/5a8daafb2eb746c099215a2001635600/?a=1988&br=4490&bt=2245&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33Znz7ThA6HGlXq&l=202201251622090102230780192332D885&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3I1Ojw6ZmpvOjMzNzczM0ApNDU0NThlaDxkNzw0ODk0OmdoYjBmcjRvMjZgLS1kMTZzc2MwLy1fNV8wYTJgNjEuNTA6Yw%3D%3D&vl=&vr=";

export const VideoPlayer = () => {
  const video = useRef();
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (playing) {
      video.current.pause();
    } else {
      video.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div>
      <video
        ref={video}
        className={styles.video}
        src={videoSRC}
        controls={false}
      />
      <button onClick={handlePlay} className={styles.player}></button>
    </div>
  );
};
