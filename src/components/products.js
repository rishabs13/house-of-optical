import React from 'react'
import Product from './product'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    padding: '32px'
  }
})

export default function Products() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.container}>
      {[1,2,3,4,5,6,7,8,9,10,11,12].map(el => (
        <Grid key={el} item xs={12} sm={6} md={4} lg={3}>
          <Product  />
        </Grid>
      ))}
    </Grid>
  )
}