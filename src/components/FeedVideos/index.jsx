import { VideoPlayer } from "../VideoPlayer";
import styles from "./styles.module.css";

const VideoSrc = [
  {
    id: 1,
    author: "chismesitodelbuen0",
    description: "😂 #amaraignacia #perkin #pegashow #parati #foryou",
    likes: 22,
    shares: 33,
    commets: 333,
    songTitle: "hsonido original - Juanito Pere!!!👽🛸",
    albumCover:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ca42ca762fbc730a91707834ff806abd~c5_720x720.jpeg?x-expires=1643212800&x-signature=gXOnwA9hJEPhz1RYBfQmA9vqRDE%3D",
    src: "https://v16-webapp.tiktok.com/7b4fa75e68a50e07647624fb9d4a90e5/61f07861/video/tos/useast2a/tos-useast2a-pve-0068/5a8daafb2eb746c099215a2001635600/?a=1988&br=4490&bt=2245&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33Znz7ThA6HGlXq&l=202201251622090102230780192332D885&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3I1Ojw6ZmpvOjMzNzczM0ApNDU0NThlaDxkNzw0ODk0OmdoYjBmcjRvMjZgLS1kMTZzc2MwLy1fNV8wYTJgNjEuNTA6Yw%3D%3D&vl=&vr=",
  },
  {
    id: 2,
    author: "chismesitodelbuen0",
    description: "😂 #amaraignacia #perkin #pegashow #parati #foryou",
    likes: 32,
    shares: 23,
    commets: 333,
    songTitle: "hsonido original - Juanito Pere!!!👽🛸",
    albumCover:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ca42ca762fbc730a91707834ff806abd~c5_720x720.jpeg?x-expires=1643212800&x-signature=gXOnwA9hJEPhz1RYBfQmA9vqRDE%3D",
    src: "https://v16-webapp.tiktok.com/7ed7d56367e7c3d95c44b4e168249f92/61f07c81/video/tos/useast2a/tos-useast2a-ve-0068c002/d634602606354501a44551dd7761973f/?a=1988&br=3394&bt=1697&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33Znz7ThXfHGlXq&l=202201251640560102230711611A35C27E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzx1NWU6Zjg4OTMzNzczM0ApNjpkNWRmZWU4Nzk0Zjk6Z2deZHMwcjQwazNgLS1kMTZzczJjMjBiNF5eMjY0LS1jYjM6Yw%3D%3D&vl=&vr=",
  },
];

export const FeedVideos = () => {
  return VideoSrc.map((video) => (
    <div className={styles.item}>
      <VideoPlayer key={video.id} {...video} />
    </div>
  ));
};
