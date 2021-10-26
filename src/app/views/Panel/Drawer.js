import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useSelector } from "react-redux";
import { getMeSelector } from "../../store/selectors";
import Doctors from "../Doctors";
import { Link } from "react-router-dom";
import { Route, Switch, useRouteMatch } from "react-router"
import DoctorDetails from "../DoctorDetails";
import { blue, grey } from '@mui/material/colors';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import logo from "./logo.svg"
import { Button, InputBase, TextField } from '@mui/material';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import AddDoctor from '../AddDoctor';
import { Categories } from '..';
import Clients from '../Clients';
import Feedbacks from '../Feedbacks';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const onClick = () => {
  localStorage.removeItem("access")
  window.location = "/login";
}

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const user = useSelector(getMeSelector);
  const match = useRouteMatch()

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open} sx={{ zIndex: 0, boxShadow: 0 }}>
        <Toolbar sx={{ bgcolor: 'white', display: "flex", justifyContent: "space-between" }}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ ...(!open && { ml: 7 }) }}
          >
            {open ? <FormatIndentDecreaseIcon sx={{ height: "30px", width: "30px" }} /> :
              <FormatIndentIncreaseIcon sx={{ height: "30px", width: "30px" }} />}
          </IconButton>
          <Button
            size="small"
            variant="outlined"
            sx={{ bgcolor: blue[300], borderColor: blue[300], color: 'white' }}
            onClick={onClick}>
            Выйти
          </Button>
        </Toolbar>

      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader sx={{ ml: 0 }}>
          <div className="logo-div">
            <img src={logo} alt="AlloDocLogo" className="logo" />
          </div>
        </DrawerHeader>
        <List sx={{ bgcolor: 'white', height: "100%", width: "100%" }}>
          {/* <Link to={`${match.url}/home`}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          </Link> */}
          <Link to={`${match.url}/doctors`}>
            <ListItem button>
              <ListItemIcon>
                <PersonOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Доктора" sx={{ color: grey[800] }} />
            </ListItem>
          </Link>
          <Link to={`${match.url}/client`}>
            <ListItem button>
              <ListItemIcon>
                <PersonOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Клиенты" sx={{ color: grey[800] }} />
            </ListItem>
          </Link>
          <Link to={`${match.url}/feed-back`}>
            <ListItem button>
              <ListItemIcon>
                <ForumOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Обратная связь" sx={{ color: grey[800] }} />
            </ListItem>
          </Link>
          <Link to={`${match.url}/category`}>
            <ListItem button>
              <ListItemIcon>
                <BorderColorOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Категории" sx={{ color: grey[800] }} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "#f0f2f5" }}>
        <DrawerHeader />
        <Switch>
          <Route path={`${match.url}/doctors/add`}>
            <AddDoctor />
          </Route>
          <Route path={`${match.url}/doctors/:id`}>
            <DoctorDetails />
          </Route>
          <Route path={`${match.url}/home`}>
            <h2>Welcome back {user ? user.first_name : ""}!</h2>
          </Route>
          <Route path={`${match.url}/doctors`}>
            <Doctors />
          </Route>
          <Route path = {`${match.url}/category`}>
            <Categories></Categories>
          </Route>
          <Route path={`${match.url}/client`}>
            <Clients />
          </Route>
          <Route path={`${match.url}/feed-back`}>
            <Feedbacks />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}