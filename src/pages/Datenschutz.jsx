import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Datenschutz() {
  const navigate = useNavigate();
  const GOLD = "#C8A96E";

  // Sorgt dafür, dass die Seite beim Laden immer ganz oben startet
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: "#0A0A0A", color: "rgba(255,255,255,0.7)", minHeight: "100vh", fontFamily: "'Outfit', sans-serif", padding: "60px 20px", lineHeight: "1.6" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <button 
          onClick={() => navigate(-1)} 
          style={{ background: "none", border: `1px solid ${GOLD}`, color: GOLD, padding: "8px 16px", borderRadius: "4px", cursor: "pointer", marginBottom: "40px", fontFamily: "'Outfit', sans-serif", fontSize: "14px" }}
        >
          &larr; Zurück
        </button>

        <h1 className="font-display" style={{ fontSize: "36px", fontWeight: 300, color: "#fff", marginBottom: "16px", lineHeight: 1.2 }}>
          Datenschutz<span style={{ color: GOLD }}>erklärung</span>
        </h1>
        <div className="divider-gold" style={{ margin: "0 0 40px 0", width: 60, height: 2, backgroundColor: GOLD }} />

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "20px", color: "#fff", marginBottom: "16px", fontWeight: 500 }}>1. Datenschutz auf einen Blick</h2>
          <h3 style={{ fontSize: "16px", color: GOLD, marginBottom: "8px", fontWeight: 500 }}>Allgemeine Hinweise</h3>
          <p style={{ marginBottom: "16px" }}>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "20px", color: "#fff", marginBottom: "16px", fontWeight: 500 }}>2. Verantwortlicher</h2>
          <p style={{ marginBottom: "16px" }}>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten lauten:
          </p>
          <div style={{ background: "rgba(200,169,110,0.05)", border: "1px solid rgba(200,169,110,0.2)", padding: "20px", borderRadius: "4px", marginBottom: "16px" }}>
            <p style={{ margin: 0, color: "#fff" }}>
              <strong>Sherzad Qadri</strong><br />
              Hanielstr. 35<br />
              45327 Essen<br /><br />
              Telefon: 015254151290<br />
              E-Mail: shirzad.qadri123@gmail.com
            </p>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "20px", color: "#fff", marginBottom: "16px", fontWeight: 500 }}>3. Datenerfassung auf dieser Website</h2>
          <h3 style={{ fontSize: "16px", color: GOLD, marginBottom: "8px", fontWeight: 500 }}>Hosting (Vercel)</h3>
          <p style={{ marginBottom: "16px" }}>
            Wir hosten unsere Website bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Wenn du unsere Website besuchst, erfasst Vercel verschiedene Logfiles inklusive deiner IP-Adressen. Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt.
          </p>

          <h3 style={{ fontSize: "16px", color: GOLD, marginBottom: "8px", fontWeight: 500 }}>Kontaktformular (Formspree)</h3>
          <p style={{ marginBottom: "16px" }}>
            Wenn du uns per Kontaktformular (Buchungs-Modal) Anfragen zukommen lässt, werden deine Angaben aus dem Anfrageformular inklusive der von dir dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne deine Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Für die technische Abwicklung der Formularanfragen nutzen wir den Dienst Formspree. Anbieter ist Formspree Inc., 2155 S. Bascom Ave, Suite 200, Campbell, CA 95008, USA. Die von dir in das Formular eingegebenen Daten werden an Server von Formspree in den USA übertragen und dort gespeichert. Weitere Informationen findest du in der Datenschutzerklärung von Formspree.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "20px", color: "#fff", marginBottom: "16px", fontWeight: 500 }}>4. Analyse-Tools und Werbung</h2>
          <h3 style={{ fontSize: "16px", color: GOLD, marginBottom: "8px", fontWeight: 500 }}>Meta Pixel (ehemals Facebook Pixel)</h3>
          <p style={{ marginBottom: "16px" }}>
            Diese Website nutzt zur Konversionsmessung das Besucheraktions-Pixel von Meta. Anbieter dieses Dienstes ist die Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland.
          </p>
          <p style={{ marginBottom: "16px" }}>
            So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook- oder Instagram-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch können die Wirksamkeit der Meta-Werbeanzeigen für statistische und Marktforschungszwecke ausgewertet und zukünftige Werbemaßnahmen optimiert werden.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten werden aber von Meta gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist und Meta die Daten für eigene Werbezwecke, entsprechend der Meta-Datenverwendungsrichtlinie, verwenden kann.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Die Nutzung dieses Dienstes erfolgt ausschließlich auf Grundlage deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die du uns über unser Cookie-Banner erteilt hast. Die Einwilligung ist jederzeit widerrufbar.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "20px", color: "#fff", marginBottom: "16px", fontWeight: 500 }}>5. Deine Rechte</h2>
          <p style={{ marginBottom: "16px" }}>
            Du hast jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck deiner gespeicherten personenbezogenen Daten zu erhalten. Du hast außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn du eine Einwilligung zur Datenverarbeitung erteilt hast, kannst du diese Einwilligung jederzeit für die Zukunft widerrufen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz kannst du dich jederzeit unter der oben angegebenen Adresse an uns wenden. Des Weiteren steht dir ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
        </section>

      </div>
    </div>
  );
}

export default Datenschutz;
