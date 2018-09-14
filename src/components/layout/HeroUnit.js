import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Search from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32
  }
});

const HeroUnit = props => {
  const { classes } = props;

  return (
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography
          variant="display2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          <Search className={classes.icon} />
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
      </div>
    </div>
  );
};

HeroUnit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeroUnit);
