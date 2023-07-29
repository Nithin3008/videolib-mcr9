import { useParams } from "react-router";
import SuggestedVideos from "../../components/SuggestedVideos";
import { useContext, useState } from "react";
import { VideoContext } from "../../Reducer/VideoReducer";
import { type } from "@testing-library/user-event/dist/type";
import NewPlayList from "../../components/NewPlayList";
import ExistingPlayList from "../../components/ExistingPlayList";
import Comment from "../../components/Comment";
const EachVideo = () => {
  const { VideoData, dispatch } = useContext(VideoContext);
  const { videoId } = useParams();
  const videoData = VideoData.find((val) => val._id == videoId);
  const suggestVideo = VideoData.filter((val) => val._id != videoId);
  // const [hide, setHide] = useState(false);
  console.log(videoData);
  return (
    <div className="grow flex">
      <div className="flex flex-col items-center w-[700px] h-[450px] m-auto mt-3 gap-3">
        <iframe className="w-full h-full" src={videoData.src}></iframe>
        <div className="flex justify-between items-center w-full ">
          <div className="flex items-center gap-2">
            <img
              className="rounded-full h-8 w-8"
              src={videoData.thumbnail}
            ></img>
            <p className="text-lg">{videoData.title}</p>
          </div>
          <div className="space-x-2 flex">
            <span
              onClick={() =>
                dispatch({ type: "addToWatchlater", payload: { ...videoData } })
              }
              class="material-symbols-outlined cursor-pointer"
            >
              pace
            </span>
            <div>
              <NewPlayList show={true} videoId={videoData._id}></NewPlayList>
            </div>
            <div>
              <Comment videoId={videoData._id}></Comment>
            </div>
          </div>
        </div>
        <hr></hr>
        <div>
          <h1 className="text-xl">Notes:</h1>
          {videoData.notes.map((val, index) => (
            <p>
              {val}{" "}
              <button
                onClick={() =>
                  dispatch({
                    type: "deleteNotes",
                    payload: [videoData._id, index],
                  })
                }
              >
                X
              </button>
            </p>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl">More Videos</h1>
        <div>
          {suggestVideo.map((val) => (
            <SuggestedVideos moreVideo={val}></SuggestedVideos>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EachVideo;
