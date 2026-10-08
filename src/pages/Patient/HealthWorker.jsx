import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HealthWorker.css";

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

function HealthWorker() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [villageFilter, setVillageFilter] = useState("All");

  const villages = [
    "All",
    ...new Set(
      healthWorkers.map((worker) => worker.village)
    ),
  ];

  const filteredWorkers = healthWorkers.filter((worker) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      worker.name.toLowerCase().includes(search) ||
      worker.role.toLowerCase().includes(search) ||
      worker.village.toLowerCase().includes(search) ||
      worker.services.toLowerCase().includes(search);

    const matchesVillage =
      villageFilter === "All" ||
      worker.village === villageFilter;

    return matchesSearch && matchesVillage;
  });

  const handleContact = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="patient-health-worker-page">

      {/* =========================
          HEADER
      ========================= */}

      <header className="patient-health-worker-header">

        <div>
          <button
            className="patient-health-worker-back"
            onClick={() => navigate("/patient")}
          >
            ← Back to Dashboard
          </button>

          <h1>Find a Health Worker</h1>

          <p>
            Connect with community health workers
            and ASHA workers in your area.
          </p>
        </div>

        <div className="patient-health-worker-count">
          <strong>{healthWorkers.length}</strong>
          <span>Health Workers</span>
        </div>

      </header>


      {/* =========================
          SEARCH & FILTER
      ========================= */}

      <section className="patient-health-worker-controls">

        <div className="patient-health-worker-search">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search health worker, village or service..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

        </div>

        <select
          className="patient-health-worker-filter"
          value={villageFilter}
          onChange={(e) =>
            setVillageFilter(e.target.value)
          }
        >
          {villages.map((village) => (
            <option
              key={village}
              value={village}
            >
              {village === "All"
                ? "All Villages"
                : village}
            </option>
          ))}
        </select>

      </section>


      {/* =========================
          RESULTS HEADER
      ========================= */}

      <div className="patient-health-worker-results">

        <div>
          <h2>Available Health Workers</h2>

          <p>
            {filteredWorkers.length} health worker
            {filteredWorkers.length !== 1
              ? "s"
              : ""}{" "}
            found
          </p>
        </div>

      </div>


      {/* =========================
          WORKER CARDS
      ========================= */}

      {filteredWorkers.length > 0 ? (

        <div className="patient-health-worker-grid">

          {filteredWorkers.map((worker) => (

            <div
              className="patient-health-worker-card"
              key={worker.id}
            >

              {/* Card Header */}

              <div className="patient-health-worker-card-top">

                <div className="patient-health-worker-profile">

                  <div className="patient-health-worker-avatar">
                    {worker.avatar}
                  </div>

                  <div className="patient-health-worker-name">

                    <h3>{worker.name}</h3>

                    <p>{worker.role}</p>

                  </div>

                </div>

                <span
                  className={`patient-health-worker-status ${
                    worker.availability.toLowerCase()
                  }`}
                >
                  <span className="patient-health-worker-status-dot"></span>

                  {worker.availability}

                </span>

              </div>


              {/* Worker Details */}

              <div className="patient-health-worker-details">

                <div className="patient-health-worker-detail-row">

                  <span className="patient-health-worker-detail-icon">
                    📍
                  </span>

                  <div>
                    <small>Village</small>
                    <strong>{worker.village}</strong>
                  </div>

                </div>


                <div className="patient-health-worker-detail-row">

                  <span className="patient-health-worker-detail-icon">
                    🎓
                  </span>

                  <div>
                    <small>Experience</small>
                    <strong>{worker.experience}</strong>
                  </div>

                </div>


                <div className="patient-health-worker-detail-row">

                  <span className="patient-health-worker-detail-icon">
                    🩺
                  </span>

                  <div>
                    <small>Service</small>
                    <strong>{worker.services}</strong>
                  </div>

                </div>


                <div className="patient-health-worker-detail-row">

                  <span className="patient-health-worker-detail-icon">
                    📞
                  </span>

                  <div>
                    <small>Phone</small>
                    <strong>{worker.phone}</strong>
                  </div>

                </div>

              </div>


              {/* Buttons */}

              <div className="patient-health-worker-actions">

                <button
                  className="patient-health-worker-profile-button"
                  onClick={() =>
                    alert(
                      `Name: ${worker.name}\n` +
                      `Role: ${worker.role}\n` +
                      `Village: ${worker.village}\n` +
                      `Experience: ${worker.experience}\n` +
                      `Service: ${worker.services}\n` +
                      `Phone: ${worker.phone}`
                    )
                  }
                >
                  View Profile
                </button>

                <button
                  className="patient-health-worker-contact-button"
                  onClick={() =>
                    handleContact(worker.phone)
                  }
                >
                  📞 Contact
                </button>

              </div>

            </div>

          ))}

        </div>

      ) : (

        <div className="patient-no-health-workers">

          <div className="patient-no-health-worker-icon">
            🔍
          </div>

          <h3>No health workers found</h3>

          <p>
            Try changing your search or village filter.
          </p>

          <button
            onClick={() => {
              setSearchTerm("");
              setVillageFilter("All");
            }}
          >
            Clear Filters
          </button>

        </div>

      )}

    </div>
  );
}

export default HealthWorker;