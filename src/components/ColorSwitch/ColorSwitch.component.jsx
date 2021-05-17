import React, { useContext } from "react";
import { ModeContext } from "../../providers/mode.provider";

import "./ColorSwitch.styles.scss";

const ColorSwitch = () => {
  const { toggleMode, isDark } = useContext(ModeContext);
  return (
    <div onClick={toggleMode} className="nav__link sun-moon-icon">
      {isDark ? <div>☼</div> : <div>☾</div>}
    </div>
  );
};

export default ColorSwitch;
