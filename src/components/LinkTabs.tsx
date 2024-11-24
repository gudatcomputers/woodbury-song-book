import { useState } from "react";
import { PlatformType, SongLink } from "../SongList/Song";

type LinkTabsProps = {
  links: SongLink[];
};

export default function LinkTabs(props: LinkTabsProps) {
  const { links } = props;
  const [platform, setPlatform] = useState<PlatformType>(
    links.length ? links[0].platform : "YouTube"
  );

  if (!links.length) {
    return <></>;
  }
  if (!links.map((l) => l.platform).includes(platform)) {
    setPlatform(links[0].platform);
  }
  return (
    <div className="song-link-container">
      <div className="song-platform-select-container">
        {links.map((link) => (
          <div
            key={`platform-${link.platform}`}
            className={`song-link ${platform === link.platform ? "song-link-selected" : ""}`}
            onClick={() => setPlatform(link.platform)}
          >
            {link.platform}
          </div>
        ))}{" "}
      </div>
      {links
        .filter((l) => l.platform === platform)
        .map((l) => (
          <div
            className="media-content"
            key={`song-player-${platform}`}
            dangerouslySetInnerHTML={{ __html: l.link }}
          />
        ))}
    </div>
  );
}
