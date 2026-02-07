// App.jsx
import React, { useState } from "react";
import TallyEmbed from "./tally.tsx";
import {
  Phone,
  Calendar,
  Bell,
  Users,
  ArrowRight,
  Menu,
  X,
  Check,
} from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Phone,
      title: "AI Front Desk",
      problem:
        "Missed calls and repetitive questions can slow response times and pull staff away from higher-value work.",
      solution:
        "A phone system that answers common questions, shares basic information, and routes qualified callers to your team when needed.",
      forWho: "Well-suited for gyms that receive frequent inbound calls",
    },
    {
      icon: Users,
      title: "Lead Qualification",
      problem:
        "Inbound calls often include incomplete inquiries, wrong numbers, or low-intent prospects.",
      solution:
        "The system captures structured details from interested callers, helping you prioritize follow-ups with clearer context.",
      forWho: "For owners who want a more organized lead pipeline",
    },
    {
      icon: Calendar,
      title: "Assessment Booking",
      problem:
        "Delays between first contact and scheduling can reduce follow-through.",
      solution:
        "Callers can request an assessment during the conversation, with confirmations and reminders sent automatically.",
      forWho: "Designed to shorten the gap between interest and booking",
    },
    {
      icon: Bell,
      title: "Owner Notifications",
      problem:
        "Important activity can be easy to miss when everything lives inside dashboards.",
      solution:
        "Receive notifications for key events like new bookings or priority calls, without needing to constantly check systems.",
      forWho: "Helpful for owners who want visibility without micromanaging",
    },
  ];

  const stats = [
    "Improved Response Time",
    "No Missed Calls",
    "More Booked Assessments",
    "Less Administrative Work",
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="#hero" style={{ textDecoration: "none" }}><div className="logo-wrapper">
            <div  className="logo-placeholder">
              <img draggable="false" src="/logo.png" alt="HerculesAutomation" />
            </div>
            <span className="company-name" style={{ display: "flex",}}><div>Hercules</div><div style={{color: "#C9A24D"}}>Automation</div></span>
          </div>
          </a>            

          <div className={`nav-links ${mobileMenuOpen ? "nav-links-open" : ""}`}>
            <a href="#features">Features</a>
            <a href="#comparison">Why Custom</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section  id="hero" className="hero" style={{
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}>
        <h1>
          Turn More Calls
          <br />
          Into <span className="gold-text">Booked</span>
          <br />
          Assessments
        </h1>
        <p className="description">
          A custom AI phone and scheduling system designed to help gyms respond
          faster, qualify leads clearly, and book assessments with less manual
          work.
        </p>
        <a href="#contact" className="btn-primary">
          See How It Works <ArrowRight size={20} />
        </a>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stats-container">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat">
              {stat}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div  style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <h2>What You Get</h2>
          <p className="section-subtitle">
            Systems designed to work together
          </p>
        </div>
        <div className="feature-list">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="feature-item">
                <div className="feature-content">
                  <Icon className="feature-icon" strokeWidth={1.5} />
                  <div className="feature-text">
                    <h3>{feature.title}</h3>
                    <p className="problem">{feature.problem}</p>
                    <p className="solution">{feature.solution}</p>
                    <p className="for-who">{feature.forWho}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="comparison">
        <div className="comparison-container">
          <div style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <h2>
              Why a Custom System
              <br />
              Instead of Built-In Tools?
            </h2>
            <p className="section-subtitle">
              Many platforms offer basic automation. A custom system is designed
              around how your gym actually handles calls, bookings, and follow-ups.
            </p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card built-in">
              <h3>BUILT-IN TOOLS</h3>
              <ul>
                <li>
                  <span className="x-mark">×</span>
                  <span>Standardized responses</span>
                </li>
                <li>
                  <span className="x-mark">×</span>
                  <span>Limited lead filtering</span>
                </li>
                <li>
                  <span className="x-mark">×</span>
                  <span>Often redirects to forms</span>
                </li>
                <li>
                  <span className="x-mark">×</span>
                  <span>Minimal follow-up logic</span>
                </li>
                <li>
                  <span className="x-mark">×</span>
                  <span>Tied to one platform</span>
                </li>
              </ul>
              <p className="impact">Best for: Basic automation</p>
            </div>

            <div className="comparison-card custom">
              <h3>CUSTOM SYSTEM</h3>
              <ul>
                <li>
                  <Check size={20} className="check-mark" />
                  <span>Configured to your pricing and services</span>
                </li>
                <li>
                  <Check size={20} className="check-mark" />
                  <span>Captures structured lead information</span>
                </li>
                <li>
                  <Check size={20} className="check-mark" />
                  <span>Supports booking during the call</span>
                </li>
                <li>
                  <Check size={20} className="check-mark" />
                  <span>Automated follow-ups in your brand voice</span>
                </li>
                <li>
                  <Check size={20} className="check-mark" />
                  <span>Integrates with existing tools</span>
                </li>
              </ul>
              <p className="impact">Best for: Booking-focused workflows</p>
            </div>
          </div>

          <div className="quote-block">
            <p>
              Built-in tools are designed to reduce manual work. Custom systems
              are designed around your specific booking process. For many gyms,
              this results in faster responses, clearer lead handling, and more
              consistent booking over time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta">
          <section id="contact" className="cta">
            <div className="cta-container">
              <h2>
                Interested in a More
                <br />
                Efficient Call System?
              </h2>
              <p>
                Share a few details about your gym, and we’ll follow up to discuss how a custom phone and booking system could support your workflow.
              </p>

              <TallyEmbed />
            </div>
          </section>
          <div className="cta-buttons">
            <a href="tel:+19294357146" className="btn-secondary">
              Or Call Us Now at (929) 435-7146
            </a>
          </div>
      </section>

      {/* Footer */}
      <footer className="footer">
  <div className="footer-container">
    <div className="footer-logo">
      <div className="logo-placeholder">
        <img draggable="false" src="/logo.png" alt="HerculesAutomation" />
      </div>

      <span
        className="company-name"
        style={{ display: "flex"}}
      >
        <div>Hercules</div>
        <div style={{ color: "#C9A24D" }}>Automation</div>
      </span>
    </div>

    <p>Custom Phone and Scheduling Systems Built for Gyms</p>

    {/* Contact info */}
    <div
      className="footer-contact"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        marginTop: "12px",
        fontSize: "14px",
      }}
    >
      <p>
        herculesautomated@gmail.com
      </p>

      <p>
        (929) 435-7146
      </p>
    </div>

    <p className="copyright" style={{ marginTop: "16px" }}>
      © {new Date().getFullYear()} Hercules Automation LLC. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  );
}
