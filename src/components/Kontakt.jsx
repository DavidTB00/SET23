import './Kontakt.css';

function Kontakt() {
  const styremedlemmer = [
    {
      id: 1,
      navn: 'Kari Nordmann',
      rolle: 'Leder',
      lokallag: 'Fredrikstad Husflidslag',
      epost: 'kari@eksempel.no',
      telefon: '00 00 00 00',
      bilde: '',
      adresse: 'Fredrikstadveien 2, 1607 Fredrikstad'
    },
    {
      id: 2,
      navn: 'Kari Nordmann',
      rolle: 'Nestleder',
      lokallag: 'Halden Husflidslag',
      epost: 'kari.Nordmann@eksempel.no',
      telefon: '00 00 00 00',
      bilde: '',
      adresse: 'Storgata 2, 1767 Halden'
    }
  ];

  return (
    <div className="kontakt-container">
      <div className="kontakt-header">
        <h1>Kontakt Østfold Husflidslag</h1>
        <p>Her finner du kontaktinformasjon til fylkesstyret og våre representanter.</p>
      </div>

      <div className="kontakt-grid">
        {styremedlemmer.map((medlem) => (
          <div key={medlem.id} className="kontakt-kort">
            
            <div className="kort-topp">
              <img 
                src={medlem.bilde || 'https://cdn-icons-png.flaticon.com/512/847/847969.png'} 
                alt={medlem.navn} 
                className="kontakt-bilde"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://cdn-icons-png.flaticon.com/512/847/847969.png';
                }}
              />
              <div className="kort-meta">
                <span className="lokallag-tag">{medlem.lokallag}</span>
                <h2>{medlem.navn}</h2>
                <p className="rolle-tittel">{medlem.rolle}</p>
              </div>
            </div>

            <div className="kontakt-detaljer">
              <p><strong>E-post:</strong> {medlem.epost}</p>
              <p><strong>Telefon:</strong> {medlem.telefon}</p>
              <p><strong>Adresse:</strong> {medlem.adresse}</p>
            </div>

            <div className="kontakt-knapper">
              <a href={`mailto:${medlem.epost}`} className="kontakt-knapp">Send e-post</a>
              <a href={`tel:${medlem.telefon}`} className="kontakt-knapp sekundaer">Ring</a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Kontakt;