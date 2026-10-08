import React from "react";
import "./Header.css";

function Header({ onMenuClick }) {
  return (
    <header className="admin-header">

      <div className="header-left">

        <button
          type="button"
          className="mobile-menu"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          ☰
        </button>

        <div className="search-box">

          <span>
            ⌕
          </span>

          <input
            type="text"
            placeholder="Search patients, doctors..."
          />

        </div>

      </div>


      <div className="header-right">

        <button
          type="button"
          className="header-icon"
        >
          🔔

          <span className="notification-dot"></span>
        </button>

        <div className="header-divider"></div>

        <div className="header-user">

          <div className="header-avatar">
            A
          </div>

          <div>
            <strong>
              Admin
            </strong>

            <span>
              Administrator
            </span>
          </div>

          <span className="dropdown-arrow">
            ▾
          </span>

        </div>

      </div>

    </header>
  );
}

export default Header;