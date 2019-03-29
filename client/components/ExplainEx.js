import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import history from '../history'
import {withStyles} from '@material-ui/core'
import ConsoleIcon from './ConsoleIcon'
import NotesIcon from './NotesIcon'
import CasefileIcon from './CasefileIcon'
import FolderIcon from '@material-ui/icons/Folder'
import LessonIcon from './LessonIcon'
import IconButton from '@material-ui/core/IconButton'
import AssignmentIcon from '@material-ui/icons/Assignment'
import SubjectIcon from '@material-ui/icons/Subject'
import HelpOutline from '@material-ui/icons/HelpOutline'

const styles = theme => ({
  root: {
    margin: 50,
    padding: 50,
    maxWidth: 800,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light
  },
  button: {
    margin: 50,
    justifyContent: 'center'
  },
  subtitle2: {
    margin: 25,
    fontFamily: 'Cutive'
  },
  h2: {
    textAlign: 'center',
    fontFamily: 'Cutive',
    margin: '15px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '50px'
    }
  },
  consoleAndText: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down(900)]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between'
  },
  explainText: {
    padding: '20px',
    margin: '0px'
  },
  console: {
    marginTop: '25px',
    marginBottom: '20px'
  },
  margin: {
    margin: theme.spacing.unit,
    height: '60px'
  }
})

class ExplainEx extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {}

  render() {
    const {classes} = this.props
    return (
      <Paper className={classes.root}>
        <Typography className={classes.h2} variant="h2">
          Welcome, rookie!
        </Typography>
        <div className={classes.consoleAndText}>
          <div className={classes.console}>
            <ConsoleIcon />
          </div>
          <div className={classes.explainText}>
            <Typography className={classes.subtitle2} variant="subtitle2">
              "Bletchley Academy of Decryption tells us that you're their best
              new grad, and we need your help. We've intercepted an encoded
              message from the GREP Crime Syndicate. They are famous for their
              complex codes, but we think you can decode their messages using
              regular expressions. Have you heard of regular expressions - aka
              regEx? Clever programmers use Regular Expressions to match
              character combinations in text. The simplest regular expression is
              just the character or word you want to match. For example,
              /doughnut/ would match the word "doughnut" in the sentence, "I'd
              love a doughnut."
            </Typography>
          </div>
        </div>

        <Typography className={classes.subtitle2} variant="subtitle2">
          Who am I? Oh, I'm your trusty commissioner. I'll be in touch with you
          throughout your journey in this handy console. You're console has a
          few features you should know about.
        </Typography>

        <div className={classes.flexRow}>
          <AssignmentIcon
            fontSize="large"
            color="secondary"
            className={classes.margin}
          />

          <Typography className={classes.subtitle2} variant="subtitle2">
            Click the clipboard icon to see your notes. These are short synopsis
            of what you've learned so far.
          </Typography>
        </div>

        <div className={classes.flexRow}>
          <FolderIcon
            fontSize="large"
            color="secondary"
            className={classes.margin}
          />
          <Typography className={classes.subtitle2} variant="subtitle2">
            Click the folder icon to take a look at your casefile. This is where
            all of your clues are stored. You'll see a green dot next to the
            folder when you have a new clue! These will help you choose a
            destination when it's time to track down the criminal.
          </Typography>
        </div>

        <div className={classes.flexRow}>
          <SubjectIcon
            fontSize="large"
            color="secondary"
            className={classes.margin}
          />
          <Typography className={classes.subtitle2} variant="subtitle2">
            Click the text icon to see your current lesson. You might find
            yourself reaching for this on a particularly tricky piece of
            encryption.
          </Typography>
        </div>

        <div className={classes.flexRow}>
          <HelpOutline
            fontSize="large"
            color="secondary"
            className={classes.margin}
          />
          <Typography className={classes.subtitle2} variant="subtitle2">
            If you see this question mark, you've hit a rough patch and you're
            replaying a level. That's ok! You can click the question mark icon
            for a hint.
          </Typography>
        </div>

        <Typography className={classes.subtitle2} variant="subtitle2">
          Now let's get crackin'! Don't forget to wrap your regular expressions
          in forward slashes /like this/!"
        </Typography>

        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => history.push('/question')}
        >
          Play
        </Button>
      </Paper>
    )
  }
}

export default connect()(withStyles(styles)(ExplainEx))
