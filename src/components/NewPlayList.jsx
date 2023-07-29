import { useContext, useState } from "react";
import { VideoContext } from "../Reducer/VideoReducer";
import ExistingPlayList from "./ExistingPlayList";
const NewPlayList = ({ show, videoId }) => {
  const [hide, setHide] = useState(false);
  const [name, PlaylistName] = useState("");
  const { dispatch } = useContext(VideoContext);
  return (
    <div>
      <div className="relative">
        <span
          onClick={() => setHide(!hide)}
          class="material-symbols-outlined cursor-pointer"
        >
          playlist_add
        </span>
        <div
          className={`absolute border-2 border-stone-700 space-y-2 p-2 bg-white ${
            hide ? "block" : "hidden"
          } `}
        >
          <p>Add New Playlist</p>
          <input
            className="p-2 text-lg border-2 border-amber-400 outline-0"
            placeholder="Playlist Name"
            onChange={(event) => PlaylistName(event.target.value)}
          ></input>
          <button
            onClick={() => {
              dispatch({ type: "createPlayList", payload: { name } });
              setHide(!hide);
            }}
            className="bg-amber-400 p-2 rounded-sm"
          >
            Create Playlist
          </button>
          <div style={{ display: show ? "block" : "none" }}>
            <ExistingPlayList data={videoId}></ExistingPlayList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlayList;
