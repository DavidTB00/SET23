<<<<<<< HEAD
import './Layout.css'
=======
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'

function Layout() {
  return (
    <>
      {/* Hvit header: scroller bort som vanlig */}
      <Header />

      {/* Svart nav: sticky. Må ligge som søsken til Header, ikke inni den,
          ellers har den ikke noe å "feste seg" mot når man scroller */}
      <Nav />

      {/* Her byttes innholdet ut avhengig av hvilken side man er på */}
      <Outlet />
    </>
  )
}

export default Layout
>>>>>>> 6785b471015811f900fbbb548e7b16081facac19
