import { useState } from 'react';
import PåmeldingSkjema from './PåmeldingSkjema';
import './Kurs.css';

function Kurs() {
  const [valgtKursForPamelding, setValgtKursForPamelding] = useState(null);
  const [valgtLokallag, setValgtLokallag] = useState('alle');
  const [sokTekst, setSokTekst] = useState('');

  const [kursListe] = useState([
    {
      id: 1,
      tittel: 'Nybegynnerkurs i Veving',
      lokallag: 'fredrikstad',
      lokallagNavn: 'Fredrikstad Husflidslag',
      beskrivelse: 'Lær grunnleggende teknikker innen veving.',
      bilde: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&w=800&q=80',
      tid: 'Tirsdager kl. 18:00 - 21:00 (Oppstart 20. okt)',
      sted: 'Husflidstua, Fredrikstad',
      pris: '1500 kr (medlem) / 1800 kr (ikke-medlem)'
    },
    {
      id: 2,
      tittel: 'Bunadskurs',
      lokallag: 'halden',
      lokallagNavn: 'Halden Husflidslag',
      beskrivelse: 'Lær å sy bunad',
      bilde: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
      tid: 'Lørdag og Søndag kl. 10:00 - 16:00',
      sted: 'Halden Kulturhus',
      pris: '1200 kr'
    },
    {
      id: 3,
      tittel: 'Tradisjonell Bunadsøm',
      lokallag: 'fredrikstad',
      lokallagNavn: 'Fredrikstad Husflidslag',
      beskrivelse: 'Få veiledning i montering og brodering av østfoldbunad.',
      bilde: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
      tid: 'Torsdager kl. 17:30 - 20:30',
      sted: 'Husflidstua, Fredrikstad',
      pris: '2000 kr'
    }
  ]);

  const filtrerteKurs = kursListe.filter(kurs => {
    const matcherLokallag = valgtLokallag === 'alle' || kurs.lokallag === valgtLokallag;
    const sokLower = sokTekst.toLowerCase();
    const matcherSok = 
      kurs.tittel.toLowerCase().includes(sokLower) ||
      kurs.beskrivelse.toLowerCase().includes(sokLower) ||
      kurs.sted.toLowerCase().includes(sokLower);

    return matcherLokallag && matcherSok;
  });

  return (
    <div className="kurs-container">
      {valgtKursForPamelding && (
        <PåmeldingSkjema 
          kurs={valgtKursForPamelding} 
          onClose={() => setValgtKursForPamelding(null)} 
        />
      )}

      <div className="kurs-header">
        <h1>Våre kurs</h1>
        <p>Velg lokallag eller søk etter kurs som passer for deg.</p>

        <div className="sokefelt-container">
          <input 
            type="text"
            placeholder="Søk etter kurs, stikkord eller sted..."
            value={sokTekst}
            onChange={(e) => setSokTekst(e.target.value)}
            className="kurs-sok-input"
            aria-label="Søk etter kurs"
          />
        </div>

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

      <div className="kurs-grid">
        {filtrerteKurs.length > 0 ? (
          filtrerteKurs.map((kurs) => (
            <div key={kurs.id} className="kurs-kort">
              {/* Bilde på toppen av kortet */}
              {kurs.bilde && (
                <div className="kurs-bilde-wrapper">
                  <img src={kurs.bilde} alt={kurs.tittel} />
                </div>
              )}

              <div className="kurs-kort-innhold">
                <div>
                  <span className="lokallag-tag">{kurs.lokallagNavn}</span>
                  <h2>{kurs.tittel}</h2>
                  <p className="kurs-beskrivelse">{kurs.beskrivelse}</p>

                  <div className="kurs-detaljer">
                    <p><strong>Tid:</strong> {kurs.tid}</p>
                    <p><strong>Sted:</strong> {kurs.sted}</p>
                    <p><strong>Pris:</strong> {kurs.pris}</p>
                  </div>
                </div>

                <button 
                  className="meld-deg-på-knapp"
                  onClick={() => setValgtKursForPamelding(kurs)}
                >
                  Meld deg på
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="ingen-treff">Ingen kurs matcher søket ditt.</p>
        )}
      </div>
    </div>
  );
}

export default Kurs;