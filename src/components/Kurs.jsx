import { useState, useEffect } from 'react';
import PåmeldingSkjema from './PåmeldingSkjema';
import './Kurs.css';

// Adressen til backend
const API_URL = 'http://localhost:7070/api/kurs';

function Kurs() {
  const [valgtKursForPamelding, setValgtKursForPamelding] = useState(null);
  const [valgtSted, setValgtSted] = useState('alle');
  const [sokTekst, setSokTekst] = useState('');

  // Data fra backend
  const [kursListe, setKursListe] = useState([]);
  const [laster, setLaster] = useState(true);
  const [feil, setFeil] = useState(null);

  // Henter kurs én gang når siden vises
  useEffect(() => {
    fetch(API_URL)
      .then((svar) => {
        if (!svar.ok) throw new Error('Serveren svarte ' + svar.status);
        return svar.json();
      })
      .then((data) => setKursListe(data))
      .catch((e) => setFeil(e.message))
      .finally(() => setLaster(false));
  }, []);

  // Unike steder til filterknappene
  const steder = [...new Set(kursListe.map((k) => k.sted))];

  // Filtrerer på sted og søk
  const filtrerteKurs = kursListe.filter((kurs) => {
    const matcherSted = valgtSted === 'alle' || kurs.sted === valgtSted;
    const sok = sokTekst.toLowerCase();
    const matcherSok =
      kurs.kursNavn.toLowerCase().includes(sok) ||
      (kurs.beskrivelse ?? '').toLowerCase().includes(sok) ||
      kurs.sted.toLowerCase().includes(sok);
    return matcherSted && matcherSok;
  });

  // Gjør dato leselig
  const formaterTid = (iso) =>
    new Date(iso).toLocaleString('nb-NO', {
      day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit',
    });

  if (laster) return <p className="ingen-treff">Laster kurs...</p>;
  if (feil) return <p className="ingen-treff">Kunne ikke hente kurs: {feil}</p>;

  return (
    <main className="kurs-container">
      {/* Påmeldingsvindu */}
      {valgtKursForPamelding && (
        <PåmeldingSkjema kurs={valgtKursForPamelding} onClose={() => setValgtKursForPamelding(null)}/>
      )}

      <header className="kurs-header">
        <h1>Våre kurs</h1>
        <p>Velg sted eller søk etter kurs som passer for deg.</p>

        {/* Søk */}
        <form className="sokefelt-container" role="search" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Søk etter kurs, stikkord eller sted..." value={sokTekst} onChange={(e) => setSokTekst(e.target.value)} className="kurs-sok-input" aria-label="Søk etter kurs"/>
        </form>

        {/* Filter på sted */}
        <section className="filter-meny" aria-label="Filtrer på sted">
          <button onClick={() => setValgtSted('alle')} className={`filter-btn ${valgtSted === 'alle' ? 'aktiv' : ''}`}>Alle steder</button>
          {steder.map((sted) => (
            <button key={sted} onClick={() => setValgtSted(sted)} className={`filter-btn ${valgtSted === sted ? 'aktiv' : ''}`}> {sted}</button>
          ))}
        </section>
      </header>

      {/* Kurskortene */}
      <section className="kurs-grid">
        {filtrerteKurs.length > 0 ? (
          filtrerteKurs.map((kurs) => (
            <article key={kurs.gjennomforingId} className="kurs-kort">
              <section className="kurs-kort-innhold">
                <header>
                  <span className="lokallag-tag">{kurs.status}</span>
                  <h2>{kurs.kursNavn}</h2>
                  {kurs.beskrivelse && (
                    <p className="kurs-beskrivelse">{kurs.beskrivelse}</p>
                  )}
                </header>

                <dl className="kurs-detaljer">
                  <dt>Tid:</dt>
                  <dd>{formaterTid(kurs.starttidspunkt)}</dd>
                  <dt>Sted:</dt>
                  <dd>{kurs.sted}</dd>
                  <dt>Pris:</dt>
                  <dd>{kurs.ordinarPris} kr (medlem {kurs.medlemspris} kr)</dd>
                  <dt>Ledige plasser:</dt>
                  <dd>{kurs.antallPlasser}</dd>
                </dl>

                <button className="meld-deg-på-knapp" onClick={() => setValgtKursForPamelding(kurs)}>Meld deg på</button>
              </section>
            </article>
          ))
        ) : (
          <p className="ingen-treff">Ingen kurs matcher søket ditt.</p>
        )}
      </section>
    </main>
  );
}

export default Kurs;