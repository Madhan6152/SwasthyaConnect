import React, { useMemo, useState } from "react";
import "./AdminDashboardSections.css";

/* =========================================================
   DEMO DATA
========================================================= */

const initialUsers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "Patient",
    status: "Active",
    joined: "12 Sep 2026",
  },
  {
    id: 2,
    name: "Dr. Priya Rao",
    email: "priya@healthcare.com",
    role: "Doctor",
    status: "Active",
    joined: "08 Sep 2026",
  },
  {
    id: 3,
    name: "Anita Patil",
    email: "anita@healthworker.com",
    role: "Health Worker",
    status: "Active",
    joined: "04 Sep 2026",
  },
  {
    id: 4,
    name: "Vikram Kumar",
    email: "vikram@example.com",
    role: "Patient",
    status: "Inactive",
    joined: "28 Aug 2026",
  },
  {
    id: 5,
    name: "Dr. Arjun Mehta",
    email: "arjun@healthcare.com",
    role: "Doctor",
    status: "Pending",
    joined: "21 Aug 2026",
  },
];

const doctors = [
  {
    id: 1,
    name: "Dr. Priya Rao",
    specialty: "General Medicine",
    email: "priya@healthcare.com",
    phone: "+91 98765 43210",
    status: "Approved",
    patients: 124,
  },
  {
    id: 2,
    name: "Dr. Arjun Mehta",
    specialty: "Cardiology",
    email: "arjun@healthcare.com",
    phone: "+91 98765 12345",
    status: "Pending",
    patients: 86,
  },
  {
    id: 3,
    name: "Dr. Sneha Kulkarni",
    specialty: "Pediatrics",
    email: "sneha@healthcare.com",
    phone: "+91 99887 77665",
    status: "Approved",
    patients: 98,
  },
  {
    id: 4,
    name: "Dr. Rohan Shah",
    specialty: "Dermatology",
    email: "rohan@healthcare.com",
    phone: "+91 91234 56789",
    status: "Approved",
    patients: 73,
  },
];

const healthWorkers = [
  {
    id: 1,
    name: "Anita Patil",
    area: "Hubballi",
    phone: "+91 98765 11111",
    patients: 48,
    visits: 32,
    status: "Active",
  },
  {
    id: 2,
    name: "Meena Joshi",
    area: "Dharwad",
    phone: "+91 98765 22222",
    patients: 37,
    visits: 28,
    status: "Active",
  },
  {
    id: 3,
    name: "Suresh Kumar",
    area: "Gadag",
    phone: "+91 98765 33333",
    patients: 42,
    visits: 31,
    status: "Inactive",
  },
  {
    id: 4,
    name: "Kavya Rao",
    area: "Belagavi",
    phone: "+91 98765 44444",
    patients: 51,
    visits: 39,
    status: "Active",
  },
];

const patients = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 34,
    gender: "Male",
    phone: "+91 98765 54321",
    condition: "Hypertension",
    assignedDoctor: "Dr. Priya Rao",
    status: "Active",
  },
  {
    id: 2,
    name: "Lakshmi Devi",
    age: 46,
    gender: "Female",
    phone: "+91 98765 65432",
    condition: "Diabetes",
    assignedDoctor: "Dr. Sneha Kulkarni",
    status: "Active",
  },
  {
    id: 3,
    name: "Vikram Kumar",
    age: 52,
    gender: "Male",
    phone: "+91 98765 76543",
    condition: "Heart Disease",
    assignedDoctor: "Dr. Arjun Mehta",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Meena Patil",
    age: 29,
    gender: "Female",
    phone: "+91 98765 87654",
    condition: "Asthma",
    assignedDoctor: "Dr. Priya Rao",
    status: "Active",
  },
];

const initialRequests = [
  {
    id: "REQ-001",
    from: "Anita Patil",
    type: "Doctor Consultation",
    patient: "Rahul Sharma",
    date: "08 Oct 2026",
    status: "Pending",
  },
  {
    id: "REQ-002",
    from: "Dr. Arjun Mehta",
    type: "Doctor Registration",
    patient: "-",
    date: "07 Oct 2026",
    status: "Pending",
  },
  {
    id: "REQ-003",
    from: "Meena Joshi",
    type: "Patient Referral",
    patient: "Lakshmi Devi",
    date: "06 Oct 2026",
    status: "Approved",
  },
  {
    id: "REQ-004",
    from: "Dr. Priya Rao",
    type: "Specialist Request",
    patient: "Vikram Kumar",
    date: "05 Oct 2026",
    status: "Rejected",
  },
];

const appointments = [
  {
    id: "APT-101",
    patient: "Rahul Sharma",
    doctor: "Dr. Priya Rao",
    date: "08 Oct 2026",
    time: "10:30 AM",
    type: "Online",
    status: "Confirmed",
  },
  {
    id: "APT-102",
    patient: "Lakshmi Devi",
    doctor: "Dr. Sneha Kulkarni",
    date: "08 Oct 2026",
    time: "11:30 AM",
    type: "Clinic",
    status: "Confirmed",
  },
  {
    id: "APT-103",
    patient: "Vikram Kumar",
    doctor: "Dr. Arjun Mehta",
    date: "09 Oct 2026",
    time: "02:00 PM",
    type: "Online",
    status: "Pending",
  },
  {
    id: "APT-104",
    patient: "Meena Patil",
    doctor: "Dr. Priya Rao",
    date: "09 Oct 2026",
    time: "04:30 PM",
    type: "Clinic",
    status: "Completed",
  },
];

/* =========================================================
   COMMON COMPONENTS
========================================================= */

function StatusBadge({ status }) {
  return (
    <span
      className={`admin-status ${
        String(status).toLowerCase().replace(/\s+/g, "-")
      }`}
    >
      {status}
    </span>
  );
}

function SearchBox({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="admin-search">
      <span>⌕</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

function SectionHeader({ title, subtitle, children }) {
  return (
    <div className="admin-section-header">
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>

      {children && <div className="admin-header-actions">{children}</div>}
    </div>
  );
}

function StatCard({ icon, label, value, change, positive = true }) {
  return (
    <div className="admin-stat-card">
      <div className="admin-stat-top">
        <div className="admin-stat-icon">{icon}</div>
        <span className={positive ? "stat-up" : "stat-down"}>
          {change}
        </span>
      </div>

      <div className="admin-stat-value">{value}</div>
      <div className="admin-stat-label">{label}</div>
    </div>
  );
}

/* =========================================================
   OVERVIEW
========================================================= */

function Overview() {
  return (
    <div className="admin-page">
      <SectionHeader
        title="Admin Overview"
        subtitle="Monitor and manage your healthcare platform."
      />

      <div className="admin-stat-grid">
        <StatCard
          icon="👥"
          label="Total Users"
          value="1,248"
          change="+12.5%"
        />

        <StatCard
          icon="🩺"
          label="Doctors"
          value="86"
          change="+8.2%"
        />

        <StatCard
          icon="🧑‍⚕️"
          label="Health Workers"
          value="142"
          change="+5.7%"
        />

        <StatCard
          icon="❤️"
          label="Patients"
          value="1,020"
          change="+14.4%"
        />
      </div>

      <div className="admin-two-column">
        <div className="admin-card">
          <div className="card-heading">
            <div>
              <h3>Platform Activity</h3>
              <p>Monthly platform activity</p>
            </div>
          </div>

          <div className="activity-chart">
            <div className="chart-y">
              <span>500</span>
              <span>400</span>
              <span>300</span>
              <span>200</span>
              <span>100</span>
              <span>0</span>
            </div>

            <div className="chart-content">
              <div className="chart-bars">
                {[65, 82, 58, 76, 92, 70, 88, 97, 72, 84, 90, 95].map(
                  (height, index) => (
                    <div className="bar-wrapper" key={index}>
                      <div
                        className="chart-bar"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  )
                )}
              </div>

              <div className="chart-months">
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="card-heading">
            <div>
              <h3>Recent Activity</h3>
              <p>Latest system activity</p>
            </div>
          </div>

          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-dot blue"></div>
              <div>
                <strong>New doctor registered</strong>
                <span>Dr. Arjun Mehta</span>
                <small>10 minutes ago</small>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-dot green"></div>
              <div>
                <strong>Patient registered</strong>
                <span>Rahul Sharma</span>
                <small>32 minutes ago</small>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-dot orange"></div>
              <div>
                <strong>New request received</strong>
                <span>Doctor consultation</span>
                <small>1 hour ago</small>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-dot purple"></div>
              <div>
                <strong>Appointment completed</strong>
                <span>Meena Patil</span>
                <small>2 hours ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="card-heading">
          <div>
            <h3>System Summary</h3>
            <p>Current healthcare platform statistics</p>
          </div>
        </div>

        <div className="summary-grid">
          <div>
            <span>Pending Requests</span>
            <strong>24</strong>
          </div>

          <div>
            <span>Today's Appointments</span>
            <strong>38</strong>
          </div>

          <div>
            <span>Completed Visits</span>
            <strong>316</strong>
          </div>

          <div>
            <span>Pending Doctor Approvals</span>
            <strong>7</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   USERS
========================================================= */

function Users() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");

  const filteredUsers = useMemo(() => {
    return initialUsers.filter((user) => {
      const matchSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchRole = role === "All" || user.role === role;

      return matchSearch && matchRole;
    });
  }, [search, role]);

  return (
    <div className="admin-page">
      <SectionHeader
        title="User Management"
        subtitle="Manage all registered users and their access."
      >
        <button className="admin-primary-btn">+ Add User</button>
      </SectionHeader>

      <div className="admin-stat-grid small">
        <StatCard icon="👥" label="Total Users" value="1,248" change="+12%" />
        <StatCard icon="🟢" label="Active Users" value="1,106" change="+9%" />
        <StatCard icon="⏳" label="Pending" value="28" change="+3%" />
        <StatCard icon="🔴" label="Inactive" value="114" change="-2%" positive={false} />
      </div>

      <div className="admin-card">
        <div className="filter-row">
          <SearchBox
            value={search}
            onChange={setSearch}
            placeholder="Search users..."
          />

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option>All</option>
            <option>Patient</option>
            <option>Doctor</option>
            <option>Health Worker</option>
          </select>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="table-user">
                      <div className="user-avatar">
                        {user.name.charAt(0)}
                      </div>
                      <strong>{user.name}</strong>
                    </div>
                  </td>

                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <StatusBadge status={user.status} />
                  </td>
                  <td>{user.joined}</td>

                  <td>
                    <button className="table-action">View</button>
                    <button className="table-action">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   DOCTORS
========================================================= */

function Doctors() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredDoctors = doctors.filter((doctor) => {
    const matchSearch =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "All" || doctor.status === status;

    return matchSearch && matchStatus;
  });

  return (
    <div className="admin-page">
      <SectionHeader
        title="Doctor Management"
        subtitle="Approve, manage and monitor registered doctors."
      >
        <button className="admin-primary-btn">+ Add Doctor</button>
      </SectionHeader>

      <div className="admin-card">
        <div className="filter-row">
          <SearchBox
            value={search}
            onChange={setSearch}
            placeholder="Search doctors..."
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>All</option>
            <option>Approved</option>
            <option>Pending</option>
          </select>
        </div>

        <div className="doctor-admin-grid">
          {filteredDoctors.map((doctor) => (
            <div className="doctor-admin-card" key={doctor.id}>
              <div className="doctor-admin-top">
                <div className="doctor-avatar">
                  {doctor.name.replace("Dr. ", "").charAt(0)}
                </div>

                <StatusBadge status={doctor.status} />
              </div>

              <h3>{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>

              <div className="doctor-details">
                <span>✉ {doctor.email}</span>
                <span>☎ {doctor.phone}</span>
                <span>👥 {doctor.patients} patients</span>
              </div>

              <div className="doctor-actions">
                <button className="outline-btn">View Profile</button>

                {doctor.status === "Pending" && (
                  <button className="approve-btn">Approve</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   HEALTH WORKERS
========================================================= */

function HealthWorkers() {
  const [search, setSearch] = useState("");

  const filteredWorkers = healthWorkers.filter((worker) =>
    `${worker.name} ${worker.area}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="admin-page">
      <SectionHeader
        title="Health Workers"
        subtitle="Manage field health workers and their assignments."
      >
        <button className="admin-primary-btn">
          + Add Health Worker
        </button>
      </SectionHeader>

      <div className="admin-card">
        <div className="filter-row">
          <SearchBox
            value={search}
            onChange={setSearch}
            placeholder="Search health workers..."
          />
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Worker</th>
                <th>Area</th>
                <th>Phone</th>
                <th>Patients</th>
                <th>Visits</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredWorkers.map((worker) => (
                <tr key={worker.id}>
                  <td>
                    <div className="table-user">
                      <div className="user-avatar">
                        {worker.name.charAt(0)}
                      </div>
                      <strong>{worker.name}</strong>
                    </div>
                  </td>

                  <td>{worker.area}</td>
                  <td>{worker.phone}</td>
                  <td>{worker.patients}</td>
                  <td>{worker.visits}</td>

                  <td>
                    <StatusBadge status={worker.status} />
                  </td>

                  <td>
                    <button className="table-action">View</button>
                    <button className="table-action">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PATIENTS
========================================================= */

function Patients() {
  const [search, setSearch] = useState("");

  const filteredPatients = patients.filter((patient) =>
    `${patient.name} ${patient.condition} ${patient.assignedDoctor}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="admin-page">
      <SectionHeader
        title="Patient Management"
        subtitle="View and manage all registered patients."
      />

      <div className="admin-stat-grid small">
        <StatCard icon="❤️" label="Total Patients" value="1,020" change="+14%" />
        <StatCard icon="🟢" label="Active" value="942" change="+11%" />
        <StatCard icon="🩺" label="Under Treatment" value="328" change="+7%" />
        <StatCard icon="⚠" label="High Risk" value="46" change="+2%" />
      </div>

      <div className="admin-card">
        <div className="filter-row">
          <SearchBox
            value={search}
            onChange={setSearch}
            placeholder="Search patients..."
          />
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Condition</th>
                <th>Doctor</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredPatients.map((patient) => (
                <tr key={patient.id}>
                  <td>
                    <div className="table-user">
                      <div className="user-avatar">
                        {patient.name.charAt(0)}
                      </div>
                      <strong>{patient.name}</strong>
                    </div>
                  </td>

                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.condition}</td>
                  <td>{patient.assignedDoctor}</td>

                  <td>
                    <StatusBadge status={patient.status} />
                  </td>

                  <td>
                    <button className="table-action">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   REQUESTS
========================================================= */

function Requests() {
  const [requests, setRequests] = useState(initialRequests);
  const [filter, setFilter] = useState("All");

  const filteredRequests = requests.filter(
    (request) => filter === "All" || request.status === filter
  );

  const updateRequest = (id, status) => {
    setRequests((current) =>
      current.map((request) =>
        request.id === id ? { ...request, status } : request
      )
    );
  };

  return (
    <div className="admin-page">
      <SectionHeader
        title="Requests"
        subtitle="Review and process healthcare platform requests."
      />

      <div className="request-summary">
        <div>
          <strong>24</strong>
          <span>Pending</span>
        </div>

        <div>
          <strong>186</strong>
          <span>Approved</span>
        </div>

        <div>
          <strong>12</strong>
          <span>Rejected</span>
        </div>
      </div>

      <div className="admin-card">
        <div className="filter-row">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>From</th>
                <th>Type</th>
                <th>Patient</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredRequests.map((request) => (
                <tr key={request.id}>
                  <td>
                    <strong>{request.id}</strong>
                  </td>

                  <td>{request.from}</td>
                  <td>{request.type}</td>
                  <td>{request.patient}</td>
                  <td>{request.date}</td>

                  <td>
                    <StatusBadge status={request.status} />
                  </td>

                  <td>
                    {request.status === "Pending" ? (
                      <>
                        <button
                          className="approve-btn small"
                          onClick={() =>
                            updateRequest(request.id, "Approved")
                          }
                        >
                          Approve
                        </button>

                        <button
                          className="reject-btn small"
                          onClick={() =>
                            updateRequest(request.id, "Rejected")
                          }
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <button className="table-action">View</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   APPOINTMENTS
========================================================= */

function Appointments() {
  const [filter, setFilter] = useState("All");

  const filteredAppointments = appointments.filter(
    (appointment) =>
      filter === "All" || appointment.status === filter
  );

  return (
    <div className="admin-page">
      <SectionHeader
        title="Appointments"
        subtitle="Monitor all patient and doctor appointments."
      >
        <button className="admin-primary-btn">
          + New Appointment
        </button>
      </SectionHeader>

      <div className="admin-stat-grid small">
        <StatCard icon="📅" label="Today's Appointments" value="38" change="+6%" />
        <StatCard icon="⏳" label="Pending" value="8" change="+2%" />
        <StatCard icon="✓" label="Completed" value="24" change="+9%" />
        <StatCard icon="✕" label="Cancelled" value="6" change="-3%" />
      </div>

      <div className="admin-card">
        <div className="filter-row">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Appointment</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>
                    <strong>{appointment.id}</strong>
                  </td>

                  <td>{appointment.patient}</td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.type}</td>

                  <td>
                    <StatusBadge status={appointment.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   REPORTS
========================================================= */

function Reports() {
  return (
    <div className="admin-page">
      <SectionHeader
        title="Reports & Analytics"
        subtitle="Analyze platform performance and healthcare activity."
      >
        <button className="admin-primary-btn">
          ↓ Export Report
        </button>
      </SectionHeader>

      <div className="admin-stat-grid">
        <StatCard icon="👥" label="Total Registrations" value="1,248" change="+12%" />
        <StatCard icon="📅" label="Appointments" value="836" change="+18%" />
        <StatCard icon="🏥" label="Patient Visits" value="2,486" change="+21%" />
        <StatCard icon="✓" label="Successful Consultations" value="734" change="+15%" />
      </div>

      <div className="admin-two-column">
        <div className="admin-card">
          <div className="card-heading">
            <div>
              <h3>User Growth</h3>
              <p>New users registered over time</p>
            </div>
          </div>

          <div className="report-chart">
            {[35, 48, 42, 58, 66, 72, 84, 78, 91].map(
              (height, index) => (
                <div className="report-column" key={index}>
                  <div
                    className="report-column-fill"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="admin-card">
          <div className="card-heading">
            <div>
              <h3>Healthcare Distribution</h3>
              <p>Current user distribution</p>
            </div>
          </div>

          <div className="distribution-list">
            <div>
              <span>Patients</span>
              <strong>81%</strong>
            </div>

            <div>
              <span>Health Workers</span>
              <strong>11%</strong>
            </div>

            <div>
              <span>Doctors</span>
              <strong>7%</strong>
            </div>

            <div>
              <span>Administrators</span>
              <strong>1%</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="card-heading">
          <div>
            <h3>Available Reports</h3>
            <p>Generate downloadable system reports.</p>
          </div>
        </div>

        <div className="report-list">
          <div className="report-item">
            <div>
              <strong>User Registration Report</strong>
              <span>Users registered during selected period</span>
            </div>
            <button className="outline-btn">Generate</button>
          </div>

          <div className="report-item">
            <div>
              <strong>Doctor Activity Report</strong>
              <span>Doctor appointments and consultations</span>
            </div>
            <button className="outline-btn">Generate</button>
          </div>

          <div className="report-item">
            <div>
              <strong>Patient Health Report</strong>
              <span>Patient visits and healthcare activity</span>
            </div>
            <button className="outline-btn">Generate</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SETTINGS
========================================================= */

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [maintenance, setMaintenance] = useState(false);

  return (
    <div className="admin-page">
      <SectionHeader
        title="Admin Settings"
        subtitle="Configure system preferences and administrator controls."
      />

      <div className="settings-grid">
        <div className="admin-card">
          <h3>General Settings</h3>
          <p className="settings-description">
            Basic configuration for the healthcare platform.
          </p>

          <div className="settings-form">
            <label>
              Platform Name
              <input defaultValue="SwasthyaConnect" />
            </label>

            <label>
              Admin Email
              <input defaultValue="admin@swasthyaconnect.com" />
            </label>

            <label>
              Support Phone
              <input defaultValue="+91 98765 00000" />
            </label>

            <label>
              Default Language
              <select defaultValue="English">
                <option>English</option>
                <option>Kannada</option>
                <option>Hindi</option>
              </select>
            </label>

            <button className="admin-primary-btn">
              Save Changes
            </button>
          </div>
        </div>

        <div className="admin-card">
          <h3>System Controls</h3>
          <p className="settings-description">
            Manage notifications and platform availability.
          </p>

          <div className="setting-toggle">
            <div>
              <strong>Push Notifications</strong>
              <span>Enable system notifications</span>
            </div>

            <button
              className={`toggle ${notifications ? "active" : ""}`}
              onClick={() => setNotifications(!notifications)}
            >
              <span></span>
            </button>
          </div>

          <div className="setting-toggle">
            <div>
              <strong>Email Alerts</strong>
              <span>Send important alerts to administrators</span>
            </div>

            <button
              className={`toggle ${emailAlerts ? "active" : ""}`}
              onClick={() => setEmailAlerts(!emailAlerts)}
            >
              <span></span>
            </button>
          </div>

          <div className="setting-toggle">
            <div>
              <strong>Maintenance Mode</strong>
              <span>Temporarily disable user access</span>
            </div>

            <button
              className={`toggle ${maintenance ? "active" : ""}`}
              onClick={() => setMaintenance(!maintenance)}
            >
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN ADMIN SECTIONS
========================================================= */

export default function AdminDashboardSections({
  activeSection = "Overview",
}) {
  switch (activeSection) {
    case "Overview":
      return <Overview />;

    case "Users":
      return <Users />;

    case "Doctors":
      return <Doctors />;

    case "Health Workers":
      return <HealthWorkers />;

    case "Patients":
      return <Patients />;

    case "Requests":
      return <Requests />;

    case "Appointments":
      return <Appointments />;

    case "Reports":
      return <Reports />;

    case "Settings":
      return <Settings />;

    default:
      return <Overview />;
  }
}