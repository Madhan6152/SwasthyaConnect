import React, { useState } from "react";
import "./Doctors.css";

function Doctors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("All");

  const doctors = [
    {
      id: 1,
      name: "Dr. Ananya Sharma",
      specialty: "General Physician",
      experience: "8 years",
      location: "District Health Center",
      availability: "Available Today",
      rating: "4.8",
      avatar: "AS",
    },
    {
      id: 2,
      name: "Dr. Rahul Kumar",
      specialty: "Cardiologist",
      experience: "12 years",
      location: "Rural Health Clinic",
      availability: "Available Tomorrow",
      rating: "4.9",
      avatar: "RK",
    },
    {
      id: 3,
      name: "Dr. Priya Reddy",
      specialty: "Pediatrician",
      experience: "7 years",
      location: "Community Health Center",
      availability: "Available Today",
      rating: "4.7",
      avatar: "PR",
    },
    {
      id: 4,
      name: "Dr. Arjun Patel",
      specialty: "Dermatologist",
      experience: "10 years",
      location: "District Hospital",
      availability: "Available Friday",
      rating: "4.8",
      avatar: "AP",
    },
    {
      id: 5,
      name: "Dr. Meera Singh",
      specialty: "Gynecologist",
      experience: "9 years",
      location: "Community Health Center",
      availability: "Available Today",
      rating: "4.9",
      avatar: "MS",
    },
    {
      id: 6,
      name: "Dr. Vikram Rao",
      specialty: "Orthopedic",
      experience: "11 years",
      location: "District Health Center",
      availability: "Available Saturday",
      rating: "4.6",
      avatar: "VR",
    },
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialty =
      specialty === "All" || doctor.specialty === specialty;

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="doctors-page">

      {/* Header */}
      <div className="doctors-header">
        <div>
          <h1>Find a Doctor</h1>
          <p>
            Connect with qualified doctors for your healthcare needs.
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="doctor-filters">

        <div className="doctor-search">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search doctor or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        >
          <option value="All">All Specialties</option>
          <option value="General Physician">
            General Physician
          </option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="Orthopedic">Orthopedic</option>
        </select>

      </div>

      {/* Doctor Count */}
      <div className="doctor-result-count">
        <strong>{filteredDoctors.length}</strong> doctors found
      </div>

      {/* Doctor Cards */}
      <div className="doctor-grid">

        {filteredDoctors.length > 0 ? (

          filteredDoctors.map((doctor) => (

            <div className="doctor-card" key={doctor.id}>

              <div className="doctor-card-top">

                <div className="doctor-profile">

                  <div className="doctor-avatar">
                    {doctor.avatar}
                  </div>

                  <div>
                    <h2>{doctor.name}</h2>
                    <p>{doctor.specialty}</p>
                  </div>

                </div>

                <div className="doctor-rating">
                  ★ {doctor.rating}
                </div>

              </div>

              <div className="doctor-info">

                <div className="doctor-info-row">
                  <span>🎓</span>
                  <p>{doctor.experience} experience</p>
                </div>

                <div className="doctor-info-row">
                  <span>📍</span>
                  <p>{doctor.location}</p>
                </div>

                <div className="doctor-info-row">
                  <span>🕐</span>
                  <p>{doctor.availability}</p>
                </div>

              </div>

              <div className="doctor-card-actions">

                <button className="doctor-profile-btn">
                  View Profile
                </button>

                <button className="doctor-book-btn">
                  Book Appointment
                </button>

              </div>

            </div>

          ))

        ) : (

          <div className="no-doctors">
            <div>🔍</div>
            <h3>No doctors found</h3>
            <p>
              Try searching for another doctor or specialty.
            </p>
          </div>

        )}

      </div>

    </div>
  );
}

export default Doctors;