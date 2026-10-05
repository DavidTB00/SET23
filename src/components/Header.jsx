import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      {/* Logo + navn. Bildet ligger i public/, så stien starter med / */}
      <Link to="/" className="header__brand">
        <img src="/nettside_bilder/NH_logo_standard.jpg" alt="Norges Husflidslag" />
      </Link>

      {/* Midtdelen: meny, lenker og "Bli medlem" */}
      <nav className="header__nav">
        <button className="header__menu">Meny</button>

        {/* NavLink gir automatisk klassen "active" på siden man er på */}
        <NavLink to="/lokallag">NH der du er</NavLink>
        <NavLink to="/kurs">Kurs og opplæring</NavLink>
        <NavLink to="/aktiviteter">Fagsider</NavLink>

        {/* Den røde knappen */}
        <Link to="/kontakt" className="header__cta">Bli medlem</Link>
      </nav>

      {/* Grå boks til høyre, bare tekst foreløpig */}
      <div className="header__tools">
        <Link to="/kontakt">Søk</Link>
        <Link to="/kontakt">Nettbutikk</Link>
        <Link to="/kontakt">Min side</Link>
      </div>
    </header>
  )
}

export default Header