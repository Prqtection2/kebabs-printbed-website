import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate light source position based on scroll - limit to prevent going too far
  const maxScroll = 800; // Limit scroll to prevent going past perfect frame
  const limitedScrollY = Math.min(scrollY, maxScroll);
  const lightSourceX = Math.max(0, 100 - (limitedScrollY / 8)); // Slower movement
  const lightSourceY = Math.max(0, 100 - (limitedScrollY / 8)); // Slower movement

  return (
    <div className="app">
      {/* Radial Rays Background */}
      <div className="rainbow-rays">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i} 
            className="ray"
            style={{
              '--angle': (i * 3.6), // 360 degrees / 100 rays = 3.6 degrees each
              '--light-x': `${lightSourceX}%`,
              '--light-y': `${lightSourceY}%`
            }}
          ></div>
        ))}
      </div>
      
      {/* Moving Spotlight Background */}
      <div 
        className="spotlight"
        style={{
          '--light-x': `${lightSourceX}%`,
          '--light-y': `${lightSourceY}%`
        }}
      ></div>
      
      {/* Navbar */}
      <nav className={`navbar ${scrollY > 100 ? 'navbar-visible' : ''}`}>
        <div className="nav-content">
          <h2 className="nav-title">KEBAB'S PRINTBED</h2>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#materials">Materials</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="content">
          <h1 className="title">KEBAB'S PRINTBED</h1>
          <p className="hero-subtitle">Professional 3D Printing Services</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">24hr</span>
              <span className="stat-label">Fast Turnaround</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Materials Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-content">
          <h2 className="section-title">About Our Company</h2>
          <p className="section-description">
            We are a cutting-edge 3D printing company specializing in custom solutions for businesses and individuals. 
            Our state-of-the-art technology and expert team bring your ideas to life with precision and quality.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Browse Our Premade Products</h3>
              <p>Explore our collection of ready-to-print designs and products</p>
              <button className="arrow-button">
                <span className="arrow">→</span>
              </button>
            </div>
            <div className="feature-card">
              <h3>Order a Custom Print</h3>
              <p>Get your unique designs printed with our custom printing service</p>
              <button className="arrow-button">
                <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="section-content">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            From rapid prototyping to production parts, we offer comprehensive 3D printing solutions.
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Rapid Prototyping</h3>
              <p>Quick turnaround for product development and testing</p>
              <ul className="service-features">
                <li>Same day quotes</li>
                <li>Multiple material options</li>
                <li>High accuracy prints</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🏭</div>
              <h3>Production Parts</h3>
              <p>High-volume production with consistent quality</p>
              <ul className="service-features">
                <li>Bulk pricing available</li>
                <li>Quality assurance</li>
                <li>Fast production times</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Custom Design</h3>
              <p>Custom design and engineering services</p>
              <ul className="service-features">
                <li>CAD modeling</li>
                <li>Design optimization</li>
                <li>Technical consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="materials-section">
        <div className="section-content">
          <h2 className="section-title">Available Materials</h2>
          <p className="section-description">
            Choose from our wide range of high-quality 3D printing materials.
          </p>
          <div className="materials-grid">
            <div className="material-card">
              <h4>PLA</h4>
              <p>Biodegradable, great for prototypes</p>
              <span className="material-price">From $0.15/g</span>
            </div>
            <div className="material-card">
              <h4>ABS</h4>
              <p>Durable, heat resistant</p>
              <span className="material-price">From $0.20/g</span>
            </div>
            <div className="material-card">
              <h4>PETG</h4>
              <p>Strong, chemical resistant</p>
              <span className="material-price">From $0.25/g</span>
            </div>
            <div className="material-card">
              <h4>TPU</h4>
              <p>Flexible, rubber-like</p>
              <span className="material-price">From $0.35/g</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
