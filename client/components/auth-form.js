import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error, classes} = props
  return (
    <div>
      <form
        className={classes.authcontainer}
        onSubmit={handleSubmit}
        name={name}
      >
        <TextField
          name="email"
          type="text"
          required={true}
          id="outlined-email-input"
          label="email"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{className: classes.label}}
          InputProps={{className: classes.authinput}}
        />
        <TextField
          name="password"
          type="password"
          required={true}
          id="outlined-password-input"
          label="password"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{className: classes.label}}
          InputProps={{className: classes.authinput}}
        />
        <div className={classes.buttcontainer}>
          <Button
            className={classes.button}
            color="secondary"
            variant="outlined"
            type="submit"
          >
            {displayName}
          </Button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      {/* <a href="/auth/google">{displayName} with Google</a> */}
    </div>
  )
}

//STYLES
const styles = theme => ({
  authcontainer: {
    display: 'flex',
    justifyItems: 'center',
    flexWrap: 'wrap'
  },
  buttcontainer: {
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center'
  },
  button: {
    height: 50
  },
  label: {
    color: theme.palette.primary.main,
    fontSize: 24,
    paddingLeft: 35,
    paddingTop: 35,
    paddingRight: 0
  },
  authinput: {
    padding: 2,
    fontSize: 28,
    color: '#000000'
  }
})

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(
  withStyles(styles)(AuthForm)
)
export const Signup = connect(mapSignup, mapDispatch)(
  withStyles(styles)(AuthForm)
)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
