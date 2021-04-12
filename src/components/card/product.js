import React from 'react';
import { useDispatch } from 'react-redux';
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
import { addToCart } from '../../redux/Actions/cartAction';

const useStyles = makeStyles({
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection :'column'
  },
  CardActions :{
    display: 'flex',
    justifyContent: 'center'
  }
})



const Product = ({ product, showSnackBar}) => {
    const classes = useStyles();
  const  dispatch = useDispatch();

    const onAddToCart = (props) =>
    {
      dispatch(addToCart(product));
      showSnackBar();
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
          <Typography gutterBottom variant="h5" component="h2" style={{justifyContent: 'flex-start'}}>
            {product.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" style={{justifyContent: 'flex-start'}}>
            ${' '}{product.price}
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <Button style={{width: '90%', backgroundColor: '#3f51b5', color: 'white'}} variant="outlined"  onClick= {()=> onAddToCart(product)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Product;
