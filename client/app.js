import React from 'react'
import {Navbar} from './components'
import Routes from './routes'
import {withStyles} from '@material-ui/core'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const App = props => {
  const {classes} = props
  return (
    <div className={classes.root}>
      <Routes />
      <Navbar />
    </div>
  )
}

export default withStyles(styles)(App)
