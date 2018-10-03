import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <NavItem
          dashboard="Dashboard"
          accounts="My Accounts"
          partners="Sub Partners"
          withdraw="Withdraw"
          marketing="Marketing Tools"
          reports="Reports"
        />
      </div>
    )
  }
}

class NavItem extends Component {
  render() {
    return (
      <div>
        <div className="NavItem">{this.props.dashboard}</div>
        <div className="NavItem">{this.props.accounts}</div>
        <div className="NavItem">{this.props.partners}</div>
        <div className="NavItem">{this.props.withdraw}</div>
        <div className="NavItem">{this.props.marketing}</div>
        <div className="NavItem">{this.props.reports}</div>
      </div>
    )
  }
}

export { Navigation };
export { NavItem };