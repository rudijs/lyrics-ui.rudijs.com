import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import styles from '../layout/styles'
import Track from "./Track";

const Tracks = props => {
  const { classes } = props;

  return (
    <Consumer>
      {value => {
        const { track_list, heading } = value;
        if (track_list === undefined || track_list.length === 0) {
          return <Spinner />;
        }

        return (
          <div className={classes.layout}>
            <Grid container spacing={40} justify="space-around">
              <Grid item xs={12}>
                <Typography variant="display1" gutterBottom align="center">
                  {heading}
                </Typography>
              </Grid>
              {track_list.map(item => {
                return <Track key={item.track.track_id} track={item.track} />;
              })}
            </Grid>
          </div>
        );
      }}
    </Consumer>
  );
};

Tracks.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Tracks);
