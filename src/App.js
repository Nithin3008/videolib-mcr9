import { Route, Routes } from "react-router";
import "./App.css";
import Navigation from "./page/NavSection/Navigation";
import Explore from "./page/Explore/Explore";
import WatchLater from "./page/WatchLater/WatchLater";
import PlayList from "./page/PlayList/PlayListPage";
import Home from "./page/Home/Home";
import VideoPages from "./page/Video/VideoPages";
import EachVideo from "./page/Video/EachVideo";
import SinglePlaylist from "./page/PlayList/SinglePlaylist";

function App() {
  return (
    <div className="App flex gap-5">
      <div>
        <Navigation></Navigation>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Explore" element={<Explore />}></Route>
        <Route path="/WatchLater" element={<WatchLater />}></Route>
        <Route path="/PlayList" element={<PlayList />}></Route>
        <Route path="/VideoPages/:categoryId" element={<VideoPages />}></Route>
        <Route path="/EachVideo/:videoId" element={<EachVideo />}></Route>
        <Route
          path="/SinglePlaylist/:playlistName"
          element={<SinglePlaylist></SinglePlaylist>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
