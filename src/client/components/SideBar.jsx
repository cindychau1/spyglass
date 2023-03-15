import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import {
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon
} from '@mui/material';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import BarChartIcon from '@mui/icons-material/BarChart';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import { Link } from 'react-router-dom';
import spyglass from '../../../assets/logo-no-background.png';

const drawerWidth = 240;
function SideBar() {
  return (
    <Drawer
      className="sideBar"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          border: 'none',
          bgcolor: '#132c44',
          color: '#fff'
        }
      }}
      variant="permanent"
      anchor="left"
    >
      <img src={spyglass} className="spyglass-logo" alt="spyglass-logo" />
      <Toolbar />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Cluster Metrics" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PriceChangeIcon />
            </ListItemIcon>
            <Link to="/cost">
              <ListItemText primary="Cost Analysis" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NotificationImportantIcon />
            </ListItemIcon>
            <Link>
              <ListItemText primary="Alerts" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideBar;
