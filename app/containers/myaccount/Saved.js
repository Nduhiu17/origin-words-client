import React from 'react'
import { Grid, CardHeader } from '@material-ui/core'
import AccountLayout from './AccountLayout'
import { SavedList } from './SavedList'

const Saved = () => (
  <AccountLayout>
    <Grid container justify="flex-start">
      <Grid item md={6}>
        <CardHeader
          title="SAVED ITEMS
            "
        />
      </Grid>
    </Grid>
    <SavedList />
  </AccountLayout>
)

export default Saved
