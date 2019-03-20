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
      preview: ['']
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.showResult = this.showResult.bind(this)
    this.submitReg = this.submitReg.bind(this)
    this.isSame = this.isSame.bind(this)
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
    console.log('preview now ', this.state.result)
  }

  changeHandler(evt) {
    this.setState({input: evt.target.value})
    let inputArr = evt.target.value.split('/')
    let regInput = inputArr[1]
    let flags = inputArr[2]
    let regEx = new RegExp(regInput, flags)
    const result = this.state.regStr.match(regEx)
    console.log('result is ', result)
    if (result) {
      this.setState({result})
    }
  }

  submitReg(evt) {
    evt.preventDefault()
    console.log('result ', this.state.result, 'goal ', this.state.goal)
    if (this.isSame(this.state.result, this.state.goal)) {
      console.log('you got it!')
      this.props.history.push(`/correct`)
    } else {
      console.log('you lose loser!')
      this.props.history.push(`/incorrect`)
    }
  }

  render() {
    return this.props.haystack ? (
      <div>
        <div className="container">
          <div className="typewriter">
            <label>Text block:</label>
            <h1>{this.state.regStr}</h1>
          </div>
          <div>
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
  needle: state.game.needle
})

export default connect(mapState)(Problem)
