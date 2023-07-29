import { NavLink } from "react-router-dom";
import watchlater from "./watchlater.png";
const Navigation = () => {
  return (
    <section className="h-screen sticky top-0 bottom-0 shrink-0">
      <section className="flex flex-col gap-7 ml-2 p-5 text-xl mt-auto sticky top-1/4">
        <NavLink to="/" className="flex items-center gap-1">
          <span class="material-symbols-outlined">home</span>Home
        </NavLink>
        <NavLink to="/Explore" className="flex items-center gap-1">
          <span class="material-symbols-outlined">explore</span>Explore
        </NavLink>
        <NavLink to="/WatchLater" className="flex items-center gap-1">
          <img src={watchlater} className="h-5"></img>Watch Later
        </NavLink>
        <NavLink to="/PlayList" className="flex items-center gap-1">
          <span class="material-symbols-outlined">playlist_add</span>Playlists
        </NavLink>
      </section>
    </section>
  );
};

export default Navigation;
