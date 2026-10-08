import React, { useState } from "react";
import "./Appointments.css";

function Appointments() {
  const [statusFilter, setStatusFilter] = useState("All");

  const [appointments, setAppointments] = useState([
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
    {
      id: "APT003",
      doctor: "Dr. Priya Reddy",
      specialty: "General Physician",
      date: "27 September 2026",
      time: "11:00 AM",
      type: "Clinic Visit",
      status: "Confirmed",
    },
    {
      id: "APT004",
      doctor: "Dr. Arjun Patel",
      specialty: "Dermatologist",
      date: "12 September 2026",
      time: "04:00 PM",
      type: "Video Consultation",
      status: "Completed",
    },
  ]);

  const cancelAppointment = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (!confirmed) return;

    setAppointments((currentAppointments) =>
      currentAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: "Cancelled" }
          : appointment
      )
    );
  };

  const filteredAppointments =
    statusFilter === "All"
      ? appointments
      : appointments.filter(
          (appointment) => appointment.status === statusFilter
        );

  const totalAppointments = appointments.length;

  const upcomingAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "Confirmed" ||
      appointment.status === "Pending"
  ).length;

  const completedAppointments = appointments.filter(
    (appointment) => appointment.status === "Completed"
  ).length;

  const cancelledAppointments = appointments.filter(
    (appointment) => appointment.status === "Cancelled"
  ).length;

  return (
    <div className="patient-appointments-page">

      {/* Header */}
      <div className="patient-appointments-header">
        <div>
          <h1>My Appointments</h1>
          <p>
            View and manage your doctor appointments.
          </p>
        </div>

        <button
          className="book-appointment-button"
          onClick={() =>
            alert("Opening doctor selection...")
          }
        >
          + Book Appointment
        </button>
      </div>

      {/* Statistics */}
      <div className="patient-appointment-stats">

        <div className="patient-appointment-stat">
          <div className="patient-stat-icon">📅</div>

          <div>
            <span>Total</span>
            <strong>{totalAppointments}</strong>
          </div>
        </div>

        <div className="patient-appointment-stat">
          <div className="patient-stat-icon">🕐</div>

          <div>
            <span>Upcoming</span>
            <strong>{upcomingAppointments}</strong>
          </div>
        </div>

        <div className="patient-appointment-stat">
          <div className="patient-stat-icon">✓</div>

          <div>
            <span>Completed</span>
            <strong>{completedAppointments}</strong>
          </div>
        </div>

        <div className="patient-appointment-stat">
          <div className="patient-stat-icon">✕</div>

          <div>
            <span>Cancelled</span>
            <strong>{cancelledAppointments}</strong>
          </div>
        </div>

      </div>

      {/* Filter */}
      <div className="patient-appointment-filter">

        <div>
          <h2>Appointment History</h2>
          <p>
            {filteredAppointments.length} appointments found
          </p>
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Appointments</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>

      </div>

      {/* Appointment List */}
      <div className="patient-appointment-list">

        {filteredAppointments.length > 0 ? (

          filteredAppointments.map((appointment) => (

            <div
              className="patient-appointment-card"
              key={appointment.id}
            >

              {/* Doctor */}
              <div className="patient-doctor-info">

                <div className="patient-doctor-avatar">
                  {appointment.doctor
                    .replace("Dr. ", "")
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
                </div>

                <div>
                  <h3>{appointment.doctor}</h3>
                  <p>{appointment.specialty}</p>
                  <span>{appointment.id}</span>
                </div>

              </div>

              {/* Appointment Details */}
              <div className="patient-appointment-details">

                <div>
                  <span>📅 Date</span>
                  <strong>{appointment.date}</strong>
                </div>

                <div>
                  <span>🕐 Time</span>
                  <strong>{appointment.time}</strong>
                </div>

                <div>
                  <span>📍 Type</span>
                  <strong>{appointment.type}</strong>
                </div>

              </div>

              {/* Status & Action */}
              <div className="patient-appointment-actions">

                <span
                  className={`patient-appointment-status ${appointment.status.toLowerCase()}`}
                >
                  {appointment.status}
                </span>

                {appointment.status === "Confirmed" ||
                appointment.status === "Pending" ? (
                  <button
                    className="cancel-appointment-button"
                    onClick={() =>
                      cancelAppointment(appointment.id)
                    }
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    className="view-appointment-button"
                    onClick={() =>
                      alert(
                        `Appointment: ${appointment.id}`
                      )
                    }
                  >
                    View
                  </button>
                )}

              </div>

            </div>

          ))

        ) : (

          <div className="patient-no-appointments">

            <div>📅</div>

            <h3>No appointments found</h3>

            <p>
              You don't have any appointments with this
              status.
            </p>

            <button
              onClick={() =>
                alert("Opening doctor selection...")
              }
            >
              Book an Appointment
            </button>

          </div>

        )}

      </div>

    </div>
  );
}

export default Appointments;