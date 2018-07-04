import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
	<header className={classes.Toolbar}>
		<DrawerToggle toggle={props.toggleSideDrawer} />
		<Logo height="80%"/>
		<nav className={classes.Responsive}>
			<NavigationItems />
		</nav>
	</header>
);

export default toolbar;