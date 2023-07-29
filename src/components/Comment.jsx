import { useContext, useState } from "react";
import { VideoContext } from "../Reducer/VideoReducer";

const Comment = ({ videoId }) => {
  const { dispatch } = useContext(VideoContext);
  const [notes, setNotes] = useState("");
  const [hide, setHide] = useState(false);
  return (
    <div className="relative">
      <span onClick={() => setHide(!hide)} class="material-symbols-outlined">
        edit_note
      </span>
      <div>
        <div
          style={{ display: hide ? "block" : "none" }}
          className="border-2 border-stone-800 bg-white p-2 absolute"
        >
          <textarea
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Enter Your Notes"
            style={{
              resize: "none",
              outline: "none",
              border: "1px solid orange",
            }}
            className="p-2"
          ></textarea>
          <button
            onClick={() => {
              dispatch({ type: "addNotesToVideo", payload: [videoId, notes] });
              setHide(!hide);
            }}
            className="text-md bg-amber-400 p-2"
          >
            Add Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
