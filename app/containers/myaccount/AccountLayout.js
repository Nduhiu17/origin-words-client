import React from 'react'
import { Grid, Typography, Paper, Container } from '@material-ui/core'
import List from '@material-ui/core/List'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Zoom from '@material-ui/core/Zoom'
import NavMenu from '../NavMenu'
import accountRoutes from './accountRoutes'
import Footer from '../Footer'

const AccountLayout = props => (
  <Grid>
   <Grid style={{flexGrow: 1}}>
    <NavMenu />
   </Grid>
    <Container style={{ minHeight: '50vh', padding: 15 }}>
      <Grid container spacing={2}>
        <Grid item md={3} sm={12} xs={12}>
          <Paper elevation={4}>
            <List>
              {accountRoutes.map((route, index) => (
                <Link to={route.path} key={index}>
                  <ListItem button key={route.name}>
                    <Tooltip TransitionComponent={Zoom} title={route.name}>
                      <ListItemIcon>{route.icon}</ListItemIcon>
                    </Tooltip>
                    <ListItemText primary={route.name} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item md={9} sm={12} xs={12}>
          <Paper elevation={4}>
            <Grid>{props.children}</Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    <Footer />
  </Grid>
)

export default AccountLayout
