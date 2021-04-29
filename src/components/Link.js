import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = event => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    window.history.pushState({}, "", href);
    const navEvent = new PopStateEvent("popstate");

    window.dispatchEvent(navEvent);
    event.target.parentNode.childNodes.forEach(element => {
      element.className = "nav__link";
    });
    
    event.target.className = "nav__link selected";
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
