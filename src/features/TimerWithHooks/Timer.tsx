import React, { useState, useEffect } from "react"
import { withStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import styles from "./timerStyles"

interface Props {
  classes: {
    container: string
    seconds: string
    button: string
  }
}

const Timer: React.FC<Props> = ({ classes }) => {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setSeconds(0)
    setIsActive(false)
  }

  // useEffect is called after render
  useEffect(() => {
    let interval: any = null
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
    }
    if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    // return cleanup function
    return () => clearInterval(interval)
    // only rerun the effect if these state values change
  }, [isActive, seconds])

  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        className={classes.container}
      >
        <Grid item xs={12}>
          <div className={classes.seconds}>{seconds}s</div>
          <div>
            <Button
              color="primary"
              variant="contained"
              aria-label="Start Timer"
              className={classes.button}
              onClick={toggleTimer}
            >
              {isActive ? "Pause" : "Start"}
            </Button>
            <Button
              color="secondary"
              variant="contained"
              aria-label="Reset Timer"
              className={classes.button}
              onClick={resetTimer}
            >
              Reset
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Timer)
