import './Kurs.css';

function Kurs() {
    const kursListe = [
        { id: 1,
         tittel: 'Bunadskurs', 
         arrangor: 'Halden Husflidslag',
         beskrivelse: 'Lær å sy din egen budad med erfarne instruktører.',
         dato: ' 20.oktober 2026',
         klokkeslett: ' 18:00 - 20:00',
         pris: ' 500 kr (medlem) / 700 kr (ikke medlem)',
         sted: ' Halden Husflidslag',
        },
        { id: 2,
            tittel: 'Strikkekurs',
            arrangor: 'Fredrikstad Husflidslag',
            beskrivelse: 'Strikkekurs for nybegynnere og viderekomne. Velkommen til en hyggelig kveld.',
            dato: ' 25. oktober 2026',
            klokkeslett: ' 17:00 - 19:00',
            pris: ' 250 kr (medlem) / 350 kr (ikke medlem)',
            sted: ' Fredrikstad Husflidslag',
        }
    ];

    return (
     <div className="kurs-container">
        <div className="kurs-header">
            <h1>Her finner du våre kurs</h1>
        </div>

        <div className="kurs-grid">
            {kursListe.map((kurs) => (
                <div key={kurs.id} className="kurs-kort">
                    <span className="kurs-arrengor">{kurs.arrengor}</span>
                    <h2 className="kurs-tittel">{kurs.tittel}</h2>
                    <p className="kurs-beskrivelse">{kurs.beskrivelse}</p>

                <div className="kurs-detaljer">
                    <p><strong>Dato:</strong>{kurs.dato}</p>
                    <p><strong>Klokkeslett:</strong>{kurs.klokkeslett}</p>
                    <p><strong>Pris:</strong>{kurs.pris}</p>
                    <p><strong>Sted:</strong>{kurs.sted}</p>
                </div>
                
                <button 
                className="kurs-knapp"
                onClick={() => alert('Må legge til påmeldingskjema')}
                >Meld deg på
                </button>
                </div>
            ))}
        </div>
     </div>  
  );
}

export default Kurs;