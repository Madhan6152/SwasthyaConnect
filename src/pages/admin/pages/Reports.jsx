import React, { useState } from "react";
import "./Reports.css";

function Reports() {
  const [reportType, setReportType] = useState("All");
  const [period, setPeriod] = useState("This Month");

  const reports = [
    {
      id: "R001",
      name: "Monthly Patient Report",
      type: "Patients",
      date: "18 September 2026",
      records: 248,
      status: "Completed",
    },
    {
      id: "R002",
      name: "Doctor Activity Report",
      type: "Doctors",
      date: "17 September 2026",
      records: 42,
      status: "Completed",
    },
    {
      id: "R003",
      name: "Health Worker Report",
      type: "Health Workers",
      date: "15 September 2026",
      records: 76,
      status: "Completed",
    },
    {
      id: "R004",
      name: "Appointment Report",
      type: "Appointments",
      date: "12 September 2026",
      records: 184,
      status: "Completed",
    },
    {
      id: "R005",
      name: "Patient Request Report",
      type: "Requests",
      date: "10 September 2026",
      records: 96,
      status: "Processing",
    },
  ];

  const filteredReports = reports.filter((report) => {
    return reportType === "All" || report.type === reportType;
  });

  const downloadReport = (report) => {
    alert(`Preparing ${report.name} for download...`);
  };

  return (
    <div className="reports-page">

      {/* Header */}
      <div className="reports-header">
        <div>
          <h1>Reports</h1>
          <p>
            View healthcare platform reports and activity summaries.
          </p>
        </div>

        <button className="generate-report-btn">
          + Generate Report
        </button>
      </div>

      {/* Report Statistics */}
      <div className="reports-stats">

        <div className="report-stat-card">
          <div className="report-stat-icon">📊</div>
          <div>
            <span>Total Reports</span>
            <strong>{reports.length}</strong>
          </div>
        </div>

        <div className="report-stat-card">
          <div className="report-stat-icon">👥</div>
          <div>
            <span>Patient Records</span>
            <strong>248</strong>
          </div>
        </div>

        <div className="report-stat-card">
          <div className="report-stat-icon">📅</div>
          <div>
            <span>Appointments</span>
            <strong>184</strong>
          </div>
        </div>

        <div className="report-stat-card">
          <div className="report-stat-icon">🧑‍⚕️</div>
          <div>
            <span>Health Workers</span>
            <strong>76</strong>
          </div>
        </div>

      </div>

      {/* Filters */}
      <div className="reports-filter">

        <div className="report-filter-group">
          <label>Report Type</label>

          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="All">All Reports</option>
            <option value="Patients">Patients</option>
            <option value="Doctors">Doctors</option>
            <option value="Health Workers">
              Health Workers
            </option>
            <option value="Appointments">
              Appointments
            </option>
            <option value="Requests">Requests</option>
          </select>
        </div>

        <div className="report-filter-group">
          <label>Period</label>

          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
          </select>
        </div>

      </div>

      {/* Quick Reports */}
      <div className="quick-reports">

        <h2>Quick Reports</h2>

        <div className="quick-report-grid">

          <button className="quick-report-card">
            <span>👥</span>
            <div>
              <strong>Patient Report</strong>
              <p>View patient statistics</p>
            </div>
          </button>

          <button className="quick-report-card">
            <span>📅</span>
            <div>
              <strong>Appointment Report</strong>
              <p>View appointment activity</p>
            </div>
          </button>

          <button className="quick-report-card">
            <span>🩺</span>
            <div>
              <strong>Health Worker Report</strong>
              <p>View worker activity</p>
            </div>
          </button>

          <button className="quick-report-card">
            <span>👨‍⚕️</span>
            <div>
              <strong>Doctor Report</strong>
              <p>View doctor activity</p>
            </div>
          </button>

        </div>

      </div>

      {/* Reports Table */}
      <div className="reports-table-card">

        <div className="reports-table-header">
          <div>
            <h2>Generated Reports</h2>
            <p>
              {filteredReports.length} reports available
            </p>
          </div>
        </div>

        <div className="reports-table-wrapper">

          <table className="reports-table">

            <thead>
              <tr>
                <th>Report</th>
                <th>Type</th>
                <th>Date</th>
                <th>Records</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredReports.length > 0 ? (

                filteredReports.map((report) => (

                  <tr key={report.id}>

                    <td>
                      <div className="report-name">

                        <div className="report-file-icon">
                          📄
                        </div>

                        <div>
                          <strong>{report.name}</strong>
                          <span>{report.id}</span>
                        </div>

                      </div>
                    </td>

                    <td>{report.type}</td>

                    <td>{report.date}</td>

                    <td>{report.records}</td>

                    <td>
                      <span
                        className={`report-status ${
                          report.status.toLowerCase()
                        }`}
                      >
                        {report.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="download-report-btn"
                        onClick={() => downloadReport(report)}
                        disabled={report.status !== "Completed"}
                      >
                        ↓ Download
                      </button>
                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td colSpan="6">

                    <div className="no-reports">
                      <div>📊</div>
                      <h3>No reports found</h3>
                      <p>
                        Try selecting a different report type.
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

export default Reports;