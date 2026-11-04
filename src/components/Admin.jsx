import { useState } from "react";
import "./Admin.css";

function Admin({ onLeggTilKurs, onLeggTilAktivitet, onLeggTilNyhet, onOppdaterKontakt }) {
    const [aktivFane, setAktivFane] = useState('kurs');

    {/* Kurs */} 
    const [tittel, setTittel] = useState('');
    const [beskrivelse, setBeskrivelse] = useState('');
    const [dato, setDato] = useState('');
    const [pris, setPris] = useState('');
    const [sted, setSted] = useState('');
    const [bildeUrl, setBildeUrl] = useState(['']);

    {/* Aktiviteter */} 
    const [aktTittel, setAktTittel] = useState('');
    const [aktBeskrivelse, setAktBeskrivelse] = useState('');
    const [aktDato, setAktDato] = useState('');
    const [aktSted, setAktSted] = useState('');
    const [aktBildeUrl, setAktBildeUrl] = useState(['']);

    {/*Nyheter state */}
    const [nyhetTittel, setNyhetTittel] = useState('');
    const [nyhetTekst, setNyhetTekst] = useState('');
    const [nyhetBildeUrl, setNyhetBildeUrl] = useState(['']);

    {/*Kontakt */}
    const [kontaktPersoner, setKontaktPersoner] = useState([
        { id: 1, 
            lederNavn: 'Kari Nordmann', 
            stilling: 'Styreleder', 
            lokallag: 'Fredrikstad Husflidslag', 
            telefon: '988 88 888', 
            epost: 'leder@ostfoldhusflid.no', 
            profilBildeUrl: '' }
    ]);
    const [valgtKontaktId, setValgtKontaktId] = useState('');
    const [lederNavn, setLederNavn] = useState('');
    const [stilling, setStilling] = useState('');
    const [lokallagKontakt, setLokallagKontakt] = useState('');
    const [telefon, setTelefon] = useState('');
    const [epost, setEpost] = useState('');
    const [profilBildeUrl, setProfilBildeUrl] = useState('');

    const [suksessMelding, setSuksessMelding] = useState('');
    
    {/* Håndtering av bilder */}
    const håndterBildeEndring = (index, verdi) => {
        const oppdaterteBilder = [...bildeUrl];
        oppdaterteBilder[index] = verdi;
        setBildeUrl(oppdaterteBilder);
    };
    const LeggTilBildeFelt = () => setBildeUrl([...bildeUrl, '']);

    const håndterAktBildeEndring = (index, verdi) => {
        const oppdaterteBilder = [...aktBildeUrl];
        oppdaterteBilder[index] = verdi;
        setAktBildeUrl(oppdaterteBilder);
    };
    const LeggTilAktBildeFelt = () => setAktBildeUrl([...aktBildeUrl, '']);

    const håndterNyhetBildeEndring = (index, verdi) => {
        const oppdaterteBilder = [...nyhetBildeUrl];
        oppdaterteBilder[index] = verdi;
        setNyhetBildeUrl(oppdaterteBilder);
    };
    const LeggTilNyhetBildeFelt = () => setNyhetBildeUrl([...nyhetBildeUrl, '']);

    {/* Velg kontaktperson i nedtrekksmeny */}
    const håndterVelgKontakt = (e) => {
        const id = e.target.value;
        setValgtKontaktId(id);

        if (id === 'ny' || id === '') {
            setLederNavn('');
            setStilling('');
            setLokallagKontakt('');
            setTelefon('');
            setEpost('');
            setProfilBildeUrl('');
        } else {
            const person = kontaktPersoner.find((p) => p.id.toString() === id);
            if (person) {
                setLederNavn(person.lederNavn);
                setStilling(person.stilling);
                setLokallagKontakt(person.lokallag || '');
                setTelefon(person.telefon);
                setEpost(person.epost);
                setProfilBildeUrl(person.profilBildeUrl || '');
            }
        }
    };

    {/* Submit for kurs */}
    const handleSubmitKurs = (e) => {
        e.preventDefault();
        const gyldigeBilder = bildeUrl.filter((url) => url.trim() !== '');
        const nyttKurs = {
            id: Date.now(),
            tittel,
            beskrivelse,
            dato,
            pris,
            sted,
            bilder: gyldigeBilder.length > 0 ? gyldigeBilder : ['https://via.placeholder.com/300']
        };
        if (onLeggTilKurs) onLeggTilKurs(nyttKurs);
        setTittel(''); setBeskrivelse(''); setDato(''); setPris(''); setSted(''); setBildeUrl(['']);
        setSuksessMelding('Kurset har blitt lagret og lagt til!');
        setTimeout(() => setSuksessMelding(''), 4000);
    };

    {/* Submit for Aktivitet */}
    const handleSubmitAktivitet = (e) => {
        e.preventDefault();
        const gyldigeBilder = aktBildeUrl.filter((url) => url.trim() !== '');
        if (onLeggTilAktivitet) {
            onLeggTilAktivitet({
                id: Date.now(),
                tittel: aktTittel,
                beskrivelse: aktBeskrivelse,
                dato: aktDato,
                sted: aktSted,
                bilder: gyldigeBilder
            });
        }
        setAktTittel(''); setAktBeskrivelse(''); setAktDato(''); setAktSted(''); setAktBildeUrl(['']);
        setSuksessMelding('Aktiviteten ble publisert!');
        setTimeout(() => setSuksessMelding(''), 4000);
    };

    {/* Submit for Nyhet */}
    const handleSubmitNyhet = (e) => {
        e.preventDefault();
        const gyldigeBilder = nyhetBildeUrl.filter((url) => url.trim() !== '');
        if (onLeggTilNyhet) {
            onLeggTilNyhet({
                id: Date.now(),
                tittel: nyhetTittel,
                tekst: nyhetTekst,
                dato: new Date().toLocaleDateString('no-NO'),
                bilder: gyldigeBilder
            });
        }
        setNyhetTittel(''); setNyhetTekst(''); setNyhetBildeUrl(['']);
        setSuksessMelding('Nyheten har blitt publisert!');
        setTimeout(() => setSuksessMelding(''), 4000);
    };

    {/* Submit for Kontakt */}
    const handleSubmitKontakt = (e) => {
        e.preventDefault();

        if (valgtKontaktId === 'ny' || valgtKontaktId === '') {
            const nyPerson = {
                id: Date.now(),
                lederNavn,
                stilling,
                lokallag: lokallagKontakt,
                telefon,
                epost,
                profilBildeUrl
            };
            const oppdatert = [...kontaktPersoner, nyPerson];
            setKontaktPersoner(oppdatert);
            if (onOppdaterKontakt) onOppdaterKontakt(oppdatert);
            setSuksessMelding('Ny kontaktperson er lagt til!');
        } else {
            const oppdatert = kontaktPersoner.map((p) => 
                p.id.toString() === valgtKontaktId 
                    ? { ...p, lederNavn, stilling, lokallag: lokallagKontakt, telefon, epost, profilBildeUrl } 
                    : p
            );
            setKontaktPersoner(oppdatert);
            if (onOppdaterKontakt) onOppdaterKontakt(oppdatert);
            setSuksessMelding('Kontaktinformasjonen ble oppdatert!');
        }

        setTimeout(() => setSuksessMelding(''), 4000);
    };

    {/* Slett person fra kontaktliste */}
    const handleSlettKontakt = () => {
        if (!valgtKontaktId || valgtKontaktId === 'ny') return;
        
        const oppdatert = kontaktPersoner.filter(p => p.id.toString() !== valgtKontaktId);
        setKontaktPersoner(oppdatert);
        if (onOppdaterKontakt) onOppdaterKontakt(oppdatert);

        setValgtKontaktId('');
        setLederNavn('');
        setStilling('');
        setLokallagKontakt('');
        setTelefon('');
        setEpost('');
        setProfilBildeUrl('');
        setSuksessMelding('Kontaktpersonen ble slettet.');
        setTimeout(() => setSuksessMelding(''), 4000);
    };

    return (
        <div className="admin-container">
            <h2>Admin-panel</h2>
            <p className="admin-undertittel">Her kan du styre innholdet på nettsiden</p>

            {/* Fanevelger */}
            <div className="admin-tab">
                <button type="button" className={`tab-knapp ${aktivFane === 'kurs' ? 'aktiv' : ''}`} onClick={() => setAktivFane('kurs')}>
                    Kurs 
                </button>
                <button type="button" className={`tab-knapp ${aktivFane === 'aktiviteter' ? 'aktiv' : ''}`} onClick={() => setAktivFane('aktiviteter')}>
                    Aktiviteter
                </button> 
                <button type="button" className={`tab-knapp ${aktivFane === 'nyheter' ? 'aktiv' : ''}`} onClick={() => setAktivFane('nyheter')}>
                    Nyheter 
                </button>
                <button type="button" className={`tab-knapp ${aktivFane === 'kontakt' ? 'aktiv' : ''}`} onClick={() => setAktivFane('kontakt')}>
                    Kontakt oss
                </button>
            </div>

            {suksessMelding && <div className="suksess-melding">{suksessMelding}</div>}

            {/* KURS */}
            {aktivFane === 'kurs' && (
                <form onSubmit={handleSubmitKurs} className="admin-skjema">
                    <div className="skjema-gruppe">
                        <label htmlFor="tittel">Kurstittel *</label>
                        <input 
                        id="tittel" 
                        type="text" 
                        required value={tittel} 
                        onChange={(e) => setTittel(e.target.value)} 
                        placeholder="f.eks. Bunadskurs"/>
                    </div>

                    <div className="skjema-gruppe">
                        <label htmlFor="beskrivelse">Kursbeskrivelse *</label>
                        <textarea 
                        id="beskrivelse" 
                        rows={4} 
                        required value={beskrivelse} 
                        onChange={(e) => setBeskrivelse(e.target.value)} 
                        placeholder="Skriv beskrivelse..."/>
                    </div>

                    <div className="skjema-rad">
                        <div className="skjema-gruppe">
                            <label htmlFor="dato">Dato og klokkeslett *</label>
                            <input 
                            id="dato" 
                            type="text" 
                            required value={dato} 
                            onChange={(e) => setDato(e.target.value)} 
                            placeholder="f.eks. 10. november, kl. 18:00"/>
                        </div>
                        <div className="skjema-gruppe">
                            <label htmlFor="pris">Pris *</label>
                            <input 
                            id="pris" 
                            type="text" 
                            required value={pris} 
                            onChange={(e) => setPris(e.target.value)} 
                            placeholder="f.eks. 500kr"/>
                        </div>
                    </div>

                    <div className="skjema-gruppe">
                        <label htmlFor="sted">Sted *</label>
                        <input 
                        id="sted" 
                        type="text" 
                        required value={sted} 
                        onChange={(e) => setSted(e.target.value)} 
                        placeholder="f.eks. Husflidshuset"/>
                    </div>

                    <div className="skjema-gruppe">
                        <label>Bilde-URL(er)</label> 
                        {bildeUrl.map((url, index) => (
                            <div key={index} className="bilde-rad">
                                <input 
                                type="url" 
                                value={url} 
                                onChange={(e) => håndterBildeEndring(index, e.target.value)} 
                                placeholder="https://eksempel.no/bilde.jpg"/>
                            </div>
                        ))}   
                        <button 
                        type="button" 
                        className="knapp-sekundær" 
                        onClick={LeggTilBildeFelt}>+ Legg til bilde</button>
                    </div>

                    <button 
                    type="submit" 
                    className="knapp-hoved">Opprett og publiser kurset</button>
                </form>
            )}

            {/* AKTIVITETER */}
            {aktivFane === 'aktiviteter' && (
                <form onSubmit={handleSubmitAktivitet} className="admin-skjema">
                    <h3>Legg til ny aktivitet</h3>
                    <div className="skjema-gruppe">
                        <label>Tittel på aktivitet *</label>
                        <input 
                        type="text" 
                        required value={aktTittel} 
                        onChange={(e) => setAktTittel(e.target.value)} 
                        placeholder="f.eks. Strikkekafé"/>
                    </div>

                    <div className="skjema-gruppe">
                        <label>Beskrivelse *</label>
                        <textarea 
                        rows={4} 
                        required value={aktBeskrivelse} 
                        onChange={(e) => setAktBeskrivelse(e.target.value)} 
                        placeholder="Beskriv aktiviteten..."/>
                    </div>

                    <div className="skjema-rad">
                        <div className="skjema-gruppe">
                            <label>Dato / Tid *</label>
                            <input 
                            type="text" 
                            required value={aktDato} 
                            onChange={(e) => setAktDato(e.target.value)} 
                            placeholder="f.eks. Hver tirsdag kl 19:00"/>
                        </div>
                        <div className="skjema-gruppe">
                            <label>Sted *</label>
                            <input 
                            type="text" 
                            required value={aktSted} 
                            onChange={(e) => setAktSted(e.target.value)} 
                            placeholder="f.eks. Husflidshuset"/>
                        </div>
                    </div>

                    <div className="skjema-gruppe">
                        <label>Bilde-URL(er)</label>
                        {aktBildeUrl.map((url, index) => (
                            <div key={index} className="bilde-rad">
                                <input 
                                type="url" 
                                value={url} 
                                onChange={(e) => håndterAktBildeEndring(index, e.target.value)} 
                                placeholder="https://eksempel.no/bilde.jpg"/>
                            </div>
                        ))}
                        <button 
                        type="button" 
                        className="knapp-sekundær" 
                        onClick={LeggTilAktBildeFelt}>+ Legg til bilde</button>
                    </div>

                    <button 
                    type="submit" 
                    className="knapp-hoved">Publiser aktivitet</button>
                </form>
            )}

            {/* NYHETER */}
            {aktivFane === 'nyheter' && (
                <form onSubmit={handleSubmitNyhet} className="admin-skjema">
                    <h3>Legg ut nyhet</h3>
                    <div className="skjema-gruppe">
                        <label>Overskrift *</label>
                        <input 
                        type="text" 
                        required value={nyhetTittel} 
                        onChange={(e) => setNyhetTittel(e.target.value)} 
                        placeholder="f.eks. Sommermarked"/>
                    </div>

                    <div className="skjema-gruppe">
                        <label>Nyhetstekst *</label>
                        <textarea 
                        rows={5} 
                        required value={nyhetTekst} 
                        onChange={(e) => setNyhetTekst(e.target.value)} 
                        placeholder="Skriv nyhetsteksten her..."/>
                    </div>

                    <div className="skjema-gruppe">
                        <label>Bilde-URL(er)</label>
                        {nyhetBildeUrl.map((url, index) => (
                            <div key={index} className="bilde-rad">
                                <input 
                                type="url" 
                                value={url} 
                                onChange={(e) => håndterNyhetBildeEndring(index, e.target.value)} 
                                placeholder="https://eksempel.no/bilde.jpg"/>
                            </div>
                        ))}
                        <button 
                        type="button" 
                        className="knapp-sekundær" 
                        onClick={LeggTilNyhetBildeFelt}>+ Legg til bilde</button>
                    </div>

                    <button 
                    type="submit" 
                    className="knapp-hoved">Publiser nyhet</button>
                </form>
            )}

            {/* KONTAKT OSS */}
            {aktivFane === 'kontakt' && (
                <form onSubmit={handleSubmitKontakt} className="admin-skjema">
                    <h3>Administrer kontaktpersoner</h3>
                    
                    <div className="skjema-gruppe">
                        <label>Velg person å redigere eller opprett ny *</label>
                        <select value={valgtKontaktId} onChange={håndterVelgKontakt}>
                            <option value="">-- Velg person --</option>
                            <option value="ny"> Legg til ny kontaktperson</option>
                            {kontaktPersoner.map((person) => (
                                <option key={person.id} value={person.id}>
                                    {person.lederNavn} ({person.stilling} - {person.lokallag})
                                </option>
                            ))}
                        </select>
                    </div>

                    {valgtKontaktId && (
                        <>
                            <div className="skjema-gruppe">
                                <label>Fullt navn *</label>
                                <input 
                                type="text" 
                                required value={lederNavn} 
                                onChange={(e) => setLederNavn(e.target.value)} 
                                placeholder="f.eks. Kari Nordmann"/>
                            </div>

                            <div className="skjema-rad">
                                <div className="skjema-gruppe">
                                    <label>Stilling / Rolle *</label>
                                    <input 
                                    type="text" 
                                    required value={stilling} 
                                    onChange={(e) => setStilling(e.target.value)} 
                                    placeholder="f.eks. Styreleder"/>
                                </div>
                                <div className="skjema-gruppe">
                                    <label>Lokallag *</label>
                                    <select required value={lokallagKontakt} onChange={(e) => setLokallagKontakt(e.target.value)}>
                                        <option value="">-- Velg lokallag --</option>
                                        <option value="Fredrikstad Husflidslag">Fredrikstad Husflidslag</option>
                                        <option value="Sarpsborg Husflidslag">Sarpsborg Husflidslag</option>
                                        <option value="Halden Husflidslag">Halden Husflidslag</option>
                                        <option value="Moss Husflidslag">Moss Husflidslag</option>
                                        <option value="Fylkeslaget">Fylkeslaget (Felles)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="skjema-rad">
                                <div className="skjema-gruppe">
                                    <label>Telefonnummer *</label>
                                    <input 
                                    type="tel" 
                                    required value={telefon} 
                                    onChange={(e) => setTelefon(e.target.value)} 
                                    placeholder="f.eks. 00 00 00 00"/>
                                </div>
                                <div className="skjema-gruppe">
                                    <label>E-postadresse *</label>
                                    <input 
                                    type="email" 
                                    required value={epost} 
                                    onChange={(e) => setEpost(e.target.value)} 
                                    placeholder="Ostfold@eksempel.no"/>
                                </div>
                            </div>

                            <div className="skjema-gruppe">
                                <label>Profilbilde-URL</label>
                                <input 
                                type="url" 
                                value={profilBildeUrl} 
                                onChange={(e) => setProfilBildeUrl(e.target.value)} 
                                placeholder="https://eksempel.no/profilbilde.jpg"/>
                            </div>

                                <button type="submit" className="knapp-hoved">
                                    {valgtKontaktId === 'ny' ? 'Legg til person' : 'Lagre endringer'}
                                </button>
                                
                                {valgtKontaktId !== 'ny' && (
                                    <button type="button" onClick={handleSlettKontakt}>
                                        Slett person
                                    </button>
                                )}
                        </>
                    )}
                </form>
            )}
        </div>
    );
}

export default Admin;