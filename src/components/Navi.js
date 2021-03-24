import React from "react";
import Link from "./Link";

class Navi extends React.Component {
  render() {
    return (
      <div className="navi">
        <h2 className="heading-2">Navi</h2>
        <nav class="nav-container">
          <ul className="nav__list">
            <li className="nav__item">
              <Link href="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/projects" className="nav__link">
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/about" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/contact" className="nav__link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navi;
