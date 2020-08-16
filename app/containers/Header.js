import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  '@global': {
    html: {
      [theme.breakpoints.down('sm')]: {
        fontSize: 11,
      },
      maincontent: {
        zIndex: 10,
      },
    },
  },
});

export default withStyles(styles)(({ classes }) => (
  <Typography className="maincontent">
    <div className="header-wrapper">
      <div className="header-content">
        <Typography variant="h2" gutterBottom className="title-main">
          The leading online board for academic writting, and creative research.
        </Typography>
        <Typography component="span">
          Trusted by proffesionals across the globe
        </Typography>
      </div>
    </div>
  </Typography>
));
