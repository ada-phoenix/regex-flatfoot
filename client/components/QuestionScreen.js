import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Prompt from './Prompt'
import Problem from './Problem'
import {getGame} from '../store/game'
import ConsoleIcon from './ConsoleIcon'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Typing, {Delay, Reset} from 'react-typing-animation'
import ArrowRightRounded from '@material-ui/icons/ArrowRightRounded'
import Divider from '@material-ui/core/Divider'

/**
 * COMPONENT
 */
class QuestionScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      gotGame: false,
      displayButton: false,
      displayQuestion: false
    }
  }

  filterString(string) {
    return string.split('\n').filter(sentence => {
      return sentence
    })
  }

  displayButton() {
    this.setState({displayButton: true})
  }

  buttonClick() {
    this.setState({displayQuestion: true, displayButton: false})
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
    let lesson, question
    if (this.state.gotGame) {
      lesson = this.filterString(this.props.game.lesson)
      question = this.filterString(this.props.game.question)
    }
    const {classes} = this.props
    return this.state.gotGame ? (
      <Paper className={classes.container}>
        <Grid
          container
          wrap="wrap"
          spacing={24}
          alignItems="stretch"
          className={classes.outerGrid}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.outerGridItem}
          >
            <div className={classes.consoleDiv}>
              <ConsoleIcon className={classes.consoleContent} />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={8}
            lg={9}
            className={classes.outerGridItem}
          >
            <div className={classes.textBlockSize}>
              {this.state.displayQuestion ? (
                <Paper className={classes.innerPaper}>
                  <Grid
                    container
                    direction="column"
                    spacing={24}
                    justify="space-evenly"
                    className={classes.innerGrid}
                  >
                    <Grid item xs={12} sm={12} md="auto" lg={12}>
                      <Typography className={classes.questionType}>
                        {question.map((sentence, i) => {
                          let textStyle
                          i === question.length - 1
                            ? (textStyle = classes.boldQuestionText)
                            : (textStyle = classes.questionText)
                          return (
                            <Typography className={textStyle}>
                              {sentence}
                            </Typography>
                          )
                        })}
                      </Typography>
                    </Grid>
                    <Divider variant="middle" />
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md="auto"
                      lg={12}
                      className={classes.innerGridItem}
                    >
                      <Problem history={this.props.history} />
                    </Grid>
                  </Grid>
                </Paper>
              ) : (
                <div>
                  <Typing
                    speed={15}
                    hideCursor={true}
                    onFinishedTyping={() => {
                      this.displayButton()
                    }}
                    className={classes.lessonText}
                    variant="body2"
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
                  {this.state.displayButton ? (
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="secondary"
                      type="button"
                      onClick={() => this.buttonClick()}
                    >
                      Get Cracking!
                      <ArrowRightRounded className={classes.icon} />
                    </Button>
                  ) : (
                    <div />
                  )}
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </Paper>
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
  button: {
    padding: 15,
    margin: 50,
    alignSelf: 'center',
    justifySelf: 'center'
  },
  container: {
    width: '90%',
    backgroundColor: theme.palette.primary.light
  },
  outerGrid: {
    padding: '1%'
  },
  consoleDiv: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '10px'
  },
  outerGridItem: {
    justifySelf: 'center',
    minHeight: 350
  },
  innerGrid: {
    minHeight: 350
  },
  questionType: {
    paddingLeft: '15px',
    paddingRight: '10px',
    paddingTop: '15px'
  },
  textBlockSize: {
    padding: 10,
    wordBreak: 'break-word',
    overflowWrap: 'break-word'
  },
  lessonText: {
    fontFamily: 'Cutive',
    color: '#212121',
    lineHeight: '1.5',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1em'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1em'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2em'
    }
  },
  questionText: {
    fontFamily: 'Cutive',
    fontSize: '1em',
    color: '#212121',
    lineHeight: '2'
  },
  boldQuestionText: {
    fontFamily: 'Cutive',
    fontSize: '1em',
    lineHeight: '2.5',
    fontWeight: 'bold',
    color: 'red'
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
