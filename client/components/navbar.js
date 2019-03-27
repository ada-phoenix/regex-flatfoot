import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import {logout} from '../store'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
})

const Navbar = ({handleClick, isLoggedIn, classes}) => (
  <nav>
    {isLoggedIn ? (
      <div>
        <Button
          size="small"
          variant="outlined"
          className={classes.margin}
          onClick={handleClick}
        >
          Logout
        </Button>
      </div>
    ) : (
      <div />
    )}
  </nav>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(Navbar))

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
}

/*
<a href="#" onClick={handleClick}>
  Logout
</a>
*/
