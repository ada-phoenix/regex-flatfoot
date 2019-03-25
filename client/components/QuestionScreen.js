import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Prompt from './Prompt'
import Problem from './Problem'
import {getGame} from '../store/game'
import ConsoleIcon from './ConsoleIcon'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'

/**
 * COMPONENT
 */
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
      <div>
        <Grid
          container
          wrap="wrap"
          spacing={24}
          alignItems="flex-start"
          className={classes.consoleGrid}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md="auto"
            lg={3}
            className={classes.consoleGridItem}
          >
            <ConsoleIcon />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md="auto"
            lg={9}
            className={classes.consoleGridItem}
          >
            <Typography
              paragraph={true}
              headlingMapping="p"
              className={classes.lessonText}
            >
              {this.props.game.lesson}
            </Typography>
            <Typography
              paragraph={true}
              headlingMapping="p"
              className={classes.lessonText}
            >
              {this.props.game.question}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          wrap="wrap"
          spacing={24}
          className={classes.consoleGrid}
        >
          <Problem history={this.props.history} />
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

//STYLES
const styles = theme => ({
  consoleGrid: {
    backgroundColor: 'pink',
    padding: '1%',
    border: '4mm groove #424242',
    borderRadius: 5
  },
  consoleGridItem: {
    padding: '2%',
    backgroundColor: '#000000',
    border: '4mm groove #424242',
    justifySelf: 'center'
  },
  lessonText: {
    fontFamily: 'Cutive',
    fontSize: '1em',
    color: '#FFFFFF'
  }
})

/**
 * CONTAINER
 */
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
    fetchGame: currGame => dispatch(getGame(currGame))
  }
}

export default connect(mapState, mapDispatch)(
  withStyles(styles)(QuestionScreen)
)

/**
 * PROP TYPES
 */
QuestionScreen.propTypes = {
  // email: PropTypes.string
}
