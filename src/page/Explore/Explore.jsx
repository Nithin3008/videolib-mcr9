import Video from "../../components/Video";
import { useContext } from "react";
import { VideoContext } from "../../Reducer/VideoReducer";
const Explore = () => {
  const { VideoData, dispatch, search } = useContext(VideoContext);
  let VideoDataNew = VideoData;
  if (search.length > 0) {
    VideoDataNew = VideoData.filter((val) =>
      val.title.toLowerCase().includes(search.toLowerCase())
    );
    console.log(VideoDataNew);
  }
  return (
    <div className="">
      <input
        onChange={(event) =>
          dispatch({ type: "search", payload: event.target.value })
        }
        placeholder="search your title"
      ></input>
      <div className="flex flex-wrap">
        {VideoDataNew.map((val) => (
          <Video singleVideo={val}></Video>
        ))}
      </div>
    </div>
  );
};

export default Explore;
