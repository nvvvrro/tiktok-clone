import { useState } from "react";
import "./App.css";
import { VideoPlayer } from "./components/VideoPlayer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main>
        Tik Tok
        <VideoPlayer />
      </main>
    </div>
  );
}

export default App;
