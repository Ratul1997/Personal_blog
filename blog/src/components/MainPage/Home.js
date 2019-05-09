import React from 'react';

import logo from '../../Css/W3School/back.jpg';

import { AppBar, Paper, withStyles, Toolbar, Typography, Grid } from '@material-ui/core'
import '../../Css/W3School/Home.css'
import { Link } from 'react-router-dom'

const style = {

  grow: {
    flexGrow: .7,
  },
  app: {
    background: 'transparent'
  },
  paperContainer: {
    height: 700,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    width: "100%",
    maxWidth: "none",
    backgroundImage: 'url(' + logo + ')'
  },
  show: {
    transform: 'translateY(0)',
    transition: 'transform .5s',
  },
  hide: {
    transform: 'translateY(-110%)',
    transition: 'transform .5s',
  },
  typoHi: {
    background: "#fff"
  },
  nav: {

  }

};

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldShow: null,
    };
    this.lastScroll = null;

    this.handleScroll = this.handleScroll.bind(this);
    // Alternatively, you can throttle scroll events to avoid
    // updating the state too often. Here using lodash.
    // this.handleScroll = _.throttle(this.handleScroll.bind(this), 100);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(evt) {
    const lastScroll = window.scrollY;

    if (lastScroll === this.lastScroll) {
      return;
    }

    const shouldShow = (this.lastScroll !== null) ? (lastScroll < this.lastScroll) : null;

    if (shouldShow !== this.state.shouldShow) {
      this.setState((prevState, props) => ({
        ...prevState,
        shouldShow,
      }));
    }

    this.lastScroll = lastScroll;
  }
  handle_admin() {
    return (
      <Link to="/"></Link>
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <AppBar className={`${classes.app} ${
          this.state.shouldShow === null ? '' : (
            this.state.shouldShow ? classes.show : classes.hide
          )
          }`}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              My Blog
          </Typography>
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Algorithm</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">About</a></li>
                <li><Link to="/login">Admin</Link></li>
              </ul>
            </nav>
            <div class="search-box">
              <input class="search-txt" type="text" name="" placeholder="type here" />
              <a class="search-btn" href="#">
                <i class="fas fa-search"></i>
              </a>
            </div>
          </Toolbar>
        </AppBar>

        <Paper style={style.paperContainer}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
          >
            <font size="20" className="pa">Hi!</font>
            <font size="25" className="name">I Am Ratul</font>
          </Grid>
        </Paper>

      </div>
    );
  }

}

export default withStyles(style)(Home);
{/* <div class="container">
            <nav>
                <label for="nav" class="nav-btn">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </label>
                <div class="logo">
                    <a href="#">Blog</a>
                </div>
                <div class = "nav-wrapper">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Algorithm</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Admin</a></li>
                    </ul>
                </div>
            </nav>
        </div> */}