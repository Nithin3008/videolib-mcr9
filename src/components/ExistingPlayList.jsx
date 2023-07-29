import { useContext } from "react";
import { VideoContext } from "../Reducer/VideoReducer";

const ExistingPlayList = ({ data }) => {
  const { Playlist, dispatch } = useContext(VideoContext);
  console.log(Playlist);
  return (
    <div>
      <ul>
        {Playlist.map((val) => (
          <li className="flex justify-around">
            <span
              className="cursor-pointer"
              onClick={() =>
                dispatch({ type: "videoToPlaylist", payload: [data, val.name] })
              }
            >
              {val.name}
            </span>{" "}
            <button
              onClick={() =>
                dispatch({ type: "deletePlaylist", payload: val.name })
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExistingPlayList;
