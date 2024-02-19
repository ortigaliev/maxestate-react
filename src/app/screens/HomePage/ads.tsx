import React from "react";
import ads_video from "../../../assets/ads_video.mp4";

export function Ads() {
  return (
    <div className="ads_frame" style={{ background: "#ccc" }}>
      <video className={"ads_video"} autoPlay={true} loop muted playsInline>
        <source src={ads_video} />
      </video>
    </div>
  );
}
