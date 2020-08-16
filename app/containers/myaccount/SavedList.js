import React from 'react'
import { Typography } from '@material-ui/core'
import { SavedItem } from './SavedItem';

export const SavedList = () => {
    return (
        <Typography>
            <SavedItem/>
            <SavedItem/>
            <SavedItem/>
            <SavedItem/>
        </Typography>
    )
}
