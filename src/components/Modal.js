import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const modalStyle = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  fab: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '0',
    right: '0',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    display: 'block',
    margin: theme.spacing.unit,
  },
});

function SimpleModal(props) {
  const { classes } = props;

  const [open, openDispatcher] = React.useState(false);
  const [name, nameDispatcher] = React.useState("");
  const [desc, descDispatcher] = React.useState("");
  const [deadline, deadlineDispatcher] = React.useState(new Date());

  const addTask = () => {

    openDispatcher(false);
  };


  return (
    <div>
      <Fab onClick={() => openDispatcher(true)} color="primary" aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={() => openDispatcher(false)}
      >
        <div style={modalStyle} className={classes.paper}>
            <TextField
              id="name"
              label="name"
              type="text"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="desc"
              label="Description"
              type="text"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="deadline"
              label="DeadLine"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              className={classes.button}
              onClick={ () => addTask("hoge") }
            >
            Submit
            </Button>
        </div>
      </Modal>
    </div>
  );
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
