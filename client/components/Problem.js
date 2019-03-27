import React from 'react'
import {connect} from 'react-redux'
import reactStringReplace from 'react-string-replace'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Problem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      regStr: '',
      goal: [''],
      result: [''],
      message: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitReg = this.submitReg.bind(this)
    this.isSame = this.isSame.bind(this)
    this.pushToNext = this.pushToNext.bind(this)
    this.highlighter = this.highlighter.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
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

  componentDidMount() {
    this.setState({regStr: this.props.haystack, goal: this.props.needle})
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    this.setState({
      input: '',
      regStr: '',
      goal: [''],
      result: [''],
      preview: ['']
    })
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress(e) {
    console.log(e)
    if (
      ![8, 9, 13, 16, 17, 18, 20, 37, 38, 39, 40, 91, 93].includes(e.keyCode)
    ) {
      let sound = new Audio('/single_key_press.mp3')
      sound.play()
    }
  }

  changeHandler(evt) {
    this.setState({input: evt.target.value})
    this.setState({message: ''})

    let inputArr = evt.target.value.split('/')
    let regInput = inputArr[1]
    let flags = inputArr[2]
    let regEx = new RegExp(regInput, flags)
    let result = this.state.regStr.match(regEx)
    if (result) {
      this.setState({result})
    }
  }

  highlighter() {
    try {
      let inputArr = this.state.input.split('/')
      if (inputArr === '') {
        return this.state.regStr
      } else {
        let groupedInput = `(${inputArr[1]})`
        let flags = inputArr[2]
        let groupedRegEx = new RegExp(groupedInput, flags)
        let highlightedHaystack = reactStringReplace(
          this.state.regStr,
          groupedRegEx,
          (match, i) => (
            <span key={i} className="highlight">
              {match}
            </span>
          )
        )

        const sliced = highlightedHaystack.slice(0, 2)
        const lengthtoSlice = sliced[0].length + inputArr[1].length
        const end = this.state.regStr.slice(lengthtoSlice)
        const whole = [...sliced, end]

        if (flags) {
          if (flags.includes('g')) {
            return highlightedHaystack
          } else {
            return whole
          }
        } else {
          return whole
        }
      }
    } catch (err) {
      console.log(err)
      return this.state.regStr
    }
  }

  pushToNext() {
    if (this.isSame(this.state.result, this.state.goal)) {
      this.props.history.push(`/correct`)
    } else {
      this.props.history.push(`/incorrect`)
    }
  }

  submitReg(evt) {
    evt.preventDefault()
    if (this.props.notallowed.length) {
      let notEx = new RegExp(this.props.notallowed[0], this.props.notallowed[1])
      if (notEx.test(this.state.input)) {
        this.setState({message: "Hey! That's not allowed!"})
        this.setState({input: ''})
      } else {
        this.pushToNext()
      }
    } else {
      this.pushToNext()
    }
  }

  render() {
    const {classes} = this.props
    return this.props.haystack ? (
      <div className={classes.container}>
        <Typography className={classes.haystackText}>
          <span className={classes.grayHighlight}>{this.highlighter()}</span>
        </Typography>

        <div className={classes.buttonsContainer}>
          <h2 className="message">{this.state.message}</h2>
          <TextField
            name="text"
            type="text"
            id="outlined-text-input"
            autoComplete="off"
            label="/write your regEx here/"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={this.state.input}
            InputLabelProps={{className: classes.label}}
            InputProps={{className: classes.userInput}}
            onChange={this.changeHandler}
          />
          <Button
            className={classes.button}
            color="secondary"
            variant="contained"
            type="button"
            onClick={this.submitReg}
          >
            Follow that lead!
          </Button>
        </div>
      </div>
    ) : (
      <div>Hold on one moment...</div>
    )
  }
}

//STYLING
const styles = theme => ({
  container: {
    display: 'flex',
    alignContent: 'start',
    flexWrap: 'wrap',
    paddingLeft: '15px',
    paddingRight: '10px',
    paddingTop: '5px'
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'start',
    flex: 1
  },
  lessonText: {
    fontFamily: 'Cutive',
    fontSize: '1em',
    color: '#FFFFFF'
  },
  haystackText: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '1em',
    lineHeight: '1.5',
    color: '#ffffff',
    whiteSpace: 'pre-line',
    wordBreak: 'break-word',
    paddingLeft: '15px',
    paddingRight: '10px',
    paddingTop: '5px',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.up('md')]: {
      width: '60%'
    }
  },
  grayHighlight: {
    backgroundColor: '#cfd8dc'
  },
  label: {
    color: theme.palette.primary.main,
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '12px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '22px'
    }
  },
  userInput: {
    padding: 2,
    fontSize: 28,
    color: '#000000'
  },
  button: {
    flex: 1
  },
  textField: {
    flex: 1
  }
})

//Container
const mapState = state => ({
  haystack: state.game.haystack,
  needle: state.game.needle,
  notallowed: state.game.notallowed
})

export default connect(mapState)(withStyles(styles)(Problem))
