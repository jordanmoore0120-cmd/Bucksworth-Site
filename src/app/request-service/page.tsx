"use client";

import { useState, useEffect, useRef } from "react";
import { SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";

/* ── Phoenix / Tucson coords for geo-detection ── */
const BRANCHES = {
  phoenix: { lat: 33.4484, lng: -112.074, label: "Phoenix", phone: "(480) 422-8388", phoneRaw: "4804228388" },
  tucson:  { lat: 32.2226, lng: -110.9747, label: "Tucson",  phone: "(520) 284-9930", phoneRaw: "5202849930" },
} as const;

type BranchKey = keyof typeof BRANCHES;

/* ── Service images mapped to slugs ── */
const SERVICE_IMAGES: Record<string, string> = {
  "pest-and-termite": "/images/photos/tech-spraying-detail.jpg",
  "air-conditioning-and-heating": "/images/photos/tech-hvac-rooftop.jpg",
  "plumbing-and-water-heaters": "/images/photos/tech-detail-work.jpg",
  "weed-and-lawn-care": "/images/weeds-control.jpg",
};

function haversine(lat1: number, lng1: number, lat2: number, lng2: number) {
  const toRad = (n: number) => (n * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 3959;
}

export default function RequestServicePage() {
  const [branch, setBranch] = useState<BranchKey>("phoenix");
  const [geoStatus, setGeoStatus] = useState<"idle" | "detecting" | "done" | "denied">("idle");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", phone: "", email: "", address: "", contactMethod: "phone" as "email" | "text" | "phone", howHeard: "" });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  /* ── Auto-detect location on mount ── */
  useEffect(() => {
    if ("geolocation" in navigator) {
      setGeoStatus("detecting");
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const dPhx = haversine(latitude, longitude, BRANCHES.phoenix.lat, BRANCHES.phoenix.lng);
          const dTuc = haversine(latitude, longitude, BRANCHES.tucson.lat, BRANCHES.tucson.lng);
          setBranch(dTuc < dPhx ? "tucson" : "phoenix");
          setGeoStatus("done");
        },
        () => setGeoStatus("denied"),
        { timeout: 8000 }
      );
    }
  }, []);

  const branchInfo = BRANCHES[branch];
  const activeVertical = SERVICES.find((s) => s.slug === selectedService);

  function handleServiceClick(slug: string) {
    setSelectedService(slug === selectedService ? null : slug);
    setSelectedSub(null);
    // Scroll form into view after a tick
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production this would POST to FieldRoutes / Demand IQ / email webhook
    // For now show confirmation
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <main className="rs-page">
        <div className="rs-success">
          <div className="rs-success-icon">✓</div>
          <h1>We&apos;ve Got Your Request!</h1>
          <p>A Bucksworth team member will contact you within the hour during business hours. For immediate assistance, call us directly:</p>
          <a href={`tel:${branchInfo.phoneRaw}`} className="rs-success-phone">{branchInfo.phone}</a>
          <p className="rs-success-sub">Mon–Sat 7am–6pm &bull; Emergency service available</p>
        </div>
      </main>
    );
  }

  return (
    <main className="rs-page">
      {/* ── Hero ── */}
      <section className="rs-hero">
        <h1>Schedule a Service</h1>
        <div className="rs-hero-rule" />
        <p>
          Pick your service and we&apos;ll take care of the rest. Need help now? Call{" "}
          <a href={`tel:${branchInfo.phoneRaw}`} className="rs-hero-phone">{branchInfo.phone}</a>
        </p>
      </section>

      {/* ── Branch selector ── */}
      <section className="rs-branch">
        <div className="rs-branch-bar">
          {geoStatus === "detecting" && (
            <span className="rs-geo-status">
              <span className="rs-geo-spinner" /> Detecting your location…
            </span>
          )}
          {geoStatus === "done" && (
            <span className="rs-geo-status rs-geo-found">
              📍 We detected you near <strong>{branchInfo.label}</strong>
            </span>
          )}
          {geoStatus === "denied" && (
            <span className="rs-geo-status">Select your area below</span>
          )}
          {geoStatus === "idle" && (
            <button
              className="rs-geo-btn"
              onClick={() => {
                if ("geolocation" in navigator) {
                  setGeoStatus("detecting");
                  navigator.geolocation.getCurrentPosition(
                    (pos) => {
                      const dPhx = haversine(pos.coords.latitude, pos.coords.longitude, BRANCHES.phoenix.lat, BRANCHES.phoenix.lng);
                      const dTuc = haversine(pos.coords.latitude, pos.coords.longitude, BRANCHES.tucson.lat, BRANCHES.tucson.lng);
                      setBranch(dTuc < dPhx ? "tucson" : "phoenix");
                      setGeoStatus("done");
                    },
                    () => setGeoStatus("denied"),
                    { timeout: 8000 }
                  );
                }
              }}
            >
              📍 Use Your Location
            </button>
          )}
        </div>
        <div className="rs-branch-toggle">
          <button
            className={`rs-branch-btn ${branch === "phoenix" ? "rs-branch-btn--active" : ""}`}
            onClick={() => setBranch("phoenix")}
          >
            Phoenix Metro
          </button>
          <button
            className={`rs-branch-btn ${branch === "tucson" ? "rs-branch-btn--active" : ""}`}
            onClick={() => setBranch("tucson")}
          >
            Tucson Metro
          </button>
        </div>
      </section>

      {/* ── Service cards ── */}
      <section className="rs-services">
        <h2 className="rs-section-title">How can we help?</h2>
        <div className="rs-cards">
          {SERVICES.map((svc) => (
            <button
              key={svc.slug}
              className={`rs-card ${selectedService === svc.slug ? "rs-card--selected" : ""}`}
              onClick={() => handleServiceClick(svc.slug)}
            >
              <div className="rs-card-img" style={{ backgroundImage: `url(${SERVICE_IMAGES[svc.slug] || "/images/hp_img_1.jpg"})` }} />
              <span className="rs-card-label">{svc.name}</span>
              {selectedService === svc.slug && <span className="rs-card-check">✓</span>}
            </button>
          ))}
        </div>
      </section>

      {/* ── Sub-service selector (optional, shows after picking a vertical) ── */}
      {activeVertical && (
        <section className="rs-subs">
          <h3 className="rs-section-subtitle">What specifically? <span className="rs-optional">(optional)</span></h3>
          <div className="rs-sub-grid">
            {activeVertical.subServices
              .filter((sub) => !sub.slug.includes("warranty")) // hide warranty items from request flow
              .map((sub) => (
              <button
                key={sub.slug}
                className={`rs-sub-chip ${selectedSub === sub.slug ? "rs-sub-chip--active" : ""}`}
                onClick={() => setSelectedSub(selectedSub === sub.slug ? null : sub.slug)}
              >
                {sub.name}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ── Contact form ── */}
      <section className="rs-form-section" ref={formRef}>
        <h2 className="rs-section-title">Your Information</h2>
        <p className="rs-form-sub">We&apos;ll use this to confirm service availability in your area and get back to you fast.</p>
        <form className="rs-form" onSubmit={handleSubmit}>
          <div className="rs-form-row">
            <div className="rs-field">
              <label htmlFor="rs-fn">First Name<span className="rs-req">*</span></label>
              <input id="rs-fn" type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} placeholder="First name" />
            </div>
            <div className="rs-field">
              <label htmlFor="rs-ln">Last Name<span className="rs-req">*</span></label>
              <input id="rs-ln" type="text" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} placeholder="Last name" />
            </div>
          </div>
          <div className="rs-form-row">
            <div className="rs-field">
              <label htmlFor="rs-ph">Phone<span className="rs-req">*</span></label>
              <input id="rs-ph" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="(000) 000-0000" />
            </div>
            <div className="rs-field">
              <label htmlFor="rs-em">Email<span className="rs-req">*</span></label>
              <input id="rs-em" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="email@example.com" />
            </div>
          </div>
          <div className="rs-field rs-field--full">
            <label htmlFor="rs-addr">Home Address<span className="rs-req">*</span></label>
            <input id="rs-addr" type="text" required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="Street address, city, AZ" />
            <span className="rs-field-hint">We&apos;ll confirm we service your area</span>
          </div>

          <div className="rs-contact-method">
            <span className="rs-contact-label">Preferred contact method:</span>
            <div className="rs-radio-group">
              {(["phone", "text", "email"] as const).map((m) => (
                <label key={m} className="rs-radio">
                  <input type="radio" name="contactMethod" value={m} checked={formData.contactMethod === m} onChange={() => setFormData({ ...formData, contactMethod: m })} />
                  <span className="rs-radio-dot" />
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div className="rs-field rs-field--full">
            <label htmlFor="rs-how">How did you hear about us?</label>
            <select id="rs-how" value={formData.howHeard} onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}>
              <option value="">Select an answer</option>
              <option value="google">Google Search</option>
              <option value="referral">Friend / Neighbor Referral</option>
              <option value="social">Social Media</option>
              <option value="nextdoor">Nextdoor</option>
              <option value="truck">Saw Our Truck</option>
              <option value="door">Door Hanger / Flyer</option>
              <option value="repeat">Returning Customer</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button type="submit" className="rs-submit">
            Request Service →
          </button>
          <p className="rs-disclaimer">By submitting, you agree to be contacted by Bucksworth Home Services regarding your service request. We never share your information.</p>
        </form>
      </section>
    </main>
  );
}
