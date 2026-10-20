import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <main>
      {/* Hero: stort bilde med tekst oppå.
          Bildet ligger i public/, så stien starter med / */}
      <section
        className="hero"
        style={{ backgroundImage: "url('/nettside_bilder/hero.jpg')" }}
      >
        <h1>Velkommen til<br />Østfold Husflidslag</h1>
      </section>

      <section className="finder">
        {/* Overskrift med rød strek under */}
        <h2 className="title">Hva ønsker du å finne i dag?</h2>

        <div className="cards">
          {/* Kort 1. Hele kortet er en lenke */}
          <Link to="/kurs" className="card">
            <h3>Kurs</h3>
            <p>Se alle våre kurs i strikk, vev og broderi og mer. Vi har kurs til alle nivåer</p>
          </Link>

          {/* Kort 2 */}
          <Link to="/lokallag" className="card">
            <h3>Finn Lokallag</h3>
            <p>Finn lokallaget du tilhører!</p>
          </Link>

          {/* Kort 3 */}
           <Link to="/aktiviteter" className="card">
            <h3>Aktiviteter</h3>
            <p>Se alle våre aktiviteter. Alle er velkomne!</p>
          </Link>

          {/* Kort 4 */}
           <Link to="/nyheter" className="card">
            <h3>Nyheter og artikler</h3>
            <p>Her oppdaterer vi om siste nytt og nyttige artikler</p>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home