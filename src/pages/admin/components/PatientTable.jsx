import React, { useState } from "react";
import "./PatientTable.css";

function PatientTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const patients = [
    {
      id: "P001",
      name: "Ravi Kumar",
      age: 42,
      gender: "Male",
      village: "Kondapur",
      phone: "9876543210",
      condition: "Fever",
      status: "Active",
    },
    {
      id: "P002",
      name: "Lakshmi Devi",
      age: 35,
      gender: "Female",
      village: "Rampur",
      phone: "9876543211",
      condition: "Diabetes",
      status: "Active",
    },
    {
      id: "P003",
      name: "Suresh Reddy",
      age: 58,
      gender: "Male",
      village: "Nandigama",
      phone: "9876543212",
      condition: "Blood Pressure",
      status: "Pending",
    },
    {
      id: "P004",
      name: "Anitha Rao",
      age: 29,
      gender: "Female",
      village: "Chintapalli",
      phone: "9876543213",
      condition: "General Checkup",
      status: "Active",
    },
    {
      id: "P005",
      name: "Mohan Das",
      age: 64,
      gender: "Male",
      village: "Gopalapuram",
      phone: "9876543214",
      condition: "Heart Problem",
      status: "Inactive",
    },
    {
      id: "P006",
      name: "Priya Sharma",
      age: 24,
      gender: "Female",
      village: "Lakshmipur",
      phone: "9876543215",
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
      patient.phone.includes(search);

    const matchesStatus =
      statusFilter === "All" || patient.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const activePatients = patients.filter(
    (patient) => patient.status === "Active"
  ).length;

  const pendingPatients = patients.filter(
    (patient) => patient.status === "Pending"
  ).length;

  const inactivePatients = patients.filter(
    (patient) => patient.status === "Inactive"
  ).length;

  return (
    <div className="patient-table-page">

      {/* Header */}
      <div className="patient-table-header">
        <div>
          <h1>Patients</h1>
          <p>Manage and monitor registered patients.</p>
        </div>

        <button className="add-patient-btn">
          + Add Patient
        </button>
      </div>

      {/* Statistics */}
      <div className="patient-table-stats">

        <div className="patient-stat-box">
          <span>Total Patients</span>
          <strong>{patients.length}</strong>
        </div>

        <div className="patient-stat-box">
          <span>Active</span>
          <strong>{activePatients}</strong>
        </div>

        <div className="patient-stat-box">
          <span>Pending</span>
          <strong>{pendingPatients}</strong>
        </div>

        <div className="patient-stat-box">
          <span>Inactive</span>
          <strong>{inactivePatients}</strong>
        </div>

      </div>

      {/* Search and Filter */}
      <div className="patient-filter-bar">

        <div className="patient-search">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search by name, ID, village or phone..."
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
      <div className="patient-table-card">

        <div className="table-top">
          <div>
            <h2>Patient Records</h2>
            <p>
              Showing {filteredPatients.length} of {patients.length} patients
            </p>
          </div>
        </div>

        <div className="table-responsive">

          <table className="patient-table">

            <thead>
              <tr>
                <th>Patient</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Village</th>
                <th>Phone</th>
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
                      <div className="patient-name-cell">

                        <div className="patient-avatar-small">
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

                    <td>{patient.phone}</td>

                    <td>{patient.condition}</td>

                    <td>
                      <span
                        className={`patient-status ${patient.status.toLowerCase()}`}
                      >
                        {patient.status}
                      </span>
                    </td>

                    <td>
                      <button className="view-patient-btn">
                        View
                      </button>
                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td colSpan="8">

                    <div className="no-patients">

                      <div className="no-patients-icon">
                        🔍
                      </div>

                      <h3>No patients found</h3>

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

export default PatientTable;