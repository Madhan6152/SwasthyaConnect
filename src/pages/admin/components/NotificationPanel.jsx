import React, { useState } from "react";
import "./NotificationPanel.css";

function NotificationPanel({ onClose }) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Patient Request",
      message: "A new patient has requested a consultation.",
      time: "5 minutes ago",
      type: "patient",
      unread: true,
    },
    {
      id: 2,
      title: "Appointment Confirmed",
      message: "Dr. Ananya Sharma confirmed an appointment.",
      time: "20 minutes ago",
      type: "appointment",
      unread: true,
    },
    {
      id: 3,
      title: "Health Worker Update",
      message: "A health worker submitted a new field report.",
      time: "1 hour ago",
      type: "worker",
      unread: false,
    },
    {
      id: 4,
      title: "System Update",
      message: "The healthcare platform was successfully updated.",
      time: "3 hours ago",
      type: "system",
      unread: false,
    },
  ]);

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  const getIcon = (type) => {
    switch (type) {
      case "patient":
        return "👤";
      case "appointment":
        return "📅";
      case "worker":
        return "🧑‍⚕️";
      case "system":
        return "⚙️";
      default:
        return "🔔";
    }
  };

  return (
    <div className="notification-overlay" onClick={onClose}>
      <div
        className="notification-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="notification-header">
          <div>
            <h2>Notifications</h2>
            <p>
              {notifications.filter((item) => item.unread).length} unread
              notifications
            </p>
          </div>

          <button
            className="notification-close"
            onClick={onClose}
            aria-label="Close notifications"
          >
            ×
          </button>
        </div>

        <div className="notification-actions">
          <button onClick={markAllAsRead}>Mark all as read</button>
        </div>

        <div className="notification-list">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`notification-item ${
                  notification.unread ? "unread" : ""
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="notification-icon">
                  {getIcon(notification.type)}
                </div>

                <div className="notification-content">
                  <h3>{notification.title}</h3>
                  <p>{notification.message}</p>
                  <span>{notification.time}</span>
                </div>

                {notification.unread && (
                  <span className="notification-unread-dot"></span>
                )}
              </div>
            ))
          ) : (
            <div className="no-notifications">
              <div className="no-notification-icon">🔔</div>
              <h3>No notifications</h3>
              <p>You are all caught up.</p>
            </div>
          )}
        </div>

        <div className="notification-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default NotificationPanel;