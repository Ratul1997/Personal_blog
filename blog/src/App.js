import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Link
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import Home from './components/MainPage/Home';
import Login from './components/MainPage/Login';

const App = () => (
  <Router>
    <div>
      <main>
        <Switch>
          <Route exact path="/login"  render={() => {
            return (
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
              >
                <Login />
              </Grid>
            )
          }} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;