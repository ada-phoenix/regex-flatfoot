import React from 'react'
import history from '../history'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {blueGrey} from 'material-ui/styles/colors'
import {withStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

class Boss extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: [''],
      preview: [''],
      elapsed: 0,
      start: new Date(),
      input: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitReg = this.submitReg.bind(this)
    this.isSame = this.isSame.bind(this)
    this.tick = this.tick.bind(this)
    this.continueFunc = this.continueFunc.bind(this)
  }

  isSame(arr1, arr2) {
    let same = true
    if (arr1.length !== arr2.length) {
      same = false
    }
    arr1.forEach((el, i) => {
      if (el !== arr2[i]) {
        same = false
      }
    })
    return same
  }

  componentWillUnmount() {
    clearInterval(this.incrementer)
  }

  tick() {
    const boss = this.props.boss
    let currentTime = new Date() - this.state.start
    this.setState({elapsed: currentTime})

    if (currentTime > boss.time) {
      history.push(`/postboss`, {won: false})
    }
  }

  continueFunc() {
    this.setState({continue: true})
    let date = new Date()
    this.setState({start: date})
    this.incrementer = setInterval(this.tick, 60)
  }

  changeHandler(evt) {
    this.setState({input: evt.target.value})
    let inputArr = evt.target.value.split('/')
    let regInput = inputArr[1]
    let flags = inputArr[2]
    let regEx = new RegExp(regInput, flags)
    const result = this.props.boss.haystack.match(regEx)
    if (result) {
      this.setState({result})
    }
  }

  submitReg(evt) {
    evt.preventDefault()
    if (this.isSame(this.state.result, this.props.boss.needle)) {
      history.push(`/postboss`, {won: true})
    } else {
      history.push(`/postboss`, {won: false})
    }
  }

  render() {
    const {classes} = this.props
    const boss = this.props.boss
    let splitStory = boss.story.split('\n')
    let elapsed = Math.round(this.state.elapsed / 100)
    let seconds = (elapsed / 10).toFixed(1)
    return boss.haystack ? (
      this.state.continue ? (
        <Paper className={classes.root}>
          <Typography variant="h2" className={classes.h2}>
            Countdown: {seconds} seconds
          </Typography>
          <Typography variant="h3" className={classes.h3}>
            {boss.question}
          </Typography>
          <Typography variant="h4" className={classes.h4}>
            {boss.haystack}
          </Typography>
          <TextField value={this.state.input} onChange={this.changeHandler} />
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            type="button"
            onClick={this.submitReg}
          >
            Decode!
          </Button>
        </Paper>
      ) : (
        <Paper className={classes.root}>
          <Avatar
            alt="A man seated looking smug"
            src={boss.picture}
            className={classes.bigAvatar}
          />
          <Typography variant="h2" className={classes.h2}>
            {splitStory[0]}
          </Typography>
          <Typography variant="body2" className={classes.type}>
            {splitStory[1]}
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            type="button"
            onClick={this.continueFunc}
          >
            Continue
          </Button>
        </Paper>
      )
    ) : (
      <div>wait </div>
    )
  }
}

const styles = theme => ({
  root: {
    margin: 50,
    padding: 50,
    maxWidth: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center'
  },
  button: {
    padding: 15,
    margin: 50
  },
  type: {
    fontFamily: 'Cutive',
    padding: 10
  },
  h4: {
    padding: 10,
    margin: 10,
    backgroundColor: 'black',
    color: 'white'
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 300,
    borderRadius: 0
  },
  h2: {
    fontFamily: 'Cutive',
    padding: 10,
    margin: 10,
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '50px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '60px'
    }
  },
  h3: {
    fontFamily: 'Cutive',
    padding: 10,
    margin: 10,
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '30px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '40px'
    }
  }
})

const mapState = state => ({
  boss: state.cluster.boss
})

export default connect(mapState)(withStyles(styles)(Boss))
