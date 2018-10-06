import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
        <div className="nav-section">
          <span>
            <i class="fas fa-chart-area"></i>
            <NavItem label="Dashboard"/>
          </span>
        </div>

        <div className="nav-section">
          <i class="fas fa-user-circle"></i>
          <NavItem label="My Accounts" />
        </div>

        <div className="nav-section">
          <i class="fas fa-handshake"></i>
          <NavItem label="Sub Partners" />
        </div>

        <div className="nav-section">
          <i class="fas fa-credit-card"></i>
          <NavItem label="Withdraw" />
        </div>

        <div className="nav-section">
          <i class="fas fa-chart-line"></i>
          <NavItem label="Marketing Tools" />
        </div>

        <div className="nav-section">
          <i class="fas fa-chart-bar"></i>
          <NavItem label="Reports" />
        </div>
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