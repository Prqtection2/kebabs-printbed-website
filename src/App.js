import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, Link, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';

// Modal Component
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'var(--color-bg)',
        padding: '2rem',
        borderRadius: '16px',
        maxWidth: '500px',
        width: '90%',
        maxHeight: '90vh',
        overflow: 'auto',
        position: 'relative',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: 'var(--color-text)'
          }}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

function Navbar({ scrollY }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId) => {
    if (location.pathname === '/') {
      // Already on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage first, then scroll to section
      navigate('/');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className={`navbar ${scrollY > 100 ? 'navbar-visible' : ''}`}>
      <div className="nav-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" className="nav-title" style={{ textDecoration: 'none' }}>KEBAB'S PRINTBED</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginLeft: 'auto' }}>
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link to="/">Home</Link>
            <button 
              onClick={() => handleSectionClick('about')}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'inherit', 
                cursor: 'pointer', 
                fontSize: 'inherit',
                fontFamily: 'inherit',
                padding: 0,
                textDecoration: 'none'
              }}
            >
              Our Company
            </button>
            <button 
              onClick={() => handleSectionClick('services')}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'inherit', 
                cursor: 'pointer', 
                fontSize: 'inherit',
                fontFamily: 'inherit',
                padding: 0,
                textDecoration: 'none'
              }}
            >
              Services
            </button>
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
            <input name="email" type="text" placeholder="Email or Phone Number" required style={{ padding: '0.8rem', borderRadius: 8, border: '1px solid var(--color-glass-border)', background: 'var(--color-glass)', color: 'var(--color-text)', fontSize: 16 }} />
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
            <input name="email" type="text" placeholder="Email or Phone Number" required style={{ padding: '0.8rem', borderRadius: 8, border: '1px solid var(--color-glass-border)', background: 'var(--color-glass)', color: 'var(--color-text)', fontSize: 16 }} />
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
      id: 1,
      name: 'Phone Stand',
      img: 'https://via.placeholder.com/120x120?text=Phone+Stand',
      desc: 'A sturdy 3D printed phone stand for your desk.',
      price: 14.99,
      colors: ['Black', 'White', 'Blue', 'Red'],
      addons: ['Non-slip base (+$2)', 'Cable management (+$3)']
    },
    {
      id: 2,
      name: 'Keychain',
      img: 'https://via.placeholder.com/120x120?text=Keychain',
      desc: 'Customizable keychain in various colors.',
      price: 9.99,
      colors: ['Black', 'White', 'Green', 'Red'],
      addons: ['Metal ring (+$1)', 'Name engraving (+$3)']
    },
    {
      id: 3,
      name: 'Cable Organizer',
      img: 'https://via.placeholder.com/120x120?text=Cable+Org',
      desc: 'Keep your cables tidy with this organizer.',
      price: 12.99,
      colors: ['Black', 'White', 'Gray'],
      addons: ['Extra slots (+$2)', 'Wall mount (+$3)']
    },
    {
      id: 4,
      name: 'Mini Planter',
      img: 'https://via.placeholder.com/120x120?text=Planter',
      desc: 'A cute mini planter for succulents.',
      price: 16.99,
      colors: ['White', 'Black', 'Green', 'Pink'],
      addons: ['Drainage holes (+$1)', 'Saucer (+$3)']
    },
    {
      id: 5,
      name: 'SD Card Holder',
      img: 'https://via.placeholder.com/120x120?text=SD+Holder',
      desc: 'Store your SD cards safely and neatly.',
      price: 11.99,
      colors: ['Black', 'White', 'Blue'],
      addons: ['Extra slots (+$2)', 'Dust cover (+$3)']
    },
  ];

  return (
    <div className="catalog-page" style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Navbar scrollY={101} />
      <div style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontFamily: 'Koulen, cursive', fontSize: '3rem', color: 'var(--color-highlight)', marginBottom: '2rem' }}>Premade Products Catalog</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', width: '100%' }}>
          {/* Suggest an idea card - at the beginning */}
          <Link 
            to="/contact" 
            className="product-card"
            style={{ 
              background: 'var(--color-accent)', 
              border: '1px solid var(--color-accent)', 
              borderRadius: 16, 
              padding: 24, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            <div style={{ width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 60, marginBottom: 16 }}>💡</div>
            <h2 style={{ fontFamily: 'Koulen, cursive', color: 'var(--color-bg)', fontSize: 20, margin: 0 }}>Suggest an Idea</h2>
            <p style={{ color: 'var(--color-bg)', textAlign: 'center', fontSize: 15, marginTop: 8, opacity: 0.9 }}>Have an idea for a new product? Let us know!</p>
          </Link>

          {products.map((p) => (
            <Link 
              key={p.id} 
              to={`/product/${p.id}`}
              className="product-card" 
              style={{ 
                background: 'var(--color-glass)', 
                border: '1px solid var(--color-glass-border)', 
                borderRadius: 16, 
                padding: 24, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <img src={p.img} alt={p.name} style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 12, marginBottom: 16 }} />
              <h2 style={{ fontFamily: 'Koulen, cursive', color: 'var(--color-highlight)', fontSize: 20, margin: 0 }}>{p.name}</h2>
              <p style={{ color: 'var(--color-text)', textAlign: 'center', fontSize: 15, marginTop: 8 }}>{p.desc}</p>
              <p style={{ color: 'var(--color-accent)', fontSize: 18, fontWeight: 'bold', marginTop: 8 }}>${p.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Example products (this should match the products in Catalog component)
  const products = [
    {
      id: 1,
      name: 'Phone Stand',
      img: 'https://via.placeholder.com/400x400?text=Phone+Stand',
      desc: 'A sturdy 3D printed phone stand for your desk.',
      price: 14.99,
      colors: ['Black', 'White', 'Blue', 'Red'],
      addons: ['Non-slip base (+$2)', 'Cable management (+$3)']
    },
    {
      id: 2,
      name: 'Keychain',
      img: 'https://via.placeholder.com/400x400?text=Keychain',
      desc: 'Customizable keychain in various colors.',
      price: 9.99,
      colors: ['Black', 'White', 'Green', 'Red'],
      addons: ['Metal ring (+$1)', 'Name engraving (+$3)']
    },
    {
      id: 3,
      name: 'Cable Organizer',
      img: 'https://via.placeholder.com/400x400?text=Cable+Org',
      desc: 'Keep your cables tidy with this organizer.',
      price: 12.99,
      colors: ['Black', 'White', 'Gray'],
      addons: ['Extra slots (+$2)', 'Wall mount (+$3)']
    },
    {
      id: 4,
      name: 'Mini Planter',
      img: 'https://via.placeholder.com/400x400?text=Planter',
      desc: 'A cute mini planter for succulents.',
      price: 16.99,
      colors: ['White', 'Black', 'Green', 'Pink'],
      addons: ['Drainage holes (+$1)', 'Saucer (+$3)']
    },
    {
      id: 5,
      name: 'SD Card Holder',
      img: 'https://via.placeholder.com/400x400?text=SD+Holder',
      desc: 'Store your SD cards safely and neatly.',
      price: 11.99,
      colors: ['Black', 'White', 'Blue'],
      addons: ['Extra slots (+$2)', 'Dust cover (+$3)']
    },
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    const orderDetails = {
      ...formData,
      product: product.name,
      color: selectedColor,
      addons: selectedAddons,
      totalPrice: calculateTotal()
    };

    try {
      const res = await fetch('https://formspree.io/f/mqabwrro', {
        method: 'POST',
        body: JSON.stringify(orderDetails),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      
      if (res.ok) {
        setSubmitted(true);
        setIsModalOpen(false);
        setTimeout(() => navigate('/catalog'), 2000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  const calculateTotal = () => {
    let total = product.price;
    selectedAddons.forEach(addon => {
      const price = parseFloat(addon.match(/\$(\d+)/)[1]);
      total += price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="product-detail-page" style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Navbar scrollY={101} />
      <div style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: 1200, margin: '0 auto' }}>
        {submitted && (
          <div style={{ 
            position: 'fixed', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            background: 'var(--color-glass)', 
            padding: '2rem', 
            borderRadius: '16px',
            textAlign: 'center',
            zIndex: 1000
          }}>
            <h2 style={{ color: 'var(--color-highlight)' }}>Thank you for your order!</h2>
            <p>We'll be reaching out shortly with final details.</p>
            <p style={{ color: 'var(--color-accent)' }}>Redirecting back to catalog...</p>
          </div>
        )}
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '4rem',
          padding: '2rem'
        }}>
          {/* Left side - Image */}
          <div style={{ 
            background: 'var(--color-glass)', 
            borderRadius: '16px', 
            padding: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img 
              src={product.img} 
              alt={product.name} 
              style={{ 
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                borderRadius: '8px'
              }} 
            />
          </div>

          {/* Right side - Product Info */}
          <div>
            <h1 style={{ 
              fontFamily: 'Koulen, cursive', 
              fontSize: '2.5rem', 
              color: 'var(--color-highlight)', 
              marginBottom: '1rem' 
            }}>
              {product.name}
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--color-text)', 
              marginBottom: '2rem' 
            }}>
              {product.desc}
            </p>
            <p style={{ 
              fontSize: '2rem', 
              color: 'var(--color-accent)', 
              fontWeight: 'bold', 
              marginBottom: '2rem' 
            }}>
              ${product.price.toFixed(2)}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--color-highlight)', marginBottom: '1rem' }}>Available Colors:</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {product.colors.map(color => (
                  <div key={color} style={{ color: 'var(--color-text)' }}>{color}</div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--color-highlight)', marginBottom: '1rem' }}>Optional Add-ons:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {product.addons.map(addon => (
                  <div key={addon} style={{ color: 'var(--color-text)' }}>{addon}</div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                background: 'var(--color-accent)',
                color: 'var(--color-bg)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                width: '100%',
                maxWidth: '300px'
              }}
            >
              Order Now
            </button>
          </div>
        </div>

        {/* Order Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 style={{ fontFamily: 'Koulen, cursive', color: 'var(--color-highlight)', marginBottom: '1.5rem' }}>
            Customize Your Order
          </h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-highlight)' }}>
                Your Name:
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '8px',
                  border: '1px solid var(--color-glass-border)',
                  background: 'var(--color-glass)',
                  color: 'var(--color-text)'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-highlight)' }}>
                Email or Phone Number:
              </label>
              <input
                type="text"
                required
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '8px',
                  border: '1px solid var(--color-glass-border)',
                  background: 'var(--color-glass)',
                  color: 'var(--color-text)'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-highlight)' }}>
                Select Color:
              </label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '8px',
                  border: '1px solid var(--color-glass-border)',
                  background: 'var(--color-glass)',
                  color: 'var(--color-text)'
                }}
              >
                <option value="">Choose a color</option>
                {product.colors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-highlight)' }}>
                Add-ons (Optional):
              </label>
              {product.addons.map(addon => (
                <div key={addon} style={{ marginBottom: '0.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)' }}>
                    <input
                      type="checkbox"
                      checked={selectedAddons.includes(addon)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedAddons([...selectedAddons, addon]);
                        } else {
                          setSelectedAddons(selectedAddons.filter(a => a !== addon));
                        }
                      }}
                    />
                    {addon}
                  </label>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--color-glass)', borderRadius: '8px' }}>
              <p style={{ color: 'var(--color-highlight)', fontSize: '1.2rem' }}>
                Total Price: ${calculateTotal()}
              </p>
            </div>

            <button
              type="submit"
              style={{
                marginTop: '1rem',
                padding: '1rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                background: 'var(--color-accent)',
                color: 'var(--color-bg)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Place Order
            </button>

            {error && (
              <p style={{ color: 'var(--color-danger)', marginTop: '1rem' }}>
                {error}
              </p>
            )}
          </form>
        </Modal>
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
              <span className="stat-number">50+</span>
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
              <Link to="/catalog" className="arrow-button" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="arrow">→</span>
              </Link>
            </div>
            <div className="feature-card">
              <h3>Order a Custom Print</h3>
              <p>Get your unique designs printed with our custom printing service</p>
              <Link to="/order" className="arrow-button" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="arrow">→</span>
              </Link>
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
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
