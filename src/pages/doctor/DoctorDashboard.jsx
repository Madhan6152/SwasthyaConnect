import React, { useState } from "react";
import { useNavigate} from"react-router-dom";
import "./DoctorDashboard.css";
import DoctorAppointments from "./DoctorAppointments"
import DoctorPatients from "./DoctorPatients";
import DoctorRequests from "./DoctorRequests";
function DoctorDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Overview");

  const appointments = [
    {
      id: 1,
      patient: "Ravi Kumar",
      age: 42,
      village: "Madhavapur",
      time: "09:30 AM",
      type: "Video Consultation",
      status: "Confirmed",
    },
    {
      id: 2,
      patient: "Lakshmi Devi",
      age: 56,
      village: "Rampur",
      time: "10:30 AM",
      type: "General Consultation",
      status: "Confirmed",
    },
    {
      id: 3,
      patient: "Suresh Reddy",
      age: 35,
      village: "Kondapur",
      time: "12:00 PM",
      type: "Follow-up",
      status: "Pending",
    },
    {
      id: 4,
      patient: "Anitha Rao",
      age: 29,
      village: "Nandigama",
      time: "02:30 PM",
      type: "General Consultation",
      status: "Confirmed",
    },
  ];

  const patients = [
    {
      id: "P001",
      name: "Ravi Kumar",
      age: 42,
      condition: "Fever",
      lastVisit: "18 Sep 2026",
    },
    {
      id: "P002",
      name: "Lakshmi Devi",
      age: 56,
      condition: "Diabetes",
      lastVisit: "17 Sep 2026",
    },
    {
      id: "P003",
      name: "Suresh Reddy",
      age: 35,
      condition: "Hypertension",
      lastVisit: "15 Sep 2026",
    },
    {
      id: "P004",
      name: "Anitha Rao",
      age: 29,
      condition: "General Checkup",
      lastVisit: "14 Sep 2026",
    },
  ];

  const handleAppointment = (id, action) => {
    alert(`${action} appointment #${id}`);
  };

  return (
    <div className="doctor-dashboard">

      {/* Header */}
      <header className="doctor-header">

        <div className="doctor-header-left">
          <div className="doctor-logo">
            🏥
          </div>

          <div>
            <h2>SwasthyaConnect</h2>
            <span>Doctor Portal</span>
          </div>
        </div>

        <div className="doctor-header-right">

          <button className="doctor-notification">
            🔔
            <span className="notification-badge">3</span>
          </button>

          <div className="doctor-profile">

            <div className="doctor-avatar">
              AS
            </div>

            <div>
              <strong>Dr. Ananya Sharma</strong>
              <span>General Physician</span>
            </div>

          </div>

        </div>

      </header>

      {/* Navigation */}
      <nav className="doctor-navigation">

        <button
          className={activeTab === "Overview" ? "active" : ""}
          onClick={() => setActiveTab("Overview")}
        >
          🏠 Overview
        </button>

        <button
          className={activeTab === "Appointments" ? "active" : ""}
          onClick={() => navigate ("/doctor/DoctorAppointments")}
        >
          📅 Appointments
        </button>

        <button
          className={activeTab === "Patients" ? "active" : ""}
          onClick={() => navigate ("/doctor/DoctorPatients")}
        >
          👥 Patients
        </button>

        <button
          className={activeTab === "Requests" ? "active" : ""}
          onClick={() => navigate("DoctorRequests")}
        >
          📋 Requests
        </button>

      </nav>

      {/* Main Content */}
      <main className="doctor-main">

        {/* Welcome */}
        <section className="doctor-welcome">

          <div>
            <h1>Good Morning, Dr. Ananya 👋</h1>

            <p>
              Here is your healthcare activity and schedule for today.
            </p>
          </div>

          <div className="doctor-date">
            📅 19 September 2026
          </div>

        </section>

        {/* Statistics */}
        <section className="doctor-stats">

          <div className="doctor-stat-card">
            <div className="doctor-stat-icon">📅</div>

            <div>
              <span>Today's Appointments</span>
              <strong>8</strong>
              <small>2 pending</small>
            </div>
          </div>

          <div className="doctor-stat-card">
            <div className="doctor-stat-icon">👥</div>

            <div>
              <span>Total Patients</span>
              <strong>124</strong>
              <small>+6 this month</small>
            </div>
          </div>

          <div className="doctor-stat-card">
            <div className="doctor-stat-icon">📋</div>

            <div>
              <span>Pending Requests</span>
              <strong>5</strong>
              <small>Needs attention</small>
            </div>
          </div>

          <div className="doctor-stat-card">
            <div className="doctor-stat-icon">✅</div>

            <div>
              <span>Completed Today</span>
              <strong>4</strong>
              <small>50% completed</small>
            </div>
          </div>

        </section>

        {/* Content Grid */}
        <section className="doctor-content-grid">

          {/* Appointments */}
          <div className="doctor-card appointments-card">

            <div className="doctor-card-header">

              <div>
                <h2>Today's Appointments</h2>
                <p>Your upcoming consultations</p>
              </div>

              <button
                className="view-all-button"
                onClick={() => setActiveTab("Appointments")}
              >
                View All
              </button>

            </div>

            <div className="appointments-list">

              {appointments.map((appointment) => (

                <div
                  className="appointment-row"
                  key={appointment.id}
                >

                  <div className="appointment-time">
                    <strong>{appointment.time}</strong>
                    <span>{appointment.type}</span>
                  </div>

                  <div className="appointment-patient">

                    <div className="patient-avatar">
                      {appointment.patient
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>

                    <div>
                      <strong>{appointment.patient}</strong>
                      <span>
                        {appointment.age} years • {appointment.village}
                      </span>
                    </div>

                  </div>

                  <span
                    className={`appointment-status ${appointment.status.toLowerCase()}`}
                  >
                    {appointment.status}
                  </span>

                  <button
                    className="appointment-action"
                    onClick={() =>
                      handleAppointment(
                        appointment.id,
                        "Opening"
                      )
                    }
                  >
                    View
                  </button>

                </div>

              ))}

            </div>

          </div>

          {/* Quick Actions */}
          <div className="doctor-card quick-actions-card">

            <div className="doctor-card-header">

              <div>
                <h2>Quick Actions</h2>
                <p>Frequently used actions</p>
              </div>

            </div>

            <div className="quick-actions">

              <button
                onClick={() => setActiveTab("Appointments")}
              >
                <span>📅</span>
                <div>
                  <strong>Appointments</strong>
                  <small>Manage your schedule</small>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("Patients")}
              >
                <span>👥</span>
                <div>
                  <strong>Patient Records</strong>
                  <small>View patient information</small>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("Requests")}
              >
                <span>📋</span>
                <div>
                  <strong>Patient Requests</strong>
                  <small>Review pending requests</small>
                </div>
              </button>

              <button
                onClick={() => alert("Opening messages...")}
              >
                <span>💬</span>
                <div>
                  <strong>Messages</strong>
                  <small>Communicate with patients</small>
                </div>
              </button>

            </div>

          </div>

        </section>

        {/* Patient Records */}
        <section className="doctor-card patient-records-card">

          <div className="doctor-card-header">

            <div>
              <h2>Recent Patients</h2>
              <p>Recently consulted patients</p>
            </div>

            <button
              className="view-all-button"
              onClick={() => setActiveTab("Patients")}
            >
              View All
            </button>

          </div>

          <div className="patient-table-wrapper">

            <table className="doctor-patient-table">

              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Age</th>
                  <th>Village</th>
                  <th>Condition</th>
                  <th>Last Visit</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {patients.map((patient) => (

                  <tr key={patient.id}>

                    <td>
                      <div className="table-patient">

                        <div className="patient-avatar">
                          {patient.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>

                        <div>
                          <strong>{patient.name}</strong>
                          <span>{patient.id}</span>
                        </div>

                      </div>
                    </td>

                    <td>{patient.age}</td>

                    <td>{patient.condition}</td>

                    <td>{patient.lastVisit}</td>

                    <td>
                      <button
                        className="table-view-button"
                        onClick={() =>
                          alert(`Opening ${patient.name}'s record`)
                        }
                      >
                        View Record
                      </button>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

        {/* Footer */}
        <footer className="doctor-footer">
          <span>© 2026 SwasthyaConnect Healthcare Platform</span>
          <span>Doctor Portal</span>
        </footer>

      </main>

    </div>
  );
}

export default DoctorDashboard;