import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

/* =========================
   MAIN PAGES
========================= */

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* =========================
   ADMIN
========================= */

import AdminDashboard from "./pages/admin/AdminDashboard";

import AdminAppointments from "./pages/admin/pages/Appointments";
import Doctors from "./pages/admin/pages/Doctors";
import HealthWorkers from "./pages/admin/pages/HealthWorkers";
import AdminPatients from "./pages/admin/pages/Patients";
import Reports from "./pages/admin/pages/Reports";
import Requests from "./pages/admin/pages/Requests";

/* =========================
   DOCTOR
========================= */

import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import DoctorPatients from "./pages/doctor/DoctorPatients";
import Referrals from "./pages/doctor/Referrals";
import DoctorRequests from "./pages/doctor/DoctorRequests";

/* =========================
   PATIENT
========================= */

import PatientDashboard from "./pages/Patient/PatientDashboard";
import PatientAppointments from "./pages/Patient/Appointments";
import RequestHelp from "./pages/Patient/RequestHelp";
import PatientDoctors from "./pages/Patient/Doctors";
import PatientHealthWorker from "./pages/Patient/HealthWorker";

/* =========================
   HEALTH WORKER
========================= */

import WorkerDashboard from "./pages/worker/HealthWorkerDashboard";


function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />
      <Routes>

        {/* =========================
            HOME
        ========================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =========================
            AUTHENTICATION
        ========================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />


        {/* =========================
            ADMIN
        ========================= */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/appointments"
          element={
            <AdminAppointments />
          }
        />

        <Route
          path="/admin/doctors"
          element={<Doctors />}
        />

        <Route
          path="/admin/health-workers"
          element={
            <HealthWorkers />
          }
        />

        <Route
          path="/admin/patients"
          element={
            <AdminPatients />
          }
        />

        <Route
          path="/admin/reports"
          element={<Reports />}
        />

        <Route
          path="/admin/requests"
          element={<Requests />}
        />


        {/* =========================
            DOCTOR
        ========================= */}

        <Route
          path="/doctor"
          element={<DoctorDashboard />}
        />

        <Route
          path="/doctor/DoctorAppointments"
          element={
            <DoctorAppointments />
          }
        />

        {/* Lowercase-friendly route */}
        <Route
          path="/doctor/appointments"
          element={
            <DoctorAppointments />
          }
        />

        <Route
          path="/doctor/referrals"
          element={<Referrals />}
        />

        <Route
          path="/doctor/DoctorPatients"
          element={<DoctorPatients />}
        />

        <Route
          path="/doctor/DoctorRequests"
          element={<DoctorRequests />}
        />



        {/* =========================
            PATIENT
        ========================= */}

        <Route
          path="/patient"
          element={<PatientDashboard />}
        />

        <Route
          path="/patient/appointments"
          element={
            <PatientAppointments />
          }
        />

        <Route
          path="/patient/RequestHelp"
          element={<RequestHelp />}
        />

        {/* Lowercase-friendly route */}
        <Route
          path="/patient/request-help"
          element={<RequestHelp />}
        />

        <Route
          path="/patient/Doctors"
          element={
            <PatientDoctors />
          }
        />

        <Route
          path="/patient/doctors"
          element={
            <PatientDoctors />
          }
        />

        <Route
          path="/patient/HealthWorker"
          element={
            <PatientHealthWorker />
          }
        />

        <Route
          path="/patient/health-worker"
          element={
            <PatientHealthWorker />
          }
        />


        {/* =========================
            HEALTH WORKER
        ========================= */}

        <Route
          path="/worker"
          element={
            <WorkerDashboard />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;