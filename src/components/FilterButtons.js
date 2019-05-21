import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const { classes, actions } = props;
  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => actions.changeFilter(null)}
      >
        All
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => actions.changeFilter(false)}
      >
        In Progress
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => actions.changeFilter(true)}
      >
        Finished
      </Button>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
