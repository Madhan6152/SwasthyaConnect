import React, { useMemo, useState } from "react";
import {
  getDemoData,
  updateRequestStatus,
} from "../../data/demoStore";

import "./HealthWorkerSections.css";

/* =========================================================
   DEMO DATA
   ========================================================= */

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
    gender: "Male",
    village: "Madhavapur",
    phone: "+91 98765 43210",
    condition: "Fever",
    lastVisit: "18 Sep 2026",
  },
  {
    id: "P002",
    name: "Lakshmi Devi",
    age: 56,
    gender: "Female",
    village: "Rampur",
    phone: "+91 98765 32109",
    condition: "Diabetes",
    lastVisit: "17 Sep 2026",
  },
  {
    id: "P003",
    name: "Suresh Reddy",
    age: 35,
    gender: "Male",
    village: "Kondapur",
    phone: "+91 98765 21098",
    condition: "Hypertension",
    lastVisit: "15 Sep 2026",
  },
  {
    id: "P004",
    name: "Anitha Rao",
    age: 29,
    gender: "Female",
    village: "Nandigama",
    phone: "+91 98765 10987",
    condition: "General Checkup",
    lastVisit: "14 Sep 2026",
  },
];

const doctors = [
  {
    id: "DOC001",
    name: "Dr. Ananya Sharma",
    specialization: "General Physician",
    hospital: "District Hospital",
    location: "Hubballi",
    experience: "8 Years",
    availability: "Available",
  },
  {
    id: "DOC002",
    name: "Dr. Rahul Mehta",
    specialization: "Cardiologist",
    hospital: "City Care Hospital",
    location: "Dharwad",
    experience: "12 Years",
    availability: "Available",
  },
  {
    id: "DOC003",
    name: "Dr. Priya Nair",
    specialization: "Pediatrician",
    hospital: "District Hospital",
    location: "Hubballi",
    experience: "7 Years",
    availability: "Busy",
  },
  {
    id: "DOC004",
    name: "Dr. Vikram Rao",
    specialization: "Dermatologist",
    hospital: "Health First Clinic",
    location: "Dharwad",
    experience: "10 Years",
    availability: "Available",
  },
];

/* =========================================================
   HELPERS
   ========================================================= */

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/* =========================================================
   MY VISITS
   ========================================================= */

export function MyVisits() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredVisits = useMemo(() => {
    return visits.filter((visit) => {
      const matchesSearch =
        visit.patient
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        visit.village
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        visit.purpose
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        visit.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <section className="hw-section-page">

      <div className="hw-section-header">
        <div>
          <h1>My Visits</h1>
          <p>
            Manage your scheduled patient visits
            and daily field activities.
          </p>
        </div>

        <div className="hw-section-summary">
          <div>
            <strong>{visits.length}</strong>
            <span>Total</span>
          </div>

          <div>
            <strong>
              {
                visits.filter(
                  (v) => v.status === "Scheduled"
                ).length
              }
            </strong>
            <span>Scheduled</span>
          </div>

          <div>
            <strong>
              {
                visits.filter(
                  (v) => v.status === "Completed"
                ).length
              }
            </strong>
            <span>Completed</span>
          </div>
        </div>
      </div>

      <div className="hw-controls">

        <div className="hw-search">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search patient, village or visit..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >
          <option value="All">All Status</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="hw-card">

        <div className="hw-card-header">
          <div>
            <h2>Visit Schedule</h2>
            <p>
              {filteredVisits.length} visits found
            </p>
          </div>

          <span className="hw-date-badge">
            📅 25 September 2026
          </span>
        </div>

        <div className="hw-list">

          {filteredVisits.length > 0 ? (
            filteredVisits.map((visit) => (
              <div
                className="hw-visit-item"
                key={visit.id}
              >

                <div className="hw-visit-time">
                  <strong>{visit.time}</strong>
                  <span>{visit.id}</span>
                </div>

                <div className="hw-person">

                  <div className="hw-avatar">
                    {getInitials(visit.patient)}
                  </div>

                  <div>
                    <strong>{visit.patient}</strong>

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
                  className={`hw-status ${visit.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  <i />
                  {visit.status}
                </span>

                <button
                  className="hw-action-button"
                  onClick={() =>
                    alert(
                      `Viewing visit ${visit.id}`
                    )
                  }
                >
                  View
                </button>

              </div>
            ))
          ) : (
            <div className="hw-empty">
              <div>📅</div>
              <h3>No visits found</h3>
              <p>
                Try changing your search or filter.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PATIENTS
   ========================================================= */

export function Patients() {
  const [search, setSearch] = useState("");

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      patient.village
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      patient.condition
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      patient.id
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <section className="hw-section-page">

      <div className="hw-section-header">
        <div>
          <h1>Patients</h1>
          <p>
            View and manage patients assigned to you.
          </p>
        </div>

        <div className="hw-header-action">
          <button
            className="hw-primary-button"
            onClick={() =>
              alert("Add Patient")
            }
          >
            + Add Patient
          </button>
        </div>
      </div>

      <div className="hw-patient-stats">

        <div className="hw-mini-stat">
          <span>👥</span>
          <div>
            <small>Total Patients</small>
            <strong>{patients.length}</strong>
          </div>
        </div>

        <div className="hw-mini-stat">
          <span>🌡️</span>
          <div>
            <small>Active Conditions</small>
            <strong>3</strong>
          </div>
        </div>

        <div className="hw-mini-stat">
          <span>📅</span>
          <div>
            <small>Visits Today</small>
            <strong>4</strong>
          </div>
        </div>
      </div>

      <div className="hw-card">

        <div className="hw-card-header">
          <div>
            <h2>Assigned Patients</h2>
            <p>
              Patient records and recent activity
            </p>
          </div>

          <div className="hw-search hw-small-search">
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search patients..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>
        </div>

        <div className="hw-table-wrapper">

          <table className="hw-table">

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

              {filteredPatients.map((patient) => (
                <tr key={patient.id}>

                  <td>
                    <div className="hw-table-person">

                      <div className="hw-avatar">
                        {getInitials(patient.name)}
                      </div>

                      <div>
                        <strong>
                          {patient.name}
                        </strong>

                        <span>
                          {patient.id} •{" "}
                          {patient.gender}
                        </span>
                      </div>

                    </div>
                  </td>

                  <td>{patient.age}</td>

                  <td>{patient.village}</td>

                  <td>
                    <span className="hw-condition">
                      {patient.condition}
                    </span>
                  </td>

                  <td>{patient.lastVisit}</td>

                  <td>
                    <button
                      className="hw-action-button"
                      onClick={() =>
                        alert(
                          `Opening ${patient.name}'s record`
                        )
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
      </div>
    </section>
  );
}

/* =========================================================
   REQUESTS
   ========================================================= */

export function Requests() {
  const [demoData, setDemoData] =
    useState(getDemoData());

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const requests = demoData.requests || [];

  const filteredRequests = requests.filter(
    (request) => {
      const matchesSearch =
        request.patient
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        request.type
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        request.id
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" ||
        request.status === filter;

      return matchesSearch && matchesFilter;
    }
  );

  const handleAccept = (request) => {
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

  return (
    <section className="hw-section-page">

      <div className="hw-section-header">
        <div>
          <h1>Requests</h1>
          <p>
            Review patient requests and take
            appropriate action.
          </p>
        </div>

        <div className="hw-section-summary">

          <div>
            <strong>
              {requests.length}
            </strong>
            <span>Total</span>
          </div>

          <div>
            <strong>
              {
                requests.filter(
                  (r) => r.status === "Pending"
                ).length
              }
            </strong>
            <span>Pending</span>
          </div>

          <div>
            <strong>
              {
                requests.filter(
                  (r) => r.priority === "High"
                ).length
              }
            </strong>
            <span>High Priority</span>
          </div>

        </div>
      </div>

      <div className="hw-controls">

        <div className="hw-search">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search patient or request..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="In Progress">
            In Progress
          </option>
          <option value="Triaged">Triaged</option>
          <option value="Referred">Referred</option>
        </select>
      </div>

      <div className="hw-card">

        <div className="hw-card-header">
          <div>
            <h2>Patient Requests</h2>
            <p>
              Requests requiring health worker
              attention
            </p>
          </div>
        </div>

        <div className="hw-request-list">

          {filteredRequests.length > 0 ? (
            filteredRequests.map((request) => (
              <div
                className="hw-request-item"
                key={request.id}
              >

                <div className="hw-request-icon">
                  📋
                </div>

                <div className="hw-request-info">

                  <div className="hw-request-title">
                    <strong>
                      {request.patient}
                    </strong>

                    <span>{request.id}</span>
                  </div>

                  <p>
                    {request.type}
                  </p>

                  <small>
                    {request.description}
                  </small>

                  <div className="hw-request-meta">
                    <span>
                      📍 {request.village}
                    </span>

                    <span>
                      📅 {request.createdAt}
                    </span>
                  </div>

                </div>

                <span
                  className={`hw-priority ${request.priority.toLowerCase()}`}
                >
                  {request.priority}
                </span>

                <span
                  className={`hw-request-status ${request.status
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                >
                  {request.status}
                </span>

                <button
                  className="hw-action-button"
                  onClick={() =>
                    handleAccept(request)
                  }
                  disabled={
                    request.status !== "Pending"
                  }
                >
                  {request.status === "Pending"
                    ? "Accept"
                    : "View"}
                </button>

              </div>
            ))
          ) : (
            <div className="hw-empty">
              <div>📋</div>
              <h3>No requests found</h3>
              <p>
                There are no requests matching
                your search.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DOCTORS
   ========================================================= */

export function Doctors() {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] =
    useState("All");

  const filteredDoctors = doctors.filter(
    (doctor) => {
      const matchesSearch =
        doctor.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        doctor.specialization
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        doctor.hospital
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesSpecialization =
        specialization === "All" ||
        doctor.specialization === specialization;

      return (
        matchesSearch &&
        matchesSpecialization
      );
    }
  );

  return (
    <section className="hw-section-page">

      <div className="hw-section-header">
        <div>
          <h1>Doctors</h1>
          <p>
            Connect with doctors and refer patients
            for consultations.
          </p>
        </div>

        <div className="hw-doctor-summary">
          <strong>{doctors.length}</strong>
          <span>Doctors Available</span>
        </div>
      </div>

      <div className="hw-controls">

        <div className="hw-search">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search doctor, hospital or specialization..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <select
          value={specialization}
          onChange={(e) =>
            setSpecialization(e.target.value)
          }
        >
          <option value="All">
            All Specializations
          </option>

          <option value="General Physician">
            General Physician
          </option>

          <option value="Cardiologist">
            Cardiologist
          </option>

          <option value="Pediatrician">
            Pediatrician
          </option>

          <option value="Dermatologist">
            Dermatologist
          </option>
        </select>

      </div>

      <div className="hw-doctor-grid">

        {filteredDoctors.map((doctor) => (
          <div
            className="hw-doctor-card"
            key={doctor.id}
          >

            <div className="hw-doctor-top">

              <div className="hw-doctor-avatar">
                {getInitials(doctor.name)}
              </div>

              <span
                className={`hw-availability ${doctor.availability.toLowerCase()}`}
              >
                <i />
                {doctor.availability}
              </span>

            </div>

            <div className="hw-doctor-info">

              <h2>{doctor.name}</h2>

              <p className="hw-specialization">
                {doctor.specialization}
              </p>

              <div className="hw-doctor-details">

                <span>
                  🏥 {doctor.hospital}
                </span>

                <span>
                  📍 {doctor.location}
                </span>

                <span>
                  ⏱ {doctor.experience}
                </span>

              </div>

            </div>

            <div className="hw-doctor-actions">

              <button
                className="hw-secondary-button"
                onClick={() =>
                  alert(
                    `Opening ${doctor.name}'s profile`
                  )
                }
              >
                View Profile
              </button>

              <button
                className="hw-primary-button"
                onClick={() =>
                  alert(
                    `Referral started for ${doctor.name}`
                  )
                }
              >
                Refer Patient
              </button>

            </div>

          </div>
        ))}

      </div>

      {filteredDoctors.length === 0 && (
        <div className="hw-card">
          <div className="hw-empty">
            <div>👨‍⚕️</div>
            <h3>No doctors found</h3>
            <p>
              Try another search or specialization.
            </p>
          </div>
        </div>
      )}

    </section>
  );
}

/* =========================================================
   MAIN SECTION SWITCHER
   ========================================================= */

export default function HealthWorkerSections({
  activeSection,
}) {
  if (activeSection === "Visits") {
    return <MyVisits />;
  }

  if (activeSection === "Patients") {
    return <Patients />;
  }

  if (activeSection === "Requests") {
    return <Requests />;
  }

  if (activeSection === "Doctors") {
    return <Doctors />;
  }

  return null;
}