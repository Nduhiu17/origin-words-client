import React from 'react'
import { Typography } from '@material-ui/core'
import CartItem from './CartItem';

export default function CartList() {
    return (
        <Typography>
            <CartItem />
            <CartItem />
            <CartItem />
        </Typography>
    )
}
