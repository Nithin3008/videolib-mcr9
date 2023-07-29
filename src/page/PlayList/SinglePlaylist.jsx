import { useContext } from "react";
import { useParams } from "react-router";
import { VideoContext } from "../../Reducer/VideoReducer";
import Video from "../../components/Video";

const SinglePlaylist = () => {
  const { playlistName } = useParams();
  const { Playlist, dispatch } = useContext(VideoContext);
  const playlistData = Playlist.find((val) => val.name === playlistName);
  return (
    <div>
      <h1 className="text-2xl">Playlist:{playlistData.name}</h1>
      <div>
        {playlistData.playListVideos.map((val, index) => (
          <>
            <button
              onClick={() =>
                dispatch({
                  type: "RemoveFromPlaylist",
                  payload: [playlistData.name, index],
                })
              }
            >
              X
            </button>
            <Video singleVideo={val}></Video>
          </>
        ))}
      </div>
    </div>
  );
};

export default SinglePlaylist;
