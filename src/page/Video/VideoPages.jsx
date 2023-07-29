import { useParams } from "react-router";
import Video from "../../components/Video";
import { useContext } from "react";
import { VideoContext } from "../../Reducer/VideoReducer";
const VideoPages = () => {
  const { categoryId } = useParams();
  const { VideoData } = useContext(VideoContext);
  const videoData = VideoData.filter((val) => val.category === categoryId);
  console.log(videoData);
  return (
    <div>
      <h1 className="text-3xl m-2 p-2">{categoryId}</h1>
      <div className="flex flex-wrap">
        {videoData.map((val) => (
          <Video singleVideo={val}></Video>
        ))}
      </div>
    </div>
  );
};

export default VideoPages;
