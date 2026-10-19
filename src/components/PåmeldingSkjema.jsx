import { useState } from 'react';
import './PåmeldingSkjema.css';

function PåmeldingSkjema({ kurs, onClose }) {
  const [formData, setFormData] = useState({
    navn: '',
    epost: '',
    telefon: '',
    erMedlem: 'ja',
    kommentar: ''
  });

  const [sendt, setSendt] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Påmelding sendt for:', kurs.tittel, formData);
    setSendt(true);
  };

  if (!kurs) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-innhold" onClick={(e) => e.stopPropagation()}>
        <button className="lukk-knapp" onClick={onClose} aria-label="Lukk skjema">
          ✕
        </button>

        {sendt ? (
          <div className="suksess-melding">
            <h2>Takk for din påmelding!</h2>
            <p>
              Du er nå registrert på <strong>{kurs.tittel}</strong> i regi av {kurs.lokallagNavn}.
            </p>
            <p>En bekreftelse vil sendes til <strong>{formData.epost}</strong>.</p>
            <button className="pamelding-submit-btn" onClick={onClose}>
              Lukk vinduet
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2>Påmelding til kurs</h2>
              <p className="kurs-tittel-info">{kurs.tittel} – {kurs.lokallagNavn}</p>
            </div>

            <form onSubmit={handleSubmit} className="pamelding-skjema">
              <div className="skjema-gruppe">
                <label htmlFor="navn">Fullt navn *</label>
                <input
                  type="text"
                  id="navn"
                  name="navn"
                  value={formData.navn}
                  onChange={handleChange}
                  required
                  placeholder="F.eks. Kari Nordmann"
                />
              </div>

              <div className="skjema-gruppe">
                <label htmlFor="epost">E-postadresse *</label>
                <input
                  type="email"
                  id="epost"
                  name="epost"
                  value={formData.epost}
                  onChange={handleChange}
                  required
                  placeholder="navn@eksempel.no"
                />
              </div>

              <div className="skjema-gruppe">
                <label htmlFor="telefon">Telefonnummer *</label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  required
                  placeholder="8 siffer"
                />
              </div>

              <div className="skjema-gruppe">
                <label htmlFor="erMedlem">Er du medlem av Norges Husflidslag?</label>
                <select
                  id="erMedlem"
                  name="erMedlem"
                  value={formData.erMedlem}
                  onChange={handleChange}
                >
                  <option value="ja">Ja, jeg er medlem</option>
                  <option value="nei">Nei, jeg er ikke medlem</option>
                </select>
              </div>

              <div className="skjema-gruppe">
                <label htmlFor="kommentar">Beskjed (valgfritt)</label>
                <textarea
                  id="kommentar"
                  name="kommentar"
                  rows="3"
                  value={formData.kommentar}
                  onChange={handleChange}
                  placeholder="Skriv inn eventuelle beskjeder til kursarrangøren..."
                />
              </div>

              <div className="skjema-knapper">
                <button type="submit" className="pamelding-submit-btn">
                  Send påmelding
                </button>
                <button type="button" className="pamelding-avbryt-btn" onClick={onClose}>
                  Avbryt
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default PåmeldingSkjema;