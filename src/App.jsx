import { useState } from 'react';
import './App.css';
import './kurs.jsx';

<head>
  <title>Østfold Husflidslag</title>
</head>

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aktivSide,setAktivSide] = useState('Hjem');

return (
    <div className="site-wrapper">
      <header className="main-header">
          <div className="brand">
            <div className="brand-text">
              <strong>Østfold</strong>
              <span>Husflidslag</span>
            </div>
          </div>

    <button 
    className="mobile-toggle"
    onClick={()=> setMenuOpen(!menuOpen)}
    aria-label="Meny">
    </button>

   <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
      <button onClick={() => setAktivSide('Hjem')}>Hjem</button>
      <button onClick={() => setAktivSide('Kurs')}>Kurs</button>
      <button onClick={() => setAktivSide('Lokallag')}>Lokallag</button>
      <button onClick={() => setAktivSide('Aktiviteter')}>Aktiviteter</button>
      <button onClick={() => setAktivSide('Kontakt')}>Kontakt oss</button>
    </nav>
      </header>

  <section className="hero-section">
    <div className="overlay">
      <h1>Velkommen til Østfold Husflidslag</h1>
    </div>
  </section>

    <main className="main-container">
      {aktivSide === 'Hjem' && (
        <div>
      <h2 className="section-title">Hva ønsker du å finne i dag?</h2>
      </div>
      )}
      <div className="cards-grid">
        <div className="card">
          <h3>Kurs</h3>
          <p>Se alle våre kurs i strikk, vev og broderi. Vi har kurs for alle nivåer.</p>
        </div>
      </div>
        
      <div className="card">
        <h3>Lokallag</h3>
        <p>Finn ditt lokale husflidslag</p>
      </div>

        <div className="card">
        <h3>Aktiviteter</h3>
        <p>Se alle våre aktiviteter</p>
      </div>

      <div className="card">
        <h3>Kontakt oss</h3>
        <p>Kontakt oss gjerne om du lurer på noe!</p>
      </div>
      </main>
      <footer className="footer">
        <p>Østfold Husflidslag</p>
      </footer>
    </div>
  );
}