import React, { useState } from "react";
import "./Patient.css";

function Appointment() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: "Dr. Ananya Sharma",
      specialty: "General Physician",
      date: "20 September 2026",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Rahul Kumar",
      specialty: "Cardiologist",
      date: "23 September 2026",
      time: "02:00 PM",
      status: "Pending",
    },
  ]);

  const cancelAppointment = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    <div className="appointment-page">

      {/* Page Header */}
      <div className="appointment-page-header">
        <div>
          <p className="page-label">PATIENT SERVICES</p>
          <h1>My Appointments</h1>
          <p>
            View and manage your upcoming healthcare appointments.
          </p>
        </div>

        <button className="book-button">
          + Book Appointment
        </button>
      </div>

      {/* Appointment Summary */}
      <div className="appointment-summary">

        <div className="summary-card">
          <span className="summary-icon">📅</span>
          <div>
            <strong>{appointments.length}</strong>
            <p>Total Appointments</p>
          </div>
        </div>

        <div className="summary-card">
          <span className="summary-icon">✓</span>
          <div>
            <strong>
              {
                appointments.filter(
                  (appointment) =>
                    appointment.status === "Confirmed"
                ).length
              }
            </strong>
            <p>Confirmed</p>
          </div>
        </div>

        <div className="summary-card">
          <span className="summary-icon">⏳</span>
          <div>
            <strong>
              {
                appointments.filter(
                  (appointment) =>
                    appointment.status === "Pending"
                ).length
              }
            </strong>
            <p>Pending</p>
          </div>
        </div>

      </div>

      {/* Appointment List */}
      <div className="appointment-list-card">

        <div className="appointment-list-header">
          <div>
            <h2>Upcoming Appointments</h2>
            <p>Your scheduled doctor consultations</p>
          </div>
        </div>

        {appointments.length === 0 ? (
          <div className="empty-appointments">
            <div>📅</div>
            <h3>No appointments</h3>
            <p>
              You don't have any upcoming appointments.
            </p>

            <button className="book-button">
              Book an Appointment
            </button>
          </div>
        ) : (
          <div className="appointments-list">

            {appointments.map((appointment) => (
              <div
                className="appointment-item"
                key={appointment.id}
              >

                {/* Doctor */}
                <div className="doctor-section">

                  <div className="doctor-avatar">
                    Dr
                  </div>

                  <div>
                    <h3>{appointment.doctor}</h3>
                    <p>{appointment.specialty}</p>
                  </div>

                </div>

                {/* Date */}
                <div className="appointment-detail">
                  <span>DATE</span>
                  <strong>{appointment.date}</strong>
                </div>

                {/* Time */}
                <div className="appointment-detail">
                  <span>TIME</span>
                  <strong>{appointment.time}</strong>
                </div>

                {/* Status */}
                <div>
                  <span
                    className={`appointment-status ${
                      appointment.status === "Confirmed"
                        ? "confirmed"
                        : "pending"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </div>

                {/* Action */}
                <button
                  className="cancel-button"
                  onClick={() =>
                    cancelAppointment(appointment.id)
                  }
                >
                  Cancel
                </button>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Appointment;

