import { useState } from 'react';
import './Nyheter.css';

function Nyheter() {
  const [AktivNyhet, setAktivNyhet] = useState(null);
  const [valgtLag, setValgtLag] = useState('alle');

  const [nyhetsListe] = useState([
    {
      id: 1,
      tittel: 'Vellykket fylkesårsmøte i Sarpsborg',
      lokallag: 'fylkeslaget',
      lokallagNavn: 'Østfold Husflidslag',
      dato: '12. oktober 2026',
      bilde: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80',
      ingress: 'Takk til alle som møtte opp til årsmøtet! Vi diskuterte nye spennende prosjekter for det kommende året.',
      brødtekst: [
        'Takk til alle som møtte opp til fylkesårsmøtet i Sarpsborg! Det var et fantastisk oppmøte med representanter fra alle lokallagene i Østfold.',
        'I løpet av helgen diskuterte vi nye spennende prosjekter for det kommende året, delte ut hederspriser for lang og tro tjeneste, og la en konkret plan for økt rekruttering av yngre håndverkere.',
        'Vi ser frem til et innholdsrikt år med masse skaperglede og gode møteplasser på tvers av kommunene våre!'
      ]
    },
    {
      id: 2,
      tittel: 'Nye kurs i høst – påmeldingen er åpen',
      lokallag: 'fredrikstad',
      lokallagNavn: 'Fredrikstad Husflidslag',
      dato: '5. oktober 2026',
      bilde: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&w=1000&q=80',
      ingress: 'Fredrikstad Husflidslag har satt opp et variert program for høsten med kurs i veving, søm og mer.',
      brødtekst: [
        'Fredrikstad Husflidslag har gleden av å presentere et variert kurs- og aktivitetsprogram for høstsemesteret.',
        'Vi tilbyr alt fra tradisjonell bunadsøm til moderne veveteknikker og nybegynnerkurs i strikking. Kursene holdes i våre lokaler på Husflidstua, og det er begrenset antall plasser på hvert kurs for å sikre god oppfølging fra instruktør.',
        'Gå inn på vår kursside for å melde deg på allerede i dag!'
      ]
    }
  ]);

  const filtrerteNyheter = valgtLag === 'alle'
    ? nyhetsListe
    : nyhetsListe.filter(nyhet => nyhet.lokallag === valgtLag || nyhet.lokallag === 'fylkeslaget');

  // HVIS EN NYHET ER VALGT: Vis den enkle, ryddige artikkelsiden
  if (AktivNyhet) {
    return (
      <div className="nyhet-artikkel-container">
        <button 
          className="tilbake-knapp" 
          onClick={() => setAktivNyhet(null)}
        >
          ← Tilbake til alle nyheter
        </button>

        <article className="nyhet-artikkel">
          <div className="artikkel-header">
            <span className="lokallag-tag">{AktivNyhet.lokallagNavn}</span>
            <span className="artikkel-dato">{AktivNyhet.dato}</span>
            <h1>{AktivNyhet.tittel}</h1>
            <p className="artikkel-ingress">{AktivNyhet.ingress}</p>
          </div>

          {AktivNyhet.bilde && (
            <div className="artikkel-bilde-wrapper">
              <img src={AktivNyhet.bilde} alt={AktivNyhet.tittel} className="artikkel-bilde" />
            </div>
          )}

          <div className="artikkel-innhold">
            {AktivNyhet.brødtekst.map((avsnitt, index) => (
              <p key={index}>{avsnitt}</p>
            ))}
          </div>

          <div className="artikkel-bunn">
            <button 
              className="tilbake-knapp-bunn" 
              onClick={() => setAktivNyhet(null)}
            >
              ← Tilbake til nyheter
            </button>
          </div>
        </article>
      </div>
    );
  }

  // STANDARD VISNING: Oversikt over alle nyheter
  return (
    <div className="nyheter-container">
      <div className="nyheter-header">
        <h1>Nyheter og aktuelle saker</h1>
        <p>Hold deg oppdatert på hva som skjer i Østfold Husflidslag.</p>

        <div className="filter-meny">
          <button 
            onClick={() => setValgtLag('alle')} 
            className={`filter-btn ${valgtLag === 'alle' ? 'aktiv' : ''}`}>
            Alle nyheter
          </button>
          <button 
            onClick={() => setValgtLag('fredrikstad')} 
            className={`filter-btn ${valgtLag === 'fredrikstad' ? 'aktiv' : ''}`}>
            Fredrikstad
          </button>
          <button 
            onClick={() => setValgtLag('halden')} 
            className={`filter-btn ${valgtLag === 'halden' ? 'aktiv' : ''}`}>
            Halden
          </button>
        </div>
      </div>

      <div className="nyheter-grid">
        {filtrerteNyheter.map((nyhet) => (
          <div 
            key={nyhet.id} 
            className="nyhet-kort"
            onClick={() => setAktivNyhet(nyhet)}
          >
            {nyhet.bilde && (
              <div className="kort-bilde-wrapper">
                <img src={nyhet.bilde} alt={nyhet.tittel} />
              </div>
            )}
            <div className="kort-innhold">
              <div className="nyhet-topp-info">
                <span className="lokallag-tag">{nyhet.lokallagNavn}</span>
                <span className="nyhet-dato">{nyhet.dato}</span>
              </div>
              <h2>{nyhet.tittel}</h2>
              <p className="nyhet-ingress">{nyhet.ingress}</p>
              <span className="les-mer-knapp">Les hele nyheten →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nyheter;