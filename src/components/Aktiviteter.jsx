import { useState } from 'react';
import './Aktiviteter.css';

function Aktiviteter() {
  const [valgtLokallag, setValgtLokallag] = useState('alle');
  const [sokTekst, setSokTekst] = useState('');

  const [aktivitetsListe] = useState([
    {
      id: 1,
      tittel: 'Åpen Strikkekafé',
      lokallag: 'fredrikstad',
      lokallagNavn: 'Fredrikstad Husflidslag',
      beskrivelse: 'Ta med deg strikketøyet eller hekletøyet og bli med på en hyggelig kveld',
      bilde: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
      tid: 'Annenhver mandag kl. 18:00 - 21:00',
      sted: 'Husflidstua, Fredrikstad',
      kontakt: 'Åpent for alle (Gratis/Enkel servering)'
    },
    {
      id: 2,
      tittel: 'Snekker- og Treverksted',
      lokallag: 'halden',
      lokallagNavn: 'Halden Husflidslag',
      beskrivelse: 'Åpent verksted for deg som vil jobbe med treprosjekter.',
      bilde: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
      tid: 'Hver onsdag kl. 17:00 - 20:00',
      sted: 'Halden Kulturhus, Verkstedet',
      kontakt: 'Ingen påmelding – bare å møte opp!'
    },
    {
      id: 3,
      tittel: 'Ung Husflid – Kveldsverksted',
      lokallag: 'fredrikstad',
      lokallagNavn: 'Fredrikstad Husflidslag',
      beskrivelse: 'Aktivitets kveld for barn og unge som ønsker å prøve seg på ulikt håndverk',
      bilde: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
      tid: 'Første torsdag i måneden kl. 17:00',
      sted: 'Husflidstua, Fredrikstad',
      kontakt: 'Passer for barn fra 8–15 år'
    }
  ]);

  // Filtrering basert på søk og lokallag
  const filtrerteAktiviteter = aktivitetsListe.filter(aktivitet => {
    const matcherLokallag = valgtLokallag === 'alle' || aktivitet.lokallag === valgtLokallag;
    const sokLower = sokTekst.toLowerCase();
    const matcherSok = 
      aktivitet.tittel.toLowerCase().includes(sokLower) ||
      aktivitet.beskrivelse.toLowerCase().includes(sokLower) ||
      aktivitet.sted.toLowerCase().includes(sokLower);

    return matcherLokallag && matcherSok;
  });

  return (
    <div className="aktiviteter-container">
      <div className="aktiviteter-header">
        <h1>Aktiviteter og faste møter</h1>
        <p>Bli med på våre åpne kvelder, temamøter og verksteder i lokallagene.</p>

        {/* Søkefelt */}
        <div className="sokefelt-container">
          <input 
            type="text"
            placeholder="Søk etter aktivitet, stikkord eller sted..."
            value={sokTekst}
            onChange={(e) => setSokTekst(e.target.value)}
            className="aktivitet-sok-input"
            aria-label="Søk etter aktivitet"
          />
        </div>

        {/* Filter-meny */}
        <div className="filter-meny">
          <button 
            onClick={() => setValgtLokallag('alle')} 
            className={`filter-btn ${valgtLokallag === 'alle' ? 'aktiv' : ''}`}>
            Alle lokallag
          </button>
          <button 
            onClick={() => setValgtLokallag('fredrikstad')} 
            className={`filter-btn ${valgtLokallag === 'fredrikstad' ? 'aktiv' : ''}`}>
            Fredrikstad
          </button>
          <button 
            onClick={() => setValgtLokallag('halden')} 
            className={`filter-btn ${valgtLokallag === 'halden' ? 'aktiv' : ''}`}>
            Halden
          </button>
        </div>
      </div>

      <div className="aktiviteter-grid">
        {filtrerteAktiviteter.length > 0 ? (
          filtrerteAktiviteter.map((aktivitet) => (
            <div key={aktivitet.id} className="aktivitet-kort">
              {aktivitet.bilde && (
                <div className="aktivitet-bilde-wrapper">
                  <img src={aktivitet.bilde} alt={aktivitet.tittel} />
                </div>
              )}

              <div className="aktivitet-kort-innhold">
                <div>
                  <span className="lokallag-tag">{aktivitet.lokallagNavn}</span>
                  <h2>{aktivitet.tittel}</h2>
                  <p className="aktivitet-beskrivelse">{aktivitet.beskrivelse}</p>

                  <div className="aktivitet-detaljer">
                    <p><strong>Når:</strong> {aktivitet.tid}</p>
                    <p><strong>Sted:</strong> {aktivitet.sted}</p>
                    <p><strong>Info:</strong> {aktivitet.kontakt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="ingen-treff">Ingen aktiviteter matcher søket ditt.</p>
        )}
      </div>
    </div>
  );
}

export default Aktiviteter;