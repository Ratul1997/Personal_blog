import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, Link } from '@material-ui/core';

import PropTypes from 'prop-types';
import {
    withRouter
  } from 'react-router-dom'
  
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class Login extends React.Component {

    constuctor(){

        this.routeChange = this.routeChange.bind(this);

        this.state = {
            companyName: '',
            userName: '',
            password: '',
            data: []
        }
    }

    handleOnchange = (event, field) => {
        console.log(field)
        switch (field) {
            case "companyName": this.setState({ companyName: event.target.value })
            case "userName": this.setState({ userName: event.target.value })
            case "Password": this.setState({ password: event.target.value })
        }
    }
    handleOnclick = () => {
        let route = '/'
        this.context.history.push(route);
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding}>

                <div className={classes.margin}>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="username" label="Company Name" fullWidth autoFocus required onChange={(event) => this.handleOnchange(event, 'companyName')} />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="username" label="Username" type="email" fullWidth autoFocus required
                            onChange={(event) => this.handleOnchange(event, 'userName')}
                        />
                    </Grid>

                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="username" label="Password" type="password" fullWidth required
                            onChange={(event) => this.handleOnchange(event, 'Password')}
                        />
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }}
                            onClick={this.handleOnclick}
                        >Login</Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}
Login.propTypes = {
    history: PropTypes.object.isRequired
};
export default withStyles(styles)(Login)
// component={Link} to="/home"