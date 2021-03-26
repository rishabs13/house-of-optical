import React from 'react'
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
import { cart } from '../../common/constants'
import { total, setTotal } from '../../common/constants'

const useStyles = makeStyles({
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  }
})


const onAddToCart = (props) =>
    {
      setTotal(total + props.price);
      cart.push(props);
      
      console.log(total);
    }
    

const Product = ({ product}) => {
    const classes = useStyles();
    

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
        <Button variant="outlined"  onClick= {()=> onAddToCart(product)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Product;
