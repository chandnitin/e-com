import React, {  useState, forwardRef } from 'react';
import {List, ListItem, Collapse, Button, Drawer, Link } from '@material-ui/core';
import clsx from 'clsx';
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import menuItems from './sideBarItems';
import { NavLink as RouterLink, Redirect } from 'react-router-dom';
import useStyles from './menuBarStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
const MenuBar = (props) => {
    const [ menu, setMenu ] = useState({});
    const { className, ...rest } = props;
    
    const classes  = useStyles();
    const handleClick = (item) => {
        let newData = {...menu, [item] : !menu[item]};
        setMenu(newData);
    }
    
    const handleClose = () => {
      setAnchorEl(null);
      
    };
    const handleMenu1 = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const CustomRouterLink = forwardRef((props, ref) => (
      <div ref={ref} style={{ flexGrow: 1 }}>
        <RouterLink {...props} />
      </div>
    ));
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
    const handleMenu = ( children, level=0 ) => {
        return children.map(({children, name, url, links }) => {
            if ( !children ) {
              return (
                <List component="div" disablePadding key={ name }>
                  <ListItem
                    className={classes.item}
                    disableGutters
                    style={{padding:"0px"}}
                    key={name}
                    onClick={toggleDrawer('left', false)} 
                  >
                    <Button
                      className={clsx({
                        [classes.btnRoot] : true,
                        [classes.button] : true,
                        [classes.subMenu] : level
                      })}
                      component={CustomRouterLink}
                      to={url}
                      
                    >
                      {name}
                    </Button>
                  </ListItem>
                </List>
              )
            }
            const rdirect=()=>{
                alert('ok');
            }
            return (
              <div key={ name }>
              <ListItem
                className={classes.item}
                disableGutters
                key={name}
                onClick={() => handleClick(name)}
              >
                <Button
                className={clsx({
                  [classes.btnRoot] : true,
                  [classes.button] : true,
                  [classes.subMenu] : level
                })}>
                  { name } { menu[ name ] ? <ExpandLess /> : <ExpandMore />}
                  </Button>
                </ListItem>
                <Collapse
                  in={ (menu[name]) ? true : false }
                  timeout="auto"
                  unmountOnExit
                >
                  { handleMenu( children, 1) }
                </Collapse>
              </div>
            )
        })
    }

    return (

      <AppBar position="static">
          <Toolbar variant="regular">
            
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  onClick={toggleDrawer('left', true)} >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              e- Cart
            </Typography>
           
            <div className="menu-rigth">
           
            {auth && (
            <div >
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu1}
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
          <Link  to="/some-route">
           <IconButton aria-label="show 17 new notifications" color="inherit" onClick={() => <Redirect to={'/addtocart/2'} />}
           
           >
              
              <Badge badgeContent={17} color="secondary" >
                <ShoppingCartIcon />
              </Badge>
            
            </IconButton>
            </Link>
          </div>
        
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)} classes={{ paper: classes.drawer }}>
              <div className="headding">
                  <Button className="img-logo">e-Cart</Button>
              </div>
            <List {...rest} className={clsx(classes.root, className)} >
              { handleMenu(menuItems.data) }
          </List>
          </Drawer>
          </Toolbar>
        </AppBar>
     
   )
}

export default MenuBar;
