import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import VolumeOff from '@material-ui/icons/VolumeOff'
import IconButton from '@material-ui/core/IconButton'
import {setSound} from '../store/effects'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
})

class SoundIcon extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
    this.props.setSound()
    let sound = new Audio('/button.mp3')
    if (this.props.sound) {
      sound.play()
    }
  }

  render() {
    const {classes, sound} = this.props

    return (
      <React.Fragment>
        <IconButton
          aria-label="SoundIcon"
          color={this.state.clicked ? 'secondary' : 'primary'}
          className={classes.margin}
          onClick={this.handleClick}
        >
          <VolumeOff fontSize="small" />
        </IconButton>
      </React.Fragment>
    )
  }
}

SoundIcon.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => ({
  sound: state.effects.sound
})

const mapDispatch = dispatch => {
  return {
    setSound: () => dispatch(setSound())
  }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(SoundIcon))
