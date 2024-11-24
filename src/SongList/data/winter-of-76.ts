import { Song } from "../Song";

export default new Song(
  "Woodbury Boys",
  "Winter of 76",
  [],
  [
    Song.section(4, "intro", "intro", 6),
    Song.section(8, "verse", "verse"),
    Song.section(4, "interlude", "other"),
    Song.section(8, "verse", "verse"),
    Song.section(4, "interlude", "other"),
    Song.section(8, "verse", "verse"),
    Song.section(4, "interlude", "other"),
    Song.section(16, "chorus", "chorus"),
    Song.section(8, "bridge", "bridge"),
    Song.section(4, "outro", "outro"),
  ]
);
