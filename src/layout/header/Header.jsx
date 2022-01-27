import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <>
      <nav className="navbar nav-header">
        <div className="container nav-item">
          <a className="navbar-brand" href="/">
            <img
              src="img/logo192.png"
              className="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
            Заметки
          </a>
        </div>
      </nav>
    </>
  );
};
