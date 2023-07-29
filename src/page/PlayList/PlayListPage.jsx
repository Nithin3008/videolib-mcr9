import { useContext, useState } from "react";
import { VideoContext } from "../../Reducer/VideoReducer";
import NewPlayList from "../../components/NewPlayList";
import PlaylistCard from "../../components/Playlist";

const PlayList = () => {
  const { dispatch, Playlist } = useContext(VideoContext);
  const [hide, setHide] = useState(false);
  console.log(Playlist);
  return (
    <div>
      <div className="flex gap-3 items-center">
        {Playlist.map((val) => (
          <PlaylistCard play={val}></PlaylistCard>
        ))}
        <NewPlayList></NewPlayList>
      </div>
    </div>
  );
};

export default PlayList;
