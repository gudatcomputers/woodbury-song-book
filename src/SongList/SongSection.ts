export type SongSectionType =
  | "intro"
  | "pre-verse"
  | "verse"
  | "chorus"
  | "pre-chorus"
  | "post-chorus"
  | "bridge"
  | "outro"
  | "other"
  | "solo";

export class SongSection {
  name: string;
  beatsPerMeasure: number;
  measures: string[];
  type: SongSectionType;

  private constructor(
    name: string,
    type: SongSectionType,
    measures: number | string[],
    beatsPerMeasure: number
  ) {
    this.name = name;
    this.type = type;
    if (typeof measures === "number") {
      this.measures = Array.from({ length: measures }, () => "");
    } else {
      this.measures = measures;
    }

    this.beatsPerMeasure = beatsPerMeasure;
  }

  static new(
    name: string,
    type: SongSectionType,
    measures: number | string[],
    beatsPerMeasure: number
  ): SongSection {
    return new SongSection(name, type, measures, beatsPerMeasure);
  }
}
