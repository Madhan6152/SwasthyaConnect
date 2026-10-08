import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Doctors.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    specialty: "General Physician",
    experience: "8 years experience",
    location: "Rural Health Center",
    availability: "Available Today",
    time: "10:00 AM - 2:00 PM",
    initials: "AS",
  },
  {
    id: 2,
    name: "Dr. Rahul Verma",
    specialty: "Cardiologist",
    experience: "12 years experience",
    location: "District Hospital",
    availability: "Available Today",
    time: "11:00 AM - 3:00 PM",
    initials: "RV",
  },
  {
    id: 3,
    name: "Dr. Priya Reddy",
    specialty: "Pediatrician",
    experience: "7 years experience",
    location: "Community Health Center",
    availability: "Available Tomorrow",
    time: "9:00 AM - 1:00 PM",
    initials: "PR",
  },
  {
    id: 4,
    name: "Dr. Arjun Kumar",
    specialty: "Dermatologist",
    experience: "10 years experience",
    location: "Rural Health Center",
    availability: "Available Today",
    time: "2:00 PM - 5:00 PM",
    initials: "AK",
  },
  {
    id: 5,
    name: "Dr. Meera Nair",
    specialty: "Gynecologist",
    experience: "9 years experience",
    location: "District Hospital",
    availability: "Available Tomorrow",
    time: "10:00 AM - 1:00 PM",
    initials: "MN",
  },
  {
    id: 6,
    name: "Dr. Vikram Singh",
    specialty: "Orthopedic",
    experience: "11 years experience",
    location: "Community Health Center",
    availability: "Available Today",
    time: "3:00 PM - 6:00 PM",
    initials: "VS",
  },
];

function Doctors() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");

  const specialties = [
    "All",
    ...new Set(doctors.map((doctor) => doctor.specialty)),
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase()) ||
      doctor.location.toLowerCase().includes(search.toLowerCase());

    const matchesSpecialty =
      specialty === "All" || doctor.specialty === specialty;

    return matchesSearch && matchesSpecialty;
  });

  const handleAppointment = (doctor) => {
    navigate("/patient/appointments", {
      state: {
        doctor: doctor,
      },
    });
  };

  return (
    <div className="doctors-page">
      {/* Header */}
      <div className="doctors-header">
        <div>
          <button
            className="back-button"
            onClick={() => navigate("/patient")}
          >
            ← Back to Dashboard
          </button>

          <h1>Find a Doctor</h1>
          <p>
            Find healthcare professionals and book an appointment.
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="doctor-controls">
        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search doctor, specialty or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="specialty-filter"
        >
          {specialties.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Doctor Count */}
      <div className="results-header">
        <h2>Available Doctors</h2>
        <span>{filteredDoctors.length} doctors found</span>
      </div>

      {/* Doctor Cards */}
      {filteredDoctors.length > 0 ? (
        <div className="doctors-grid">
          {filteredDoctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <div className="doctor-top">
                <div className="doctor-avatar">
                  {doctor.initials}
                </div>

                <div className="doctor-basic-info">
                  <h3>{doctor.name}</h3>
                  <p className="doctor-specialty">
                    {doctor.specialty}
                  </p>
                </div>

                <span className="available-dot"></span>
              </div>

              <div className="doctor-details">
                <p>
                  <strong>Experience:</strong>{" "}
                  {doctor.experience}
                </p>

                <p>
                  <strong>Location:</strong>{" "}
                  {doctor.location}
                </p>

                <p>
                  <strong>Timing:</strong>{" "}
                  {doctor.time}
                </p>
              </div>

              <div className="availability">
                <span className="availability-icon">●</span>
                {doctor.availability}
              </div>

              <button
                className="appointment-button"
                onClick={() => handleAppointment(doctor)}
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-doctors">
          <div className="no-doctors-icon">🔎</div>
          <h3>No doctors found</h3>
          <p>
            Try changing your search or specialty filter.
          </p>
        </div>
      )}
    </div>
  );
}

export default Doctors;