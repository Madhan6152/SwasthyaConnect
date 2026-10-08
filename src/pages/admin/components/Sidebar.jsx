import React from "react";
import "./Sidebar.css";

function Sidebar({
  activeSection = "Overview",
  setActiveSection,
}) {
  const menuItems = [
    { name: "Overview", icon: "🏠" },
    { name: "Users", icon: "👥" },
    { name: "Patients", icon: "🧑‍🤝‍🧑" },
    { name: "Appointments", icon: "📅" },
    { name: "Requests", icon: "📋" },
    { name: "Doctors", icon: "👨‍⚕️" },
    { name: "Health Workers", icon: "🧑‍⚕️" },
    { name: "Reports", icon: "📊" },
  ];

  const handleClick = (section) => {
    console.log("ADMIN SIDEBAR CLICK:", section);

    if (typeof setActiveSection === "function") {
      setActiveSection(section);
    }
  };

  return (
    <aside className="sidebar">

      {/* LOGO */}
      <div className="sidebar-logo">
        <div className="logo-icon">+</div>

        <div>
          <h2>SwasthyaConnect</h2>
          <span>ADMIN PANEL</span>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="sidebar-menu">

        <p className="menu-title">
          MAIN MENU
        </p>

        {menuItems.map((item) => (
          <button
            key={item.name}
            type="button"
            className={
              activeSection === item.name
                ? "menu-item active"
                : "menu-item"
            }
            onClick={() => handleClick(item.name)}
          >
            <span className="menu-icon">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

            {item.name === "Requests" && (
              <span className="notification-count">
                27
              </span>
            )}
          </button>
        ))}

        {/* SETTINGS */}
        <p className="menu-title settings-title">
          SYSTEM
        </p>

        <button
          type="button"
          className={
            activeSection === "Settings"
              ? "menu-item active"
              : "menu-item"
          }
          onClick={() => handleClick("Settings")}
        >
          <span className="menu-icon">
            ⚙️
          </span>

          <span>
            Settings
          </span>
        </button>

      </div>

      {/* ADMIN PROFILE */}
      <div className="sidebar-bottom">

        <div className="admin-profile">

          <div className="admin-avatar">
            A
          </div>

          <div>
            <strong>
              Admin User
            </strong>

            <span>
              Administrator
            </span>
          </div>

          <button
            type="button"
            className="profile-more"
            onClick={() => handleClick("Settings")}
          >
            ⋮
          </button>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;