import { createContext, useReducer } from "react";
import { videos } from "../page/Data/VideoData";
import { act } from "react-dom/test-utils";
export const VideoContext = createContext();
export function VideoProvider({ children }) {
  const initialState = {
    playlist: [],
    watchlater: [],
    video: [...videos],
    search: "",
  };
  const [state, dispatch] = useReducer(ReduceFunc, initialState);
  function ReduceFunc(state, action) {
    if (action.type === "addToWatchlater") {
      return { ...state, watchlater: [...state.watchlater, action.payload] };
    } else if (action.type === "createPlayList") {
      console.log(action.payload);
      return {
        ...state,
        playlist: [
          ...state.playlist,
          {
            img: "https://i.ytimg.com/vi/HouoBQcr3zU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNFI1TM_2gcAVp49ZA14dHh-cC2g",
            name: action.payload.name,
            playListVideos: [],
          },
        ],
      };
    } else if (action.type === "deletePlaylist") {
      // console.log(action.payload)
      const x = state.playlist.filter((val) => val.name !== action.payload);

      return { ...state, playlist: [...x] };
    } else if (action.type === "videoToPlaylist") {
      const newVideo = state.video.find((val) => val._id === action.payload[0]);
      const x = state.playlist.map((val) => {
        if (val.name === action.payload[1]) {
          val.playListVideos.push(newVideo);
          return { ...val };
        } else {
          return { ...val };
        }
      });
      return { ...state, playlist: x };
    } else if (action.type === "addNotesToVideo") {
      const x = state.video.map((val) => {
        if (val._id === action.payload[0]) {
          val.notes.push(action.payload[1]);
          return { ...val };
        } else {
          return { ...val };
        }
      });
      return { ...state, video: x };
    } else if (action.type === "deleteNotes") {
      const x = state.video.map((val) => {
        if (val._id === action.payload[0]) {
          val.notes = val.notes.filter(
            (val, index) => index !== action.payload[1]
          );
          return { ...val };
        } else {
          return { ...val };
        }
      });
      return { ...state, video: x };
    } else if (action.type === "RemoveFromPlaylist") {
      const x = state.playlist.map((val) => {
        if (val.name === action.payload[0]) {
          val.playListVideos = val.playListVideos.filter(
            (val, index) => index !== action.payload[1]
          );
          return { ...val };
        } else {
          return { ...val };
        }
      });
      return { ...state, playlist: x };
    } else if ((action.type = "search")) {
      return { ...state, search: action.payload };
    }
    localStorage.setItem("data", JSON.stringify(state));
    return state;
  }
  return (
    <VideoContext.Provider
      value={{
        dispatch,
        VideoData: state.video,
        Playlist: state.playlist,
        WatchLater: state.watchlater,
        search: state.search,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}
