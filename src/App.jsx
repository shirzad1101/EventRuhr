import { useState, useEffect, useRef } from "react";
import { Camera, Wine, CheckCircle, Star, MapPin, Users, Calendar, Mail, X, ChevronDown, Sparkles, Clock, Shield, Menu, Info } from "lucide-react";

const GOLD = "#C8A96E";
const GOLD_LIGHT = "#E2C98A";
const DARK = "#111110";
const DARK2 = "#1A1A18";
const DARK3 = "#242420";
const CHAMPAGNE = "#F5EDD8";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body { background: ${DARK}; }

  .font-display { font-family: 'Cormorant Garamond', serif; }
  .font-body { font-family: 'Outfit', sans-serif; }

  .gold-text { color: ${GOLD}; }
  .champagne-text { color: ${CHAMPAGNE}; }

  /* ── URGENCY BANNER ── */
  .urgency-banner {
    background: linear-gradient(90deg, rgba(200,169,110,0.12) 0%, rgba(200,169,110,0.07) 50%, rgba(200,169,110,0.12) 100%);
    border-bottom: 1px solid rgba(200,169,110,0.22);
    padding: 10px 24px;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    backdrop-filter: blur(10px);
  }
  .urgency-banner span {
    font-family: 'Outfit', sans-serif;
    font-size: 12px;
    letter-spacing: 0.04em;
    color: rgba(226,201,138,0.9);
    line-height: 1.5;
  }
  .urgency-banner-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${GOLD};
    flex-shrink: 0;
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse { 0%,100%{opacity:0.5;transform:scale(1);} 50%{opacity:1;transform:scale(1.3);} }

  .cta-btn {
    background: linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LIGHT} 50%, ${GOLD} 100%);
    background-size: 200% 200%;
    color: #111;
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 13px;
    padding: 18px 48px;
    border: none;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
  }
  .cta-btn:hover {
    background-position: right center;
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(200,169,110,0.35);
  }
  .cta-btn:active { transform: translateY(0); }

  .cta-btn-outline {
    background: transparent;
    color: ${GOLD};
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 12px;
    padding: 14px 36px;
    border: 1px solid ${GOLD};
    cursor: pointer;
    transition: all 0.35s ease;
  }
  .cta-btn-outline:hover {
    background: ${GOLD};
    color: #111;
    transform: translateY(-1px);
    box-shadow: 0 8px 28px rgba(200,169,110,0.25);
  }

  /* ── DROPDOWN NAV ── */
  .nav-dropdown-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: 1px solid rgba(200,169,110,0.2);
    color: rgba(255,255,255,0.7);
    font-family: 'Outfit', sans-serif;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 9px 18px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .nav-dropdown-btn:hover {
    border-color: rgba(200,169,110,0.5);
    color: ${GOLD};
  }
  .nav-dropdown-menu {
    position: absolute;
    top: calc(100% + 12px);
    right: 0;
    background: rgba(26,26,24,0.98);
    border: 1px solid rgba(200,169,110,0.18);
    min-width: 220px;
    backdrop-filter: blur(20px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.7);
    animation: slideDown 0.25s ease;
    z-index: 300;
  }
  .nav-dropdown-item {
    display: block;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    padding: 14px 20px;
    font-family: 'Outfit', sans-serif;
    font-size: 13px;
    letter-spacing: 0.06em;
    color: rgba(255,255,255,0.55);
    cursor: pointer;
    transition: all 0.25s ease;
  }
  .nav-dropdown-item:last-child { border-bottom: none; }
  .nav-dropdown-item:hover {
    background: rgba(200,169,110,0.07);
    color: ${GOLD};
    padding-left: 26px;
  }
  @keyframes slideDown { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }

  .service-card {
    background: ${DARK3};
    border: 1px solid rgba(200,169,110,0.12);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
  }
  .service-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(200,169,110,0.04) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .service-card:hover {
    border-color: rgba(200,169,110,0.35);
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,169,110,0.12);
  }
  .service-card:hover::before { opacity: 1; }

  .hero-card {
    background: ${DARK2};
    border: 1px solid rgba(200,169,110,0.15);
    transition: all 0.5s ease;
    position: relative;
    overflow: hidden;
    cursor: default;
  }
  .hero-card:hover {
    border-color: rgba(200,169,110,0.4);
    box-shadow: 0 24px 80px rgba(0,0,0,0.6), 0 0 60px rgba(200,169,110,0.06);
  }
  .hero-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 60%;
    background: linear-gradient(to top, rgba(17,17,16,0.85) 0%, transparent 100%);
    pointer-events: none;
  }

  .divider-gold {
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
    margin: 0 auto;
  }

  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    animation: fadeIn 0.3s ease;
  }
  .modal-box {
    background: ${DARK2};
    border: 1px solid rgba(200,169,110,0.2);
    width: 100%;
    max-width: 520px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: slideUp 0.4s ease;
    box-shadow: 0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(200,169,110,0.08);
  }
  .info-modal-box {
    background: ${DARK2};
    border: 1px solid rgba(200,169,110,0.2);
    width: 100%;
    max-width: 480px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: slideUp 0.4s ease;
    box-shadow: 0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(200,169,110,0.08);
  }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes shimmer { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }

  .form-input {
    width: 100%;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(200,169,110,0.15);
    color: #fff;
    font-family: 'Outfit', sans-serif;
    font-size: 14px;
    padding: 14px 16px;
    outline: none;
    transition: all 0.3s ease;
  }
  .form-input:focus {
    border-color: rgba(200,169,110,0.5);
    background: rgba(200,169,110,0.03);
    box-shadow: 0 0 0 3px rgba(200,169,110,0.06);
  }
  .form-input::placeholder { color: rgba(255,255,255,0.25); }

  .form-label {
    display: block;
    font-family: 'Outfit', sans-serif;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(200,169,110,0.7);
    margin-bottom: 8px;
  }

  .nav-link {
    font-family: 'Outfit', sans-serif;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.55);
    text-decoration: none;
    transition: color 0.3s ease;
    cursor: pointer;
    background: none;
    border: none;
  }
  .nav-link:hover { color: ${GOLD}; }

  .stat-card {
    border-left: 1px solid rgba(200,169,110,0.3);
    padding-left: 20px;
  }

  .promise-item {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 16px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .promise-item:last-child { border-bottom: none; }

  .section-animate {
    animation: fadeInUp 0.7s ease both;
  }

  .ticker-line {
    font-family: 'Outfit', sans-serif;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(200,169,110,0.6);
  }

  /* Flavor pill for slush modal */
  .flavor-pill {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(200,169,110,0.06);
    border: 1px solid rgba(200,169,110,0.18);
    padding: 12px 18px;
    border-radius: 2px;
    width: 100%;
    margin-bottom: 10px;
  }
  .flavor-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    .hero-split { flex-direction: column !important; }
    .hero-card { min-height: 220px !important; }
    .hide-mobile { display: none !important; }
    .cta-btn { padding: 16px 32px !important; font-size: 12px !important; }
    .urgency-banner span { font-size: 11px; }
  }
`;

function StarRating() {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} fill={GOLD} color={GOLD} />
      ))}
    </div>
  );
}

/* ── BOOKING MODAL ── */
function Modal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ datum: "", gaeste: "", ort: "", email: "", details: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // 1. Strenge Prüfung: Alle Felder außer 'details' müssen ausgefüllt sein
    if (!form.datum || !form.gaeste || !form.ort || !form.email) {
      alert("Bitte fülle alle Pflichtfelder (Datum, Gästeanzahl, Ort und E-Mail-Adresse) aus, damit wir deine Anfrage prüfen können.");
      return;
    }
    
    setLoading(true);
    
    try {
      // 2. Daten an Formspree senden
      await fetch("https://formspree.io/f/mvzywpeo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Datum: form.datum,
          Gaesteanzahl: form.gaeste,
          Ort: form.ort,
          Email: form.email,
          Details: form.details,
          Service: "EventRuhr Anfrage"
        }),
      });
      
      // 3. Erfolgsmeldung anzeigen
      setLoading(false);
      setSubmitted(true);
      
    } catch (error) {
      setLoading(false);
      alert("Es gab ein Problem. Bitte versuche es später noch einmal.");
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div style={{ padding: "36px 36px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
            <div>
              <p className="ticker-line" style={{ marginBottom: 8 }}>Verfügbarkeit prüfen</p>
              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 300, color: "#fff", lineHeight: 1.2 }}>
                Dein Event.<br />
                <span style={{ color: GOLD }}>Dein Datum.</span>
              </h2>
            </div>
            <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)", padding: 4, marginTop: -4 }}>
              <X size={20} />
            </button>
          </div>
          <div className="divider-gold" style={{ margin: "0 0 28px 0", width: 40 }} />
        </div>

        {!submitted ? (
          <div style={{ padding: "0 36px 36px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              
              <div>
                <label className="form-label">Datum des Events</label>
                <div style={{ position: "relative" }}>
                  <input type="date" className="form-input" value={form.datum}
                    onChange={e => setForm({ ...form, datum: e.target.value })}
                    style={{ paddingLeft: 44 }} />
                  <Calendar size={15} color={GOLD} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", opacity: 0.7 }} />
                </div>
              </div>
              
              <div>
                <label className="form-label">Ungefähre Gästeanzahl</label>
                <div style={{ position: "relative" }}>
                  <select className="form-input" value={form.gaeste}
                    onChange={e => setForm({ ...form, gaeste: e.target.value })}
                    style={{ paddingLeft: 44, appearance: "none", cursor: "pointer" }}>
                    <option value="" style={{ background: DARK2 }}>Bitte wählen</option>
                    <option value="50-100" style={{ background: DARK2 }}>50 – 100 Gäste</option>
                    <option value="100-200" style={{ background: DARK2 }}>100 – 200 Gäste</option>
                    <option value="200-400" style={{ background: DARK2 }}>200 – 400 Gäste</option>
                    <option value="400+" style={{ background: DARK2 }}>Über 400 Gäste</option>
                  </select>
                  <Users size={15} color={GOLD} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", opacity: 0.7 }} />
                  <ChevronDown size={14} color="rgba(255,255,255,0.3)" style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                </div>
              </div>
              
              <div>
                <label className="form-label">Veranstaltungsort</label>
                <div style={{ position: "relative" }}>
                  <input type="text" placeholder="z.B. Essen, Dortmund, Bochum …" className="form-input"
                    value={form.ort} onChange={e => setForm({ ...form, ort: e.target.value })}
                    style={{ paddingLeft: 44 }} />
                  <MapPin size={15} color={GOLD} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", opacity: 0.7 }} />
                </div>
              </div>
              
              <div>
                <label className="form-label">E-Mail-Adresse</label>
                <div style={{ position: "relative" }}>
                  <input type="email" placeholder="deine@email.de" className="form-input"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{ paddingLeft: 44 }} />
                  <Mail size={15} color={GOLD} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", opacity: 0.7 }} />
                </div>
              </div>
              
              <div>
                <label className="form-label">
                  Weitere Details <span style={{ color: "rgba(255,255,255,0.4)", textTransform: "none", letterSpacing: "normal" }}>(optional)</span>
                </label>
                <div style={{ position: "relative" }}>
                  <textarea 
                    placeholder="Z.B. Besondere Wünsche, Ablauf, Location-Besonderheiten..." 
                    className="form-input"
                    value={form.details} 
                    onChange={e => setForm({ ...form, details: e.target.value })}
                    style={{ 
                      minHeight: "90px", 
                      resize: "vertical", 
                      paddingLeft: "16px",
                      lineHeight: "1.5"
                    }} 
                  />
                </div>
              </div>

            </div>

            <button className="cta-btn" onClick={handleSubmit} disabled={loading}
              style={{ width: "100%", marginTop: 28, opacity: loading ? 0.7 : 1 }}>
              {loading ? "Wird geprüft …" : "Kostenlos Verfügbarkeit anfragen"}
            </button>

            <p style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.25)", marginTop: 14, fontFamily: "'Outfit', sans-serif", letterSpacing: "0.05em" }}>
              Kostenlos & unverbindlich · Antwort innerhalb von 6h
            </p>
          </div>
        ) : (
          <div style={{ padding: "0 36px 48px", textAlign: "center", animation: "fadeInUp 0.5s ease both" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(200,169,110,0.1)", border: `1px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <CheckCircle size={28} color={GOLD} />
            </div>
            <h3 className="font-display" style={{ fontSize: 26, fontWeight: 300, color: "#fff", marginBottom: 16, lineHeight: 1.3 }}>
              Vielen Dank für<br />
              <span style={{ color: GOLD }}>deine Anfrage!</span>
            </h3>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: 380, margin: "0 auto 28px" }}>
              Wir verzeichnen aktuell eine extrem hohe Nachfrage für die kommende Hochzeitssaison. Wir prüfen unsere Kapazitäten für dein Datum und melden uns <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>innerhalb von 6 Stunden</strong> bei dir.
            </p>
            <div style={{ background: "rgba(200,169,110,0.06)", border: "1px solid rgba(200,169,110,0.15)", padding: "14px 20px", marginBottom: 24 }}>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "rgba(200,169,110,0.8)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                🔥 Tipp: Sommer-Termine sind stark nachgefragt
              </p>
            </div>
            <button className="cta-btn-outline" onClick={onClose}>Schließen</button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── INFO MODAL: 360 VIDEO ── */
function InfoModal360({ onClose }) {
  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="info-modal-box">
        <div style={{ padding: "36px 36px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
            <div>
              <p className="ticker-line" style={{ marginBottom: 8 }}>Service 01</p>
              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 300, color: "#fff", lineHeight: 1.2 }}>
                360° Video<br />
                <span style={{ color: GOLD }}>Plattform</span>
              </h2>
            </div>
            <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)", padding: 4, marginTop: -4 }}>
              <X size={20} />
            </button>
          </div>
          <div className="divider-gold" style={{ margin: "0 0 24px 0", width: 40 }} />
        </div>

        <div style={{ padding: "0 36px 36px" }}>
          {/* Key advantage highlight */}
          <div style={{ background: `linear-gradient(135deg, rgba(200,169,110,0.1) 0%, rgba(200,169,110,0.04) 100%)`, border: `1px solid rgba(200,169,110,0.25)`, padding: "20px 22px", marginBottom: 24, borderRadius: 2 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div style={{ width: 36, height: 36, border: `1px solid ${GOLD}50`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: `${GOLD}10` }}>
                <Sparkles size={16} color={GOLD} />
              </div>
              <div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: GOLD, marginBottom: 8 }}>
                  Der entscheidende Vorteil
                </p>
                <p className="font-display" style={{ fontSize: 18, fontWeight: 400, color: "#fff", lineHeight: 1.5, fontStyle: "italic" }}>
                  Dein Smartphone. Dein Video. Sofort auf deinem Gerät.
                </p>
              </div>
            </div>
          </div>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: 20 }}>
            Das Beste an unserer 360°-Plattform: Gäste klemmen einfach ihr eigenes Smartphone in die Halterung — und filmen direkt auf ihrem persönlichen Gerät. Kein lästiges Warten auf Video-Übertragungen von fremden Kameras, keine Apps, keine Wartezeiten.
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: 28 }}>
            Das Video ist unmittelbar nach der Aufnahme in der eigenen Kamera-Galerie — bereit zum Teilen auf Instagram, TikTok oder WhatsApp. Maximale Flexibilität, null Aufwand, 100 % dein Moment.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 28 }}>
            {[
              "Eigenes Smartphone = direkt in der Galerie",
              "Kein Warten auf fremde Kameraübertragungen",
              "Sofort teilbar auf Social Media",
              "Slow-Motion in Studioqualität",
              "Operator & professionelles Licht-Setup inklusive",
              "Unbegrenzte Takes während des Events",
            ].map(f => (
              <div key={f} className="promise-item">
                <CheckCircle size={15} color={GOLD} style={{ flexShrink: 0, marginTop: 1 }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>{f}</span>
              </div>
            ))}
          </div>

          <button className="cta-btn-outline" onClick={onClose} style={{ width: "100%" }}>Schließen</button>
        </div>
      </div>
    </div>
  );
}

/* ── INFO MODAL: SLUSH EIS ── */
function InfoModalSlush({ onClose }) {
  const flavors = [
    { color: "#3B82F6", label: "Blaue Himbeere", sub: "Blue Rocket / Blaubeere" },
    { color: "#EF4444", label: "Kirsche", sub: "oder Erdbeere" },
    { color: "#22C55E", label: "Waldmeister", sub: "Klassisch Grün" },
    { color: "#FACC15", label: "Lemon / Zitrone", sub: "Frisch & Gelb" },
  ];

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="info-modal-box">
        <div style={{ padding: "36px 36px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
            <div>
              <p className="ticker-line" style={{ marginBottom: 8 }}>Service 02</p>
              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 300, color: "#fff", lineHeight: 1.2 }}>
                Slush Eis<br />
                <span style={{ color: GOLD }}>Maschine</span>
              </h2>
            </div>
            <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)", padding: 4, marginTop: -4 }}>
              <X size={20} />
            </button>
          </div>
          <div className="divider-gold" style={{ margin: "0 0 24px 0", width: 40 }} />
        </div>

        <div style={{ padding: "0 36px 36px" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: 28 }}>
            Unsere Premium-Slush-Maschinen kommen mit handverlesenen Geschmacksrichtungen — für Kinder und Erwachsene. Du wählst deine Lieblingssorten aus dem folgenden Angebot:
          </p>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: GOLD, marginBottom: 16 }}>
            Wählbare Geschmacksrichtungen
          </p>

          {flavors.map(({ color, label, sub }) => (
            <div key={label} className="flavor-pill">
              <div className="flavor-dot" style={{ background: color, boxShadow: `0 0 8px ${color}60` }} />
              <div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500, color: "#fff" }}>{label}</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{sub}</p>
              </div>
            </div>
          ))}

          <div style={{ display: "flex", flexDirection: "column", gap: 0, margin: "24px 0 28px" }}>
            {[
              "Ganztägige Nutzung ohne Limits inklusive",
              "Lieferung, Aufbau & Reinigung inklusive",
              "Alkoholfreie Optionen für alle Altersgruppen",
              "Kein separates Personal notwendig",
            ].map(f => (
              <div key={f} className="promise-item">
                <CheckCircle size={15} color={GOLD} style={{ flexShrink: 0, marginTop: 1 }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>{f}</span>
              </div>
            ))}
          </div>

          <button className="cta-btn-outline" onClick={onClose} style={{ width: "100%" }}>Schließen</button>
        </div>
      </div>
    </div>
  );
}

/* ── MAIN APP ── */
export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [infoModal, setInfoModal] = useState(null); // "360" | "slush" | null
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);

    // Close dropdown on outside click
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setNavOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.head.removeChild(styleEl);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openBooking = () => { setNavOpen(false); setModalOpen(true); };
  const openInfo360 = () => { setNavOpen(false); setInfoModal("360"); };
  const openInfoSlush = () => { setNavOpen(false); setInfoModal("slush"); };

  // Banner height offset for nav positioning
  const BANNER_H = 42;

  return (
    <div className="font-body" style={{ background: DARK, minHeight: "100vh", color: "#fff" }}>

      {/* ── URGENCY BANNER ── */}
      <div className="urgency-banner">
        <div className="urgency-banner-dot" />
        <span>
          <strong style={{ color: GOLD_LIGHT, fontWeight: 600 }}>Wichtiger Hinweis:</strong>{" "}
          Aufgrund der extrem hohen Nachfrage für die Sommer-Saison können Termine aktuell nur mit mindestens{" "}
          <strong style={{ color: "#fff", fontWeight: 600 }}>2 Wochen Vorlaufzeit</strong> gebucht werden.
        </span>
        <div className="urgency-banner-dot" />
      </div>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed",
        top: BANNER_H,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 40px",
        height: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(17,17,16,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(200,169,110,0.1)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "all 0.4s ease",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, border: `1px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Sparkles size={13} color={GOLD} />
          </div>
          <span className="font-display" style={{ fontSize: 18, letterSpacing: "0.05em", color: "#fff", fontWeight: 300 }}>
            Event<span style={{ color: GOLD }}>Ruhr</span>
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Dropdown Menu */}
          <div style={{ position: "relative" }} ref={navRef} className="hide-mobile">
            <button
              className="nav-dropdown-btn"
              onClick={() => setNavOpen(v => !v)}
              aria-expanded={navOpen}
            >
              <Menu size={14} />
              Menü
              <ChevronDown size={13} style={{ transition: "transform 0.25s ease", transform: navOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </button>

            {navOpen && (
              <div className="nav-dropdown-menu">
                <button className="nav-dropdown-item" onClick={() => setNavOpen(false)}>Home</button>
                <button className="nav-dropdown-item" onClick={() => setNavOpen(false)}>Galerie</button>
                <button className="nav-dropdown-item" onClick={openInfo360}>360 Video Plattform</button>
                <button className="nav-dropdown-item" onClick={openInfoSlush}>Slush Eis Maschine</button>
                <button className="nav-dropdown-item" onClick={openBooking}>Kontakt</button>
                <button className="nav-dropdown-item" onClick={() => setNavOpen(false)} style={{ color: "rgba(255,255,255,0.3)", fontSize: 11 }}>Impressum</button>
              </div>
            )}
          </div>

          {/* CTA */}
          <button className="cta-btn" style={{ padding: "12px 28px", fontSize: 11 }} onClick={openBooking}>
            Anfragen
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ paddingTop: BANNER_H + 68, minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>

        {/* Background grain overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")", opacity: 0.4, pointerEvents: "none" }} />

        {/* Gold accent line */}
        <div style={{ position: "absolute", top: 0, left: "50%", width: 1, height: "30%", background: `linear-gradient(to bottom, transparent, ${GOLD}40, transparent)`, pointerEvents: "none" }} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 40px 40px", maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative" }}>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, animation: "fadeInUp 0.6s ease 0.1s both" }}>
            <div className="divider-gold" style={{ width: 32, margin: 0 }} />
            <span className="ticker-line">Premium Event-Equipment · Ruhrgebiet</span>
          </div>

          {/* Headline */}
          <h1 className="font-display" style={{ fontSize: "clamp(42px, 6vw, 82px)", fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.01em", marginBottom: 24, animation: "fadeInUp 0.7s ease 0.2s both", maxWidth: 700 }}>
            Das ultimative<br />
            <em style={{ color: GOLD, fontStyle: "italic" }}>Highlight</em> für<br />
            dein Event.
          </h1>

          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 480, marginBottom: 40, animation: "fadeInUp 0.7s ease 0.3s both", fontWeight: 300 }}>
            Premium 360° Video Booth & Frozen Cocktail Bar für Hochzeiten und Groß-Events im Ruhrgebiet.
          </p>

          {/* ── Hero CTA: nur ein Button (kein "Mehr erfahren") ── */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "fadeInUp 0.7s ease 0.4s both", marginBottom: 60 }}>
            <button className="cta-btn" onClick={openBooking}>
              Jetzt Wunschdatum prüfen
            </button>
          </div>

          {/* ── Hero Split Cards ── */}
          <div className="hero-split" style={{ display: "flex", gap: 20, animation: "fadeInUp 0.8s ease 0.5s both" }}>

            {/* Card 1: 360 */}
            <div className="hero-card" style={{ flex: 1, minHeight: 280, borderRadius: 2, display: "flex", flexDirection: "column" }}>
              {/* Image */}
              <img
                src="https://imgs.search.brave.com/hZmEKHjRQC5IKrWS9yIOsGw371bikCCS7_kP9EudvOw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcm9m/aWxtLmFlL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzAxL3Jz/d182MDBoXzYwMGNn/X3RydWUud2VicA"
                alt="360 Video Plattform"
                style={{ width: "100%", height: 450, objectFit: "cover", borderRadius: "2px 2px 0 0", display: "block" }}
              />
              <div style={{ flex: 1, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ width: 48, height: 48, border: `1px solid rgba(200,169,110,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Camera size={22} color={GOLD} />
                  </div>
                  <p className="ticker-line" style={{ marginBottom: 10 }}>Service 01</p>
                  <h3 className="font-display" style={{ fontSize: 28, fontWeight: 300, color: "#fff", lineHeight: 1.2 }}>
                    360° Video<br />Plattform
                  </h3>
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                    {["Slow-Motion", "Studio-Qualität", "HD-Download"].map(tag => (
                      <span key={tag} style={{ fontSize: 11, fontFamily: "'Outfit', sans-serif", letterSpacing: "0.08em", color: "rgba(200,169,110,0.7)", border: "1px solid rgba(200,169,110,0.2)", padding: "4px 10px" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <div className="divider-gold" style={{ width: 20, margin: 0 }} />
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.06em" }}>Inkl. Operator & Setup</span>
                  </div>
                  <button
                    onClick={openInfo360}
                    style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, padding: 0 }}
                  >
                    <Info size={13} color={GOLD} />
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: `1px solid ${GOLD}40`, paddingBottom: 1 }}>
                      Erfahre mehr
                    </span>
                  </button>
                </div>
              </div>
              {/* Decorative corner */}
              <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, borderBottom: `1px solid rgba(200,169,110,0.08)`, borderLeft: `1px solid rgba(200,169,110,0.08)`, pointerEvents: "none" }} />
            </div>

            {/* Card 2: Slush */}
            <div className="hero-card" style={{ flex: 1, minHeight: 280, borderRadius: 2, display: "flex", flexDirection: "column", background: `linear-gradient(145deg, ${DARK3} 0%, ${DARK2} 100%)` }}>
              {/* Image */}
              <img
                src="https://ggm.bynder.com/asset/9e453325-8115-4491-ad1a-17638e092a21/JPG/SMG36E_room_164788.jpg"
                alt="Slush Eis Maschine"
                style={{ width: "100%", height: 300, objectFit: "cover", borderRadius: "2px 2px 0 0", display: "block" }}
              />
              <div style={{ flex: 1, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ width: 48, height: 48, border: `1px solid rgba(200,169,110,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, background: "rgba(200,169,110,0.05)" }}>
                    <Wine size={22} color={GOLD} />
                  </div>
                  <p className="ticker-line" style={{ marginBottom: 10 }}>Service 02</p>
                  <h3 className="font-display" style={{ fontSize: 28, fontWeight: 300, color: "#fff", lineHeight: 1.2 }}>
                    Frozen Cocktail<br />& Slush Eis Bar
                  </h3>
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                    {["Unbegrenzt", "Ganztägig", "Alkoholfrei+"].map(tag => (
                      <span key={tag} style={{ fontSize: 11, fontFamily: "'Outfit', sans-serif", letterSpacing: "0.08em", color: "rgba(200,169,110,0.7)", border: "1px solid rgba(200,169,110,0.2)", padding: "4px 10px" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <div className="divider-gold" style={{ width: 20, margin: 0 }} />
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.06em" }}>Inkl. Lieferung & Abbau</span>
                  </div>
                  <button
                    onClick={openInfoSlush}
                    style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, padding: 0 }}
                  >
                    <Info size={13} color={GOLD} />
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: `1px solid ${GOLD}40`, paddingBottom: 1 }}>
                      Erfahre mehr
                    </span>
                  </button>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, width: 120, height: 120, borderTop: `1px solid rgba(200,169,110,0.08)`, borderRight: `1px solid rgba(200,169,110,0.08)`, pointerEvents: "none" }} />
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 40, marginTop: 40, flexWrap: "wrap", animation: "fadeInUp 0.7s ease 0.6s both" }}>
            {[["150+", "Events begleitet"], ["100%", "Kundenzufriedenheit"], ["6h", "Antwortzeit"]].map(([num, label]) => (
              <div key={label} className="stat-card">
                <p className="font-display" style={{ fontSize: 28, fontWeight: 400, color: GOLD, lineHeight: 1 }}>{num}</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 4, letterSpacing: "0.06em", fontFamily: "'Outfit', sans-serif" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: "100px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="ticker-line" style={{ marginBottom: 16 }}>Was wir bieten</p>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 20 }}>
            Kurz & Knapp —<br />
            <span style={{ color: GOLD }}>die Leistungen</span>
          </h2>
          <div className="divider-gold" style={{ margin: "24px auto" }} />
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", maxWidth: 440, margin: "0 auto", lineHeight: 1.7, fontWeight: 300 }}>
            Alles aus einer Hand. Kein Koordinationsaufwand. Kein Stress am Eventtag.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 60 }}>

          {/* Service Card 1 */}
          <div className="service-card" style={{ borderRadius: 2, padding: "40px 36px" }}>
            <div style={{ width: 52, height: 52, border: `1px solid rgba(200,169,110,0.25)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28, background: "rgba(200,169,110,0.04)" }}>
              <Camera size={22} color={GOLD} />
            </div>
            <h3 className="font-display" style={{ fontSize: 26, fontWeight: 300, color: "#fff", marginBottom: 14, lineHeight: 1.2 }}>
              360° Video Plattform
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 28, fontWeight: 300 }}>
              Eine rotierende Plattform mit professionellem Kamerasystem erzeugt spektakuläre Slow-Motion-Videos in Studioqualität — direkt teilbar als Link oder Download.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 28 }}>
              {["Operator vor Ort inklusive", "Professionelles Licht-Setup", "Sofortiger Download & Sharing", "Unbegrenzte Takes"].map(f => (
                <div key={f} className="promise-item">
                  <CheckCircle size={15} color={GOLD} style={{ flexShrink: 0, marginTop: 1 }} />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>{f}</span>
                </div>
              ))}
            </div>
            <button
              onClick={openInfo360}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, padding: 0 }}
            >
              <Info size={13} color={GOLD} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: `1px solid ${GOLD}40`, paddingBottom: 1 }}>
                Erfahre mehr
              </span>
            </button>
          </div>

          {/* Service Card 2 */}
          <div className="service-card" style={{ borderRadius: 2, padding: "40px 36px" }}>
            <div style={{ width: 52, height: 52, border: `1px solid rgba(200,169,110,0.25)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28, background: "rgba(200,169,110,0.04)" }}>
              <Wine size={22} color={GOLD} />
            </div>
            <h3 className="font-display" style={{ fontSize: 26, fontWeight: 300, color: "#fff", marginBottom: 14, lineHeight: 1.2 }}>
              Frozen Cocktail<br />& Slush Eis Bar
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 28, fontWeight: 300 }}>
              Premium-Maschinen mit verschiedenen Sorten — für Kinder und Erwachsene. Die Bar steht den ganzen Tag ohne weitere Kosten oder Limits zur Verfügung.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 28 }}>
              {["Ganztägige Nutzung inklusive", "Mehrere Geschmackssorten", "Alkoholfreie Optionen", "Reinigung & Abbau inklusive"].map(f => (
                <div key={f} className="promise-item">
                  <CheckCircle size={15} color={GOLD} style={{ flexShrink: 0, marginTop: 1 }} />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>{f}</span>
                </div>
              ))}
            </div>
            <button
              onClick={openInfoSlush}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, padding: 0 }}
            >
              <Info size={13} color={GOLD} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: `1px solid ${GOLD}40`, paddingBottom: 1 }}>
                Erfahre mehr
              </span>
            </button>
          </div>

          {/* Promise Card */}
          <div style={{ background: `linear-gradient(145deg, rgba(200,169,110,0.08) 0%, rgba(200,169,110,0.03) 100%)`, border: `1px solid rgba(200,169,110,0.25)`, borderRadius: 2, padding: "40px 36px" }}>
            <div style={{ width: 52, height: 52, border: `1px solid ${GOLD}40`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28, background: `${GOLD}10` }}>
              <Shield size={22} color={GOLD} />
            </div>
            <h3 className="font-display" style={{ fontSize: 26, fontWeight: 300, color: GOLD, marginBottom: 14, lineHeight: 1.2 }}>
              Ein Preis.<br />
              Alles inklusive.
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 28, fontWeight: 300 }}>
              Der Preis richtet sich ausschließlich nach der Dauer und Größe deines Events. Die Slush-Maschine ist für den gesamten Tag ohne weitere Kosten dabei.
            </p>
            <div style={{ borderTop: "1px solid rgba(200,169,110,0.15)", paddingTop: 24 }}>
              <p className="font-display" style={{ fontSize: 20, fontWeight: 300, color: "#fff", lineHeight: 1.5, fontStyle: "italic" }}>
                "Einmal buchen — null Stress am Eventtag."
              </p>
            </div>
            <button className="cta-btn" style={{ marginTop: 28, width: "100%", fontSize: 12 }} onClick={openBooking}>
              Jetzt Preis anfragen
            </button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "60px 40px 100px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="ticker-line" style={{ marginBottom: 16 }}>Das sagen unsere Kunden</p>
            <div className="divider-gold" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { name: "Lena & Marco K.", event: "Hochzeit · Essen", text: "Die 360°-Plattform war das absolute Highlight unserer Hochzeit. Alle Gäste haben noch Tage später davon gesprochen." },
              { name: "TechCorp GmbH", event: "Firmenfeier · Dortmund", text: "Professionelle Abwicklung von Anfang bis Ende. Die Slush-Bar war ein riesiger Hit bei unserem Team-Event mit 300 Personen." },
              { name: "Ali R.", event: "Hochzeit · Bochum", text: "Das war das absolute Highlight für die kleinen Kinder auf der Hochzeit! Die Slush Eis Maschine kam sensationell gut an, wir haben es geliebt." },
            ].map(({ name, event, text }) => (
              <div key={name} style={{ background: DARK3, border: "1px solid rgba(255,255,255,0.05)", borderRadius: 2, padding: "28px 28px 24px" }}>
                <StarRating />
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: "16px 0 20px", fontWeight: 300, fontStyle: "italic", fontFamily: "'Cormorant Garamond', serif" }}>
                  "{text}"
                </p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16 }}>
                  <p style={{ fontSize: 13, fontWeight: 500, color: "#fff", fontFamily: "'Outfit', sans-serif" }}>{name}</p>
                  <p style={{ fontSize: 11, color: GOLD, marginTop: 2, letterSpacing: "0.08em", fontFamily: "'Outfit', sans-serif" }}>{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: "80px 40px", background: DARK2, borderTop: "1px solid rgba(200,169,110,0.1)", borderBottom: "1px solid rgba(200,169,110,0.1)", textAlign: "center" }}>
        <p className="ticker-line" style={{ marginBottom: 20 }}>Bereit für dein Event?</p>
        <h2 className="font-display" style={{ fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 300, color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>
          Sichere dir jetzt<br />
          <span style={{ color: GOLD }}>deinen Wunschtermin.</span>
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", marginBottom: 36, fontWeight: 300, lineHeight: 1.6 }}>
          Hochzeiten, Firmenfeiern, Geburtstage — wir sind dabei.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
          <button className="cta-btn" onClick={openBooking}>
            Jetzt Wunschdatum prüfen
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Clock size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.05em" }}>
              Antwort innerhalb von 6 Stunden
            </span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 24, height: 24, border: `1px solid ${GOLD}60`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Sparkles size={11} color={GOLD} />
          </div>
          <span className="font-display" style={{ fontSize: 16, color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
            Event<span style={{ color: GOLD + "99" }}>Ruhr</span>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <MapPin size={13} color={GOLD + "80"} />
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.06em" }}>
            Ruhrgebiet, Deutschland
          </span>
        </div>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.15)", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.06em" }}>
          © 2025 EventRuhr · Impressum · Datenschutz
        </p>
      </footer>

      {/* ── MODALS ── */}
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
      {infoModal === "360" && <InfoModal360 onClose={() => setInfoModal(null)} />}
      {infoModal === "slush" && <InfoModalSlush onClose={() => setInfoModal(null)} />}
    </div>
  );
}
