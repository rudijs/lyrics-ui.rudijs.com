import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
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
          <Typography variant="title" gutterBottom>
            {track.artist_name}
          </Typography>
          <Typography variant="subheading" gutterBottom style={{display: "flex", alignItems: "center"}}>
            <Icon className={`fas fa-play`} style={{ fontSize: 18, marginRight: 4 }} />
            <span><strong>Track</strong>: {track.track_name}</span>
          </Typography>
          <Typography variant="body1" gutterBottom style={{display: "flex", alignItems: "center"}}>
            <Icon className={`fas fa-compact-disc`} style={{ fontSize: 18, marginRight: 4 }} />
            <span><strong>Album</strong>: {track.album_name}</span>
          </Typography>
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
