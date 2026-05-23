"use client";

import { useState, useEffect, useRef } from "react";
import { SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";

/* ── Phoenix / Tucson coords for geo-detection ── */
const BRANCHES = {
  phoenix: { lat: 33.4484, lng: -112.074, label: "Phoenix", phone: "(480) 422-8388", phoneRaw: "+14804228388" },
  tucson:  { lat: 32.2226, lng: -110.9747, label: "Tucson",  phone: "(520) 284-9930", phoneRaw: "+15202849930" },
} as const;

type BranchKey = keyof typeof BRANCHES;

/* Tucson-only service slugs */
const TUCSON_SERVICES = new Set(["pest-and-termite", "weed-and-lawn-care"]);

/* ── Service images mapped to slugs ── */
const SERVICE_IMAGES: Record<string, string> = {
  "pest-and-termite": "/images/photos/tech-spraying-detail.jpg",
  "air-conditioning-and-heating": "/images/photos/tech-hvac-rooftop.jpg",
  "plumbing-and-water-heaters": "/images/photos/plumbing-water-heater.jpg",
  "weed-and-lawn-care": "/images/weeds-control.jpg",
};

/* ── City coords for fine-grained geo (same as Header) ── */
const CITY_COORDS: Record<string, { lat: number; lng: number }> = {
  "ahwatukee-az": { lat: 33.3384, lng: -111.9838 },
  "anthem-az": { lat: 33.8644, lng: -112.1468 },
  "apache-junction-az": { lat: 33.4151, lng: -111.5496 },
  "buckeye-az": { lat: 33.3703, lng: -112.5838 },
  "casa-grande-az": { lat: 32.8795, lng: -111.7574 },
  "catalina-foothills-az": { lat: 32.2988, lng: -110.9186 },
  "chandler-az": { lat: 33.3062, lng: -111.8413 },
  "coolidge-az": { lat: 32.9776, lng: -111.5174 },
  "florence-az": { lat: 33.0314, lng: -111.3873 },
  "fountain-hills-az": { lat: 33.6117, lng: -111.7174 },
  "gilbert-az": { lat: 33.3528, lng: -111.789 },
  "gold-canyon-az": { lat: 33.3737, lng: -111.4421 },
  "goodyear-az": { lat: 33.4353, lng: -112.3577 },
  "green-valley-az": { lat: 31.8543, lng: -111.0002 },
  "laveen-az": { lat: 33.362, lng: -112.1674 },
  "litchfield-park-az": { lat: 33.4934, lng: -112.3577 },
  "marana-az": { lat: 32.4366, lng: -111.2253 },
  "maricopa-az": { lat: 33.0581, lng: -112.0476 },
  "mesa-az": { lat: 33.4152, lng: -111.8315 },
  "oro-valley-az": { lat: 32.3909, lng: -110.9665 },
  "paradise-valley-az": { lat: 33.531, lng: -111.9426 },
  "peoria-az": { lat: 33.5806, lng: -112.2374 },
  "phoenix-az": { lat: 33.4484, lng: -112.074 },
  "queen-creek-az": { lat: 33.2487, lng: -111.6343 },
  "red-rock-az": { lat: 32.5975, lng: -111.2541 },
  "sahuarita-az": { lat: 31.9576, lng: -110.9554 },
  "san-tan-valley-az": { lat: 33.2007, lng: -111.5584 },
  "scottsdale-az": { lat: 33.4942, lng: -111.9261 },
  "surprise-az": { lat: 33.6292, lng: -112.368 },
  "tempe-az": { lat: 33.4255, lng: -111.94 },
  "tucson-az": { lat: 32.2226, lng: -110.9747 },
  "vail-az": { lat: 32.0478, lng: -110.7104 },
  "valencia-west-az": { lat: 32.1344, lng: -111.1113 },
};

function haversine(lat1: number, lng1: number, lat2: number, lng2: number) {
  const toRad = (n: number) => (n * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 3959;
}

export default function RequestServiceClient() {
  const [branch, setBranch] = useState<BranchKey>("phoenix");
  const [detectedCity, setDetectedCity] = useState<string | null>(null);
  const [geoStatus, setGeoStatus] = useState<"idle" | "detecting" | "done" | "denied">("idle");
  const [showBranchPicker, setShowBranchPicker] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", phone: "", email: "", address: "", contactMethod: "phone" as "email" | "text" | "phone", howHeard: "" });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  /* ── Read location context from localStorage or URL params on mount ── */
  useEffect(() => {
    /* Priority 1: URL params (from clicking CTA on a city/service page) */
    const params = new URLSearchParams(window.location.search);
    const urlCity = params.get("city");
    const urlService = params.get("service");

    if (urlCity) {
      const city = CITIES.find((c) => c.slug === urlCity);
      if (city) {
        setBranch(city.branch);
        setDetectedCity(city.name);
        setGeoStatus("done");
      }
    }
    if (urlService) {
      setSelectedService(urlService);
    }

    /* Priority 2: localStorage (from Header geo-detection on any previous page) */
    if (!urlCity) {
      try {
        const savedBranch = localStorage.getItem("bsw_branch") as BranchKey | null;
        const savedCity = localStorage.getItem("bsw_city");
        if (savedBranch && (savedBranch === "phoenix" || savedBranch === "tucson")) {
          setBranch(savedBranch);
          if (savedCity) setDetectedCity(savedCity);
          setGeoStatus("done");
          return; /* skip fresh geo since we already have context */
        }
      } catch (_) { /* private browsing */ }

      /* Priority 3: Fresh geolocation if nothing else available */
      if ("geolocation" in navigator) {
        setGeoStatus("detecting");
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            let bestSlug = "phoenix-az";
            let bestDist = Infinity;
            for (const [slug, coords] of Object.entries(CITY_COORDS)) {
              const d = haversine(latitude, longitude, coords.lat, coords.lng);
              if (d < bestDist) {
                bestDist = d;
                bestSlug = slug;
              }
            }
            const city = CITIES.find((c) => c.slug === bestSlug);
            if (city) {
              setBranch(city.branch);
              setDetectedCity(city.name);
              try {
                localStorage.setItem("bsw_branch", city.branch);
                localStorage.setItem("bsw_city", city.name);
                localStorage.setItem("bsw_city_slug", city.slug);
              } catch (_) { /* private browsing */ }
            }
            setGeoStatus("done");
          },
          () => setGeoStatus("denied"),
          { timeout: 8000 }
        );
      }
    }
  }, []);

  const branchInfo = BRANCHES[branch];

  /* Filter services for Tucson — only pest + weed */
  const visibleServices = branch === "tucson"
    ? SERVICES.filter((s) => TUCSON_SERVICES.has(s.slug))
    : SERVICES;

  const activeVertical = SERVICES.find((s) => s.slug === selectedService);

  /* All cities sorted alphabetically for the picker */
  const allCities = [...CITIES].sort((a, b) => a.name.localeCompare(b.name));

  function handleCitySelect(city: typeof CITIES[number]) {
    setBranch(city.branch);
    setDetectedCity(city.name);
    setShowBranchPicker(false);
    setGeoStatus("done");
    /* Clear service selection if switching to Tucson and current service isn't available */
    if (city.branch === "tucson" && selectedService && !TUCSON_SERVICES.has(selectedService)) {
      setSelectedService(null);
      setSelectedSub(null);
    }
    try {
      localStorage.setItem("bsw_branch", city.branch);
      localStorage.setItem("bsw_city", city.name);
      localStorage.setItem("bsw_city_slug", city.slug);
      window.dispatchEvent(new Event("bsw-city-update"));
    } catch (_) { /* */ }
  }

  function handleServiceClick(slug: string) {
    setSelectedService(slug === selectedService ? null : slug);
    setSelectedSub(null);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
  }

  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/request-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: activeVertical?.name || "",
          subService: activeVertical?.subServices.find((s) => s.slug === selectedSub)?.name || "",
          city: detectedCity || branchInfo.label,
          branch,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Unknown error" }));
        alert(err.error || "Something went wrong. Please call us instead.");
        setSubmitting(false);
        return;
      }
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      alert("Connection error. Please call us at " + branchInfo.phone);
      setSubmitting(false);
    }
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

  /* Build the location display string */
  const locationLabel = detectedCity || branchInfo.label;

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

      {/* ── Smart Location Bar ── */}
      <section className="rs-branch">
        <div className="rs-branch-bar">
          {geoStatus === "detecting" && (
            <span className="rs-geo-status">
              <span className="rs-geo-spinner" /> Detecting your location…
            </span>
          )}
          {geoStatus === "done" && (
            <span className="rs-geo-status rs-geo-found">
              📍 <strong>{locationLabel}</strong>
              {!showBranchPicker && (
                <button
                  className="rs-branch-change-link"
                  onClick={() => setShowBranchPicker(true)}
                >
                  Change
                </button>
              )}
            </span>
          )}
          {geoStatus === "denied" && (
            <span className="rs-geo-status">Select your area below</span>
          )}
          {geoStatus === "idle" && (
            <span className="rs-geo-status">Select your area below</span>
          )}
        </div>

        {/* City picker — shown when geo denied, idle, or user clicked "Change" */}
        {(geoStatus === "denied" || geoStatus === "idle" || showBranchPicker) && (
          <div className="rs-branch-toggle" style={{ flexWrap: "wrap", gap: "6px" }}>
            {allCities.map((city) => (
              <button
                key={city.slug}
                className={`rs-branch-btn ${detectedCity === city.name ? "rs-branch-btn--active" : ""}`}
                onClick={() => handleCitySelect(city)}
                style={{ fontSize: "13px", padding: "6px 12px" }}
              >
                {city.name}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* ── Service cards (filtered for branch) ── */}
      <section className="rs-services">
        <h2 className="rs-section-title">How can we help?</h2>
        <div className="rs-cards">
          {visibleServices.map((svc) => (
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

      {/* ── Sub-service selector ── */}
      {activeVertical && (
        <section className="rs-subs">
          <h3 className="rs-section-subtitle">What specifically? <span className="rs-optional">(optional)</span></h3>
          <div className="rs-sub-grid">
            {activeVertical.subServices
              .filter((sub) => !sub.slug.includes("warranty"))
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
              <input id="rs-fn" name="firstName" type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} placeholder="First name" />
            </div>
            <div className="rs-field">
              <label htmlFor="rs-ln">Last Name<span className="rs-req">*</span></label>
              <input id="rs-ln" name="lastName" type="text" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} placeholder="Last name" />
            </div>
          </div>
          <div className="rs-form-row">
            <div className="rs-field">
              <label htmlFor="rs-ph">Phone<span className="rs-req">*</span></label>
              <input id="rs-ph" name="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="(000) 000-0000" />
            </div>
            <div className="rs-field">
              <label htmlFor="rs-em">Email<span className="rs-req">*</span></label>
              <input id="rs-em" name="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="email@example.com" />
            </div>
          </div>
          <div className="rs-field rs-field--full">
            <label htmlFor="rs-addr">Home Address<span className="rs-req">*</span></label>
            <input id="rs-addr" name="address" type="text" required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="Street address, city, AZ" />
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
            <select id="rs-how" name="howHeard" value={formData.howHeard} onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}>
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

          <button type="submit" className="rs-submit" disabled={submitting}>
            {submitting ? "Sending…" : "Request Service →"}
          </button>
          <p className="rs-disclaimer">By submitting, you agree to be contacted by Bucksworth Home Services regarding your service request. We never share your information.</p>
        </form>
      </section>
    </main>
  );
}
