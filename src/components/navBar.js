/*
 * @Author: Jinqi Li
 * @Date: 2020-07-20 21:27:54
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-10-04 23:00:54
 * @FilePath: /benz/src/components/navBar.js
 */
import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form } from 'react-bootstrap';
import icon from '../assets/images/Mercedes_Benz__logo--desktop.png';

class NavBar extends Component {
	render() {
		return (
			<Navbar className="nav-style" collapseOnSelect expand="lg" fixed="top">
				<Navbar.Brand href="/benz/#/" className="nav-brand">
					<img alt="" src={icon} className="nav-icon" />
				</Navbar.Brand>
				<Nav className="nav-link-group">
					<span className="nav-link">Mercedes-Benz</span>
				</Nav>
				<Form inline className="nav-form">
				</Form>
			</Navbar>
		);
	}
}

export default NavBar;
