import { Link, NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    // Sticky header
    <div className="nav">
      {/* Lokallagets logo og navn til venstre */}
      <Link to="/" className="navPicture">
        {/* alt="" fordi navnet står i teksten ved siden av */}
        <img src="/nettside_bilder/Logo_Ostfold.png" alt="" />
      </Link>

      {/* Lenkene til andre sider */}
      <nav className="navLinks">
        <NavLink to="/kurs">Kurs</NavLink>
        <NavLink to="/aktiviteter">Aktiviteter</NavLink>
        <NavLink to="/kontakt">Kontakt oss</NavLink>
      </nav>
    </div>
  )
}

export default Nav