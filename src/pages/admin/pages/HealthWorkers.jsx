import React, { useState } from "react";
import "./HealthWorkers.css";

function HealthWorkers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [areaFilter, setAreaFilter] = useState("All");

  const healthWorkers = [
    {
      id: 1,
      name: "Suresh Kumar",
      role: "Community Health Worker",
      village: "Kondapur",
      experience: "6 years",
      phone: "9876543210",
      availability: "Available",
      services: "Basic Checkup",
      avatar: "SK",
    },
    {
      id: 2,
      name: "Lakshmi Devi",
      role: "ASHA Health Worker",
      village: "Rampur",
      experience: "5 years",
      phone: "9876543211",
      availability: "Available",
      services: "Maternal Care",
      avatar: "LD",
    },
    {
      id: 3,
      name: "Ramesh Reddy",
      role: "Community Health Worker",
      village: "Nandigama",
      experience: "8 years",
      phone: "9876543212",
      availability: "Busy",
      services: "Health Monitoring",
      avatar: "RR",
    },
    {
      id: 4,
      name: "Anitha Rao",
      role: "ASHA Health Worker",
      village: "Chintapalli",
      experience: "4 years",
      phone: "9876543213",
      availability: "Available",
      services: "Child Care",
      avatar: "AR",
    },
    {
      id: 5,
      name: "Mohan Das",
      role: "Community Health Worker",
      village: "Gopalapuram",
      experience: "7 years",
      phone: "9876543214",
      availability: "Available",
      services: "First Aid",
      avatar: "MD",
    },
    {
      id: 6,
      name: "Priya Sharma",
      role: "ASHA Health Worker",
      village: "Lakshmipur",
      experience: "3 years",
      phone: "9876543215",
      availability: "Busy",
      services: "Health Awareness",
      avatar: "PS",
    },
  ];

  const filteredWorkers = healthWorkers.filter((worker) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      worker.name.toLowerCase().includes(search) ||
      worker.role.toLowerCase().includes(search) ||
      worker.village.toLowerCase().includes(search) ||
      worker.services.toLowerCase().includes(search);

    const matchesArea =
      areaFilter === "All" || worker.village === areaFilter;

    return matchesSearch && matchesArea;
  });

  return (
    <div className="health-workers-page">

      {/* Header */}
      <div className="health-workers-header">
        <div>
          <h1>Health Workers</h1>
          <p>
            Connect with community health workers in your area.
          </p>
        </div>

        <div className="health-worker-count">
          <strong>{healthWorkers.length}</strong>
          <span>Available Workers</span>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="health-worker-filters">

        <div className="health-worker-search">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search health worker, village or service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          value={areaFilter}
          onChange={(e) => setAreaFilter(e.target.value)}
        >
          <option value="All">All Villages</option>
          <option value="Kondapur">Kondapur</option>
          <option value="Rampur">Rampur</option>
          <option value="Nandigama">Nandigama</option>
          <option value="Chintapalli">Chintapalli</option>
          <option value="Gopalapuram">Gopalapuram</option>
          <option value="Lakshmipur">Lakshmipur</option>
        </select>

      </div>

      {/* Results */}
      <div className="health-worker-results">
        <strong>{filteredWorkers.length}</strong> health workers found
      </div>

      {/* Health Worker Cards */}
      <div className="health-worker-grid">

        {filteredWorkers.length > 0 ? (
          filteredWorkers.map((worker) => (
            <div className="health-worker-card" key={worker.id}>

              <div className="health-worker-card-top">

                <div className="health-worker-profile">

                  <div className="health-worker-avatar">
                    {worker.avatar}
                  </div>

                  <div>
                    <h2>{worker.name}</h2>
                    <p>{worker.role}</p>
                  </div>

                </div>

                <span
                  className={`worker-status ${
                    worker.availability.toLowerCase()
                  }`}
                >
                  {worker.availability}
                </span>

              </div>

              <div className="health-worker-info">

                <div className="health-worker-info-row">
                  <span>📍</span>
                  <p>{worker.village}</p>
                </div>

                <div className="health-worker-info-row">
                  <span>🎓</span>
                  <p>{worker.experience} experience</p>
                </div>

                <div className="health-worker-info-row">
                  <span>🩺</span>
                  <p>{worker.services}</p>
                </div>

                <div className="health-worker-info-row">
                  <span>📞</span>
                  <p>{worker.phone}</p>
                </div>

              </div>

              <div className="health-worker-actions">

                <button className="worker-profile-btn">
                  View Profile
                </button>

                <button className="contact-worker-btn">
                  Contact Worker
                </button>

              </div>

            </div>
          ))
        ) : (
          <div className="no-health-workers">

            <div className="no-worker-icon">🔍</div>

            <h3>No health workers found</h3>

            <p>
              Try changing your search or village filter.
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default HealthWorkers;