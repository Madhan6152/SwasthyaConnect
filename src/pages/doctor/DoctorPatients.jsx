<<<<<<< HEAD
import React, { useMemo, useState } from "react";
import "./DoctorPatients.css";

const defaultPatients = [
  {
=======
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DoctorPatients.css";

const patients = {
  P001: {
>>>>>>> de36534b2ce1479be4337fc0cbd27964977a6b8f
    id: "P001",
    name: "Ravi Kumar",
    age: 42,
    gender: "Male",
    village: "Madhavapur",
<<<<<<< HEAD
    phone: "9876543210",
    condition: "Fever",
    lastVisit: "18 Sep 2026",
    status: "Active",
  },
  {
=======
    phone: "+91 98765 43210",
    bloodGroup: "B+",
    condition: "Fever",
    lastVisit: "18 Sep 2026",

    symptoms: [
      "Fever for 3 days",
      "Body pain",
      "Mild headache",
      "Weakness",
    ],

    diagnosis:
      "Acute viral fever. Patient advised rest, adequate hydration and monitoring of temperature.",

    vitals: {
      bloodPressure: "128/82 mmHg",
      temperature: "100.4 °F",
      pulse: "82 bpm",
      oxygen: "98%",
      weight: "68 kg",
    },

    medicalHistory:
      "No major previous medical history reported. No known chronic illness.",

    allergies: "No known drug allergies",

    medications: [
      {
        name: "Paracetamol",
        dosage: "500 mg",
        frequency: "As required for fever",
      },
      {
        name: "ORS",
        dosage: "1 sachet",
        frequency: "After loose stools / dehydration",
      },
    ],

    notes:
      "Patient should monitor temperature twice daily. Return for follow-up if fever persists or symptoms worsen.",

    nextAppointment: "25 Sep 2026",
  },

  P002: {
>>>>>>> de36534b2ce1479be4337fc0cbd27964977a6b8f
    id: "P002",
    name: "Lakshmi Devi",
    age: 56,
    gender: "Female",
    village: "Rampur",
<<<<<<< HEAD
    phone: "9876543211",
    condition: "Diabetes",
    lastVisit: "17 Sep 2026",
    status: "Active",
  },
  {
=======
    phone: "+91 98765 12345",
    bloodGroup: "O+",
    condition: "Diabetes",
    lastVisit: "17 Sep 2026",

    symptoms: [
      "Increased thirst",
      "Fatigue",
      "Frequent urination",
    ],

    diagnosis:
      "Type 2 diabetes under regular monitoring. Blood glucose levels should be monitored regularly.",

    vitals: {
      bloodPressure: "136/84 mmHg",
      temperature: "98.6 °F",
      pulse: "78 bpm",
      oxygen: "99%",
      weight: "64 kg",
    },

    medicalHistory:
      "Known history of diabetes. Patient reports following a diabetic diet and taking prescribed medication.",

    allergies: "No known allergies",

    medications: [
      {
        name: "Metformin",
        dosage: "500 mg",
        frequency: "As prescribed",
      },
    ],

    notes:
      "Continue regular glucose monitoring and maintain prescribed diet and medication schedule.",

    nextAppointment: "01 Oct 2026",
  },

  P003: {
>>>>>>> de36534b2ce1479be4337fc0cbd27964977a6b8f
    id: "P003",
    name: "Suresh Reddy",
    age: 35,
    gender: "Male",
    village: "Kondapur",
<<<<<<< HEAD
    phone: "9876543212",
    condition: "Hypertension",
    lastVisit: "15 Sep 2026",
    status: "Active",
  },
  {
=======
    phone: "+91 99887 66554",
    bloodGroup: "A+",
    condition: "Hypertension",
    lastVisit: "15 Sep 2026",

    symptoms: [
      "Occasional headache",
      "Mild dizziness",
      "Fatigue",
    ],

    diagnosis:
      "Elevated blood pressure requiring continued monitoring and lifestyle management.",

    vitals: {
      bloodPressure: "148/92 mmHg",
      temperature: "98.4 °F",
      pulse: "84 bpm",
      oxygen: "98%",
      weight: "75 kg",
    },

    medicalHistory:
      "History of elevated blood pressure. Patient advised to monitor blood pressure regularly.",

    allergies: "No known allergies",

    medications: [
      {
        name: "Prescribed antihypertensive",
        dosage: "As prescribed",
        frequency: "As directed by physician",
      },
    ],

    notes:
      "Monitor blood pressure regularly. Continue recommended lifestyle changes and attend follow-up appointments.",

    nextAppointment: "29 Sep 2026",
  },

  P004: {
>>>>>>> de36534b2ce1479be4337fc0cbd27964977a6b8f
    id: "P004",
    name: "Anitha Rao",
    age: 29,
    gender: "Female",
    village: "Nandigama",
<<<<<<< HEAD
    phone: "9876543213",
    condition: "General Checkup",
    lastVisit: "14 Sep 2026",
    status: "Active",
  },
  {
    id: "P005",
    name: "Mohan Das",
    age: 48,
    gender: "Male",
    village: "Gopalapuram",
    phone: "9876543214",
    condition: "Heart Problem",
    lastVisit: "12 Sep 2026",
    status: "Inactive",
  },
  {
    id: "P006",
    name: "Priya Sharma",
    age: 31,
    gender: "Female",
    village: "Lakshmipur",
    phone: "9876543215",
    condition: "Fever",
    lastVisit: "10 Sep 2026",
    status: "Active",
  },
];

function DoctorPatients() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredPatients = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return defaultPatients.filter((patient) => {
      const matchesSearch =
        patient.name.toLowerCase().includes(searchText) ||
        patient.id.toLowerCase().includes(searchText) ||
        patient.village.toLowerCase().includes(searchText) ||
        patient.phone.includes(searchText) ||
        patient.condition.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All" ||
        patient.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const activePatients = defaultPatients.filter(
    (patient) => patient.status === "Active"
  ).length;

  const inactivePatients = defaultPatients.filter(
    (patient) => patient.status === "Inactive"
  ).length;

  const handleViewPatient = (patient) => {
    alert(`Opening ${patient.name}'s medical record`);
  };

  return (
    <div className="doctor-patients-page">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <section className="doctor-patients-header">

        <div>
          <h1>Patients</h1>

          <p>
            View and manage patients assigned to you.
          </p>
        </div>

        <div className="doctor-patients-summary">

          <div className="doctor-patients-summary-item">
            <strong>{defaultPatients.length}</strong>
            <span>Total Patients</span>
          </div>

          <div className="doctor-patients-summary-item">
            <strong>{activePatients}</strong>
            <span>Active</span>
          </div>

          <div className="doctor-patients-summary-item">
            <strong>{inactivePatients}</strong>
            <span>Inactive</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          SEARCH AND FILTER
          ===================================================== */}

      <section className="doctor-patients-controls">

        <div className="doctor-patients-search">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search by name, ID, village, phone or condition..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

        </div>


        <div className="doctor-patients-filter">

          <label htmlFor="patient-status-filter">
            Status
          </label>

          <select
            id="patient-status-filter"
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value)
            }
          >
            <option value="All">
              All Status
            </option>

            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>
          </select>

        </div>

      </section>


      {/* =====================================================
          PATIENT TABLE
          ===================================================== */}

      <section className="doctor-patients-card">

        <div className="doctor-patients-card-header">

          <div>
            <h2>Patient Records</h2>

            <p>
              Showing {filteredPatients.length} of{" "}
              {defaultPatients.length} patients
            </p>
=======
    phone: "+91 91234 56789",
    bloodGroup: "AB+",
    condition: "General Checkup",
    lastVisit: "14 Sep 2026",

    symptoms: [
      "No major symptoms",
      "Routine health checkup",
    ],

    diagnosis:
      "Routine health assessment. No significant abnormality reported during the current consultation.",

    vitals: {
      bloodPressure: "118/76 mmHg",
      temperature: "98.2 °F",
      pulse: "72 bpm",
      oxygen: "99%",
      weight: "58 kg",
    },

    medicalHistory:
      "No significant medical history reported.",

    allergies: "No known allergies",

    medications: [
      {
        name: "None",
        dosage: "-",
        frequency: "-",
      },
    ],

    notes:
      "Continue healthy lifestyle and attend routine health checkups.",

    nextAppointment: "14 Mar 2027",
  },
};

function DoctorPatients() {
  const navigate = useNavigate();
  const { patientId } = useParams();

  const patient = patients[patientId];

  if (!patient) {
    return (
      <div className="doctor-patient-page">
        <div className="doctor-patient-not-found">
          <div className="not-found-icon">📁</div>

          <h2>Patient Record Not Found</h2>

          <p>
            The patient record you are looking for does not exist.
          </p>

          <button
            className="back-to-patients-button"
            onClick={() => navigate("/doctor")}
          >
            ← Back to Patients
          </button>
        </div>
      </div>
    );
  }

  const initials = patient.name
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <div className="doctor-patient-page">

      {/* Header */}

      <header className="doctor-patient-header">

        <div className="doctor-patient-header-left">

          <button
            className="back-button"
            onClick={() => navigate("/doctor")}
          >
            ←
          </button>

          <div>
            <h1>Patient Record</h1>
            <p>Complete clinical case details</p>
>>>>>>> de36534b2ce1479be4337fc0cbd27964977a6b8f
          </div>

        </div>

<<<<<<< HEAD

        <div className="doctor-patients-table-wrapper">

          <table className="doctor-patients-table">

            <thead>
              <tr>
                <th>Patient</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Village</th>
                <th>Condition</th>
                <th>Last Visit</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>


            <tbody>

              {filteredPatients.length > 0 ? (

                filteredPatients.map((patient) => (

                  <tr key={patient.id}>

                    {/* Patient */}

                    <td>

                      <div className="doctor-patient-name">

                        <div className="doctor-patient-avatar">
                          {patient.name
                            .split(" ")
                            .map((name) => name[0])
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


                    {/* Age */}

                    <td>
                      {patient.age}
                    </td>


                    {/* Gender */}

                    <td>
                      {patient.gender}
                    </td>


                    {/* Village */}

                    <td>
                      {patient.village}
                    </td>


                    {/* Condition */}

                    <td>

                      <span className="doctor-condition">
                        {patient.condition}
                      </span>

                    </td>


                    {/* Last Visit */}

                    <td>
                      {patient.lastVisit}
                    </td>


                    {/* Status */}

                    <td>

                      <span
                        className={`doctor-patient-status ${patient.status.toLowerCase()}`}
                      >
                        {patient.status}
                      </span>

                    </td>


                    {/* Action */}

                    <td>

                      <button
                        type="button"
                        className="doctor-view-patient-button"
                        onClick={() =>
                          handleViewPatient(patient)
                        }
                      >
                        View Record
                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="8"
                    className="doctor-no-patients"
                  >

                    <div className="doctor-no-patients-icon">
                      🔍
                    </div>

                    <h3>
                      No patients found
                    </h3>

                    <p>
                      Try changing your search or status
                      filter.
                    </p>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </section>
=======
        <div className="doctor-patient-header-actions">

          <button
            className="secondary-action-button"
            onClick={() => window.print()}
          >
            🖨 Print
          </button>

          <button
            className="primary-action-button"
            onClick={() => alert("Opening consultation notes...")}
          >
            ✏️ Add Note
          </button>

        </div>

      </header>


      <main className="doctor-patient-main">

        {/* Patient Profile */}

        <section className="patient-profile-card">

          <div className="patient-profile-main">

            <div className="large-patient-avatar">
              {initials}
            </div>

            <div className="patient-profile-info">

              <div className="patient-name-row">

                <h2>{patient.name}</h2>

                <span className="patient-id">
                  {patient.id}
                </span>

              </div>

              <p>
                {patient.age} years old • {patient.gender} •{" "}
                {patient.village}
              </p>

              <span className="condition-badge">
                {patient.condition}
              </span>

            </div>

          </div>

          <div className="patient-basic-details">

            <div>
              <span>Phone</span>
              <strong>{patient.phone}</strong>
            </div>

            <div>
              <span>Blood Group</span>
              <strong>{patient.bloodGroup}</strong>
            </div>

            <div>
              <span>Last Visit</span>
              <strong>{patient.lastVisit}</strong>
            </div>

            <div>
              <span>Next Appointment</span>
              <strong>{patient.nextAppointment}</strong>
            </div>

          </div>

        </section>


        {/* Main Grid */}

        <div className="patient-record-grid">

          {/* Left Column */}

          <div className="patient-record-left">

            {/* Case Details */}

            <section className="patient-record-card">

              <div className="record-card-header">

                <div>
                  <h2>Case Details</h2>
                  <p>Current consultation information</p>
                </div>

                <span className="record-icon">📋</span>

              </div>


              <div className="case-section">

                <h3>Reported Symptoms</h3>

                <div className="symptom-list">

                  {patient.symptoms.map((symptom, index) => (
                    <div
                      className="symptom-item"
                      key={index}
                    >
                      <span>✓</span>
                      {symptom}
                    </div>
                  ))}

                </div>

              </div>


              <div className="case-section">

                <h3>Diagnosis / Assessment</h3>

                <p className="case-text">
                  {patient.diagnosis}
                </p>

              </div>

            </section>


            {/* Medical History */}

            <section className="patient-record-card">

              <div className="record-card-header">

                <div>
                  <h2>Medical History</h2>
                  <p>Previous medical information</p>
                </div>

                <span className="record-icon">🩺</span>

              </div>

              <div className="history-box">
                {patient.medicalHistory}
              </div>

              <div className="allergy-box">

                <strong>Allergies</strong>

                <span>
                  {patient.allergies}
                </span>

              </div>

            </section>


            {/* Medications */}

            <section className="patient-record-card">

              <div className="record-card-header">

                <div>
                  <h2>Current Medications</h2>
                  <p>Medication information from the current record</p>
                </div>

                <span className="record-icon">💊</span>

              </div>

              <div className="medication-list">

                {patient.medications.map((medicine, index) => (

                  <div
                    className="medication-item"
                    key={index}
                  >

                    <div className="medicine-icon">
                      💊
                    </div>

                    <div className="medicine-info">

                      <strong>
                        {medicine.name}
                      </strong>

                      <span>
                        {medicine.dosage}
                      </span>

                    </div>

                    <span className="medicine-frequency">
                      {medicine.frequency}
                    </span>

                  </div>

                ))}

              </div>

            </section>

          </div>


          {/* Right Column */}

          <aside className="patient-record-right">

            {/* Vitals */}

            <section className="patient-record-card">

              <div className="record-card-header">

                <div>
                  <h2>Latest Vitals</h2>
                  <p>Recorded during last visit</p>
                </div>

                <span className="record-icon">❤️</span>

              </div>

              <div className="vitals-grid">

                <div className="vital-item">
                  <span>Blood Pressure</span>
                  <strong>
                    {patient.vitals.bloodPressure}
                  </strong>
                </div>

                <div className="vital-item">
                  <span>Temperature</span>
                  <strong>
                    {patient.vitals.temperature}
                  </strong>
                </div>

                <div className="vital-item">
                  <span>Pulse</span>
                  <strong>
                    {patient.vitals.pulse}
                  </strong>
                </div>

                <div className="vital-item">
                  <span>Oxygen</span>
                  <strong>
                    {patient.vitals.oxygen}
                  </strong>
                </div>

                <div className="vital-item">
                  <span>Weight</span>
                  <strong>
                    {patient.vitals.weight}
                  </strong>
                </div>

              </div>

            </section>


            {/* Doctor Notes */}

            <section className="patient-record-card">

              <div className="record-card-header">

                <div>
                  <h2>Doctor's Notes</h2>
                  <p>Important observations</p>
                </div>

                <span className="record-icon">📝</span>

              </div>

              <div className="doctor-notes">
                {patient.notes}
              </div>

            </section>


            {/* Appointment */}

            <section className="patient-record-card next-appointment-card">

              <div className="next-appointment-icon">
                📅
              </div>

              <div>

                <span>Next Appointment</span>

                <strong>
                  {patient.nextAppointment}
                </strong>

                <small>
                  Follow-up consultation
                </small>

              </div>

            </section>

          </aside>

        </div>


        {/* Footer */}

        <footer className="doctor-patient-footer">

          <span>
            Patient ID: {patient.id}
          </span>

          <span>
            RuralCare • Doctor Portal
          </span>

        </footer>

      </main>
>>>>>>> de36534b2ce1479be4337fc0cbd27964977a6b8f

    </div>
  );
}

export default DoctorPatients;