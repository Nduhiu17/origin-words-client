import React from "react";
import AccountLayout from "./AccountLayout";
import { Grid,CardHeader } from "@material-ui/core";
import { SavedList } from './SavedList';


const Saved = () => {
  return (
    <AccountLayout>
       <Grid container justify="flex-start">
          <Grid item md={6}>
            <CardHeader
              title="SAVED ITEMS
            "
            />
          </Grid>
        </Grid>
        <SavedList/>
    </AccountLayout>
  );
};

export default Saved;
