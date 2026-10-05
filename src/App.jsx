import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import './App.css'

function App() {
  return (
    <Routes>
      {/* Layout er rammen (header + nav) rundt alle sidene */}
      <Route path="/" element={<Layout />}>
        {/* index = siden som vises på "/" */}
        <Route index element={<Home />} />

        {/* Tomme sider, bare en overskrift så man kan klikke seg rundt */}
        <Route path="kurs" element={<h1>Kurs</h1>} />
        <Route path="aktiviteter" element={<h1>Aktiviteter</h1>} />
        <Route path="kontakt" element={<h1>Kontakt oss</h1>} />
        <Route path="lokallag" element={<h1>Finn Lokallag</h1>} />

        {/* "*" fanger opp alle adresser som ikke finnes */}
        <Route path="*" element={<h1>Siden finnes ikke</h1>} />
      </Route>
    </Routes>
  )
}

export default App