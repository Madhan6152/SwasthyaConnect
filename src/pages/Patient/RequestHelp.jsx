import React, {
  useEffect,
  useState,
} from "react";
import "./RequestHelp.css";

import {
  getDemoData,
  addRequest,
} from "../../data/demoStore";

function RequestHelp() {
  const [requestType, setRequestType] =
    useState("Doctor Consultation");

  const [priority, setPriority] =
    useState("Normal");

  const [description, setDescription] =
    useState("");

  const [location, setLocation] =
    useState("Madhavapur");

  const [requests, setRequests] =
    useState([]);

  useEffect(() => {
    const data = getDemoData();
    setRequests(data.requests);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim()) {
      alert(
        "Please describe your healthcare requirement."
      );
      return;
    }

    if (!location.trim()) {
      alert(
        "Please enter your village or location."
      );
      return;
    }

    const newRequest = addRequest({
      patient: "Ravi Kumar",
      age: 42,
      village: location.trim(),
      type: requestType,
      description: description.trim(),
      priority,
      assignedTo: "Health Worker",
    });

    setRequests((currentRequests) => [
      newRequest,
      ...currentRequests,
    ]);

    setDescription("");
    setRequestType(
      "Doctor Consultation"
    );
    setPriority("Normal");

    alert(
      `Healthcare request ${newRequest.id} submitted successfully.`
    );
  };

  const getStatusClass = (status) => {
    return status
      .toLowerCase()
      .replace(/\s+/g, "-");
  };

  return (
    <div className="request-help-page">

      {/* HEADER */}
      <div className="request-help-header">

        <div>
          <h1>
            Request Healthcare Help
          </h1>

          <p>
            Tell us what healthcare support
            you need and our team will assist
            you.
          </p>
        </div>

        <div className="help-header-icon">
          🏥
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="request-help-grid">

        {/* REQUEST FORM */}
        <div className="request-form-card">

          <div className="request-card-title">

            <div className="request-title-icon">
              📋
            </div>

            <div>
              <h2>
                New Healthcare Request
              </h2>

              <p>
                Fill in the details below
              </p>
            </div>

          </div>

          <form
            onSubmit={handleSubmit}
          >

            {/* REQUEST TYPE */}
            <div className="form-group">

              <label htmlFor="requestType">
                What type of help do you need?
              </label>

              <select
                id="requestType"
                value={requestType}
                onChange={(e) =>
                  setRequestType(
                    e.target.value
                  )
                }
              >

                <option value="Doctor Consultation">
                  Doctor Consultation
                </option>

                <option value="Health Worker Visit">
                  Health Worker Visit
                </option>

                <option value="Medicine Request">
                  Medicine Request
                </option>

                <option value="Health Checkup">
                  Health Checkup
                </option>

                <option value="Appointment Request">
                  Appointment Request
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>

            {/* PRIORITY */}
            <div className="form-group">

              <label htmlFor="priority">
                Priority
              </label>

              <select
                id="priority"
                value={priority}
                onChange={(e) =>
                  setPriority(
                    e.target.value
                  )
                }
              >

                <option value="Normal">
                  Normal
                </option>

                <option value="High">
                  High
                </option>

              </select>

              <small>
                Select High only when you
                need prompt healthcare
                attention.
              </small>

            </div>

            {/* LOCATION */}
            <div className="form-group">

              <label htmlFor="location">
                Your Village / Location
              </label>

              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) =>
                  setLocation(
                    e.target.value
                  )
                }
                placeholder="Enter your village or location"
                required
              />

            </div>

            {/* DESCRIPTION */}
            <div className="form-group">

              <label htmlFor="description">
                Describe your requirement
              </label>

              <textarea
                id="description"
                value={description}
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
                placeholder="Explain what kind of healthcare help you need..."
                rows="5"
                required
              />

              <small>
                Please provide clear
                information so the healthcare
                team can understand your
                request.
              </small>

            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="submit-request-button"
            >
              Submit Healthcare Request
            </button>

          </form>

        </div>

        {/* INFORMATION */}
        <div className="request-info-card">

          <h2>
            How It Works
          </h2>

          <div className="help-step">

            <div className="help-step-number">
              1
            </div>

            <div>
              <strong>
                Submit Request
              </strong>

              <p>
                Describe the healthcare
                assistance you need.
              </p>
            </div>

          </div>

          <div className="help-step">

            <div className="help-step-number">
              2
            </div>

            <div>
              <strong>
                Request Reviewed
              </strong>

              <p>
                A health worker reviews
                your request and performs
                initial triage.
              </p>
            </div>

          </div>

          <div className="help-step">

            <div className="help-step-number">
              3
            </div>

            <div>
              <strong>
                Doctor Consultation
              </strong>

              <p>
                Your case can be forwarded
                to a doctor when required.
              </p>
            </div>

          </div>

          <div className="help-step">

            <div className="help-step-number">
              4
            </div>

            <div>
              <strong>
                Get Assistance
              </strong>

              <p>
                Receive the next step,
                referral or follow-up.
              </p>
            </div>

          </div>

          <div className="emergency-notice">

            <strong>
              ⚠️ Important
            </strong>

            <p>
              This platform is not intended
              for emergencies. For an immediate
              medical emergency, contact local
              emergency services or visit the
              nearest healthcare facility.
            </p>

          </div>

        </div>

      </div>

      {/* PREVIOUS REQUESTS */}
      <div className="previous-requests-card">

        <div className="previous-requests-header">

          <div>
            <h2>
              My Previous Requests
            </h2>

            <p>
              Track the status of your
              healthcare requests.
            </p>
          </div>

          <span>
            {requests.length} Requests
          </span>

        </div>

        <div className="request-list">

          {requests.length > 0 ? (

            requests.map((request) => (

              <div
                className="request-item"
                key={request.id}
              >

                <div className="request-item-icon">
                  📋
                </div>

                <div className="request-item-main">

                  <div className="request-item-title">

                    <strong>
                      {request.type}
                    </strong>

                    <span>
                      {request.id}
                    </span>

                  </div>

                  <p>
                    {request.description}
                  </p>

                  <div className="request-item-details">

                    <span>
                      📍{" "}
                      {request.village ||
                        request.location}
                    </span>

                    <span>
                      📅{" "}
                      {request.createdAt ||
                        request.date}
                    </span>

                    <span
                      className={`request-priority ${
                        request.priority
                          ? request.priority.toLowerCase()
                          : "normal"
                      }`}
                    >
                      {request.priority ||
                        "Normal"}{" "}
                      Priority
                    </span>

                  </div>

                </div>

                <div className="request-item-status">

                  <span
                    className={`request-status-badge ${getStatusClass(
                      request.status
                    )}`}
                  >
                    {request.status}
                  </span>

                </div>

              </div>

            ))

          ) : (

            <div className="no-requests">

              <div>
                📋
              </div>

              <h3>
                No requests yet
              </h3>

              <p>
                Your submitted healthcare
                requests will appear here.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default RequestHelp;