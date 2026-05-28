import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GOLD = "#C8A96E";

const galleryStyles = `
  /* ── 3-Spalten Grid für Querformat (Landscape) ── */
  .gallery-grid-landscape {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 20px;
  }

  /* ── 4-Spalten Grid für Hochformat (Portrait) ── */
  .gallery-grid-portrait {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 40px;
  }

  /* ── Video Container Styling ── */
  .video-wrapper {
    width: 100%;
    background: #000;
    border: 1px solid rgba(200,169,110,0.15);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .video-wrapper:hover {
    border-color: rgba(200,169,110,0.5);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(200,169,110,0.1);
    transform: translateY(-2px);
  }

  .video-wrapper video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* ── Seitenverhältnisse erzwingen ── */
  .aspect-landscape { aspect-ratio: 16 / 9; }
  .aspect-portrait { aspect-ratio: 9 / 16; }

  /* ── Mobile Anpassungen (Responsive Design) ── */
  @media (max-width: 1024px) {
    .gallery-grid-landscape { grid-template-columns: repeat(2, 1fr); }
    .gallery-grid-portrait { grid-template-columns: repeat(3, 1fr); }
  }
  
  @media (max-width: 768px) {
    .gallery-grid-landscape { grid-template-columns: 1fr; }
    .gallery-grid-portrait { grid-template-columns: repeat(2, 1fr); }
  }
  
  @media (max-width: 480px) {
    .gallery-grid-portrait { grid-template-columns: 1fr; }
  }
`;

export default function Gallery() {
  const navigate = useNavigate();

  // CSS dynamisch einfügen (wie auf der Startseite)
  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = galleryStyles;
    document.head.appendChild(styleEl);
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // Hier trägst du später die Namen deiner Videodateien ein (liegen im "public" Ordner)
  const landscapeVideos = ["/video3.mp4", "/video4.mp4", "/video5.mp4"];
  const portraitVideos = ["/video1.mp4", "/video2.mp4", "/video6.mp4", "/video7.mp4"];

  return (
    <div style={{ background: "#111110", minHeight: "100vh", color: "#fff", padding: "60px 40px", fontFamily: "'Outfit', sans-serif" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        
        {/* ── HEADER BEREICH ── */}
        <button 
          onClick={() => navigate("/")} 
          style={{ background: "none", border: "none", color: GOLD, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, textTransform: "uppercase", fontSize: 12, letterSpacing: "0.08em", marginBottom: 40 }}
        >
          <ArrowLeft size={14} /> Zurück zur Startseite
        </button>
        
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 300, marginBottom: 12 }}>
          Unsere <em style={{ color: GOLD, fontStyle: "italic" }}>Galerie</em>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, marginBottom: 60, fontWeight: 300 }}>
          Eindrücke und Highlights der EventRuhr Deluxe Plattformen in Aktion.
        </p>

        {/* ── OBERE REIHE (Querformat) ── */}
     <div className="gallery-grid-landscape">
  {landscapeVideos.map((src, index) => (
    <div key={`land-${index}`} className="video-wrapper aspect-landscape">
      <video 
        src={src} 
        autoPlay    {/* Sorgt für den automatischen Start */}
        muted       {/* Zwingend erforderlich für autoPlay */}
        loop        {/* Startet das Video von vorne, wenn es zu Ende ist */}
        playsInline {/* Wichtig, damit es auf iPhones nicht automatisch im Vollbild aufpoppt */}
        /* controls kannst du weglassen, wenn der Nutzer nicht auf Pause drücken soll */
      />
    </div>
  ))}
</div>

        {/* ── UNTERE REIHE (Hochformat) ── */}
<div className="gallery-grid-portrait">
  {portraitVideos.map((src, index) => (
    <div key={`port-${index}`} className="video-wrapper aspect-portrait">
      <video 
        src={src} 
        autoPlay    {/* Sorgt für den automatischen Start */}
        muted       {/* Zwingend erforderlich für autoPlay */}
        loop        {/* Endlosschleife */}
        playsInline {/* Verhindert ungewollten Vollbild-Modus auf Handys */}
      />
    </div>
  ))}
</div>

        {/* ── TEXT UNTER DER GALERIE (Aus dem Screenshot) ── */}
        <div style={{ textAlign: "center", marginTop: 80, paddingBottom: 40 }}>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, fontWeight: 300, maxWidth: 800, margin: "0 auto", lineHeight: 1.6 }}>
            Experience a vibrant atmosphere where guests become lost in the magic of the moment. Our <strong style={{ color: "#fff", fontWeight: 500 }}>360° Video Booth</strong> captures every angle of your unforgettable event.
          </p>
        </div>

      </div>
    </div>
  );
}
