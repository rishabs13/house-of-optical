import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/cart'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import './product.css'

const useStyles = makeStyles({
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  }
})

const Product = ({ dispatch, product }) => {
  const classes = useStyles();

  const onAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className="card">
      <Card>
        <CardMedia
          component='img'
          image={product.imgUrl}
          alt={product.title}
          height={150}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${' '}{product.price}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button variant="outlined" onClick={() => onAddToCart()}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default connect()(Product);