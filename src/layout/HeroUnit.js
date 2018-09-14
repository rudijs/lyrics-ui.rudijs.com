import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  }
});

const HeroUnit = props => {
  const { classes } = props;

  return (
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography
          variant="display3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Album layout
        </Typography>
        <Typography
          variant="title"
          align="center"
          color="textSecondary"
          paragraph
        >
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>
      </div>
    </div>
  );
};

HeroUnit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeroUnit);
