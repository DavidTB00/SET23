import { Link, NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    // Hele den svarte linjen. CSS-en gjør den sticky
    <div className="nav">
      {/* Lokallagets logo og navn til venstre */}
      <Link to="/" className="nav__brand">
        {/* alt="" fordi navnet står i teksten ved siden av */}
        <img src="/nettside_bilder/Logo_Ostfold.png" alt="" />
      </Link>

      {/* Lenkene til høyre */}
      <nav className="nav__links">
        <NavLink to="/kurs">Kurs</NavLink>
        <NavLink to="/aktiviteter">Aktiviteter</NavLink>
        <NavLink to="/kontakt">Kontakt oss</NavLink>
      </nav>
    </div>
  )
}

export default Nav