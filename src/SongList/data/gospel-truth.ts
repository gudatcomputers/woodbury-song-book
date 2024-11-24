import { Song } from "../Song";

export default new Song(
  "Woodbury Boys",
  "Gospel Truth",
  [],
  [
    Song.section(["C", "G", "C", "G"], "intro", "intro", 6),
    Song.section(8, "verse", "verse"),
    Song.section(8, "verse", "verse"),
    Song.section(8, "pre-chorus", "pre-chorus"),
    Song.section(12, "chorus", "chorus"),
    Song.section(4, "post-chorus (how to make interesting?)", "post-chorus", 6),
    Song.section(8, "verse", "verse"),
    Song.section(8, "verse", "verse"),
    Song.section(8, "pre-chorus", "pre-chorus"),
    Song.section(12, "chorus", "chorus"),
    Song.section(4, "outro", "outro"),
  ]
);
