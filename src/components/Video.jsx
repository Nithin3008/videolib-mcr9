import { useNavigate } from "react-router";
const Video = ({ singleVideo }) => {
  const nav = useNavigate();
  return (
    <div className="p-3 m-3 space-y-1.5 ">
      <img className="rounded" src={singleVideo.thumbnail}></img>
      <div
        className="flex gap-2 items-center cursor-pointer "
        onClick={() => nav(`/EachVideo/${singleVideo._id}`)}
      >
        <img className="rounded-full h-8 w-8" src={singleVideo.thumbnail}></img>
        <div>
          <p className="text-base font-medium w-64">{singleVideo.title}</p>
          <p className="text-base font-medium">{singleVideo.category}</p>
          <p className="text-sm font-thin">
            {singleVideo.views} | {singleVideo.creator}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
