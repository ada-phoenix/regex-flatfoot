import React from 'react'

class Problem extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      regStr: 'Crimes are afoot!'
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(evt) {
    const re = new RegExp(evt.target.value, 'i')
    console.log('RE: ', re)
    const splitStr = re.exec(this.state.regStr)
    console.log(splitStr)

    this.setState({input: evt.target.value})
  }

  render() {
    return (
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
        <button>Try It!</button>
        <button>Submit</button>
      </div>
    )
  }
}

export default Problem
