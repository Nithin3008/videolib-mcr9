import Video from "../../components/Video";
import { useContext } from "react";
import { VideoContext } from "../../Reducer/VideoReducer";
const Explore = () => {
  const { VideoData } = useContext(VideoContext);

  return (
    <div className="">
      <div className="flex flex-wrap">
        {VideoData.map((val) => (
          <Video singleVideo={val}></Video>
        ))}
      </div>
    </div>
  );
};

export default Explore;
