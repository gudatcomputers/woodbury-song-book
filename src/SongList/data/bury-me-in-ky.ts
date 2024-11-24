import { Song } from "../Song";

export default new Song(
  "Woodbury Boys",
  "Bury Me In Kentucky",
  [],
  [
    Song.section(5, "intro", "intro"),
    Song.section(8, "pre-verse", "pre-verse"),
    Song.section(12, "verse", "verse"),
    Song.section(12, "verse", "verse"),
    Song.section(16, "chorus", "chorus"),
    Song.section(5, "interlude", "other"),
    Song.section(12, "verse", "verse"),
    Song.section(12, "verse", "verse"),
    Song.section(16, "chorus (solo)", "solo"),
    Song.section(16, "chorus", "chorus"),
    Song.section(1, "outro (finish)", "outro"),
  ]
);
