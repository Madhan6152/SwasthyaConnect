import React from "react";
import "./Card.css";

function Card({
  icon,
  title,
  description,
  children,
  onClick,
}) {
  return (
    <div className="custom-card">

      {icon && (
        <div className="card-icon">
          {icon}
        </div>
      )}

      <div className="card-content">

        {title && (
          <h3>{title}</h3>
        )}

        {description && (
          <p>{description}</p>
        )}

        {children && (
          <div className="card-body">
            {children}
          </div>
        )}

        {onClick && (
          <button
            className="card-button"
            onClick={onClick}
          >
            View More →
          </button>
        )}

      </div>

    </div>
  );
}

export default Card;