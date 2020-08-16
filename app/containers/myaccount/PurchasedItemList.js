import React from 'react'
import { Typography } from '@material-ui/core'
import { PurchasedItem } from './PurchasedItem'

export const PurchasedItemList = () => {
    return (
        <Typography>
            <PurchasedItem/>
            <PurchasedItem/>
            <PurchasedItem/>
            <PurchasedItem/>
        </Typography>
    )
}
