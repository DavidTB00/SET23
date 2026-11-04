import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Kurs from './components/Kurs'
import Kontakt from './components/Kontakt'
import Lokallag from './components/Lokallag'
import Aktiviteter from './components/Aktiviteter'
import Nyheter from './components/Nyheter'
import Admin from './components/Admin'
import './App.css'

function App() {
  const [kursListe, setKursListe] = useState(() => {
    const lagredeKurs = localStorage.getItem('ostfold_husflid_kurs');
    return lagredeKurs ? JSON.parse(lagredeKurs) : [];
  });

  useEffect(() => {
    localStorage.setItem('ostfold_husflid_kurs', JSON.stringify(kursListe));
  }, [kursListe]);

  const håndterLeggTilKurs = (nyttKurs) => {
    setKursListe([nyttKurs, ...kursListe]);
  };
  return (
    <Routes>
      {/* Layout er rammen (header + nav) rundt alle sidene */}
      <Route path="/" element={<Layout />}>
        {/* index = siden som vises på "/" */}
        <Route index element={<Home />} />

        <Route path="kurs" element={<Kurs />} />
        <Route path="aktiviteter" element={<Aktiviteter />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="lokallag" element={<Lokallag />} />
        <Route path="nyheter" element={<Nyheter />} />

        {/* Legger til en egen rute til admin */}
        <Route path='admin' element={<Admin onLeggTilKurs={håndterLeggTilKurs} />} />

        {/* "*" fanger opp alle adresser som ikke finnes */}
        <Route path="*" element={<h1>Siden finnes ikke</h1>} />
      </Route>
    </Routes>
  )
}

export default App