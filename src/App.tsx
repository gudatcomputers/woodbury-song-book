import "./styles/App.scss";
import SongRenderer from "./components/SongRenderer";
import { useState } from "react";
import SongList from "./SongList/SongList";
import { Song } from "./SongList/Song";
function App() {
  const [song, setSong] = useState<Song | undefined>(undefined);
  const songList = SongList();

  const setSelectedSong = (id: string) => {
    const selectedSong = songList.find((s) => s.id === id);
    setSong(selectedSong);
    const songContent = document.getElementById("song-content");
    songContent?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="roboto-regular">
      <div className="app-header">
        {/* <img className="logo" src={logo} /> */}

        <select
          className="song-selector"
          onChange={(e) => {
            e.preventDefault();
            setSelectedSong(e.target.value);
          }}
        >
          <option key="no-selected-song">-</option>
          {songList.map((song) => (
            <option key={song.id} value={song.id}>
              {song.title} - {song.artist}
            </option>
          ))}
        </select>
      </div>
      <div className="spacer">&nbsp;</div>
      {song && <SongRenderer song={song} />}
    </div>
  );
}

export default App;
