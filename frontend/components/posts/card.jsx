import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { updatePost, deletePost } from '../../actions/post_actions';



const styles = {
   card: {
      maxWidth: 540,
   },
   media: {
      height: 200,
   },
};

function MediaCard(props) {

   const { classes } = props;
   return (
      <Card className={classes.card}>
            <CardMedia
               className={classes.media}
               image="https://images.unsplash.com/photo-1548373564-99ab96ed0dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
               title="Contemplative Reptile"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                  {props.card.title}
          </Typography>
               <Typography component="p">
                  {props.card.body}
          </Typography>
            </CardContent>
         <CardActions>
            <Button size="small" color="primary">
               Share
        </Button>
            <Button size="small" color="primary">
               Learn More
        </Button>

         <Button size="small" color="primary">
            delete
         </Button>

         <button>
            banana
         </button>


         </CardActions>
      </Card>
   );
}

MediaCard.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);