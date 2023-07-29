const SuggestedVideos = ({ moreVideo }) => {
  return (
    <div>
      <img className="rounded" src={moreVideo.thumbnail}></img>
      <p>{moreVideo.title}</p>
    </div>
  );
};

export default SuggestedVideos;
