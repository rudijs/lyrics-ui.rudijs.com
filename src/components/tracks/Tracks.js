import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Track from "./Track";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

const Tracks = props => {
  const { classes } = props;

  return (
    <Consumer>
      {value => {
        const { track_list, heading } = value;
        if (track_list === undefined || track_list.length === 0) {
          return <Spinner />;
        }
        console.log(101, value);
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
