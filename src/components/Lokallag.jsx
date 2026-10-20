import './Lokallag.css';

function Lokallag() {
  const lokallagListe = [
    { id: 'fredrikstad', 
         navn: 'Fredrikstad Husflidslag', 
         leder: 'Kari Nordmann', 
         epost: 'fredrikstad@husflid.no' },
    { id: 'halden', 
        navn: 'Halden Husflidslag', 
        leder: 'Karin Olsen', 
        epost: 'halden@husflid.no'},
    { id: 'sarpsborg', 
        navn: 'Sarpsborg Husflidslag', 
        leder: 'Ola Hansen', 
        epost: 'sarpsborg@husflid.no'},
    { id: 'moss', 
        navn: 'Moss Husflidslag', 
        leder: 'Anne Berg', 
        epost: 'moss@husflid.no'},
  ];

  return (
    <div className="lokallag-container">
      <div className="lokallag-header">
        <h1>Lokallag i Østfold</h1>
        <p>Østfold Husflidslag består av flere aktive lokallag rundt om i fylket. Velg ditt lokallag.</p>
      </div>

      <div className="lokallag-grid">
        {lokallagListe.map((lag) => (
          <div key={lag.id} className="lokallag-kort">
            <h2>{lag.navn}</h2>
            <p className="lag-beskrivelse">{lag.beskrivelse}</p>
            
            <div className="lag-detaljer">
              <p><strong>Leder:</strong> {lag.leder}</p>
              <p><strong>E-post:</strong> {lag.epost}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lokallag;