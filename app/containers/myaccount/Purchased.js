import React from 'react'
import { Grid, CardHeader } from '@material-ui/core'
import AccountLayout from './AccountLayout'
import { PurchasedItemList } from './PurchasedItemList'

const Purchased = () => (
  <AccountLayout>
    <Grid container justify="flex-start">
      <Grid item md={6}>
        <CardHeader
          title="PURCHASED ITEMS
            "
        />
      </Grid>
    </Grid>
    <PurchasedItemList />
  </AccountLayout>
)

export default Purchased
