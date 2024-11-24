import { v4 as uuidv4 } from "uuid";
import { SongSection, SongSectionType } from "./SongSection";

export type PlatformType = "YouTube" | "Apple Music" | "Spotify";

export type SongLink = {
  link: string;
  platform: PlatformType;
};

export class Song {
  id: string;
  artist: string;
  title: string;
  links: SongLink[];
  structure: SongSection[];

  constructor(
    artist: string,
    title: string,
    links: SongLink[],
    structure: SongSection[]
  ) {
    this.id = uuidv4();
    this.artist = artist;
    this.title = title;
    this.structure = structure;
    this.links = links;
  }

  static section(
    measures: number | string[],
    name: string,
    type: SongSectionType,
    beatsPerMeasure: number = 4
  ): SongSection {
    return SongSection.new(name, type, measures, beatsPerMeasure);
  }
}
