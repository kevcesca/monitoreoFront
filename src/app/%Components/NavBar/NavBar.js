import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import styles from './NavBar.module.css';

import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionIcon from '@mui/icons-material/Description';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import StorageIcon from '@mui/icons-material/Storage';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import AppsIcon from '@mui/icons-material/Apps';

export default function NavBar() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className={styles.NavbarContainer} style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar
        collapsed={collapsed}
        transitionDuration={1000}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: 'white',
          },
        }}
      >
        <Menu>
          <button className={styles.botonNavbar} onClick={() => setCollapsed(!collapsed)}>
            <MenuIcon fontSize="large" className={styles.hamburgerIcon}/>
          </button>
          <SubMenu label="Configuración" icon={<SettingsIcon />}>
            <MenuItem icon={<StorageIcon />}> Recursos</MenuItem>
            <MenuItem icon={<NetworkCheckIcon />}> Red</MenuItem>
            <MenuItem icon={<AppsIcon />}> Aplicaciones</MenuItem>
          </SubMenu>
          <SubMenu label="Horarios" icon={<AccessTimeIcon />}>
            <MenuItem icon={<DescriptionIcon />}> Documentation</MenuItem>
            <MenuItem icon={<CalendarTodayIcon />}> Calendar</MenuItem>
            <MenuItem icon={<StorefrontIcon />}> E-commerce</MenuItem>
          </SubMenu>
          <SubMenu label="Ubicación" icon={<PlaceIcon />}>
            <MenuItem icon={<DescriptionIcon />}> Documentation</MenuItem>
            <MenuItem icon={<CalendarTodayIcon />}> Calendar</MenuItem>
            <MenuItem icon={<StorefrontIcon />}> E-commerce</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}
