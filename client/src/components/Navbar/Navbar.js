import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import TemporaryDrawer from '../Drawer';
import { Link } from "react-router-dom";
import auth0Client from "../Auth";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Navbar extends Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logOut = () => {
      auth0Client.signOut();
      this.handleClose();
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>              
            <TemporaryDrawer /> 
            <Typography variant="h6" color="inherit" className={classes.grow}
            ><Link
                    to="/dashboard"
                    className={
                      window.location.pathname === "/" ? "nav-link" : "nav-link"
                    }
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                    WORKOUT APP
                  </Link></Typography>
            {auth0Client.isAuthenticated() ?(
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={() => this.handleClose()}><Link to='/dashboard'style={{ textDecoration: 'none', color: 'inherit' }}>Profile</Link></MenuItem>
                  <MenuItem onClick={()=> this.logOut()}><Link to='/'style={{ textDecoration: 'none', color: 'inherit' }}>Log Out</Link></MenuItem>
                </Menu>
              </div>
            ):(
              <Button color="inherit"
                        onClick= {()=> auth0Client.signIn()}>Login
                        </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);