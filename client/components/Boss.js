import React from 'react'
import history from '../history'
import {connect} from 'react-redux'

class Boss extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      regStr:
        "This is a very tricky string isn't it? We're talking about String Theory or something here!",
      goal: ['string', 'String'],
      result: [''],
      preview: [''],
      elapsed: 0,
      start: new Date(),
      hideButton: 'visible',
      hideContent: 'hidden'
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitReg = this.submitReg.bind(this)
    this.isSame = this.isSame.bind(this)
    this.tick = this.tick.bind(this)
    this.isHidden = this.isHidden.bind(this)
  }

  isHidden() {
    let date = new Date()
    this.setState({start: date, hideButton: 'hidden', hideContent: 'visible'})
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
    this.timer = setInterval(this.tick, 60)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    let currentTime = new Date() - this.state.start
    this.setState({elapsed: currentTime})

    if (currentTime > 60000) {
      history.push(`/incorrect`)
    }
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
      history.push(`/correct`)
    } else {
      console.log('you lose loser!')
      history.push(`/incorrect`)
    }
  }

  render() {
    let elapsed = Math.round(this.state.elapsed / 100)
    let seconds = (elapsed / 10).toFixed(1)
    return this.state.regStr ? (
      <div className="typewriter">
        <div className="bossContainer">
          <h2>You've found me you scoundrel!</h2>
          <img src="https://i.pinimg.com/236x/f8/75/7f/f8757f1aae1b4dc7a3eeced04eb51c94--men-portrait-bowties.jpg" />
          <p>
            Good thing for me I have a failsafe. A bomb! Unless you can decode
            the instructions for disarming the bomb within 60 seconds it will
            explode and I will make my escape!
          </p>
          <div className={this.state.hideButton}>
            <button onClick={this.isHidden}>Begin</button>
          </div>
          <div className={this.state.hideContent}>
            <b>{seconds} seconds</b>
            <p>
              find every instance of 'string' in the folowing message upper and
              lowercase.
            </p>
            <h1>{this.state.regStr}</h1>
            <input
              type="text"
              onChange={this.changeHandler}
              value={this.state.input}
              placeholder="/write your regEx here/"
            />
            <button onClick={this.submitReg}>Decode!</button>
          </div>
        </div>
      </div>
    ) : (
      <div>hang on</div>
    )
  }
}

export default connect()(Boss)
