import React, {
  useEffect,
  useState,
} from "react";

import "./HealthWorkerDashboard.css";
import HealthWorkerSections from "./HealthWorkerSections";

import {
  getDemoData,
  updateRequestStatus,
  addTriageRecord,
  addReferral,
} from "../../data/demoStore";

function HealthWorkerDashboard() {
  const [activeSection, setActiveSection] =
    useState("Overview");

  const [demoData, setDemoData] =
    useState(getDemoData());

  useEffect(() => {
    const refreshData = () => {
      setDemoData(getDemoData());
    };

    window.addEventListener(
      "focus",
      refreshData
    );

    return () => {
      window.removeEventListener(
        "focus",
        refreshData
      );
    };
  }, []);

  const visits = [
    {
      id: "VIS001",
      patient: "Ravi Kumar",
      age: 42,
      village: "Madhavapur",
      time: "09:00 AM",
      purpose: "General Health Checkup",
      status: "Scheduled",
    },
    {
      id: "VIS002",
      patient: "Lakshmi Devi",
      age: 56,
      village: "Rampur",
      time: "11:00 AM",
      purpose: "Medicine Follow-up",
      status: "Scheduled",
    },
    {
      id: "VIS003",
      patient: "Suresh Reddy",
      age: 35,
      village: "Kondapur",
      time: "02:00 PM",
      purpose: "Blood Pressure Check",
      status: "Pending",
    },
    {
      id: "VIS004",
      patient: "Anitha Rao",
      age: 29,
      village: "Nandigama",
      time: "04:00 PM",
      purpose: "Health Checkup",
      status: "Completed",
    },
  ];

  const patients = [
    {
      id: "P001",
      name: "Ravi Kumar",
      age: 42,
      village: "Madhavapur",
      condition: "Fever",
      lastVisit: "18 Sep 2026",
    },
    {
      id: "P002",
      name: "Lakshmi Devi",
      age: 56,
      village: "Rampur",
      condition: "Diabetes",
      lastVisit: "17 Sep 2026",
    },
    {
      id: "P003",
      name: "Suresh Reddy",
      age: 35,
      village: "Kondapur",
      condition: "Hypertension",
      lastVisit: "15 Sep 2026",
    },
    {
      id: "P004",
      name: "Anitha Rao",
      age: 29,
      village: "Nandigama",
      condition: "General Checkup",
      lastVisit: "14 Sep 2026",
    },
  ];

  const requests = demoData.requests;

  const pendingRequests =
    requests.filter(
      (request) =>
        request.status === "Pending"
    );

  const highPriorityRequests =
    requests.filter(
      (request) =>
        request.priority === "High"
    );

  const handleAcceptRequest = (
    request
  ) => {
    const updatedData =
      updateRequestStatus(
        request.id,
        "In Progress",
        {
          assignedTo: "Suresh Kumar",
        }
      );

    setDemoData(updatedData);

    alert(
      `${request.id} has been assigned to you.`
    );
  };

  const handleTriage = (request) => {
    const triage = addTriageRecord({
      requestId: request.id,
      patient: request.patient,
      priority: request.priority,
      symptoms: request.description,
      temperature: "38.2°C",
      bloodPressure: "138/88",
      oxygen: "97%",
      pulse: "86 bpm",
      recommendation:
        request.priority === "High"
          ? "Doctor consultation recommended"
          : "Routine follow-up recommended",
    });

    const updatedData =
      updateRequestStatus(
        request.id,
        "Triaged",
        {
          triageId: triage.id,
          assignedTo: "Doctor",
        }
      );

    setDemoData(updatedData);

    alert(
      `Triage completed for ${request.patient}.`
    );
  };

  const handleReferral = (request) => {
    const referral = addReferral({
      patient: request.patient,
      from: `${request.village} PHC`,
      to: "District Hospital",
      reason:
        "Specialist consultation required",
      priority: request.priority,
    });

    const updatedData =
      updateRequestStatus(
        request.id,
        "Referred",
        {
          referralId: referral.id,
          assignedTo: "District Hospital",
        }
      );

    setDemoData(updatedData);

    alert(
      `Referral ${referral.id} created for ${request.patient}.`
    );
  };

  const handleAction = (action) => {
    alert(
      `${action} is available in the SwasthyaConnect prototype.`
    );
  };

  return (
    <div className="health-worker-dashboard">

      {/* HEADER */}
      <header className="health-worker-header">

        <div className="health-worker-header-left">

          <div className="health-worker-logo">
            🏥
          </div>

          <div>
            <h2>
              SwasthyaConnect
            </h2>

            <span>
              Health Worker Portal
            </span>
          </div>

        </div>

        <div className="health-worker-header-right">

          <button
            className="health-worker-notification"
            onClick={() =>
              handleAction("Notifications")
            }
          >
            🔔

            <span className="health-worker-notification-badge">
              {pendingRequests.length}
            </span>

          </button>

          <div className="health-worker-profile">

            <div className="health-worker-avatar">
              SK
            </div>

            <div>
              <strong>
                Suresh Kumar
              </strong>

              <span>
                Health Worker
              </span>
            </div>

          </div>

        </div>

      </header>

      {/* NAVIGATION */}
      <nav className="health-worker-navigation">

        <button
          className={
            activeSection === "Overview"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveSection("Overview")
          }
        >
          🏠 Overview
        </button>

        <button
          className={
            activeSection === "Visits"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveSection("Visits")
          }
        >
          📅 My Visits
        </button>

        <button
          className={
            activeSection === "Patients"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveSection("Patients")
          }
        >
          👥 Patients
        </button>

        <button
          className={
            activeSection === "Requests"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveSection("Requests")
          }
        >
          📋 Requests
        </button>

        <button
          className={
            activeSection === "Doctors"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveSection("Doctors")
          }
        >
          👨‍⚕️ Doctors
        </button>

      </nav>

      {/* MAIN */}
      <main className="health-worker-main">

        {activeSection === "Overview" ? (
          <>

        {/* WELCOME */}
        <section className="health-worker-welcome">

          <div>

            <h1>
              Good Morning, Suresh 👋
            </h1>

            <p>
              Here is your assigned
              healthcare activity for today.
            </p>

          </div>

          <div className="health-worker-date">
            📅 25 September 2026
          </div>

        </section>

        {/* STATISTICS */}
        <section className="health-worker-stats">

          <div className="health-worker-stat-card">

            <div className="health-worker-stat-icon">
              🏠
            </div>

            <div>
              <span>
                Today's Visits
              </span>

              <strong>
                {visits.length}
              </strong>

              <small>
                3 scheduled
              </small>
            </div>

          </div>

          <div className="health-worker-stat-card">

            <div className="health-worker-stat-icon">
              👥
            </div>

            <div>
              <span>
                Assigned Patients
              </span>

              <strong>
                {patients.length}
              </strong>

              <small>
                Demo records
              </small>
            </div>

          </div>

          <div className="health-worker-stat-card">

            <div className="health-worker-stat-icon">
              📋
            </div>

            <div>
              <span>
                Pending Requests
              </span>

              <strong>
                {pendingRequests.length}
              </strong>

              <small>
                Needs attention
              </small>
            </div>

          </div>

          <div className="health-worker-stat-card">

            <div className="health-worker-stat-icon">
              🚨
            </div>

            <div>
              <span>
                High Priority
              </span>

              <strong>
                {highPriorityRequests.length}
              </strong>

              <small>
                Requires prompt review
              </small>
            </div>

          </div>

        </section>

        {/* VISITS + QUICK ACTIONS */}
        <section className="health-worker-content-grid">

          {/* VISITS */}
          <div className="health-worker-card">

            <div className="health-worker-card-header">

              <div>
                <h2>
                  Today's Visits
                </h2>

                <p>
                  Your scheduled patient visits
                </p>
              </div>

              <button
                className="health-worker-view-all"
                onClick={() =>
                  setActiveSection("Visits")
                }
              >
                View All
              </button>

            </div>

            <div className="health-worker-visits-list">

              {visits.map((visit) => (

                <div
                  className="health-worker-visit-row"
                  key={visit.id}
                >

                  <div className="visit-time">

                    <strong>
                      {visit.time}
                    </strong>

                    <span>
                      {visit.id}
                    </span>

                  </div>

                  <div className="visit-patient">

                    <div className="visit-patient-avatar">

                      {visit.patient
                        .split(" ")
                        .map(
                          (name) =>
                            name[0]
                        )
                        .join("")}

                    </div>

                    <div>

                      <strong>
                        {visit.patient}
                      </strong>

                      <span>
                        {visit.age} years •{" "}
                        {visit.village}
                      </span>

                      <small>
                        {visit.purpose}
                      </small>

                    </div>

                  </div>

                  <span
                    className={`visit-status ${visit.status
                      .toLowerCase()
                      .replace(
                        " ",
                        "-"
                      )}`}
                  >
                    {visit.status}
                  </span>

                  <button
                    className="visit-action-button"
                    onClick={() =>
                      handleAction(
                        `Visit ${visit.id}`
                      )
                    }
                  >
                    View
                  </button>

                </div>

              ))}

            </div>

          </div>

          {/* QUICK ACTIONS */}
          <div className="health-worker-card">

            <div className="health-worker-card-header">

              <div>
                <h2>
                  Quick Actions
                </h2>

                <p>
                  Frequently used services
                </p>
              </div>

            </div>

            <div className="health-worker-quick-actions">

              <button
                onClick={() =>
                  handleAction(
                    "Add Patient"
                  )
                }
              >
                <span>👤</span>

                <div>
                  <strong>
                    Add Patient
                  </strong>

                  <small>
                    Register a new patient
                  </small>
                </div>

              </button>

              <button
                onClick={() =>
                  handleAction(
                    "Schedule Visit"
                  )
                }
              >
                <span>📅</span>

                <div>
                  <strong>
                    Schedule Visit
                  </strong>

                  <small>
                    Plan a patient visit
                  </small>
                </div>

              </button>

              <button
                onClick={() =>
                  setActiveSection(
                    "Requests"
                  )
                }
              >
                <span>📋</span>

                <div>
                  <strong>
                    Health Requests
                  </strong>

                  <small>
                    Review patient requests
                  </small>
                </div>

              </button>

              <button
                onClick={() =>
                  handleAction(
                    "Contact Doctor"
                  )
                }
              >
                <span>👨‍⚕️</span>

                <div>
                  <strong>
                    Contact Doctor
                  </strong>

                  <small>
                    Connect with a doctor
                  </small>
                </div>

              </button>

            </div>

          </div>

        </section>

        {/* PATIENT REQUESTS */}
        <section className="health-worker-card">

          <div className="health-worker-card-header">

            <div>
              <h2>
                Recent Patient Requests
              </h2>

              <p>
                Requests requiring your attention
              </p>
            </div>

            <button
              className="health-worker-view-all"
              onClick={() =>
                setActiveSection(
                  "Requests"
                )
              }
            >
              View All
            </button>

          </div>

          <div className="health-worker-requests-list">

            {requests.length > 0 ? (

              requests.map((request) => (

                <div
                  className="health-worker-request-row"
                  key={request.id}
                >

                  <div className="request-icon">
                    📋
                  </div>

                  <div className="request-information">

                    <div>

                      <strong>
                        {request.type}
                      </strong>

                      <span>
                        {request.id}
                      </span>

                    </div>

                    <p>
                      {request.patient} •{" "}
                      {request.village}
                    </p>

                    <small>
                      {request.description}
                    </small>

                  </div>

                  <span
                    className={`request-priority ${
                      request.priority.toLowerCase()
                    }`}
                  >
                    {request.priority}
                  </span>

                  <span
                    className={`request-status ${request.status
                      .toLowerCase()
                      .replace(
                        " ",
                        "-"
                      )}`}
                  >
                    {request.status}
                  </span>

                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >

                    {request.status ===
                      "Pending" && (
                      <button
                        className="request-view-button"
                        onClick={() =>
                          handleAcceptRequest(
                            request
                          )
                        }
                      >
                        Accept
                      </button>
                    )}

                    {(request.status ===
                      "In Progress" ||
                      request.status ===
                        "Pending") && (
                      <button
                        className="request-view-button"
                        onClick={() =>
                          handleTriage(
                            request
                          )
                        }
                      >
                        Triage
                      </button>
                    )}

                    {request.status ===
                      "Triaged" && (
                      <button
                        className="request-view-button"
                        onClick={() =>
                          handleReferral(
                            request
                          )
                        }
                      >
                        Refer
                      </button>
                    )}

                    {request.status ===
                      "Referred" && (
                      <button
                        className="request-view-button"
                        onClick={() =>
                          handleAction(
                            "Referral Tracking"
                          )
                        }
                      >
                        Track
                      </button>
                    )}

                  </div>

                </div>

              ))

            ) : (

              <div className="no-requests">

                <div>📋</div>

                <h3>
                  No patient requests
                </h3>

                <p>
                  New requests submitted by
                  patients will appear here.
                </p>

              </div>

            )}

          </div>

        </section>

        {/* TRIAGE SUMMARY */}
        <section className="health-worker-card">

          <div className="health-worker-card-header">

            <div>
              <h2>
                Recent Triage Records
              </h2>

              <p>
                Initial assessment completed
                by health workers
              </p>
            </div>

            <span>
              {demoData.triage.length} Records
            </span>

          </div>

          {demoData.triage.length > 0 ? (

            <div className="health-worker-requests-list">

              {demoData.triage
                .slice(0, 5)
                .map((record) => (

                  <div
                    className="health-worker-request-row"
                    key={record.id}
                  >

                    <div className="request-icon">
                      🩺
                    </div>

                    <div className="request-information">

                      <div>

                        <strong>
                          {record.patient}
                        </strong>

                        <span>
                          {record.id}
                        </span>

                      </div>

                      <p>
                        Temperature:{" "}
                        {record.temperature}
                        {" • "}
                        SpO₂:{" "}
                        {record.oxygen}
                      </p>

                      <small>
                        {record.recommendation}
                      </small>

                    </div>

                    <span
                      className={`request-priority ${
                        record.priority.toLowerCase()
                      }`}
                    >
                      {record.priority}
                    </span>

                  </div>

                ))}

            </div>

          ) : (

            <div className="no-requests">

              <div>🩺</div>

              <h3>
                No triage records yet
              </h3>

              <p>
                Complete a triage assessment
                from a patient request.
              </p>

            </div>

          )}

        </section>

        {/* PATIENT RECORDS */}
        <section className="health-worker-card">

          <div className="health-worker-card-header">

            <div>
              <h2>
                Assigned Patients
              </h2>

              <p>
                Recently managed patients
              </p>
            </div>

            <button
              className="health-worker-view-all"
              onClick={() =>
                setActiveSection(
                  "Patients"
                )
              }
            >
              View All
            </button>

          </div>

          <div className="health-worker-table-wrapper">

            <table className="health-worker-table">

              <thead>

                <tr>
                  <th>
                    Patient
                  </th>

                  <th>
                    Age
                  </th>

                  <th>
                    Village
                  </th>

                  <th>
                    Condition
                  </th>

                  <th>
                    Last Visit
                  </th>

                  <th>
                    Action
                  </th>
                </tr>

              </thead>

              <tbody>

                {patients.map(
                  (patient) => (

                    <tr
                      key={patient.id}
                    >

                      <td>

                        <div className="table-patient">

                          <div className="table-patient-avatar">

                            {patient.name
                              .split(" ")
                              .map(
                                (name) =>
                                  name[0]
                              )
                              .join("")}

                          </div>

                          <div>

                            <strong>
                              {patient.name}
                            </strong>

                            <span>
                              {patient.id}
                            </span>

                          </div>

                        </div>

                      </td>

                      <td>
                        {patient.age}
                      </td>

                      <td>
                        {patient.village}
                      </td>

                      <td>
                        {patient.condition}
                      </td>

                      <td>
                        {patient.lastVisit}
                      </td>

                      <td>

                        <button
                          className="patient-view-button"
                          onClick={() =>
                            handleAction(
                              `Patient ${patient.name}`
                            )
                          }
                        >
                          View Record
                        </button>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </section>

        {/* FOOTER */}
        <footer className="health-worker-footer">

          <span>
            © 2026 SwasthyaConnect
            Healthcare Platform
          </span>

          <span>
            Health Worker Portal
          </span>

        </footer>

          </>
        ) : (
          <HealthWorkerSections
            activeSection={activeSection}
          />
        )}

      </main>

    </div>
  );
}

export default HealthWorkerDashboard;