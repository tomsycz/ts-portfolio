import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-background"></div>
        <div className="heading-container">
          <h1 className="heading-1">Thomas Syczyk</h1>
          <h2 className="heading-2">Junior Front End Developer</h2>
        </div>
      </div>
    );
  }
}

export default Header;
