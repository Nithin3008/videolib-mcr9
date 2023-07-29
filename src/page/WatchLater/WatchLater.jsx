import { useContext } from "react";
import { VideoContext } from "../../Reducer/VideoReducer";
import Video from "../../components/Video";
const WatchLater = () => {
  const { WatchLater } = useContext(VideoContext);
  const watchData = [...WatchLater];
  console.log(watchData);
  return (
    <div>
      <div className="flex flex-wrap">
        {watchData.map((val) => (
          <Video singleVideo={val}></Video>
        ))}
      </div>
    </div>
  );
};

export default WatchLater;
