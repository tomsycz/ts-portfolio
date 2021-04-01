import React from "react";

class Header extends React.Component {
  render() {
    return (
      
      <div className="header header-left">

        <div className="heading-container">
          <h2 className="heading-2">Hi! I'm</h2>
          <h1 className="heading-1">Tom</h1>
          <h2 className="heading-2">
            <span>I am a</span>
            <br />
            <span>Front-End</span>
            <br />
            <span>Developer</span>
          </h2>
        </div>
      </div>
    );
  }
}

export default Header;
