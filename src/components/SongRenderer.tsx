import { Song } from "../SongList/Song";
import LinkTabs from "./LinkTabs";
import Section from "./Section";

type SongRendererProps = {
  song: Song;
};

export default function SongRenderer(props: SongRendererProps) {
  const { song } = props;

  return (
    <div id="song-content" className="song-content">
      <LinkTabs links={song.links} />
      <div className="song-structure-container">
        {song.structure.map((section, i) => (
          <Section section={section} key={`${section.name}-${i}`} />
        ))}
      </div>
    </div>
  );
}
