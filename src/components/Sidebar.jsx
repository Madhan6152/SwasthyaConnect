import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar({
  role = "Admin",
  userName = "Admin User",
  items = [],
  activeItem = "Dashboard",
  onNavigate,
  onLogout,
}) {
  const [collapsed, setCollapsed] = useState(false);

  const defaultItems = [
    {
      name: "Dashboard",
      icon: "🏠",
    },
    {
      name: "Patients",
      icon: "👥",
    },
    {
      name: "Appointments",
      icon: "📅",
    },
    {
      name: "Requests",
      icon: "📋",
    },
    {
      name: "Doctors",
      icon: "👨‍⚕️",
    },
    {
      name: "Reports",
      icon: "📊",
    },
  ];

  const menuItems = items.length > 0 ? items : defaultItems;

  const handleNavigation = (item) => {
    if (typeof onNavigate === "function") {
      onNavigate(item.name);
    }
  };

  return (
    <aside
      className={`sidebar ${
        collapsed ? "sidebar-collapsed" : ""
      }`}
    >

      {/* Logo */}
      <div className="sidebar-logo">

        <div className="logo-icon">
          +
        </div>

        {!collapsed && (
          <div>
            <h2>SwasthyaConnect</h2>
            <span>
              {role.toUpperCase()} PANEL
            </span>
          </div>
        )}

      </div>

      {/* Collapse Button */}
      <button
        type="button"
        className="sidebar-toggle"
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Toggle sidebar"
      >
        {collapsed ? "→" : "←"}
      </button>

      {/* Menu */}
      <div className="sidebar-menu">

        {!collapsed && (
          <p className="menu-title">
            MAIN MENU
          </p>
        )}

        {menuItems.map((item) => (
          <button
            key={item.name}
            type="button"
            className={
              activeItem === item.name
                ? "menu-item active"
                : "menu-item"
            }
            onClick={() => handleNavigation(item)}
            title={collapsed ? item.name : ""}
          >
            <span className="menu-icon">
              {item.icon}
            </span>

            {!collapsed && (
              <span className="menu-label">
                {item.name}
              </span>
            )}
          </button>
        ))}

      </div>

      {/* Bottom User Section */}
      <div className="sidebar-bottom">

        {!collapsed && (
          <div className="admin-profile">

            <div className="admin-avatar">
              {userName?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <div className="admin-profile-info">
              <strong>
                {userName}
              </strong>

              <span>
                {role}
              </span>
            </div>

          </div>
        )}

        {typeof onLogout === "function" && (
          <button
            type="button"
            className="logout-button"
            onClick={onLogout}
          >
            <span>🚪</span>

            {!collapsed && (
              <span>Logout</span>
            )}
          </button>
        )}

      </div>

    </aside>
  );
}

export default Sidebar;