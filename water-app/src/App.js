import './App.css';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: '100%',
  },
  control: {
    padding: theme.spacing(1),
  },
  grid: {
    padding:theme.spacing(1)
  }
}));

function App() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

  return (
    <div className="App"style={{backgroundColor: '#f5f5f5'}}>
      <Box m={1} pt={1} >
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            {[0, 1, 2].map((value) => (
              <Grid key={value} item  xs={4} className={classes.grid}>
                <Paper className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
