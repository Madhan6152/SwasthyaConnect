import React, { useState } from "react";
import { useNavigate} from"react-router-dom";
import "./PatientDashboard.css";

function PatientDashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Overview");

  const appointments = [
    {
      id: "APT001",
      doctor: "Dr. Ananya Sharma",
      specialty: "General Physician",
      date: "20 September 2026",
      time: "10:30 AM",
      type: "Video Consultation",
      status: "Confirmed",
    },
    {
      id: "APT002",
      doctor: "Dr. Rahul Kumar",
      specialty: "Cardiologist",
      date: "23 September 2026",
      time: "02:00 PM",
      type: "Video Consultation",
      status: "Pending",
    },
  ];

  const healthWorkers = [
    {
      name: "Suresh Kumar",
      village: "Madhavapur",
      service: "Home Health Visit",
      status: "Available",
    },
    {
      name: "Lakshmi Devi",
      village: "Rampur",
      service: "Medicine Support",
      status: "Available",
    },
  ];

  const notifications = [
    {
      id: 1,
      title: "Appointment Confirmed",
      message: "Your appointment with Dr. Ananya Sharma is confirmed.",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Health Worker Update",
      message: "Suresh Kumar is available for a home visit.",
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "Health Reminder",
      message: "Don't forget your upcoming consultation.",
      time: "Yesterday",
    },
  ];

  const handleAction = (action) => {
    alert(`${action} feature will open here.`);
  };

  return (
    <div className="patient-dashboard">

      {/* Header */}
      <header className="patient-header">

        <div className="patient-header-left">

          <div className="patient-logo">
            🏥
          </div>

          <div>
            <h2>SwasthyaConnect</h2>
            <span>Patient Portal</span>
          </div>

        </div>

        <div className="patient-header-right">

          <button
            className="patient-notification"
            onClick={() => handleAction("Notifications")}
          >
            🔔
            <span className="patient-notification-badge">
              3
            </span>
          </button>

          <div className="patient-profile">

            <div className="patient-avatar">
              RK
            </div>

            <div>
              <strong>Ravi Kumar</strong>
              <span>Patient</span>
            </div>

          </div>

        </div>

      </header>

      {/* Navigation */}
      <nav className="patient-navigation">

        <button
          className={activeSection === "Overview" ? "active" : ""}
          onClick={() => setActiveSection("Overview")}
        >
          🏠 Overview
        </button>

        <button
          className={
            activeSection === "Appointments" ? "active" : ""
          }
          onClick={() => navigate("/patient/appointments")}
        >
          📅 Appointments
        </button>

        <button
          className={activeSection === "Doctors" ? "active" : ""}
          onClick={() => navigate("/patient/Doctors")}
        >
          👨‍⚕️ Doctors
        </button>

        <button
          className={
            activeSection === "Health Workers" ? "active" : ""
          }
          onClick={() => navigate("/Patient/HealthWorker")}
        >
          🧑‍⚕️ Health Workers
        </button>

        <button
          className={activeSection === "Requests" ? "active" : ""}
          onClick={() => navigate("/patient/RequestHelp")}
        >
          📋 My Requests
        </button>

      </nav>

      {/* Main */}
      <main className="patient-main">

        {/* Welcome */}
        <section className="patient-welcome">

          <div>

            <h1>
              Hello, Nihanth 👋
            </h1>

            <p>
              Welcome back. Here's your healthcare overview.
            </p>

          </div>

          <div className="patient-location">
            📍 Dharwad
          </div>

        </section>

        {/* Quick Statistics */}
        <section className="patient-stats">

          <div className="patient-stat-card">

            <div className="patient-stat-icon">
              📅
            </div>

            <div>
              <span>Upcoming Appointments</span>
              <strong>2</strong>
              <small>Next: 20 Sep</small>
            </div>

          </div>

          <div className="patient-stat-card">

            <div className="patient-stat-icon">
              👨‍⚕️
            </div>

            <div>
              <span>My Doctors</span>
              <strong>3</strong>
              <small>Available online</small>
            </div>

          </div>

          <div className="patient-stat-card">

            <div className="patient-stat-icon">
              🧑‍⚕️
            </div>

            <div>
              <span>Health Workers</span>
              <strong>2</strong>
              <small>Nearby</small>
            </div>

          </div>

          <div className="patient-stat-card">

            <div className="patient-stat-icon">
              📋
            </div>

            <div>
              <span>Active Requests</span>
              <strong>1</strong>
              <small>Needs attention</small>
            </div>

          </div>

        </section>

        {/* Main Grid */}
        <section className="patient-content-grid">

          {/* Upcoming Appointment */}
          <div className="patient-card upcoming-card">

            <div className="patient-card-header">

              <div>
                <h2>Upcoming Appointment</h2>
                <p>Your next scheduled consultation</p>
              </div>

              <button
                className="patient-view-all"
                onClick={() =>
                  setActiveSection("Appointments")
                }
              >
                View All
              </button>

            </div>

            <div className="next-appointment">

              <div className="next-doctor-avatar">
                AS
              </div>

              <div className="next-doctor-info">

                <h3>Dr. Nihanth Mendu</h3>

                <p>
                  General Physician
                </p>

                <div className="next-appointment-details">

                  <span>
                    📅 20 September 2026
                  </span>

                  <span>
                    🕐 10:30 AM
                  </span>

                </div>

              </div>

              <span className="confirmed-badge">
                Confirmed
              </span>

            </div>

            <div className="appointment-buttons">

              <button
                className="join-button"
                onClick={() =>
                  handleAction("Join Consultation")
                }
              >
                🎥 Join Consultation
              </button>

              <button
                className="details-button"
                onClick={() =>
                  handleAction("Appointment Details")
                }
              >
                View Details
              </button>

            </div>

          </div>

          {/* Quick Actions */}
          <div className="patient-card">

            <div className="patient-card-header">

              <div>
                <h2>Quick Actions</h2>
                <p>Access healthcare services</p>
              </div>

            </div>

            <div className="patient-quick-actions">

              <button
                onClick={() =>
                  handleAction("Book Appointment")
                }
              >
                <span>📅</span>

                <div>
                  <strong>Book Appointment</strong>
                  <small>Find a doctor</small>
                </div>
              </button>

              <button
                onClick={() =>
                  handleAction("Find Health Worker")
                }
              >
                <span>🧑‍⚕️</span>

                <div>
                  <strong>Find Health Worker</strong>
                  <small>Get local support</small>
                </div>
              </button>

              <button
                onClick={() =>
                  handleAction("New Health Request")
                }
              >
                <span>📋</span>

                <div>
                  <strong>Health Request</strong>
                  <small>Request medical help</small>
                </div>
              </button>

              <button
                onClick={() =>
                  handleAction("Medical Records")
                }
              >
                <span>📁</span>

                <div>
                  <strong>Medical Records</strong>
                  <small>View your records</small>
                </div>
              </button>

            </div>

          </div>

        </section>

        {/* Appointments */}
        <section className="patient-card patient-appointments-card">

          <div className="patient-card-header">

            <div>
              <h2>My Appointments</h2>
              <p>Your upcoming consultations</p>
            </div>

            <button
              className="patient-view-all"
              onClick={() =>
                setActiveSection("Appointments")
              }
            >
              View All
            </button>

          </div>

          <div className="patient-appointment-list">

            {appointments.map((appointment) => (

              <div
                className="patient-appointment-row"
                key={appointment.id}
              >

                <div className="patient-appointment-doctor">

                  <div className="small-doctor-avatar">
                    {appointment.doctor
                      .replace("Dr. ", "")
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>

                  <div>
                    <strong>
                      {appointment.doctor}
                    </strong>

                    <span>
                      {appointment.specialty}
                    </span>
                  </div>

                </div>

                <div className="patient-appointment-date">

                  <strong>
                    {appointment.date}
                  </strong>

                  <span>
                    🕐 {appointment.time}
                  </span>

                </div>

                <span
                  className={`patient-status ${appointment.status.toLowerCase()}`}
                >
                  {appointment.status}
                </span>

                <button
                  className="patient-action-button"
                  onClick={() =>
                    handleAction("Appointment Details")
                  }
                >
                  View
                </button>

              </div>

            ))}

          </div>

        </section>

        {/* Bottom Grid */}
        <section className="patient-bottom-grid">

          {/* Health Workers */}
          <div className="patient-card">

            <div className="patient-card-header">

              <div>
                <h2>Nearby Health Workers</h2>
                <p>Healthcare support near you</p>
              </div>

              <button
                className="patient-view-all"
                onClick={() =>
                  setActiveSection("Health Workers")
                }
              >
                View All
              </button>

            </div>

            <div className="health-worker-list">

              {healthWorkers.map((worker) => (

                <div
                  className="health-worker-row"
                  key={worker.name}
                >

                  <div className="worker-avatar">
                    {worker.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>

                  <div className="worker-info">

                    <strong>{worker.name}</strong>

                    <span>
                      📍 {worker.village}
                    </span>

                    <small>
                      {worker.service}
                    </small>

                  </div>

                  <span className="worker-available">
                    {worker.status}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Notifications */}
          <div className="patient-card">

            <div className="patient-card-header">

              <div>
                <h2>Recent Notifications</h2>
                <p>Latest healthcare updates</p>
              </div>

              <button
                className="patient-view-all"
                onClick={() =>
                  handleAction("Notifications")
                }
              >
                View All
              </button>

            </div>

            <div className="patient-notification-list">

              {notifications.map((notification) => (

                <div
                  className="patient-notification-row"
                  key={notification.id}
                >

                  <div className="notification-icon">
                    🔔
                  </div>

                  <div>

                    <strong>
                      {notification.title}
                    </strong>

                    <p>
                      {notification.message}
                    </p>

                    <span>
                      {notification.time}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Health Tip */}
        <section className="health-tip">

          <div className="health-tip-icon">
            💡
          </div>

          <div>

            <h3>Health Tip</h3>

            <p>
              Keep your medical records updated and attend
              your scheduled appointments on time. If you
              experience a health concern, contact a healthcare
              professional.
            </p>

          </div>

        </section>

        {/* Footer */}
        <footer className="patient-footer">

          <span>
            © 2026 SwasthyaConnect Healthcare Platform
          </span>

          <span>
            Patient Portal
          </span>

        </footer>

      </main>

    </div>
  );
}

export default PatientDashboard;