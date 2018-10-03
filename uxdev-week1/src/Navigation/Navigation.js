import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <NavItem />
      </div>
    )
  }
}

class NavItem extends Component {
  render() {
    return (
      <div>
        <div className="NavItem">Dashboard</div>
        <div className="NavItem">My Accounts</div>
      </div>
    )
  }
}

export { Navigation };
export { NavItem };