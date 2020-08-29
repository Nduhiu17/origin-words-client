import React, { useEffect, useState } from 'react'
import { Grid, CardHeader } from '@material-ui/core'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CategoryItem } from './CategoryItem'
import { CustomDialog } from '../../../shared/CustomModal'
import CategoryForm from './CategoryForm'
import { SubCategoryForm } from './SubCategoryForm'
import { loadCategories } from '../../../actions/categoriesActions'

const CategoryList = props => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    props.loadCategories()
  }, [])

  const handleDialogClose = () => {
    setIsOpen(false)
  }

  const handleDialogOpen = () => {
    setIsOpen(true)
  }

  // const {  } = props

  const { headTitle, categories } = props
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
              {categories &&
                categories.map(category => (
                  <CategoryItem
                    title={category.name}
                    subtitle={category.updatedon}
                  />
                ))}
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

const mapStateToProps = state => ({
  categories: state.categories,
})

const mapDispatchToProps = dispatch => ({
  loadCategories: () => dispatch(loadCategories()),
})

CategoryList.propTypes = {
  loadCategories: PropTypes.func,
  headTitle: PropTypes.string,
  categories: PropTypes.array,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryList)
