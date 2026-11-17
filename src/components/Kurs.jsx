import { useState } from 'react';
import PåmeldingSkjema from './PåmeldingSkjema';
import './Kurs.css';

<<<<<<< HEAD
//Kobling til backend
//const API_URL = 'http://localhost:7070/api/kurs';

function Kurs() {
  const [valgtKursForPamelding, setValgtKursForPamelding] = useState(null);
  const [valgtLokallag, setValgtLokallag] = useState('alle');
  const [sokTekst, setSokTekst] = useState('');
// Henting av data
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
=======
function Kurs({ brukerRolle }) {
  const [kursListe, setKursListe] = useState([
    {
      id: 1,
      kursNavn: 'Tradisjonell Strikking',
      beskrivelse: 'Lær grunnleggende teknikker innen tradisjonell norsk strikking.',
      lokallag: 'fredrikstad',
      lokallagNavn: 'Fredrikstad Husflidslag',
      starttidspunkt: '2026-04-12 18:00',
      sluttidspunkt: '2026-04-12 21:00',
      sted: 'Husflidstua Fredrikstad',
      ordinarPris: '450',
      medlemspris: '350',
      antallPlasser: '12',
      pameldingsfrist: '2026-04-05 23:59',
      status: 'APEN'
    },
    {
      id: 2,
      kursNavn: 'Treskjæring for nybegynnere',
      beskrivelse: 'En introduksjon til verktøy og enkle teknikker i tre.',
      lokallag: 'halden',
      lokallagNavn: 'Halden Husflidslag',
      starttidspunkt: '2026-04-20 17:30',
      sluttidspunkt: '2026-04-20 20:30',
      sted: 'Halden',
      ordinarPris: '600',
      medlemspris: '500',
      antallPlasser: '8',
      pameldingsfrist: '2026-04-12 23:59',
      status: 'APEN'
    }
  ]);

  const [visSkjema, setVisSkjema] = useState(false);

  const [navn, setNavn] = useState('');
  const [dato, setDato] = useState('');
  const [klokkeslett, setKlokkeslett] = useState('');
  const [sted, setSted] = useState('');
  const [beskrivelse, setBeskrivelse] = useState('');
  const [ordinarPris, setOrdinarPris] = useState('');
  const [medlemsPris, setMedlemsPris] = useState('');
  const [antallPlasser, setAntallPlasser] = useState('');
  const [pameldingsfrist, setPameldingsfrist] = useState('');
  const [status, setStatus] = useState('APEN');

  const [valgtKursForPamelding, setValgtKursForPamelding] = useState(null);
  const [valgtLokallag, setValgtLokallag] = useState('alle');
  const [sokTekst, setSokTekst] = useState('');

  const håndterNyttKursInnlevering = (e) => {
    e.preventDefault();
    if (!navn) return;
>>>>>>> origin/marlen

    const nyttKurs = {
      id: Date.now(),
      kursNavn: navn,
      beskrivelse: beskrivelse || 'Ingen beskrivelse gitt.',
      lokallag: 'fredrikstad',
      lokallagNavn: 'Fredrikstad Husflidslag',
      starttidspunkt: dato && klokkeslett ? `${dato} ${klokkeslett}` : 'Etter avtale',
      sted: sted || 'Husflidstua',
      ordinarPris: ordinarPris || '1200',
      medlemspris: medlemsPris || '950',
      antallPlasser: antallPlasser || '10',
      pameldingsfrist: pameldingsfrist || '2026-12-31 23:59',
      status: status || 'APEN'
    };

    setKursListe((prev) => [...prev, nyttKurs]);

    setNavn('');
    setDato('');
    setKlokkeslett('');
    setBeskrivelse('');
    setSted('');
    setOrdinarPris('');
    setMedlemsPris('');
    setAntallPlasser('');
    setPameldingsfrist('');
    setStatus('APEN');
    setVisSkjema(false);
  };

  const filtrerteKurs = kursListe.filter((kurs) => {
    const matcherLokallag = valgtLokallag === 'alle' || kurs.lokallag === valgtLokallag;
    const sokLower = sokTekst.toLowerCase();
    const tittelEllerNavn = kurs?.kursNavn || '';
    const kursBeskrivelse = kurs?.beskrivelse || '';
    const kursSted = kurs?.sted || '';

    const matcherSok =
      tittelEllerNavn.toLowerCase().includes(sokLower) ||
      kursBeskrivelse.toLowerCase().includes(sokLower) ||
      kursSted.toLowerCase().includes(sokLower);

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

        {/* Legge til nye kurs. Vises kun om brukeren er innlogget som admin */}
        {brukerRolle === 'admin' && (
          <div className="admin-inline-kontroller">
            <button onClick={() => setVisSkjema(!visSkjema)} className="knapp-admin-handling">
              {visSkjema ? 'Avbryt' : '+ Legg til nytt kurs'}
            </button>
          </div>
        )}

        {/* Skjema for å legge til kurs direkte på siden */}
        {visSkjema && brukerRolle === 'admin' && (
          <form onSubmit={håndterNyttKursInnlevering} className="admin-inline-skjema">
            <h3>Legg til nytt kurs</h3>
            <div className="skjema-gruppe">
              <label>Kurstittel *</label>
              <input 
                type="text" 
                value={navn} 
                onChange={(e) => setNavn(e.target.value)} 
                placeholder="f.eks. Bunadskurs"
                required 
              />
            </div>
            <div className="skjema-gruppe">
              <label>Dato *</label>
              <input 
                type="date"
                value={dato}
                onChange={(e) => setDato(e.target.value)}
                required
              />
            </div>
            <div className="skjema-gruppe">
              <label>Klokkeslett *</label>
              <input 
                type="time"
                value={klokkeslett}
                onChange={(e) => setKlokkeslett(e.target.value)}
                required
              />
            </div>
            <div className="skjema-gruppe">
              <label>Sted *</label>
              <input 
                type="text" 
                value={sted} 
                onChange={(e) => setSted(e.target.value)} 
                placeholder="f.eks. Husflidstua" 
                required 
              />
            </div>
            <div className="skjema-gruppe">
              <label>Beskrivelse</label>
              <textarea 
                value={beskrivelse} 
                onChange={(e) => setBeskrivelse(e.target.value)} 
                placeholder="Skriv kort om kurset..." 
              />
            </div>
            <div className="skjema-gruppe">
              <label>Ordinær pris</label>
              <input 
                type="text" 
                value={ordinarPris} 
                onChange={(e) => setOrdinarPris(e.target.value)} 
                placeholder="f.eks. 1200" 
              />
            </div>
            <div className="skjema-gruppe">
              <label>Medlemspris</label>
              <input 
                type="text" 
                value={medlemsPris} 
                onChange={(e) => setMedlemsPris(e.target.value)} 
                placeholder="f.eks. 950" 
              />
            </div>
            <div className="skjema-gruppe">
              <label>Antall plasser</label>
              <input 
                type="text" 
                value={antallPlasser} 
                onChange={(e) => setAntallPlasser(e.target.value)} 
                placeholder="f.eks. 10" 
              />
            </div>
            <div className="skjema-gruppe">
              <label>Påmeldingsfrist</label>
              <input 
                type="datetime-local" 
                value={pameldingsfrist} 
                onChange={(e) => setPameldingsfrist(e.target.value)} 
              />
            </div>
            <div className="skjema-gruppe">
              <label>Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="APEN">Åpen</option>
                <option value="Lukket">Lukket</option>
              </select>
            </div>
            <button type="submit" className="knapp-publiser">Publiser kurs</button>
          </form>
        )}

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
              {kurs.bilde && (
                <div className="kurs-bilde-wrapper">
                  <img src={kurs.bilde} alt={kurs.kursNavn} />
                </div>
              )}

              <div className="kurs-kort-innhold">
                <div>
                  <span className="lokallag-tag">{kurs.lokallagNavn || 'Østfold Husflidslag'}</span>
                  <h2>{kurs.kursNavn}</h2>
                  <p className="kurs-beskrivelse">{kurs.beskrivelse}</p>

                  <div className="kurs-detaljer">
                    <p>
                      <strong>Dato/Tid:</strong> {kurs.starttidspunkt}
                    </p>
                    <p>
                      <strong>Sted:</strong> {kurs.sted}
                    </p>
                    <p>
                      <strong>Pris:</strong> {kurs.ordinarPris} kr
                      {kurs.medlemspris && (
                        <span className="Medlemspris-tekst"> (Medlemspris: {kurs.medlemspris} kr)</span>
                      )}
                    </p>
                    {kurs.antallPlasser && (
                      <p><strong>Antall ledige plasser:</strong> {kurs.antallPlasser}</p>
                    )}
                    {kurs.pameldingsfrist && (
                      <p><strong>Påmeldingsfrist:</strong> {kurs.pameldingsfrist}</p>
                    )}
                    {kurs.status && (
                      <p><strong>Status:</strong> {kurs.status}</p>
                    )}

                    {(brukerRolle === 'medlem' || brukerRolle === 'admin') && (
                      <p className="medlems-info">
                        * Medlemsfordel aktiv: Du får medlemspris på dette kurset.
                      </p>
                    )}
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
          <p className="ingen-treff">Ingen treff.</p>
        )}
      </div>
    </div>
  );
}

export default Kurs;