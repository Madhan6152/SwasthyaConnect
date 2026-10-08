import React, { useState } from "react";
import "./AdminDashboard.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import AdminDashboardSections from "./AdminDashboardSections";

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* =====================================================
          MAIN AREA
      ===================================================== */}

      <div className="admin-main">

        <Header
  onMenuClick={() => setSidebarOpen(true)}
/>

        <main className="dashboard-content">

          {/* =================================================
              OVERVIEW
          ================================================= */}

          {activeSection === "Overview" ? (
            <>
              {/* Welcome Section */}
              <section className="welcome-section">
                <div>
                  <p className="welcome-label">
                    ADMINISTRATOR PANEL
                  </p>

                  <h1>
                    Welcome back, Admin 👋
                  </h1>

                  <p>
                    Monitor patients, healthcare workers, doctors and
                    healthcare requests from one place.
                  </p>
                </div>

                <button
                  className="primary-button"
                  onClick={() =>
                    setActiveSection("Health Workers")
                  }
                >
                  + Add Healthcare Worker
                </button>
              </section>

              {/* =================================================
                  STATISTICS
              ================================================= */}

              <section className="stats-grid">

                <StatCard
                  icon="👥"
                  title="Total Patients"
                  value="1,248"
                  change="+12.5%"
                  description="from last month"
                />

                <StatCard
                  icon="👨‍⚕️"
                  title="Doctors"
                  value="42"
                  change="+4.8%"
                  description="from last month"
                />

                <StatCard
                  icon="🧑‍⚕️"
                  title="Health Workers"
                  value="86"
                  change="+8.2%"
                  description="from last month"
                />

                <StatCard
                  icon="📋"
                  title="Pending Requests"
                  value="27"
                  change="5 urgent"
                  description="need attention"
                  urgent
                />

              </section>

              {/* =================================================
                  MAIN DASHBOARD GRID
              ================================================= */}

              <section className="dashboard-grid">

                {/* Recent Requests */}
                <div className="dashboard-card requests-card">

                  <div className="card-header">
                    <div>
                      <h2>
                        Recent Patient Requests
                      </h2>

                      <p>
                        Latest healthcare requests from patients
                      </p>
                    </div>

                    <button
                      className="text-button"
                      onClick={() =>
                        setActiveSection("Requests")
                      }
                    >
                      View All →
                    </button>
                  </div>

                  <div className="table-container">

                    <table className="requests-table">

                      <thead>
                        <tr>
                          <th>Patient</th>
                          <th>Location</th>
                          <th>Issue</th>
                          <th>Priority</th>
                          <th>Status</th>
                        </tr>
                      </thead>

                      <tbody>

                        <tr>
                          <td>
                            <div className="patient-info">

                              <div className="avatar avatar-blue">
                                RK
                              </div>

                              <div>
                                <strong>
                                  Rahul Kumar
                                </strong>

                                <span>
                                  ID: PT-1024
                                </span>
                              </div>

                            </div>
                          </td>

                          <td>
                            Village A
                          </td>

                          <td>
                            Fever
                          </td>

                          <td>
                            <span className="priority normal">
                              Normal
                            </span>
                          </td>

                          <td>
                            <span className="status pending">
                              Pending
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="patient-info">

                              <div className="avatar avatar-purple">
                                PS
                              </div>

                              <div>
                                <strong>
                                  Priya Sharma
                                </strong>

                                <span>
                                  ID: PT-1025
                                </span>
                              </div>

                            </div>
                          </td>

                          <td>
                            Village B
                          </td>

                          <td>
                            Chest Pain
                          </td>

                          <td>
                            <span className="priority urgent">
                              Urgent
                            </span>
                          </td>

                          <td>
                            <span className="status progress">
                              In Review
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="patient-info">

                              <div className="avatar avatar-green">
                                AP
                              </div>

                              <div>
                                <strong>
                                  Arjun Patel
                                </strong>

                                <span>
                                  ID: PT-1026
                                </span>
                              </div>

                            </div>
                          </td>

                          <td>
                            Village C
                          </td>

                          <td>
                            Skin Problem
                          </td>

                          <td>
                            <span className="priority normal">
                              Normal
                            </span>
                          </td>

                          <td>
                            <span className="status completed">
                              Completed
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="patient-info">

                              <div className="avatar avatar-orange">
                                SM
                              </div>

                              <div>
                                <strong>
                                  Sneha Mehta
                                </strong>

                                <span>
                                  ID: PT-1027
                                </span>
                              </div>

                            </div>
                          </td>

                          <td>
                            Village D
                          </td>

                          <td>
                            High Fever
                          </td>

                          <td>
                            <span className="priority urgent">
                              Urgent
                            </span>
                          </td>

                          <td>
                            <span className="status pending">
                              Pending
                            </span>
                          </td>
                        </tr>

                      </tbody>

                    </table>

                  </div>
                </div>

                {/* =================================================
                    QUICK ACTIONS
                ================================================= */}

                <div className="dashboard-card quick-card">

                  <div className="card-header">
                    <div>
                      <h2>
                        Quick Actions
                      </h2>

                      <p>
                        Frequently used admin tools
                      </p>
                    </div>
                  </div>

                  <div className="quick-actions">

                    <button
                      className="quick-action"
                      onClick={() =>
                        setActiveSection("Patients")
                      }
                    >
                      <span className="quick-icon blue">
                        👥
                      </span>

                      <div>
                        <strong>
                          Manage Patients
                        </strong>

                        <span>
                          View and manage patients
                        </span>
                      </div>

                      <span>→</span>
                    </button>

                    <button
                      className="quick-action"
                      onClick={() =>
                        setActiveSection("Doctors")
                      }
                    >
                      <span className="quick-icon green">
                        👨‍⚕️
                      </span>

                      <div>
                        <strong>
                          Manage Doctors
                        </strong>

                        <span>
                          Doctor accounts & availability
                        </span>
                      </div>

                      <span>→</span>
                    </button>

                    <button
                      className="quick-action"
                      onClick={() =>
                        setActiveSection("Health Workers")
                      }
                    >
                      <span className="quick-icon purple">
                        🧑‍⚕️
                      </span>

                      <div>
                        <strong>
                          Health Workers
                        </strong>

                        <span>
                          Manage frontline workers
                        </span>
                      </div>

                      <span>→</span>
                    </button>

                    <button
                      className="quick-action"
                      onClick={() =>
                        setActiveSection("Reports")
                      }
                    >
                      <span className="quick-icon orange">
                        📊
                      </span>

                      <div>
                        <strong>
                          View Reports
                        </strong>

                        <span>
                          Healthcare analytics
                        </span>
                      </div>

                      <span>→</span>
                    </button>

                  </div>
                </div>

              </section>

              {/* =================================================
                  BOTTOM CARDS
              ================================================= */}

              <section className="bottom-grid">

                {/* Today's Appointments */}
                <div className="dashboard-card">

                  <div className="card-header">
                    <div>
                      <h2>
                        Today's Appointments
                      </h2>

                      <p>
                        Healthcare appointments today
                      </p>
                    </div>

                    <span className="big-number">
                      36
                    </span>
                  </div>

                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>

                  <div className="appointment-footer">
                    <span>
                      18 completed
                    </span>

                    <span>
                      18 remaining
                    </span>
                  </div>

                </div>

                {/* Active Referrals */}
                <div className="dashboard-card">

                  <div className="card-header">
                    <div>
                      <h2>
                        Active Referrals
                      </h2>

                      <p>
                        Patients currently being referred
                      </p>
                    </div>

                    <span className="big-number">
                      12
                    </span>
                  </div>

                  <div className="referral-list">

                    <div>
                      <span>
                        Hospital Referral
                      </span>

                      <strong>
                        7
                      </strong>
                    </div>

                    <div>
                      <span>
                        Specialist Referral
                      </span>

                      <strong>
                        3
                      </strong>
                    </div>

                    <div>
                      <span>
                        Diagnostic Referral
                      </span>

                      <strong>
                        2
                      </strong>
                    </div>

                  </div>

                </div>

              </section>

              {/* =================================================
                  FOOTER
              ================================================= */}

              <footer className="dashboard-footer">

                <span>
                  © 2026 SwasthyaConnect
                </span>

                <span>
                  Rural Healthcare Management Platform
                </span>

              </footer>

            </>
          ) : (

            /* =================================================
               OTHER ADMIN PAGES
            ================================================= */

            <AdminDashboardSections
              activeSection={activeSection}
            />

          )}

        </main>

      </div>

    </div>
  );
}

export default AdminDashboard;