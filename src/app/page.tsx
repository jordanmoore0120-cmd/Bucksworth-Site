export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", textAlign: "center", padding: "80px 24px", background: "#0A1628", color: "#fff", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "48px", fontWeight: 800, marginBottom: "16px" }}>
        Bucksworth Home Services
      </h1>
      <p style={{ fontSize: "20px", color: "rgba(255,255,255,.7)", marginBottom: "32px" }}>
        Pest control, HVAC, plumbing &amp; home services serving Phoenix and Tucson, AZ
      </p>
      <a href="tel:+14804228388" style={{ background: "#C41E3A", color: "#fff", padding: "14px 28px", borderRadius: "10px", fontWeight: 700, fontSize: "18px", textDecoration: "none" }}>
        Call (480) 422-8388
      </a>
      <p style={{ marginTop: "40px", fontSize: "14px", color: "rgba(255,255,255,.4)" }}>
        &copy; 2026 Bucksworth Home Services LLC | AZ ROC #343924
      </p>
    </main>
  );
}
