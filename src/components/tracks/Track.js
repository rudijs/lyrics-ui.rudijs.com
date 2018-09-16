import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const Track = props => {
  const { classes, track } = props;

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card>
        <CardMedia title="Track" src={track.album_coverart_100x100} />
        <CardContent>
          <Typography>{track.artist_name}</Typography>
          <Typography>Track: {track.track_name}</Typography>
          <Typography>Album: {track.album_name}</Typography>
          <Button
            component={Link}
            to={`lyrics/track/${track.track_id}`}
            variant="outlined"
            className={classes.button}
          >
            View Lyrics
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

Track.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Track);
