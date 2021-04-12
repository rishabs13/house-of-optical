import React from 'react'
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
  
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between'
  },
  drawer:{
    maxWidth: 345
  },
  heading: {
    height: '100%'
  },
});

function NavBar2() {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [anchorEN, setAnchorEN] = React.useState(false);

  const classes = useStyles();
  const open = Boolean(anchorEl)
  const opened = Boolean(anchorEN)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container className={classes.toolbar}>
          <Grid item>
          <Typography component="h1" variant="h5">
          House of Optical
        </Typography>
           
          </Grid>

          <Grid item>

            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
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
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem component={Link} onClick={handleClose} to='/login'>Login</MenuItem>
              <MenuItem component={Link} onClick={handleClose} to='/signup'>Sign up</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar2;