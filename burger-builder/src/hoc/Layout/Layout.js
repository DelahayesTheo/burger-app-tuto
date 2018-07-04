import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {
	state = {
		showSideDrawer: false
	}

	sideDrawerClosedHandle = () => {
		this.setState({showSideDrawer: false});
	}

	sideDrawerToggleHandle = () => {
		this.setState((prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer};
		});
	}
	render () {
		return (
			<Aux>
				<Toolbar toggleSideDrawer={this.sideDrawerToggleHandle} />
				<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandle} />
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		);
	}
}


export default Layout;

