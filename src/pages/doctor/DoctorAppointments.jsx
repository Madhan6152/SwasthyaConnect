import React, {
  useEffect,
  useState,
} from "react";

import "./DoctorAppointments.css";

import {
  getDemoData,
  updateRequestStatus,
} from "../../data/demoStore";

const defaultAppointments = [
  {
    id: 1,
    patient: "Ravi Kumar",
    age: 42,
    village: "Madhavapur",
    date: "25 Sep 2026",
    time: "09:30 AM",
    type: "Video Consultation",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "Lakshmi Devi",
    age: 56,
    village: "Rampur",
    date: "25 Sep 2026",
    time: "10:30 AM",
    type: "General Consultation",
    status: "Confirmed",
  },
  {
    id: 3,
    patient: "Suresh Reddy",
    age: 35,
    village: "Kondapur",
    date: "25 Sep 2026",
    time: "12:00 PM",
    type: "Follow-up",
    status: "Pending",
  },
  {
    id: 4,
    patient: "Anitha Rao",
    age: 29,
    village: "Nandigama",
    date: "25 Sep 2026",
    time: "02:30 PM",
    type: "General Consultation",
    status: "Confirmed",
  },
  {
    id: 5,
    patient: "Mohan Das",
    age: 48,
    village: "Gopalapuram",
    date: "26 Sep 2026",
    time: "09:00 AM",
    type: "Follow-up",
    status: "Pending",
  },
  {
    id: 6,
    patient: "Priya Sharma",
    age: 31,
    village: "Lakshmipur",
    date: "26 Sep 2026",
    time: "11:00 AM",
    type: "Video Consultation",
    status: "Confirmed",
  },
];

function DoctorAppointments() {
  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [demoData, setDemoData] =
    useState(getDemoData());

  const [appointments, setAppointments] =
    useState(defaultAppointments);

  useEffect(() => {
    const data = getDemoData();

    setDemoData(data);

    if (
      data.appointments &&
      data.appointments.length > 0
    ) {
      setAppointments(
        data.appointments.map(
          (appointment, index) => ({
            ...appointment,
            id:
              appointment.id ||
              index + 1,
          })
        )
      );
    }
  }, []);

  const incomingRequests =
    demoData.requests.filter(
      (request) =>
        request.status ===
          "Triaged" ||
        request.status ===
          "Referred" ||
        request.priority === "High"
    );

  const combinedAppointments = [
    ...appointments,
    ...incomingRequests.map(
      (request, index) => ({
        id: `REQ-${request.id}`,
        patient: request.patient,
        age: request.age,
        village: request.village,
        date: request.createdAt,
        time: "Priority Case",
        type:
          request.type ||
          "Doctor Consultation",
        status:
          request.status === "Doctor Accepted"
            ? "Confirmed"
            : "Pending",
        requestId: request.id,
        priority:
          request.priority,
      })
    ),
  ];

  const filteredAppointments =
    combinedAppointments.filter(
      (appointment) => {
        const searchText =
          search.toLowerCase();

        const matchesSearch =
          appointment.patient
            .toLowerCase()
            .includes(searchText) ||
          appointment.village
            .toLowerCase()
            .includes(searchText) ||
          appointment.type
            .toLowerCase()
            .includes(searchText);

        const matchesStatus =
          statusFilter === "All" ||
          appointment.status ===
            statusFilter;

        return (
          matchesSearch &&
          matchesStatus
        );
      }
    );

  const handleAcceptCase = (
    requestId
  ) => {
    const updatedData =
      updateRequestStatus(
        requestId,
        "Doctor Accepted",
        {
          assignedTo:
            "Dr. Ananya Sharma",
        }
      );

    setDemoData(updatedData);

    alert(
      `Case ${requestId} accepted by the doctor.`
    );
  };

  const handleAppointment = (
    appointment,
    action
  ) => {
    if (appointment.requestId) {
      handleAcceptCase(
        appointment.requestId
      );

      return;
    }

    alert(
      `${action}\n\n` +
        `Patient: ${appointment.patient}\n` +
        `Date: ${appointment.date}\n` +
        `Time: ${appointment.time}`
    );
  };

  const confirmedCount =
    combinedAppointments.filter(
      (item) =>
        item.status === "Confirmed"
    ).length;

  const pendingCount =
    combinedAppointments.filter(
      (item) =>
        item.status === "Pending"
    ).length;

  return (
    <div className="doctor-appointments-page">

      {/* HEADER */}
      <div className="doctor-appointments-header">

        <div>

          <h1>
            Appointments
          </h1>

          <p>
            Manage patient consultations
            and incoming rural health
            cases.
          </p>

        </div>

        <div className="doctor-appointments-summary">

          <div>
            <strong>
              {combinedAppointments.length}
            </strong>

            <span>
              Total
            </span>
          </div>

          <div>
            <strong>
              {confirmedCount}
            </strong>

            <span>
              Confirmed
            </span>
          </div>

          <div>
            <strong>
              {pendingCount}
            </strong>

            <span>
              Pending
            </span>
          </div>

        </div>

      </div>

      {/* CONTROLS */}
      <div className="doctor-appointments-controls">

        <div className="doctor-appointments-search">

          <span>
            🔍
          </span>

          <input
            type="text"
            placeholder="Search patient, village or consultation..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </div>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(
              e.target.value
            )
          }
          className="doctor-appointments-filter"
        >

          <option value="All">
            All Status
          </option>

          <option value="Confirmed">
            Confirmed
          </option>

          <option value="Pending">
            Pending
          </option>

        </select>

      </div>

      {/* PRIORITY REQUESTS */}
      {incomingRequests.length >
        0 && (

        <div
          className="doctor-appointments-card"
          style={{
            marginBottom: "20px",
          }}
        >

          <div className="doctor-appointments-card-header">

            <div>

              <h2>
                Incoming Health Worker Referrals
              </h2>

              <p>
                Cases requiring doctor review
              </p>

            </div>

            <span className="doctor-appointment-date">
              🩺 Priority Cases
            </span>

          </div>

          <div className="doctor-appointments-list">

            {incomingRequests.map(
              (request) => (

                <div
                  className="doctor-appointment-item"
                  key={request.id}
                >

                  <div className="doctor-appointment-time">

                    <strong>
                      {request.priority}
                    </strong>

                    <span>
                      {request.id}
                    </span>

                  </div>

                  <div className="doctor-appointment-patient">

                    <div className="doctor-appointment-avatar">

                      {request.patient
                        .split(" ")
                        .map(
                          (name) =>
                            name[0]
                        )
                        .join("")}

                    </div>

                    <div>

                      <strong>
                        {request.patient}
                      </strong>

                      <span>
                        {request.age} years •{" "}
                        {request.village}
                      </span>

                    </div>

                  </div>

                  <div className="doctor-appointment-type">

                    <span>
                      Request
                    </span>

                    <strong>
                      {request.type}
                    </strong>

                  </div>

                  <span
                    className={`doctor-appointment-status ${request.status
                      .toLowerCase()
                      .replace(
                        " ",
                        "-"
                      )}`}
                  >

                    <span className="doctor-status-dot"></span>

                    {request.status}

                  </span>

                  <button
                    className="doctor-appointment-view"
                    onClick={() =>
                      handleAcceptCase(
                        request.id
                      )
                    }
                  >
                    Accept Case
                  </button>

                </div>

              )
            )}

          </div>

        </div>

      )}

      {/* APPOINTMENTS */}
      <div className="doctor-appointments-card">

        <div className="doctor-appointments-card-header">

          <div>

            <h2>
              Appointment Schedule
            </h2>

            <p>
              {filteredAppointments.length}{" "}
              appointment
              {filteredAppointments.length !==
              1
                ? "s"
                : ""}{" "}
              found
            </p>

          </div>

          <span className="doctor-appointment-date">
            📅 September 2026
          </span>

        </div>

        <div className="doctor-appointments-list">

          {filteredAppointments.length >
          0 ? (

            filteredAppointments.map(
              (appointment) => (

                <div
                  className="doctor-appointment-item"
                  key={appointment.id}
                >

                  <div className="doctor-appointment-time">

                    <strong>
                      {appointment.time}
                    </strong>

                    <span>
                      {appointment.date}
                    </span>

                  </div>

                  <div className="doctor-appointment-patient">

                    <div className="doctor-appointment-avatar">

                      {appointment.patient
                        .split(" ")
                        .map(
                          (name) =>
                            name[0]
                        )
                        .join("")}

                    </div>

                    <div>

                      <strong>
                        {appointment.patient}
                      </strong>

                      <span>
                        {appointment.age}{" "}
                        years •{" "}
                        {appointment.village}
                      </span>

                    </div>

                  </div>

                  <div className="doctor-appointment-type">

                    <span>
                      Consultation
                    </span>

                    <strong>
                      {appointment.type}
                    </strong>

                  </div>

                  <span
                    className={`doctor-appointment-status ${appointment.status.toLowerCase()}`}
                  >

                    <span className="doctor-status-dot"></span>

                    {appointment.status}

                  </span>

                  <button
                    className="doctor-appointment-view"
                    onClick={() =>
                      handleAppointment(
                        appointment,
                        "Opening appointment"
                      )
                    }
                  >
                    {appointment.requestId
                      ? "Accept"
                      : "View"}
                  </button>

                </div>

              )
            )

          ) : (

            <div className="doctor-no-appointments">

              <div>
                📅
              </div>

              <h3>
                No appointments found
              </h3>

              <p>
                Try changing your search
                or status filter.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setStatusFilter(
                    "All"
                  );
                }}
              >
                Clear Filters
              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default DoctorAppointments;