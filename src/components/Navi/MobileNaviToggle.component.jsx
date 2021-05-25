import Link from "../Link";

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

const ToggleNaviButton = ({ navLinks }) => {
  return (
    <div className="navi">
      <ul className="nav__list">
        <button className="nav__link">MENU</button>
      </ul>
    </div>
  );
};

export default ToggleNaviButton;
