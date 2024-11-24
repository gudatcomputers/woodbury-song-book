import { Song } from "../Song";

export default new Song(
  "Woodbury Boys",
  "Retro Futures",
  [],
  [
    Song.section(8, "intro (drums 4, drums + bass 4)", "intro"),
    Song.section(8, "verse", "verse"),
    Song.section(8, "verse", "verse"),
    Song.section(
      1,
      "shouldn't there beeeeee (2.5 beat band drop)",
      "pre-chorus"
    ),
    Song.section(16, "chorus", "chorus"),
    Song.section(8, "verse", "verse"),
    Song.section(8, "verse", "verse"),
    Song.section(
      1,
      "shouldn't there beeeeee (2.5 beat band drop)",
      "pre-chorus"
    ),
    Song.section(16, "chorus", "chorus"),
    Song.section(8, "bridge", "bridge"),
    Song.section(
      1,
      "shouldn't there beeeeee (2.5 beat band drop)",
      "pre-chorus"
    ),
    Song.section(16, "chorus", "chorus"),
  ]
);
