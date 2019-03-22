import React from 'react'
import {connect} from 'react-redux'

class Problem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      regStr: '',
      goal: [''],
      result: [''],
      preview: [''],
      message: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.showResult = this.showResult.bind(this)
    this.submitReg = this.submitReg.bind(this)
    this.isSame = this.isSame.bind(this)
    this.pushToNext = this.pushToNext.bind(this)
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

  showResult() {
    this.setState({preview: this.state.result})
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
    return this.props.haystack ? (
      <div>
        <div className="container">
          <div className="haystack">
            <div className="typewriter">
              <label>Text block:</label>
              <div>{this.state.regStr}</div>
            </div>
          </div>
          <div>
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
          </div>
          <button onClick={this.showResult}>Try It!</button>
          <button onClick={this.submitReg}>Follow that lead!</button>
        </div>
        <div>
          <p>The Result of your regEx is: {this.state.preview}</p>
        </div>
      </div>
    ) : (
      <div>Hold on one moment...</div>
    )
  }
}

//Container
const mapState = state => ({
  haystack: state.game.haystack,
  needle: state.game.needle,
  notallowed: state.game.notallowed
})

export default connect(mapState)(Problem)
