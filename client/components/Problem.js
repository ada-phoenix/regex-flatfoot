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
      result: ['']
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.showResult = this.showResult.bind(this)
    this.submitReg = this.submitReg.bind(this)
  }

  showResult() {
    let regEx = new RegExp(this.state.input, 'i')
    const result = regEx.exec(this.state.regStr)
    if (result) {
      this.setState({result})
    } else {
      this.setState({result: ['nothing to see here']})
    }
  }

  changeHandler(evt) {
    const re = new RegExp(evt.target.value, 'i')
    const splitStr = re.exec(this.state.regStr)
    this.setState({input: evt.target.value})
  }

  submitReg(evt) {
    evt.preventDefault()
    let regEx = new RegExp(this.state.input, 'i')
    const result = regEx.exec(this.state.regStr)
    console.log('props are ', this.props)
    if (result[0] === this.state.goal) {
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
          <p>The Result of your regEx is: {this.state.result[0]}</p>
        </div>
      </div>
    )
  }
}

export default Problem
