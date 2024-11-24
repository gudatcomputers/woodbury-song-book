import { Song } from "../Song";

export default new Song(
  "Woodbury Boys",
  "Easter",
  [],
  [
    Song.section(8, "intro", "intro"),
    Song.section(8, "verse", "verse"),
    Song.section(8, "verse", "verse"),
    Song.section(16, "chorus", "chorus"),
    Song.section(4, "interlude (drum trail off)", "other"),
    Song.section(8, "verse", "verse"),
    Song.section(8, "verse", "verse"),
    Song.section(16, "chorus", "chorus"),
  ]
);
