import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import history from '../../history'

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    marginLeft:"2%",
    marginBottom:"1%",
    padding:"1%",
    display:'inline-block'
  },
  media: {
    height: 250,
    width:300,
  },
});

function MediaCard(props) {
  const count = 1;
  console.log(props.history)
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={()=>{props.history.push('/Product',{ProducterName:props.Producter,AllCatigory:props.AllCatigory,catigory:props.catigory,charges:props.charges,price:props.price,product:props.product,ResturentName:props.name,ItemName:props.ItemName,product1:props.product1});console.log(props)}}>
        <CardMedia
          className={classes.media}
          image={props.product}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {props.name}<br />
            <span style={{fontSize:'15px'}}>
            Rs: {props.price}
            </span>
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
export default MediaCard;