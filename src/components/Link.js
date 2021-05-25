import { useContext } from "react";
import { NaviContext } from "./../providers/navi.provider";

const Link = ({ className, href, children }) => {
  const { toggleHidden } = useContext(NaviContext);
  const handleClick = event => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    toggleHidden();
    window.history.pushState({}, "", href);
    const navEvent = new PopStateEvent("popstate");

    window.dispatchEvent(navEvent);
    event.target.parentNode.childNodes.forEach(element => {
      element.className = "nav__link";
    });

    event.target.className = "nav__link selected";
  };
  return (
    <a onClick={handleClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
