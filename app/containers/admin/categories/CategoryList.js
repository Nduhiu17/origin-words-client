import React, { useState } from 'react'
import { Grid, CardHeader, Typography } from '@material-ui/core'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'
import { CategoryItem } from './CategoryItem'
import { CustomDialog } from '../../../shared/CustomModal'
import CategoryForm from './CategoryForm'
import { SubCategoryForm } from './SubCategoryForm'

export const CategoryList = ({ headTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDialogClose = () => {
    setIsOpen(false)
  }

  const handleDialogOpen = () => {
    setIsOpen(true)
  }
  return (
    <Grid>
      <Grid container>
        <Grid
          container
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Grid item md={6}>
            <CardHeader title={headTitle} />
          </Grid>
          <Grid item md={3} />
          <Grid item md={3}>
            <Tooltip TransitionComponent={Zoom} title="Create new">
              <Button
                variant="contained"
                className=""
                startIcon={<AddIcon />}
                style={{ backgroundColor: '#ff8c00', color: '#fff' }}
                onClick={handleDialogOpen}
              >
                Create
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <List className="">
              <CategoryItem
                title="Computer Science"
                subtitle="Jan 9, 2014111"
              />
              <CategoryItem
                title="Computer Science"
                subtitle="Jan 9, 2014111"
              />
              <CategoryItem
                title="Computer Science"
                subtitle="Jan 9, 2014111"
              />
              <CategoryItem
                title="Computer Science"
                subtitle="Jan 9, 2014111"
              />
            </List>
          </Grid>
        </Grid>
      </Grid>
      <CustomDialog
        isOpen={isOpen}
        handleClose={handleDialogClose}
        title="Create"
      >
        {headTitle === 'Categories' ? <CategoryForm /> : <SubCategoryForm />}
      </CustomDialog>
    </Grid>
  )
}
