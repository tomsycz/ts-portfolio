import { useContext } from "react";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import Navi from "./Navi.component";
import { NaviContext } from "./../../providers/navi.provider";

import "./Navi.styles.scss";

const ToggleNaviButton = ({ navLinks }) => {
  const { hidden, toggleHidden } = useContext(NaviContext);
  return (
    <div>
      {hidden ? null : <Navi navLinks={navLinks} />}
      <div className="navi">
        <ul className="nav__list mobile-menu">
          <div className="nav__link " onClick={() => toggleHidden()}>
            {hidden ? (
              <VscMenu className="mobile-menu__icon" />
            ) : (
              <VscChromeClose className="mobile-menu__icon" />
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ToggleNaviButton;
 