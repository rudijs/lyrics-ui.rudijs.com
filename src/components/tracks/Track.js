import React from "react";

const Track = props => {
  const { track } = props;
  return (
    <div>
      <p>{track.artist_name}</p>
    </div>
  );
};

export default Track;
