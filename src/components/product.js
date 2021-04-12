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

const useStyles = makeStyles({
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  }
})

export default function Product({ product }) {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        component='img'
        image='https://images-na.ssl-images-amazon.com/images/I/511ptk4SNrL._UL1001_.jpg'
        alt='sunglasses'
        height='200'
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Fake Rayban
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            $30
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button variant="outlined">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}