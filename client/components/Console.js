import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Notes from './Notes'
import Lesson from './Lesson'
import Casefile from './Casefile'

const styles = {
  card: {
    maxWidth: 600
  },
  media: {
    height: 250
  }
}

function Console(props) {
  const {classes} = props
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://theartsdesk.com/sites/default/files/images/stories/TV/Lis_Ferla/THE_BLETCHLEY_CIRCLE_SERIES2_EP1_05.JPG"
        title="The Comissioner"
      />
      <CardActions>
        <Casefile />
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

Console.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Console)
