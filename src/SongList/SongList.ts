import { Song } from "./Song";
import gospelTruth from "./data/gospel-truth";
import buryMeInKy from "./data/bury-me-in-ky";
import easter from "./data/easter";
import winterOf76 from "./data/winter-of-76";
import retroFutures from "./data/retro-futures";

export default function SongList(): Song[] {
  return [gospelTruth, buryMeInKy, easter, winterOf76, retroFutures];
}
