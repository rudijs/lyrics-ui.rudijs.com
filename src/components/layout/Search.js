import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Search from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import axios from 'axios'

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  formElement: {
    display: "block",
    margin: "0 auto",
    width: "90%"
  }
});

class Search extends Component {
  classes = this.props.classes;

  state = {
    trackTitle: ""
  };

  onChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  findTrack = e => {
    e.preventDefault()
    console.log(e)
  }

  render() {
    return (
      <div className={this.classes.heroUnit}>
        <div className={this.classes.heroContent}>
          <Typography
            variant="display2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Search for a Song
          </Typography>
          <Typography
            variant="title"
            align="center"
            color="textSecondary"
            paragraph
          >
            Get the lyrics for any song.
          </Typography>
          <form onSubmit={this.findTrack}>
            <TextField
              name="trackTitle"
              label="Track Title"
              value={this.state.trackTitle}
              onChange={this.onChange}
              type="search"
              margin="normal"
              variant="outlined"
              className={this.classes.formElement}
              fullWidth
            />

            <br />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={this.classes.formElement}
            >
              Get Track Lyrics
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
