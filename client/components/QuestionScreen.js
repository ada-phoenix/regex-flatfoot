import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Prompt from './Prompt'
import Problem from './Problem'
import {getGame} from '../store/game'
import ConsoleIcon from './ConsoleIcon'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

class QuestionScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      gotGame: false
    }
  }

  async componentDidMount() {
    await this.props.fetchGame({
      clusterId: this.props.clusterId,
      level: this.props.level,
      stage: this.props.stage
    })
    this.setState({gotGame: true})
  }

  componentWillUnmount() {
    this.setState({gotGame: false})
  }

  render() {
    const {classes} = this.props

    return this.state.gotGame ? (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item lg={3} className={classes.paper}>
            <ConsoleIcon />
          </Grid>
          <Grid item lg={9}>
            <Prompt
              className={classes.paper}
              lesson={this.props.game.lesson}
              question={this.props.game.question}
            />
          </Grid>
        </Grid>
      </div>
    ) : (
      <div>
        <div className="container">
          <img src="https://m.media-amazon.com/images/M/MV5BMTY0ODk2NDY5MV5BMl5BanBnXkFtZTgwNTE4MTg3MjE@._V1_.jpg" />
          <h1>Hold on...</h1>
        </div>
      </div>
    )
  }
}

QuestionScreen.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => {
  return {
    level: state.user.level || 1,
    stage: state.user.levelstage || 1,
    clusterId: state.user.clusterId || 1,
    game: state.game || {}
  }
}

const mapDispatch = dispatch => {
  return {
    fetchGame: currentGame => dispatch(getGame(currentGame))
  }
}

export default connect(mapState, mapDispatch)(
  withStyles(styles)(QuestionScreen)
)

/*
<Grid container spacing={12}>
  <Grid item xs>
    <Problem history={this.props.history} />
  </Grid>
</Grid>
*/
