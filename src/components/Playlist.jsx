import React, { useContext } from "react";
import { VideoContext } from "../Reducer/VideoReducer";
import { useNavigate } from "react-router";

const PlaylistCard = ({ play }) => {
  const { dispatch } = useContext(VideoContext);
  const nav = useNavigate();
  return (
    <div>
      <div>
        <button
          className="text-base"
          onClick={() =>
            dispatch({ type: "deletePlaylist", payload: play.name })
          }
        >
          X
        </button>
        <img src={play.img}></img>
        <p onClick={() => nav(`/SinglePlaylist/${play.name}`)}>{play.name}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
