import React from 'react'
import { Link } from 'react-router-dom';
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  AppBar,
  Badge,
  Button,
  Drawer,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';
import AddCart from './card/AddCart';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const useStyles = {
  toolbar: {
    justifyContent: 'space-between'
  },
  drawer:{
    maxWidth: 345
  },
  heading: {
    height: '100%'
  },
};

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: false,
      anchorEN: false,
    }
  }

  render() {
    const { classes, cart } = this.props;
    const open = Boolean(this.state.anchorEl)

    const handleMenu = (event) => {
      event
        ? this.setState({ anchorEl: event.currentTarget })
        : this.setState({ anchorEl: null })
    };

    return (
      <AppBar position='static'>
        <Toolbar>
          <Grid container className={classes.toolbar}>
            <Grid item>
              <Button component={Link} to='/' color='inherit' className={classes.heading}>
                House of Optical
              </Button>
            </Grid>

            <Grid item>
              <Drawer className={classes.drawer} width={500} anchor='right' open={this.state.anchorEN} onClose={() => this.setState({ anchorEN: false }) }>
                <AddCart />
              </Drawer>

              <IconButton aria-label="cart" color="inherit" onClick={() => this.setState({ anchorEN: true }) }>
                <StyledBadge badgeContent={cart.items.length}>
                    <ShoppingCart />
                </StyledBadge>
              </IconButton>

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
                anchorEl={this.state.anchorEl}
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
                onClose={() => handleMenu(null)}
              >
                <MenuItem component={Link} onClick={() => handleMenu(null)} to='/login'>Login</MenuItem>
                <MenuItem component={Link} onClick={() => handleMenu(null)} to='/signup'>Sign up</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

export default compose(
  connect((state) => ({
    cart: state.cart
  })),
  withStyles(useStyles)
)(NavBar);