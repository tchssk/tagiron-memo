import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import yellow from "@material-ui/core/colors/yellow";
import green from "@material-ui/core/colors/green";
import orange from "@material-ui/core/colors/orange";
import grey from "@material-ui/core/colors/grey";

const RedButton = props => {
  const classes = makeStyles(theme => ({
    button: {
      color: "white",
      minWidth: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }))();
  const [backgroundColor, setBackgroundColor] = useState(red[500]);
  return (
    <Button
      className={classes.button}
      fullWidth={true}
      onClick={() =>
        setBackgroundColor(backgroundColor === red[500] ? grey[300] : red[500])
      }
      style={{ backgroundColor: backgroundColor }}
      variant="contained"
      {...props}
    />
  );
};

const BlueButton = props => {
  const classes = makeStyles(theme => ({
    button: {
      color: "white",
      minWidth: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }))();
  const [backgroundColor, setBackgroundColor] = useState(blue[500]);
  return (
    <Button
      className={classes.button}
      fullWidth={true}
      onClick={() =>
        setBackgroundColor(
          backgroundColor === blue[500] ? grey[300] : blue[500]
        )
      }
      style={{ backgroundColor: backgroundColor }}
      variant="contained"
      {...props}
    />
  );
};

const YellowButton = props => {
  const classes = makeStyles(theme => ({
    button: {
      minWidth: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }))();
  const [backgroundColor, setBackgroundColor] = useState(yellow[500]);
  const [color, setColor] = useState("black");
  return (
    <Button
      className={classes.button}
      fullWidth={true}
      onClick={() => {
        setBackgroundColor(
          backgroundColor === yellow[500] ? grey[300] : yellow[500]
        );
        setColor(color === "black" ? "white" : "black");
      }}
      style={{ backgroundColor: backgroundColor, color: color }}
      variant="contained"
      {...props}
    />
  );
};

const ChangeablePaper = props => {
  const classes = makeStyles(theme => ({
    paper: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    }
  }))();
  const [backgroundColor, setBackgroundColor] = useState('white');
  return (
    <Paper
      className={classes.paper}
      onClick={() => {
        switch (backgroundColor) {
          case 'white':
            setBackgroundColor(red[500]);
            break;
          case red[500]:
            setBackgroundColor(blue[500]);
            break;
          case blue[500]:
            setBackgroundColor(yellow[500]);
            break;
          case yellow[500]:
            setBackgroundColor(green[500]);
            break;
          case green[500]:
            setBackgroundColor(orange[500]);
            break;
          default:
            setBackgroundColor('white');
        }
      }}
      style={{ backgroundColor: backgroundColor }}
      {...props}
    />
  );
};

const Cards = () => {
  const classes = makeStyles(theme => ({
    paper: {
      color: theme.palette.text.secondary,
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      textAlign: "center",
      whiteSpace: "nowrap"
    }
  }))();

  return (
    <Paper className={classes.paper} elevation={2}>
      <Grid container spacing={1}>
        <Grid item xs>
          <RedButton>
            0
          </RedButton>
        </Grid>
        <Grid item xs>
          <RedButton>
            1
          </RedButton>
        </Grid>
        <Grid item xs>
          <RedButton>
            2
          </RedButton>
        </Grid>
        <Grid item xs>
          <RedButton>
            3
          </RedButton>
        </Grid>
        <Grid item xs>
          <RedButton>
            4
          </RedButton>
        </Grid>
        <Grid item xs>
          <YellowButton>
            5
          </YellowButton>
        </Grid>
        <Grid item xs>
          <RedButton>
            6
          </RedButton>
        </Grid>
        <Grid item xs>
          <RedButton>
            7
          </RedButton>
        </Grid>
        <Grid item xs>
          <RedButton>
            8
          </RedButton>
        </Grid>
        <Grid item xs>
          <RedButton>
            9
          </RedButton>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <BlueButton>
            0
          </BlueButton>
        </Grid>
        <Grid item xs>
          <BlueButton>
            1
          </BlueButton>
        </Grid>
        <Grid item xs>
          <BlueButton>
            2
          </BlueButton>
        </Grid>
        <Grid item xs>
          <BlueButton>
            3
          </BlueButton>
        </Grid>
        <Grid item xs>
          <BlueButton>
            4
          </BlueButton>
        </Grid>
        <Grid item xs>
          <YellowButton>
            5
          </YellowButton>
        </Grid>
        <Grid item xs>
          <BlueButton>
            6
          </BlueButton>
        </Grid>
        <Grid item xs>
          <BlueButton>
            7
          </BlueButton>
        </Grid>
        <Grid item xs>
          <BlueButton>
            8
          </BlueButton>
        </Grid>
        <Grid item xs>
          <BlueButton>
            9
          </BlueButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

const Player = () => {
  const classes = makeStyles(theme => ({
    container: {
      marginBottom: theme.spacing(1)
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
    paperRed: {
      borderColor: red[200],
      borderWidth: '2px',
      padding: theme.spacing(1)
    },
    paperBlue: {
      borderColor: blue[200],
      borderWidth: '2px',
      padding: theme.spacing(1)
    },
    paperGrey: {
      borderWidth: '2px',
      padding: theme.spacing(1)
    },
    textField: {
      borderRadius: '4px',
      background: 'white'
    },
  }))();

  return (
    <Paper className={classes.paper} elevation={2}>
      <Grid container className={classes.container} spacing={1}>
        <Grid item xs>
          <ChangeablePaper>
            <TextField
              className={classes.textField}
              fullWidth={true}
              inputProps={{ style: { textAlign: "center" } }}
              onClick={ event => event.stopPropagation() }
              size="small"
              type="number"
              variant="outlined"
            />
          </ChangeablePaper>
        </Grid>
        <Grid item xs>
          <ChangeablePaper>
            <TextField
              className={classes.textField}
              fullWidth={true}
              inputProps={{ style: { textAlign: "center" } }}
              onClick={ event => event.stopPropagation() }
              size="small"
              type="number"
              variant="outlined"
            />
          </ChangeablePaper>
        </Grid>
        <Grid item xs>
          <ChangeablePaper>
            <TextField
              className={classes.textField}
              fullWidth={true}
              inputProps={{ style: { textAlign: "center" } }}
              onClick={ event => event.stopPropagation() }
              size="small"
              type="number"
              variant="outlined"
            />
          </ChangeablePaper>
        </Grid>
        <Grid item xs>
          <ChangeablePaper>
            <TextField
              className={classes.textField}
              fullWidth={true}
              inputProps={{ style: { textAlign: "center" } }}
              onClick={ event => event.stopPropagation() }
              size="small"
              type="number"
              variant="outlined"
            />
          </ChangeablePaper>
        </Grid>
        <Grid item xs>
          <ChangeablePaper>
            <TextField
              className={classes.textField}
              fullWidth={true}
              inputProps={{ style: { textAlign: "center" } }}
              onClick={ event => event.stopPropagation() }
              size="small"
              type="number"
              variant="outlined"
            />
          </ChangeablePaper>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <TextField
            className={classes.textField}
            fullWidth={true}
            inputProps={{ style: { textAlign: "center" } }}
            label="前方3枚"
            size="small"
            type="number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            className={classes.textField}
            fullWidth={true}
            inputProps={{ style: { textAlign: "center" } }}
            label="中央3枚"
            size="small"
            type="number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            className={classes.textField}
            fullWidth={true}
            inputProps={{ style: { textAlign: "center" } }}
            label="後方3枚"
            size="small"
            type="number"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <TextField
            className={classes.textField}
            fullWidth={true}
            inputProps={{ style: { textAlign: "center" } }}
            label="最大 − 最小"
            size="small"
            type="number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            className={classes.textField}
            fullWidth={true}
            inputProps={{ style: { textAlign: "center" } }}
            label="中央５以上４以下"
            size="small"
            type="number"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paperRed} variant="outlined">
            <Grid container spacing={1}>
              <Grid item xs>
                <TextField
                  className={classes.textField}
                  fullWidth={true}
                  inputProps={{ style: { textAlign: "center" } }}
                  label="枚数"
                  size="small"
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  className={classes.textField}
                  fullWidth={true}
                  inputProps={{ style: { textAlign: "center" } }}
                  label="合計"
                  size="small"
                  type="number"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paperBlue} variant="outlined">
            <Grid container spacing={1}>
              <Grid item xs>
                <TextField
                  className={classes.textField}
                  fullWidth={true}
                  inputProps={{ style: { textAlign: "center" } }}
                  label="枚数"
                  size="small"
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  className={classes.textField}
                  fullWidth={true}
                  inputProps={{ style: { textAlign: "center" } }}
                  label="合計"
                  size="small"
                  type="number"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paperGrey} variant="outlined">
            <Grid container spacing={1}>
              <Grid item xs>
                <TextField
                  className={classes.textField}
                  fullWidth={true}
                  inputProps={{ style: { textAlign: "center" } }}
                  label="ペア"
                  size="small"
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  className={classes.textField}
                  fullWidth={true}
                  inputProps={{ style: { textAlign: "center" } }}
                  label="全合計"
                  size="small"
                  type="number"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paperGrey} variant="outlined">
            <Grid container spacing={1}>
              <Grid item xs>
                <TextField
                  className={classes.textField}
                  fullWidth={true}
                  inputProps={{ style: { textAlign: "center" } }}
                  label="偶数"
                  size="small"
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  className={classes.textField}
                  fullWidth={true}
                  inputProps={{ style: { textAlign: "center" } }}
                  label="奇数"
                  size="small"
                  type="number"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default function App() {
  return (
    <Container disableGutters={true}>
      <Box>
        <Cards />
        <Player />
        <Player />
        <Player />
      </Box>
    </Container>
  );
}
