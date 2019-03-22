import React from 'react'
import history from '../history'
import {connect} from 'react-redux'

class Boss extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heystack:
        "This is a very tricky string isn't it? We're talking about String Theory or something here!",
      needle: ['string', 'String'],
      question:
        "find every instance of 'string' in the folowing message upper and lowercase.",
      story:
        'Good thing for me I have a failsafe. A bomb! Unless you can decode the instructions for disarming the bomb within 30 seconds it will explode and I will make my escape!',
      picture:
        'https://i.pinimg.com/236x/f8/75/7f/f8757f1aae1b4dc7a3eeced04eb51c94--men-portrait-bowties.jpg',
      result: [''],
      preview: [''],
      elapsed: 0,
      start: new Date(),
      hideButton: 'visible',
      hideContent: 'hidden',
      input: ''
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

    if (currentTime > this.state.timer) {
      history.push(`/postboss`, {won: false})
    }
  }

  changeHandler(evt) {
    this.setState({input: evt.target.value})
    let inputArr = evt.target.value.split('/')
    let regInput = inputArr[1]
    let flags = inputArr[2]
    let regEx = new RegExp(regInput, flags)
    const result = this.state.heystack.match(regEx)
    console.log('result is ', result)
    if (result) {
      this.setState({result})
    }
  }

  submitReg(evt) {
    evt.preventDefault()
    if (this.isSame(this.state.result, this.state.needle)) {
      console.log('you got it!')
      history.push(`/postboss`, {won: true})
    } else {
      console.log('you lose loser!')
      history.push(`/postboss`, {won: false})
    }
  }

  render() {
    let elapsed = Math.round(this.state.elapsed / 100)
    let seconds = (elapsed / 10).toFixed(1)
    return this.state.heystack ? (
      <div className="typewriter">
        <div className="bossContainer">
          <h2>You've found me you scoundrel!</h2>
          <img src={this.state.picture} />
          <p>{this.state.story}</p>
          <div className={this.state.hideButton}>
            <button onClick={this.isHidden}>Begin</button>
          </div>
          <div className={this.state.hideContent}>
            <b>{seconds} seconds</b>
            <p>{this.state.question}</p>
            <h1>{this.state.heystack}</h1>
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
