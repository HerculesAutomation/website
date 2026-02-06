// App.jsx
import React, { useState } from 'react';
import { Phone, Calendar, MessageSquare, Bell, Users, ArrowRight, Menu, X, Check } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Phone,
      title: "AI Front Desk",
      problem: "You're losing leads to voicemail and paying staff to answer the same questions all day.",
      solution: "A phone system that picks up every call, answers pricing and schedule questions instantly, and only transfers qualified leads to your team.",
      forWho: "Perfect for gyms that get 20+ calls per week"
    },
    {
      icon: Users,
      title: "Lead Qualification",
      problem: "Your CRM is full of tire-kickers, wrong numbers, and spam. Finding real prospects takes hours.",
      solution: "Only people who want to join get logged. Every entry includes their name, number, what they're looking for, and call notes—no junk.",
      forWho: "For owners who need a clean pipeline, not a mess"
    },
    {
      icon: Calendar,
      title: "Assessment Booking",
      problem: "Leads call interested, but booking an assessment takes 3 texts and 2 days—then they ghost.",
      solution: "AI schedules the assessment while they're on the phone. Sends confirmation, reminder texts, and handles reschedules. Fast = more shows.",
      forWho: "The fastest path from call to booked appointment"
    },
    {
      icon: MessageSquare,
      title: "SMS Follow-Ups",
      problem: "Leads go cold because no one followed up. Members miss payments because you forgot to remind them.",
      solution: "Sends polite, on-brand texts after every call, booking, or missed call. Optional payment reminders keep revenue flowing.",
      forWho: "For gyms that want leads nurtured automatically"
    },
    {
      icon: Bell,
      title: "Owner Notifications",
      problem: "You find out about hot leads too late, or miss that the front desk system crashed.",
      solution: "Get a text or Slack ping when someone books, when a high-intent lead calls, or if something breaks. No checking dashboards.",
      forWho: "Stay informed without being glued to your phone"
    }
  ];

  const stats = [
    "30% more conversions",
    "Zero missed calls",
    "$5k-$15k monthly impact",
    "Set up in 7 days"
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="logo-wrapper">
            <div className="logo-placeholder">
              <img src="/logo.png" alt="HerculesAutomation" />
            </div>
            <span className="company-name">HerculesAutomation</span>
          </div>
          
          <div className={`nav-links ${mobileMenuOpen ? 'nav-links-open' : ''}`}>
            <a href="#features">Features</a>
            <a href="#comparison">Why Custom</a>
            <a href="#contact">Contact</a>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Turn Every Call<br/>
          Into a <span className="gold-text">Booked</span><br/>
          Assessment
        </h1>
        <p className="subtitle">
          Custom phone and follow-up systems for gyms that book 15-40 new members per month—without adding headcount.
        </p>
        <p className="description">
          Stop losing leads to voicemail. Stop playing phone tag. Start booking while your competitors sleep.
        </p>
        <a href="#contact" className="btn-primary">
          See How It Works <ArrowRight size={20} />
        </a>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stats-container">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat">{stat}</div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>What You Get</h2>
        <p className="section-subtitle">Five systems that work together</p>
        
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
          <h2>Why Not Just Use<br/>Built-In AI Tools?</h2>
          <p className="section-subtitle">
            Your scheduling software might have "AI features." Here's why they don't book leads like a custom system does.
          </p>

          <div className="comparison-grid">
            <div className="comparison-card built-in">
              <h3>BUILT-IN AI</h3>
              <ul>
                <li>
                  <span className="x-mark">×</span>
                  <span>Generic responses</span>
                </li>
                <li>
                  <span className="x-mark">×</span>
                  <span>Logs everything (including junk)</span>
                </li>
                <li>
                  <span className="x-mark">×</span>
                  <span>Redirects to web forms</span>
                </li>
                <li>
                  <span className="x-mark">×</span>
                  <span>No follow-ups</span>
                </li>
                <li>
                  <span className="x-mark">×</span>
                  <span>Locked to one platform</span>
                </li>
              </ul>
              <p className="impact">Impact: Saves time</p>
            </div>

            <div className="comparison-card custom">
              <h3>CUSTOM SYSTEM</h3>
              <ul>
                <li>
                  <Check size={20} className="check-mark" />
                  <span>Answers your exact pricing & packages</span>
                </li>
                <li>
                  <Check size={20} className="check-mark" />
                  <span>Only logs qualified leads</span>
                </li>
                <li>
                  <Check size={20} className="check-mark" />
                  <span>Books during the call</span>
                </li>
                <li>
                  <Check size={20} className="check-mark" />
                  <span>Automatic nurture in your voice</span>
                </li>
                <li>
                  <Check size={20} className="check-mark" />
                  <span>Works with any tools you use</span>
                </li>
              </ul>
              <p className="impact">Impact: +$5k-$15k/month</p>
            </div>
          </div>

          <div className="quote-block">
            <p>
              Built-in tools save companies support costs. Custom systems book your appointments and close your leads. One answers calls. The other converts them. That's why gyms see 20-30% more bookings in month one.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta">
        <div className="cta-container">
          <h2>Ready to Stop<br/>Losing Leads?</h2>
          <p>
            Book a 20-minute call. We'll walk you through exactly how this works for a gym your size.
          </p>
          <div className="cta-buttons">
            <a href="mailto:hello@herculesautomation.com" className="btn-primary">
              Submit Inquiry
            </a>
            <a href="tel:+1234567890" className="btn-secondary">
              Or Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <div className="logo-placeholder">
              <img src="/logo.png" alt="HerculesAutomation" />
            </div>
            <span className="company-name">HerculesAutomation</span>
          </div>
          <p>Custom Phone & Follow-Up Systems for Gyms</p>
          <p className="copyright">© 2026 HerculesAutomation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}