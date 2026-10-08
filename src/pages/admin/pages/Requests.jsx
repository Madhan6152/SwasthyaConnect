import React, { useState } from "react";
import "./Requests.css";

function Requests() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const [requests, setRequests] = useState([
    {
      id: "REQ001",
      patient: "Ravi Kumar",
      village: "Madhavapur",
      requestType: "Doctor Consultation",
      description: "Need consultation for fever and weakness.",
      date: "18 September 2026",
      priority: "High",
      status: "Pending",
    },
    {
      id: "REQ002",
      patient: "Lakshmi Devi",
      village: "Rampur",
      requestType: "Medicine Request",
      description: "Monthly diabetes medicines required.",
      date: "18 September 2026",
      priority: "Medium",
      status: "Approved",
    },
    {
      id: "REQ003",
      patient: "Suresh Reddy",
      village: "Kondapur",
      requestType: "Health Worker Visit",
      description: "Home visit requested for elderly patient.",
      date: "17 September 2026",
      priority: "High",
      status: "Pending",
    },
    {
      id: "REQ004",
      patient: "Anitha Rao",
      village: "Nandigama",
      requestType: "Appointment",
      description: "Request for general physician appointment.",
      date: "16 September 2026",
      priority: "Low",
      status: "Completed",
    },
    {
      id: "REQ005",
      patient: "Mohan Das",
      village: "Chintapalli",
      requestType: "Health Checkup",
      description: "Basic health checkup requested.",
      date: "15 September 2026",
      priority: "Medium",
      status: "Rejected",
    },
  ]);

  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.village.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.requestType.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || request.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const updateStatus = (id, newStatus) => {
    setRequests((currentRequests) =>
      currentRequests.map((request) =>
        request.id === id
          ? { ...request, status: newStatus }
          : request
      )
    );
  };

  const totalRequests = requests.length;
  const pendingRequests = requests.filter(
    (request) => request.status === "Pending"
  ).length;
  const approvedRequests = requests.filter(
    (request) => request.status === "Approved"
  ).length;
  const completedRequests = requests.filter(
    (request) => request.status === "Completed"
  ).length;

  return (
    <div className="requests-page">

      {/* Header */}
      <div className="requests-header">
        <div>
          <h1>Requests</h1>
          <p>Manage and respond to healthcare requests from patients.</p>
        </div>

        <button className="refresh-button" onClick={() => window.location.reload()}>
          ↻ Refresh
        </button>
      </div>

      {/* Statistics */}
      <div className="requests-stats">

        <div className="request-stat-card">
          <div className="request-stat-icon">📋</div>
          <div>
            <span>Total Requests</span>
            <strong>{totalRequests}</strong>
          </div>
        </div>

        <div className="request-stat-card">
          <div className="request-stat-icon">⏳</div>
          <div>
            <span>Pending</span>
            <strong>{pendingRequests}</strong>
          </div>
        </div>

        <div className="request-stat-card">
          <div className="request-stat-icon">✓</div>
          <div>
            <span>Approved</span>
            <strong>{approvedRequests}</strong>
          </div>
        </div>

        <div className="request-stat-card">
          <div className="request-stat-icon">✓</div>
          <div>
            <span>Completed</span>
            <strong>{completedRequests}</strong>
          </div>
        </div>

      </div>

      {/* Filters */}
      <div className="requests-filter-card">

        <div className="request-search">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search patient, village, request..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="request-status-filter">
          <label>Status</label>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Requests</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Completed">Completed</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

      </div>

      {/* Requests Table */}
      <div className="requests-table-card">

        <div className="requests-table-header">
          <div>
            <h2>Patient Requests</h2>
            <p>{filteredRequests.length} requests found</p>
          </div>
        </div>

        <div className="requests-table-wrapper">

          <table className="requests-table">

            <thead>
              <tr>
                <th>Request</th>
                <th>Patient</th>
                <th>Village</th>
                <th>Type</th>
                <th>Date</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredRequests.length > 0 ? (

                filteredRequests.map((request) => (

                  <tr key={request.id}>

                    <td>
                      <div className="request-name">
                        <div className="request-icon">📋</div>

                        <div>
                          <strong>{request.id}</strong>
                          <span>{request.description}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <strong>{request.patient}</strong>
                    </td>

                    <td>{request.village}</td>

                    <td>{request.requestType}</td>

                    <td>{request.date}</td>

                    <td>
                      <span
                        className={`priority-badge ${request.priority.toLowerCase()}`}
                      >
                        {request.priority}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`request-status ${request.status.toLowerCase()}`}
                      >
                        {request.status}
                      </span>
                    </td>

                    <td>

                      {request.status === "Pending" ? (
                        <div className="request-actions">

                          <button
                            className="approve-button"
                            onClick={() =>
                              updateStatus(request.id, "Approved")
                            }
                          >
                            Approve
                          </button>

                          <button
                            className="reject-button"
                            onClick={() =>
                              updateStatus(request.id, "Rejected")
                            }
                          >
                            Reject
                          </button>

                        </div>
                      ) : request.status === "Approved" ? (

                        <button
                          className="complete-button"
                          onClick={() =>
                            updateStatus(request.id, "Completed")
                          }
                        >
                          Complete
                        </button>

                      ) : (

                        <button
                          className="view-request-button"
                          onClick={() =>
                            alert(
                              `${request.id}\n\n${request.description}`
                            )
                          }
                        >
                          View
                        </button>

                      )}

                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td colSpan="8">

                    <div className="no-requests">

                      <div className="no-request-icon">📋</div>

                      <h3>No requests found</h3>

                      <p>
                        Try changing your search or status filter.
                      </p>

                    </div>

                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Requests;