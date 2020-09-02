import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

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
})

export default withStyles(styles)(({ classes }) => (
  <Grid className="maincontent">
    <div className="header-wrapper">
      <div className="header-content">
        <Typography
          variant="h2"
          gutterBottom
          className="title-main"
          style={{
            color: '#6d9fd4',
            textShadow: ' 2px 2px 4px #000C66',
            textTransform: 'capitalize',
          }}
        >
          The leading online book shop for quality e-books.Focus on making
          yourself better
        </Typography>
        <Typography component="span" style={{ color: '#6d9fd4' }}>
          If Fifty Shades is your idea of a good book, you have no idea what a
          good book is.
        </Typography>
      </div>
    </div>
  </Grid>
))
