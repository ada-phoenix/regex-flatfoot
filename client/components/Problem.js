import React from 'react'
import {connect} from 'react-redux'
import reactStringReplace from 'react-string-replace'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'

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
  }

  componentWillUnmount() {
    this.setState({
      input: '',
      regStr: '',
      goal: [''],
      result: [''],
      preview: ['']
    })
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
      <div>
        <Grid
          container
          wrap="wrap"
          spacing={24}
          alignItems="flex-start"
          className={classes.consoleGrid}
        >
          <Grid item className={classes.consoleGridItem}>
            <Typography className={classes.haystackText}>
              <label>Text block:</label>
              <div>{this.highlighter()}</div>
            </Typography>
          </Grid>
          <Grid item className={classes.consoleGridItem}>
            <h2 className="message">{this.state.message}</h2>
            <label>
              Remember to wrap your regEx in forward slashes. Ex: /regex/
            </label>
            <input
              type="text"
              onChange={this.changeHandler}
              value={this.state.input}
              placeholder="/write your regEx here/"
            />
          </Grid>
          <Grid item className={classes.consoleGridItem}>
            <button onClick={this.submitReg}>Follow that lead!</button>
          </Grid>
        </Grid>
      </div>
    ) : (
      <div>Hold on one moment...</div>
    )
  }
}

//STYLING
const styles = theme => ({
  lessonText: {
    fontFamily: 'Cutive',
    fontSize: '1em',
    color: '#FFFFFF'
  },
  consoleGrid: {
    backgroundColor: 'pink',
    padding: '1%',
    borderRadius: 5
  },
  consoleGridItem: {
    padding: '2%',
    backgroundColor: '#000000',
    border: '4mm groove #424242',
    justifySelf: 'center'
  },
  haystackText: {
    fontFamily: 'Cutive',
    fontSize: '1em',
    color: '#FFFFFF',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word'
  }
})

//Container
const mapState = state => ({
  haystack: state.game.haystack,
  needle: state.game.needle,
  notallowed: state.game.notallowed
})

export default connect(mapState)(withStyles(styles)(Problem))
