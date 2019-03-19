import React from 'react'
import {Route} from 'react-router-dom'
import history from '../history'

class Problem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      regStr: 'Crimes are afoot!',
      goal: 'Crime',
      result: [''],
      preview: ['']
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.showResult = this.showResult.bind(this)
    this.submitReg = this.submitReg.bind(this)
  }

  showResult() {
    this.setState({preview: this.state.result})
  }

  changeHandler(evt) {
    this.setState({input: evt.target.value})
    let inputArr = evt.target.value.split('/')
    let regInput = inputArr[1]
    let flags = inputArr[2]
    let regEx = new RegExp(regInput, flags)
    const result = this.state.regStr.match(regEx)
    if (result) {
      this.setState({result})
    }
  }

  submitReg(evt) {
    evt.preventDefault()
    if (this.state.result[0] === this.state.goal) {
      console.log('you got it!')
      this.props.history.push(`/correct`)
    } else {
      console.log('you lose loser!')
      this.props.history.push(`/wrong`)
    }
  }

  render() {
    return (
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
          <button onClick={this.submitReg}>Submit</button>
        </div>
        <div>
          <p>The Result of your regEx is: {this.state.preview}</p>
        </div>
      </div>
    )
  }
}

export default Problem
