import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardUI from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      justifyContent: "center"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    Card: {
        width: 550,
        height: 550,
        margin: 'auto'
    },
    Media: {
        height: 400,
        width: '100%',
        objectFit: 'cover'
    },
    title: {
      fontSize: 20,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Card =() => {
        const classes = useStyles()
        return (
        <CardUI className={classes.Card} >
            <CardMedia className={classes.Media}
                title = "this is a item"
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEwkToei94vw06dnBMIqtvWyUZOfQaz68B7Q&usqp=CAU"
            />
            <CardContent>
                    <Typography className={classes.title}>
                        Price: $1
                    </Typography>
                    <Typography className={classes.title}>
                        Description: Looks hella Good
                    </Typography>
            </CardContent>
            <CardActions classes={{root: classes.root}}>
                <Button variant="outlined" color="primary">Buy Now</Button>
            </CardActions>
        </CardUI>
        )
}

export default Card;