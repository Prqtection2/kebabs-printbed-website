import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Navbar({ scrollY }) {
  return (
    <nav className={`navbar ${scrollY > 100 ? 'navbar-visible' : ''}`}>
      <div className="nav-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" className="nav-title" style={{ textDecoration: 'none' }}>KEBAB'S PRINTBED</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginLeft: 'auto' }}>
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link to="/">Home</Link>
            <a href="#about">Our Company</a>
            <a href="#services">Services</a>
            <Link to="/catalog">Catalog</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <Link to="/order" className="order-now-btn" style={{ marginLeft: '2rem', padding: '0.6rem 1.4rem', borderRadius: 8, background: 'var(--color-accent)', color: 'var(--color-bg)', fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', transition: 'background 0.2s' }}>
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

function AboutUs() {
  return (
    <div className="aboutus-page" style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Navbar scrollY={101} />
      <div style={{ paddingTop: '120px', maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontFamily: 'Koulen, cursive', fontSize: '3rem', color: 'var(--color-highlight)', marginBottom: '2rem' }}>About Us</h1>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
          {/* Founder */}
          <div className="profile-card" style={{ background: 'var(--color-glass)', border: '1px solid var(--color-glass-border)', borderRadius: 16, padding: 32, minWidth: 260, maxWidth: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--color-secondary)', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, color: 'var(--color-highlight)' }}>👤</div>
            <h2 style={{ fontFamily: 'Koulen, cursive', color: 'var(--color-highlight)', fontSize: 24, margin: 0 }}>Alex</h2>
            <h3 style={{ color: 'var(--color-accent)', fontSize: 18, margin: '8px 0' }}>Founder</h3>
            <p style={{ color: 'var(--color-text)', textAlign: 'center', fontSize: 15 }}>Visionary behind Kebab's Printbed. Loves 3D printing and kebabs. Leads the team with passion and innovation.</p>
          </div>
          {/* Marketing */}
          <div className="profile-card" style={{ background: 'var(--color-glass)', border: '1px solid var(--color-glass-border)', borderRadius: 16, padding: 32, minWidth: 260, maxWidth: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--color-secondary)', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, color: 'var(--color-highlight)' }}>👩‍💼</div>
            <h2 style={{ fontFamily: 'Koulen, cursive', color: 'var(--color-highlight)', fontSize: 24, margin: 0 }}>Jamie</h2>
            <h3 style={{ color: 'var(--color-accent)', fontSize: 18, margin: '8px 0' }}>Marketing</h3>
            <p style={{ color: 'var(--color-text)', textAlign: 'center', fontSize: 15 }}>Spreads the word and builds the brand. Social media wizard and customer connection expert.</p>
          </div>
          {/* Web Development */}
          <div className="profile-card" style={{ background: 'var(--color-glass)', border: '1px solid var(--color-glass-border)', borderRadius: 16, padding: 32, minWidth: 260, maxWidth: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--color-secondary)', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, color: 'var(--color-highlight)' }}>💻</div>
            <h2 style={{ fontFamily: 'Koulen, cursive', color: 'var(--color-highlight)', fontSize: 24, margin: 0 }}>Morgan</h2>
            <h3 style={{ color: 'var(--color-accent)', fontSize: 18, margin: '8px 0' }}>Web Development</h3>
            <p style={{ color: 'var(--color-text)', textAlign: 'center', fontSize: 15 }}>Builds and maintains the website. Makes sure everything looks and works perfectly online.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/mqabwrro', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => navigate('/'), 2000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="contact-page" style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Navbar scrollY={101} />
      <div style={{ paddingTop: '120px', maxWidth: 600, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontFamily: 'Koulen, cursive', fontSize: '3rem', color: 'var(--color-highlight)', marginBottom: '2rem' }}>Contact Us</h1>
        {submitted ? (
          <div style={{ color: 'var(--color-highlight)', fontSize: 20, margin: '2rem 0' }}>
            Thank you! We'll be reaching out shortly.<br />Redirecting to homepage…
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
            <input name="name" type="text" placeholder="Your Name" required style={{ padding: '0.8rem', borderRadius: 8, border: '1px solid var(--color-glass-border)', background: 'var(--color-glass)', color: 'var(--color-text)', fontSize: 16 }} />
            <input name="email" type="email" placeholder="Your Email" required style={{ padding: '0.8rem', borderRadius: 8, border: '1px solid var(--color-glass-border)', background: 'var(--color-glass)', color: 'var(--color-text)', fontSize: 16 }} />
            <textarea name="message" placeholder="Your Message" rows={5} required style={{ padding: '0.8rem', borderRadius: 8, border: '1px solid var(--color-glass-border)', background: 'var(--color-glass)', color: 'var(--color-text)', fontSize: 16, resize: 'vertical' }} />
            <button type="submit" style={{ padding: '0.8rem', borderRadius: 8, border: 'none', background: 'var(--color-accent)', color: 'var(--color-bg)', fontWeight: 700, fontSize: 16, cursor: 'pointer', transition: 'background 0.2s' }}>Send Message</button>
            {error && <div style={{ color: 'var(--color-danger)', marginTop: 8 }}>{error}</div>}
          </form>
        )}
        <div style={{ textAlign: 'center', color: 'var(--color-highlight)' }}>
          <p>Email: <a href="mailto:Kebabsprintbed@gmail.com" style={{ color: 'var(--color-accent)' }}>Kebabsprintbed@gmail.com</a></p>
          <p>Phone: <a href="tel:+18327367551" style={{ color: 'var(--color-accent)' }}>+1 (832) 736-7551</a></p>
          <p>Location: Pearland, TX, US</p>
        </div>
      </div>
    </div>
  );
}

function OrderNow() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/mqabwrro', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => navigate('/'), 2000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="order-page" style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Navbar scrollY={101} />
      <div style={{ paddingTop: '120px', maxWidth: 600, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontFamily: 'Koulen, cursive', fontSize: '3rem', color: 'var(--color-highlight)', marginBottom: '2rem' }}>Place Your Order</h1>
        {submitted ? (
          <div style={{ color: 'var(--color-highlight)', fontSize: 20, margin: '2rem 0' }}>
            Thank you! We'll be reaching out shortly.<br />Redirecting to homepage…
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
            <input name="name" type="text" placeholder="Your Name" required style={{ padding: '0.8rem', borderRadius: 8, border: '1px solid var(--color-glass-border)', background: 'var(--color-glass)', color: 'var(--color-text)', fontSize: 16 }} />
            <input name="email" type="email" placeholder="Your Email" required style={{ padding: '0.8rem', borderRadius: 8, border: '1px solid var(--color-glass-border)', background: 'var(--color-glass)', color: 'var(--color-text)', fontSize: 16 }} />
            <textarea name="orderDetails" placeholder="Describe your 3D print order (dimensions, material, etc.)" rows={5} required style={{ padding: '0.8rem', borderRadius: 8, border: '1px solid var(--color-glass-border)', background: 'var(--color-glass)', color: 'var(--color-text)', fontSize: 16, resize: 'vertical' }} />
            <button type="submit" style={{ padding: '0.8rem', borderRadius: 8, border: 'none', background: 'var(--color-accent)', color: 'var(--color-bg)', fontWeight: 700, fontSize: 16, cursor: 'pointer', transition: 'background 0.2s' }}>Submit Order</button>
            {error && <div style={{ color: 'var(--color-danger)', marginTop: 8 }}>{error}</div>}
          </form>
        )}
        <div style={{ textAlign: 'center', color: 'var(--color-highlight)' }}>
          <p>We'll review your order and get back to you with a quote!</p>
        </div>
      </div>
    </div>
  );
}

function Catalog() {
  // Example products (replace with real ones as needed)
  const products = [
    {
      name: 'Phone Stand',
      img: 'https://via.placeholder.com/120x120?text=Phone+Stand',
      desc: 'A sturdy 3D printed phone stand for your desk.'
    },
    {
      name: 'Keychain',
      img: 'https://via.placeholder.com/120x120?text=Keychain',
      desc: 'Customizable keychain in various colors.'
    },
    {
      name: 'Cable Organizer',
      img: 'https://via.placeholder.com/120x120?text=Cable+Org',
      desc: 'Keep your cables tidy with this organizer.'
    },
    {
      name: 'Mini Planter',
      img: 'https://via.placeholder.com/120x120?text=Planter',
      desc: 'A cute mini planter for succulents.'
    },
    {
      name: 'SD Card Holder',
      img: 'https://via.placeholder.com/120x120?text=SD+Holder',
      desc: 'Store your SD cards safely and neatly.'
    },
  ];
  return (
    <div className="catalog-page" style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Navbar scrollY={101} />
      <div style={{ paddingTop: '120px', maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontFamily: 'Koulen, cursive', fontSize: '3rem', color: 'var(--color-highlight)', marginBottom: '2rem' }}>Premade Products Catalog</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', width: '100%' }}>
          {products.map((p, i) => (
            <div key={i} className="product-card" style={{ background: 'var(--color-glass)', border: '1px solid var(--color-glass-border)', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
              <img src={p.img} alt={p.name} style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 12, marginBottom: 16 }} />
              <h2 style={{ fontFamily: 'Koulen, cursive', color: 'var(--color-highlight)', fontSize: 20, margin: 0 }}>{p.name}</h2>
              <p style={{ color: 'var(--color-text)', textAlign: 'center', fontSize: 15, marginTop: 8 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MainApp() {
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
      <Navbar scrollY={scrollY} />

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
          <h2 className="section-title">Our Company</h2>
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
            From rapid prototyping to high-quality parts, we offer comprehensive 3D printing solutions.
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
              <h3>High-Quality Parts</h3>
              <p>Precision manufacturing for end-use and functional parts</p>
              <ul className="service-features">
                <li>Consistent quality</li>
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
      {/* ... existing code ... */}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<OrderNow />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}
