import { Link, NavLink } from 'react-router-dom'
import './Nav.css'

function Nav({ brukerRolle, setBrukerRolle}) { 
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
        <NavLink to="/nyheter">Nyheter</NavLink>
        <NavLink to="/kontakt">Kontakt oss</NavLink>

        <div className="auth-section">
          {brukerRolle === 'gjest' && (
            <button onClick={() => setBrukerRolle('medlem')} className="btn-login">
                Logg inn/Register deg
            </button>
          )}

          {brukerRolle === 'medlem' && (
           <div className="medlem-logget-inn-container">
            <span className="medlem-rolle-tekst">Innlogget medlem</span>
            <button onClick={() => setBrukerRolle('admin')} className="btn-bytt-rolle">
              Bytt til Admin 
            </button>
            <button onClick={() => setBrukerRolle('gjest')} className="btn-logg-ut">
              Logg ut
            </button>
          </div>
        )}

        {brukerRolle === 'admin' && (
          <div className="admin-logget-inn-container">
            <span className="admin-rolle-tekst">Admin</span>
            <button onClick={() => setBrukerRolle('gjest')} className="btn-logg-ut">
              Logg ut
            </button>
          </div>
        )}
        </div>
      </nav>
    </div>
  )
}

export default Nav