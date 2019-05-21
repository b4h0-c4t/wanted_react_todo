import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import DateFormat from 'dateformat';

const styles = {
  card: {
    minWidth: 275,
    display: 'flex',
    'justify-content': 'space-between',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  over: {
    color: "#ff4949"
  }
};

function SimpleCard(props) {
  const { classes, actions, state, todo, index } = props;
  const is_over = (new Date()).getTime() - todo.deadline.getTime() > 0;

  const deleteTodo = () => actions.removeTodo(index);
  const checkFinish = (e) => actions.changeFinished(e.target.checked, index);

  if(state.filter !== null && state.filter !== todo.is_finished) return null;
  if(todo.name.match(state.search_str) === null && todo.desc.match(state.search_str) === null) return null;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={`${classes.title} ${is_over ? classes.over : ""}`} color="textSecondary" gutterBottom>
          { DateFormat(todo.deadline, "fullDate") }
        </Typography>
        <Typography variant="h6" component="h2">
          { todo.name }
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          { todo.is_finished ? 'Finished' : 'In Progress' }
        </Typography>
        <Typography component="p">
          { todo.desc }
        </Typography>
      </CardContent>
      <CardActions>
        <Checkbox
          color="primary"
          onClick={checkFinish}
          checked={todo.is_finished}
        />
        <IconButton
          aria-label="Delete"
          onClick={deleteTodo}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
