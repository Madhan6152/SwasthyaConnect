import React, { useState } from "react";
import "./Patients.css";

function Patients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const patients = [
    {
      id: "P001",
      name: "Ravi Kumar",
      age: 42,
      gender: "Male",
      village: "Kondapur",
      condition: "Fever",
      status: "Active",
    },
    {
      id: "P002",
      name: "Lakshmi Devi",
      age: 35,
      gender: "Female",
      village: "Rampur",
      condition: "Diabetes",
      status: "Active",
    },
    {
      id: "P003",
      name: "Suresh Reddy",
      age: 58,
      gender: "Male",
      village: "Nandigama",
      condition: "Blood Pressure",
      status: "Pending",
    },
    {
      id: "P004",
      name: "Anitha Rao",
      age: 29,
      gender: "Female",
      village: "Chintapalli",
      condition: "General Checkup",
      status: "Active",
    },
    {
      id: "P005",
      name: "Mohan Das",
      age: 64,
      gender: "Male",
      village: "Gopalapuram",
      condition: "Heart Problem",
      status: "Inactive",
    },
    {
      id: "P006",
      name: "Priya Sharma",
      age: 24,
      gender: "Female",
      village: "Lakshmipur",
      condition: "Fever",
      status: "Active",
    },
  ];

  const filteredPatients = patients.filter((patient) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      patient.name.toLowerCase().includes(search) ||
      patient.id.toLowerCase().includes(search) ||
      patient.village.toLowerCase().includes(search) ||
      patient.condition.toLowerCase().includes(search);

    const matchesStatus =
      statusFilter === "All" || patient.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="patients-page">

      {/* Header */}
      <div className="patients-header">
        <div>
          <h1>Patients</h1>
          <p>Manage all registered patients.</p>
        </div>

        <button className="add-patient-button">
          + Add Patient
        </button>
      </div>

      {/* Statistics */}
      <div className="patients-stats">

        <div className="patient-stat-card">
          <span>Total Patients</span>
          <strong>{patients.length}</strong>
        </div>

        <div className="patient-stat-card">
          <span>Active Patients</span>
          <strong>
            {patients.filter(
              (patient) => patient.status === "Active"
            ).length}
          </strong>
        </div>

        <div className="patient-stat-card">
          <span>Pending</span>
          <strong>
            {patients.filter(
              (patient) => patient.status === "Pending"
            ).length}
          </strong>
        </div>

        <div className="patient-stat-card">
          <span>Inactive</span>
          <strong>
            {patients.filter(
              (patient) => patient.status === "Inactive"
            ).length}
          </strong>
        </div>

      </div>

      {/* Search and Filter */}
      <div className="patients-toolbar">

        <div className="patients-search">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search patient..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Inactive">Inactive</option>
        </select>

      </div>

      {/* Patient Table */}
      <div className="patients-table-container">

        <div className="patients-table-title">
          <h2>Patient Records</h2>

          <span>
            {filteredPatients.length} patients
          </span>
        </div>

        <div className="patients-table-wrapper">

          <table className="patients-table">

            <thead>
              <tr>
                <th>Patient</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Village</th>
                <th>Condition</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <tr key={patient.id}>

                    <td>
                      <div className="patient-info">

                        <div className="patient-avatar">
                          {patient.name.charAt(0)}
                        </div>

                        <div>
                          <strong>{patient.name}</strong>
                          <span>{patient.id}</span>
                        </div>

                      </div>
                    </td>

                    <td>{patient.age}</td>

                    <td>{patient.gender}</td>

                    <td>{patient.village}</td>

                    <td>{patient.condition}</td>

                    <td>
                      <span
                        className={`patient-status ${patient.status.toLowerCase()}`}
                      >
                        {patient.status}
                      </span>
                    </td>

                    <td>
                      <button className="view-patient-button">
                        View
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">

                    <div className="patients-empty">
                      <div>🔍</div>
                      <h3>No patients found</h3>
                      <p>
                        Try changing your search or filter.
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

export default Patients;