import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top-section">
                    <h3 className="footerTittel">Østfold Husflidslag</h3>
                    <p>Vi tar vare på tradisjonshåndtverk, bli med på laget vårt!</p>
                </div>
                <div className="footer-colums">
                <div className="footer-box">
                    <h4>Kontakt oss</h4>
                    <p>E-post: eksempel@ostfoldhusflidslag.no</p>
                    <p>Telefon: 12345678</p>
                </div>
                <div className="footer-box">
                    <h4>Besøk oss</h4>
                    <p>Eksempelgate 231, 1620 Fredrikstad</p>
                </div>
            </div>
            </div>
            <div className="footer-bottom">
            <div className="sosiale-medier">
                <span className="sosiale-medier-ikon" title="Facebook">f</span>
                <p>&copy; 2026 Østfold Husflidslag. Alle rettigheter reservert.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer