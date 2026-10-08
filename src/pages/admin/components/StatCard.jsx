import React from "react";
import "./StatCard.css";

function StatCard({
  icon,
  title,
  value,
  change,
  description,
  urgent = false,
}) {
  return (
    <div className={`stat-card ${urgent ? "stat-urgent" : ""}`}>

      <div className="stat-top">

        <div className="stat-icon">
          {icon}
        </div>

        <span className={urgent ? "change urgent-change" : "change"}>
          {change}
        </span>

      </div>

      <div className="stat-value">
        {value}
      </div>

      <div className="stat-title">
        {title}
      </div>

      <div className="stat-description">
        {description}
      </div>

    </div>
  );
}

export default StatCard;


