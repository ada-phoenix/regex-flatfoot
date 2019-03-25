import React from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const styles = theme => ({})

class Casefile extends React.Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    return (
      <React.Fragment>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Open Casefile
        </Button>
        <Dialog
          fullWidth={true}
          maxWidth="md"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="open-casefile"
        >
          <DialogTitle>Casefile</DialogTitle>
          <DialogContent>
            {this.props.casefile.map((clue, i) => {
              return (
                <DialogContentText key={clue} color="primary">
                  {`${i + 1}) `}
                  {clue}
                </DialogContentText>
              )
            })}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              X
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

const mapState = state => ({
  casefile: state.user.casefile
})

export default connect(mapState)(withStyles(styles)(Casefile))
