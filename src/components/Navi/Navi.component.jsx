import Link from "../Link";

import ColorSwitch from "./../ColorSwitch/ColorSwitch.component";
import "./Navi.styles.scss";

const renderNaviItems = links => {
  return links.map(link => {
    const { id, path, label } = link;
    return (
      <Link
        key={id}
        href={path}
        className={`nav__link ${
          path === window.location.pathname ? "selected" : ""
        }`}
      >
        {label}
      </Link>
    );
  });
};

const Navi = ({ navLinks }) => {
  return (
    <div className="navi">
      <ul className="nav__list">
        {renderNaviItems(navLinks)}
        <ColorSwitch />
      </ul>
    </div>
  );
};

export default Navi;
