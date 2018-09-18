import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import styles from "../layout/styles";
import Spinner from "../layout/Spinner";

class Lyrics extends Component {
  classes = this.props.classes;

  state = {
    track: {},
    lyrics: {}
  };

  apiKey = process.env.REACT_APP_MUSIXMATCH_API_KEY;

  componentDidMount() {
    // could use .all() but quick and dirty promise inside promise
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${this.apiKey}`
      )
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
            this.props.match.params.id
          }&apikey=${this.apiKey}`
        );
      })
      .then(res => {
        this.setState({ track: res.data.message.body.track });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { track, lyrics } = this.state;
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Spinner />;
    }

    return (
      <div className={this.classes.layout}>
        <Card>
          <CardContent>
            <Button component={Link} to="/" variant="outlined">
              Go Back
            </Button>

            <br />
            <br />

            <Typography variant="title" gutterBottom>{track.artist_name}</Typography>

            <Typography variant="body1">
              <span className={this.classes.preformatted}>
                {lyrics.lyrics_body}
              </span>
            </Typography>

            <List>
              <ListItem>
                <strong>Album ID</strong>: {track.album_id}
              </ListItem>
            </List>
            <List>
              <ListItem>
                <strong>Song Genre</strong>:{" "}
                {track.primary_genres.music_genre_list.length === 0
                  ? "NO GENRE AVAILABLE"
                  : track.primary_genres.music_genre_list[0].music_genre
                      .music_genre_name}
              </ListItem>
            </List>
            <List>
              <ListItem>
                <strong>Explicit Words</strong>:{" "}
                {track.explicit === 0 ? "No" : "Yes"}
              </ListItem>
            </List>
            <List>
              <ListItem>
                <strong>Release Date</strong>:{" "}
                <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
              </ListItem>{" "}
            </List>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Lyrics.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Lyrics);
