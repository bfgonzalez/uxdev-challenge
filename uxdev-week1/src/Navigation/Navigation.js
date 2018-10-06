import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
      <h4>FXLINKED</h4>
        <div className="nav-section">
          <span className="yellow-corner">
            <i className="fas fa-chart-area"></i>
            <NavItem label="Dashboard"/>
          </span>
        </div>

        <div className="nav-section">
          <i className="fas fa-user-circle"></i>
          <NavItem label="My Accounts" />
        </div>

        <div className="nav-section">
          <i className="fas fa-handshake"></i>
          <NavItem label="Sub Partners" />
        </div>

        <div className="nav-section">
          <i className="fas fa-credit-card"></i>
          <NavItem label="Withdraw" />
        </div>

        <div className="nav-section">
          <i className="fas fa-chart-line"></i>
          <NavItem label="Marketing Tools" />
        </div>

        <div className="nav-section">
          <i className="fas fa-chart-bar"></i>
          <NavItem label="Reports" />
        </div>
        <p>Powered by <span className="brand">FXLinked</span></p>
      </nav>
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