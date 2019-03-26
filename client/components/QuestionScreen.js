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
import Typing, {Delay, Reset} from 'react-typing-animation'

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

  filterString(string) {
    console.log(string.split('*'))
    return string.split('\n').filter(sentence => {
      return sentence
    })
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
    let lesson
    if (this.state.gotGame) {
      lesson = this.filterString(this.props.game.lesson)
    }
    const {classes} = this.props
    return this.state.gotGame ? (
      <div className={classes.container}>
        <Grid
          container
          wrap="wrap"
          spacing={24}
          alignItems="stretch"
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
            <div className={classes.textBlockSize}>
              <Typing
                speed={10}
                hideCursor={true}
                className={classes.lessonText}
              >
                {lesson.map((sentence, i) => {
                  return (
                    <React.Fragment key={i}>
                      {sentence}
                      <Delay ms={300} />
                      <Reset count={3} delay={300} />
                    </React.Fragment>
                  )
                })}
              </Typing>
            </div>
            {/* <Typography className={classes.lessonText}>
              {this.props.game.question}
            </Typography> */}
          </Grid>
        </Grid>
        {/* <Grid
          container
          wrap="wrap"
          spacing={24}
          className={classes.consoleGrid}
        >
          <Problem history={this.props.history} />
        </Grid> */}
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
  container: {
    width: '90%'
  },
  consoleGrid: {
    backgroundColor: 'pink',
    padding: '1%',
    border: '4mm groove #424242',
    borderRadius: 5
  },
  consoleGridItem: {
    padding: '2%',
    backgroundColor: '#ffffff',
    border: '4mm groove #424242',
    justifySelf: 'center',
    [theme.breakpoints.down('xs')]: {
      flex: 1
    },
    [theme.breakpoints.down('sm')]: {
      flex: 1
    },
    [theme.breakpoints.up('md')]: {
      flex: 2
    },
    [theme.breakpoints.up('lg')]: {
      flex: 3
    }
  },
  textBlockSize: {
    width: '100%',
    height: '100%',
    padding: 10,
    wordBreak: 'break-word',
    overflowWrap: 'break-word'
  },
  lessonText: {
    fontFamily: 'Cutive',
    fontSize: '2em',
    color: '#212121',
    lineHeight: '1.5'
  },
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
