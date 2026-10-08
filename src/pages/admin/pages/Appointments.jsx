import React, { useState } from "react";
import "../components/Patient.css";

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
    {
      id: 3,
      doctor: "Dr. Priya Reddy",
      specialty: "General Physician",
      date: "27 September 2026",
      time: "11:00 AM",
      status: "Confirmed",
    },
  ]);

  const cancelAppointment = (id) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (confirmCancel) {
      setAppointments((currentAppointments) =>
        currentAppointments.filter(
          (appointment) => appointment.id !== id
        )
      );
    }
  };

  const confirmedCount = appointments.filter(
    (appointment) => appointment.status === "Confirmed"
  ).length;

  const pendingCount = appointments.filter(
    (appointment) => appointment.status === "Pending"
  ).length;

  return (
    <div className="appointment-page">

      {/* Page Header */}
      <div className="appointment-page-header">
        <div>
          <h1>My Appointments</h1>
          <p>View and manage your upcoming medical appointments.</p>
        </div>

        <button className="book-button">
          + Book Appointment
        </button>
      </div>

      {/* Summary */}
      <div className="appointment-summary">

        <div className="summary-card">
          <div className="summary-icon">📅</div>
          <div>
            <span>Total Appointments</span>
            <strong>{appointments.length}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">✓</div>
          <div>
            <span>Confirmed</span>
            <strong>{confirmedCount}</strong>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">⏳</div>
          <div>
            <span>Pending</span>
            <strong>{pendingCount}</strong>
          </div>
        </div>

      </div>

      {/* Appointment List */}
      <div className="appointment-list-card">

        <div className="appointment-list-header">
          <div>
            <h2>Upcoming Appointments</h2>
            <p>Your scheduled doctor consultations.</p>
          </div>
        </div>

        {appointments.length > 0 ? (
          <div className="appointment-list">

            {appointments.map((appointment) => (
              <div
                className="appointment-item"
                key={appointment.id}
              >

                <div className="doctor-section">

                  <div className="doctor-avatar">
                    {appointment.doctor.charAt(4)}
                  </div>

                  <div>
                    <h3>{appointment.doctor}</h3>
                    <p>{appointment.specialty}</p>
                  </div>

                </div>

                <div className="appointment-detail">

                  <div>
                    <span>Date</span>
                    <strong>{appointment.date}</strong>
                  </div>

                  <div>
                    <span>Time</span>
                    <strong>{appointment.time}</strong>
                  </div>

                </div>

                <div className="appointment-actions">

                  <span
                    className={`appointment-status ${appointment.status.toLowerCase()}`}
                  >
                    {appointment.status}
                  </span>

                  <button
                    className="cancel-button"
                    onClick={() =>
                      cancelAppointment(appointment.id)
                    }
                  >
                    Cancel
                  </button>

                </div>

              </div>
            ))}

          </div>
        ) : (
          <div className="empty-appointments">

            <div className="empty-icon">📅</div>

            <h3>No appointments</h3>

            <p>
              You currently have no scheduled appointments.
            </p>

            <button className="book-button">
              Book an Appointment
            </button>

          </div>
        )}

      </div>

    </div>
  );
}

export default Appointment;