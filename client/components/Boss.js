import React from 'react'
import history from '../history'
import {connect} from 'react-redux'

class Boss extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 30000,
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
    this.incrementer = setInterval(this.tick, 60)
  }

  componentWillUnmount() {
    clearInterval(this.incrementer)
  }

  tick() {
    let currentTime = new Date() - this.state.start
    this.setState({elapsed: currentTime})

    if (currentTime > this.props.time) {
      history.push(`/postboss`, {won: false})
    }
  }

  changeHandler(evt) {
    this.setState({input: evt.target.value})
    let inputArr = evt.target.value.split('/')
    let regInput = inputArr[1]
    let flags = inputArr[2]
    let regEx = new RegExp(regInput, flags)
    const result = this.props.haystack.match(regEx)
    if (result) {
      this.setState({result})
    }
  }

  submitReg(evt) {
    evt.preventDefault()
    if (this.isSame(this.state.result, this.props.needle)) {
      history.push(`/postboss`, {won: true})
    } else {
      history.push(`/postboss`, {won: false})
    }
  }

  render() {
    let elapsed = Math.round(this.state.elapsed / 100)
    let seconds = (elapsed / 10).toFixed(1)
    return this.props.haystack ? (
      <div className="typewriter">
        <div className="bossContainer">
          <h2>You've found me you scoundrel!</h2>
          <img src={this.props.picture} />
          <p>{this.props.story}</p>
          <div className={this.state.hideButton}>
            <button onClick={this.isHidden}>Begin</button>
          </div>
          <div className={this.state.hideContent}>
            <b>{seconds} seconds</b>
            <p>{this.props.question}</p>
            <h1>{this.props.haystack}</h1>
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

const mapState = state => {
  return {
    cluster: state.cluster || {},
    haystack: state.cluster.boss.haystack || '',
    needle: state.cluster.boss.needle || '',
    question: state.cluster.boss.question || '',
    time: state.cluster.boss.time || 1,
    story: state.cluster.boss.story || '',
    picture: state.cluster.boss.picture || '',
    correct: state.cluster.boss.correct || '',
    incorrect: state.cluster.boss.incorrect || ''
  }
}

export default connect(mapState)(Boss)
