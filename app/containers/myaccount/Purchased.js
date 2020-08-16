import React from "react";
import AccountLayout from "./AccountLayout";
import { PurchasedItemList } from './PurchasedItemList';
import { Grid,CardHeader } from "@material-ui/core";


const Purchased = () => {
  return (
    <AccountLayout>
       <Grid container justify="flex-start">
          <Grid item md={6}>
            <CardHeader
              title="PURCHASED ITEMS
            "
            />
          </Grid>
        </Grid>
        <PurchasedItemList/>
    </AccountLayout>
  );
};

export default Purchased;
