import React from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import Typography from "@material-ui/core/Typography";
import Track from "./Track";

export default () => {
  return (
    <Consumer>
      {value => {
        const { track_list, heading } = value;
        if (track_list === undefined || track_list.length === 0) {
          return <Spinner />;
        }
        console.log(101, value);
        return (
          <React.Fragment>
            <Typography variant="display1" gutterBottom>
              {heading}
            </Typography>
            {track_list.map(item => {
              return <Track key={item.track.track_id} track={item.track} />;
            })}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};
