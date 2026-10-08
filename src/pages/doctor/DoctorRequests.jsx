import React, { useMemo, useState } from "react";
import "./DoctorRequests.css";

const initialRequests = [
  {
    id: "REQ001",
    patient: "Ravi Kumar",
    age: 42,
    village: "Madhavapur",
    requestType: "Medical Consultation",
    description: "Patient is experiencing fever and weakness.",
    date: "18 September 2026",
    priority: "High",
    status: "Pending",
  },
  {
    id: "REQ002",
    patient: "Lakshmi Devi",
    age: 56,
    village: "Rampur",
    requestType: "Follow-up",
    description: "Follow-up consultation for diabetes.",
    date: "18 September 2026",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: "REQ003",
    patient: "Suresh Reddy",
    age: 35,
    village: "Kondapur",
    requestType: "General Consultation",
    description: "Patient requested a general health consultation.",
    date: "17 September 2026",
    priority: "Low",
    status: "Approved",
  },
  {
    id: "REQ004",
    patient: "Anitha Rao",
    age: 29,
    village: "Nandigama",
    requestType: "Health Checkup",
    description: "Routine health checkup requested.",
    date: "16 September 2026",
    priority: "Low",
    status: "Completed",
  },
  {
    id: "REQ005",
    patient: "Mohan Das",
    age: 48,
    village: "Chintapalli",
    requestType: "Urgent Consultation",
    description: "Patient reported chest discomfort.",
    date: "15 September 2026",
    priority: "High",
    status: "Pending",
  },
];

function DoctorRequests() {
  const [requests, setRequests] = useState(initialRequests);

  const [searchTerm, setSearchTerm] = useState("");

  const [priorityFilter, setPriorityFilter] = useState("All");

  const [statusFilter, setStatusFilter] = useState("All");

  /* =========================================================
     FILTER REQUESTS
     ========================================================= */

  const filteredRequests = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return requests.filter((request) => {
      const matchesSearch =
        request.patient.toLowerCase().includes(search) ||
        request.id.toLowerCase().includes(search) ||
        request.village.toLowerCase().includes(search) ||
        request.requestType.toLowerCase().includes(search);

      const matchesPriority =
        priorityFilter === "All" ||
        request.priority === priorityFilter;

      const matchesStatus =
        statusFilter === "All" ||
        request.status === statusFilter;

      return (
        matchesSearch &&
        matchesPriority &&
        matchesStatus
      );
    });
  }, [
    requests,
    searchTerm,
    priorityFilter,
    statusFilter,
  ]);

  /* =========================================================
     STATISTICS
     ========================================================= */

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

  /* =========================================================
     UPDATE REQUEST STATUS
     ========================================================= */

  const updateStatus = (id, newStatus) => {
    setRequests((currentRequests) =>
      currentRequests.map((request) =>
        request.id === id
          ? {
              ...request,
              status: newStatus,
            }
          : request
      )
    );
  };

  /* =========================================================
     RESET REQUESTS
     ========================================================= */

  const handleRefresh = () => {
    setRequests(initialRequests);
    setSearchTerm("");
    setPriorityFilter("All");
    setStatusFilter("All");
  };

  return (
    <div className="doctor-requests-page">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <div className="doctor-requests-header">

        <div>
          <h1>Requests</h1>

          <p>
            Review and respond to healthcare requests from
            your patients.
          </p>
        </div>

        <button
          className="doctor-refresh-button"
          onClick={handleRefresh}
        >
          ↻ Refresh
        </button>

      </div>


      {/* =====================================================
          STATISTICS
          ===================================================== */}

      <div className="doctor-requests-stats">

        <div className="doctor-request-stat-card">

          <div className="doctor-request-stat-icon">
            📋
          </div>

          <div>
            <span>Total Requests</span>
            <strong>{totalRequests}</strong>
          </div>

        </div>


        <div className="doctor-request-stat-card">

          <div className="doctor-request-stat-icon">
            ⏳
          </div>

          <div>
            <span>Pending</span>
            <strong>{pendingRequests}</strong>
          </div>

        </div>


        <div className="doctor-request-stat-card">

          <div className="doctor-request-stat-icon">
            ✓
          </div>

          <div>
            <span>Approved</span>
            <strong>{approvedRequests}</strong>
          </div>

        </div>


        <div className="doctor-request-stat-card">

          <div className="doctor-request-stat-icon">
            ✓
          </div>

          <div>
            <span>Completed</span>
            <strong>{completedRequests}</strong>
          </div>

        </div>

      </div>


      {/* =====================================================
          SEARCH + FILTERS
          ===================================================== */}

      <div className="doctor-requests-filter-card">

        {/* Search */}

        <div className="doctor-request-search">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search patient, village, request..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

        </div>


        {/* Priority */}

        <div className="doctor-request-filter">

          <label htmlFor="priority-filter">
            Priority
          </label>

          <select
            id="priority-filter"
            value={priorityFilter}
            onChange={(event) =>
              setPriorityFilter(event.target.value)
            }
          >
            <option value="All">
              All Priorities
            </option>

            <option value="High">
              High
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="Low">
              Low
            </option>
          </select>

        </div>


        {/* Status */}

        <div className="doctor-request-filter">

          <label htmlFor="status-filter">
            Status
          </label>

          <select
            id="status-filter"
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value)
            }
          >
            <option value="All">
              All Requests
            </option>

            <option value="Pending">
              Pending
            </option>

            <option value="Approved">
              Approved
            </option>

            <option value="Completed">
              Completed
            </option>

            <option value="Rejected">
              Rejected
            </option>
          </select>

        </div>

      </div>


      {/* =====================================================
          REQUEST TABLE
          ===================================================== */}

      <div className="doctor-requests-table-card">

        <div className="doctor-requests-table-header">

          <div>
            <h2>Patient Requests</h2>

            <p>
              Showing {filteredRequests.length} of{" "}
              {totalRequests} requests
            </p>
          </div>

        </div>


        <div className="doctor-requests-table-wrapper">

          <table className="doctor-requests-table">

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

                    {/* Request */}

                    <td>

                      <div className="doctor-request-name">

                        <div className="doctor-request-icon">
                          📋
                        </div>

                        <div>
                          <strong>
                            {request.id}
                          </strong>

                          <span>
                            {request.description}
                          </span>
                        </div>

                      </div>

                    </td>


                    {/* Patient */}

                    <td>

                      <div className="doctor-request-patient">

                        <strong>
                          {request.patient}
                        </strong>

                        <span>
                          {request.age} years
                        </span>

                      </div>

                    </td>


                    {/* Village */}

                    <td>
                      {request.village}
                    </td>


                    {/* Type */}

                    <td>
                      {request.requestType}
                    </td>


                    {/* Date */}

                    <td>
                      {request.date}
                    </td>


                    {/* Priority */}

                    <td>

                      <span
                        className={`doctor-priority-badge ${request.priority.toLowerCase()}`}
                      >
                        {request.priority}
                      </span>

                    </td>


                    {/* Status */}

                    <td>

                      <span
                        className={`doctor-request-status ${request.status.toLowerCase()}`}
                      >
                        {request.status}
                      </span>

                    </td>


                    {/* Actions */}

                    <td>

                      {request.status === "Pending" ? (

                        <div className="doctor-request-actions">

                          <button
                            className="doctor-approve-button"
                            onClick={() =>
                              updateStatus(
                                request.id,
                                "Approved"
                              )
                            }
                          >
                            Approve
                          </button>

                          <button
                            className="doctor-reject-button"
                            onClick={() =>
                              updateStatus(
                                request.id,
                                "Rejected"
                              )
                            }
                          >
                            Reject
                          </button>

                        </div>

                      ) : (

                        <button
                          className="doctor-view-request-button"
                          onClick={() =>
                            alert(
                              `Viewing request ${request.id}`
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

                  <td
                    colSpan="8"
                    className="doctor-no-requests"
                  >

                    <div className="doctor-no-requests-icon">
                      📋
                    </div>

                    <h3>
                      No requests found
                    </h3>

                    <p>
                      Try changing your search or filters.
                    </p>

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

export default DoctorRequests;