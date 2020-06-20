import React, { useRef, useEffect } from "react";
import "./css/Header.css";

function Header(props) {
  const switchRef = useRef();

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      switchRef.current.checked = true;
      document.body.classList.add("dark-mode");
    }
  }, []);

  let onchange = () => {
    if (switchRef.current.checked == true) {
      document.body.classList.add("dark-mode");
      console.log("if3");
      return;
    }
    if (switchRef.current.checked == false) {
      document.body.classList.remove("dark-mode");
      console.log("if1");
      return;
    }
  };
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__content__title">Social Media Dashboard</h1>
        <h2 className="header__content__followers">
          Total Followers: {props.followers}
        </h2>
        <hr />
        <div className="header__content__grid">
          <p className="header__content__grid__darkMode">Dark Mode</p>
          <input
            type="checkbox"
            id="switch"
            ref={switchRef}
            onChange={onchange}
          />
          <label className={`header__content__switch`} htmlFor="switch"></label>
        </div>
      </div>
    </div>
  );
}

export default Header;
