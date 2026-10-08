import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  // =========================
  // NAVIGATION FUNCTIONS
  // =========================

  const goToSignup = () => {
    navigate("/signup");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToPatientPage = (page) => {
    navigate("/login", {
      state: {
        redirectTo: page,
      },
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="home-page">

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="home-header">

        <div
          className="home-logo"
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        >
          🏥

          <div>
            <h2>SwasthyaConnect</h2>
            <span>Healthcare for Everyone</span>
          </div>
        </div>

        <nav className="home-nav">

          <button
            type="button"
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>

        </nav>

        <button
          className="home-login-button"
          onClick={goToLogin}
        >
          Login
        </button>

      </header>


      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="home-hero" id="home">

        <div className="home-hero-content">

          <span className="home-badge">
            🩺 Digital Healthcare Platform
          </span>

          <h1>
            Healthcare Made
            <span> Accessible to Everyone</span>
          </h1>

          <p>
            SwasthyaConnect connects patients, doctors, and health workers
            through one simple platform, making healthcare easier and
            more accessible for rural communities.
          </p>

          <div className="home-hero-buttons">

            {/* GET STARTED */}

            <button
              className="home-primary-button"
              onClick={goToSignup}
            >
              Get Started →
            </button>


            {/* LEARN MORE */}

            <button
              className="home-secondary-button"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </button>

          </div>

        </div>


        {/* =========================
            HERO CARD
        ========================= */}

        <div className="home-hero-card">

          <div className="home-card-icon">
            🏥
          </div>

          <h3>SwasthyaConnect</h3>

          <p>
            Connecting communities with doctors and health workers.
          </p>

          <div className="home-card-stats">

            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>

            <div>
              <strong>3+</strong>
              <span>Healthcare Roles</span>
            </div>

            <div>
              <strong>1</strong>
              <span>Platform</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SERVICES
      ========================= */}

      <section
        className="home-services"
        id="services"
      >

        <div className="home-section-heading">

          <span>OUR SERVICES</span>

          <h2>
            Healthcare Services
            <br />
            In One Platform
          </h2>

          <p>
            SwasthyaConnect brings patients, doctors and health workers
            together to improve access to healthcare.
          </p>

        </div>


        <div className="home-service-grid">

          {/* FIND DOCTORS */}

          <div className="home-service-card">

            <div className="service-icon">
              👨‍⚕️
            </div>

            <h3>Find Doctors</h3>

            <p>
              Find doctors and request consultations without
              travelling long distances.
            </p>

            <button
              type="button"
              onClick={() => goToPatientPage("/patient/doctors")}
            >
              Explore Doctors →
            </button>

          </div>


          {/* HEALTH WORKERS */}

          <div className="home-service-card">

            <div className="service-icon">
              👩‍⚕️
            </div>

            <h3>Health Workers</h3>

            <p>
              Connect with nearby health workers for basic
              healthcare support and home visits.
            </p>

            <button
              type="button"
              onClick={() =>
                goToPatientPage("/patient/health-worker")
              }
            >
              Find Health Workers →
            </button>

          </div>


          {/* APPOINTMENTS */}

          <div className="home-service-card">

            <div className="service-icon">
              📅
            </div>

            <h3>Appointments</h3>

            <p>
              Schedule and manage healthcare appointments
              from anywhere.
            </p>

            <button
              type="button"
              onClick={() =>
                goToPatientPage("/patient/appointments")
              }
            >
              Book Appointment →
            </button>

          </div>


          {/* REQUEST HELP */}

          <div className="home-service-card">

            <div className="service-icon">
              🚑
            </div>

            <h3>Request Help</h3>

            <p>
              Submit healthcare requests and get connected
              with the appropriate healthcare professional.
            </p>

            <button
              type="button"
              onClick={() =>
                goToPatientPage("/patient/request-help")
              }
            >
              Request Help →
            </button>

          </div>

        </div>

      </section>


      {/* =========================
          HOW IT WORKS
      ========================= */}

      <section className="home-how-it-works">

        <div className="home-section-heading">

          <span>HOW IT WORKS</span>

          <h2>
            Simple Healthcare Access
          </h2>

        </div>


        <div className="home-steps">

          <div className="home-step">

            <div className="step-number">
              1
            </div>

            <h3>Register</h3>

            <p>
              Create your SwasthyaConnect account.
            </p>

          </div>


          <div className="home-step">

            <div className="step-number">
              2
            </div>

            <h3>Choose a Service</h3>

            <p>
              Find a doctor, health worker or request help.
            </p>

          </div>


          <div className="home-step">

            <div className="step-number">
              3
            </div>

            <h3>Connect</h3>

            <p>
              Connect with the appropriate healthcare professional.
            </p>

          </div>


          <div className="home-step">

            <div className="step-number">
              4
            </div>

            <h3>Get Healthcare</h3>

            <p>
              Receive the required healthcare support.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          ABOUT
      ========================= */}

      <section
        className="home-about"
        id="about"
      >

        <div className="home-about-content">

          <span>
            ABOUT SWASTHYACONNECT
          </span>

          <h2>
            Bridging the Gap Between
            Communities and Healthcare
          </h2>

          <p>
            Rural and underserved communities can face long travel
            distances, limited access to specialists and fragmented
            healthcare services.
          </p>

          <p>
            SwasthyaConnect provides a digital platform where patients,
            doctors and health workers can coordinate healthcare
            services more efficiently.
          </p>

          <button
            className="home-primary-button"
            onClick={goToSignup}
          >
            Get Started →
          </button>

        </div>


        <div className="home-about-visual">

          <div className="about-main-icon">
            🏥
          </div>

          <div className="about-floating-card">

            <strong>
              Connected Healthcare
            </strong>

            <span>
              Patients • Doctors • Health Workers
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="home-cta">

        <h2>
          Better Healthcare Starts With Better Access
        </h2>

        <p>
          Connect with healthcare professionals through SwasthyaConnect.
        </p>

        <button
          type="button"
          onClick={goToSignup}
        >
          Get Started →
        </button>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer
        className="home-footer"
        id="contact"
      >

        <div>

          <h2>
            🏥 SwasthyaConnect
          </h2>

          <p>
            Connecting rural communities with better healthcare.
          </p>

        </div>


        <div>

          <h4>
            Platform
          </h4>

          <button
            type="button"
            onClick={goToSignup}
          >
            Patients
          </button>

          <button
            type="button"
            onClick={goToLogin}
          >
            Doctors
          </button>

          <button
            type="button"
            onClick={goToLogin}
          >
            Health Workers
          </button>

        </div>


        <div>

          <h4>
            Contact
          </h4>

          <p>
            Email: support@swasthyaconnect.com
          </p>

          <p>
            Healthcare Support
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;
