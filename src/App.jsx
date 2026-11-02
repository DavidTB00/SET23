import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Kurs from './components/Kurs'
import Kontakt from './components/Kontakt'
import Lokallag from './components/Lokallag'
import Aktiviteter from './components/Aktiviteter'
import Nyheter from './components/Nyheter'
import './App.css'

function App() {
  return (
    <Routes>
      {/* Layout er rammen (header + nav) rundt alle sidene */}
      <Route path="/" element={<Layout />}>
        {/* index = siden som vises på "/" */}
        <Route index element={<Home />} />

        {/* Tomme sider, bare en overskrift så man kan klikke seg rundt */}
        <Route path="kurs" element={<Kurs />} />
        <Route path="aktiviteter" element={<Aktiviteter />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="/lokallag" element={<Lokallag />} />
        <Route path="nyheter" element={<Nyheter />} />

        {/* "*" fanger opp alle adresser som ikke finnes */}
        <Route path="*" element={<h1>Siden finnes ikke</h1>} />
      </Route>
    </Routes>
  )
}

export default App