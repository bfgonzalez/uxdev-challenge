import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <NavItem label="Dashboard" />
        <NavItem label="My Accounts" />
        <NavItem label="Sub Partners" />
        <NavItem label="Withdraw" />
        <NavItem label="Marketing Tools" />
        <NavItem label="Reports" />
      </div>
    )
  }
}

class NavItem extends Component {
  render() {
    return (
      <div className="NavItem">{this.props.label}</div>
    )
  }
}

export { Navigation };
export { NavItem };