"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════════
   Bucksworth Instant Estimator — Native Demand IQ Replacement
   5-step interactive journey:
   1. Service pick (4 cards)
   2. Address + satellite map confirmation
   3. Service-specific questions (1-2 Qs, fewer clicks)
   4. Lead capture (name, phone, email)
   5. Estimate + brand video + Book CTA
   ═══════════════════════════════════════════════════════════════ */

/* ── Types ─────────────────────────────────────────────────── */
type ServiceKey = "pest" | "hvac" | "plumbing" | "weed";

interface EstimatorState {
  step: number;
  service: ServiceKey | null;
  address: string;
  lat: number | null;
  lng: number | null;
  formattedAddress: string;
  answers: Record<string, string | string[]>;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
  estimate: { low: number; high: number; unit: string } | null;
  submitting: boolean;
  submitted: boolean;
}

/* ── Service definitions ───────────────────────────────────── */
const SERVICES: Record<
  ServiceKey,
  {
    name: string;
    icon: string;
    color: string;
    image: string;
    tagline: string;
  }
> = {
  pest: {
    name: "Pest & Termite",
    icon: "🦂",
    color: "#b91c1c",
    image: "/images/photos/tech-pretreat-backpack.jpg",
    tagline: "Arizona's #1 Pest Experts",
  },
  hvac: {
    name: "AC & Heating",
    icon: "❄️",
    color: "#1d4ed8",
    image: "/images/photos/ac-unit-sunset.jpg",
    tagline: "Same-Day AC Repair",
  },
  plumbing: {
    name: "Plumbing",
    icon: "🔧",
    color: "#0369a1",
    image: "/images/photos/plumbing-water-heater.jpg",
    tagline: "Licensed AZ Plumbers",
  },
  weed: {
    name: "Weed & Lawn",
    icon: "🌿",
    color: "#15803d",
    image: "/images/photos/weed-control-spray.jpg",
    tagline: "Desert Weed Specialists",
  },
};

/* ── Service-specific questions ────────────────────────────── */
interface Question {
  id: string;
  label: string;
  type: "single" | "multi";
  options: { label: string; value: string; icon?: string }[];
}

const QUESTIONS: Record<ServiceKey, Question[]> = {
  pest: [
    {
      id: "pests",
      label: "What pests are you seeing?",
      type: "multi",
      options: [
        { label: "Scorpions", value: "scorpions", icon: "🦂" },
        { label: "Roaches", value: "roaches", icon: "🪳" },
        { label: "Ants", value: "ants", icon: "🐜" },
        { label: "Spiders", value: "spiders", icon: "🕷️" },
        { label: "Termites", value: "termites", icon: "🪲" },
        { label: "Rodents", value: "rodents", icon: "🐀" },
        { label: "Other", value: "other", icon: "🐛" },
      ],
    },
    {
      id: "sqft",
      label: "How big is your home?",
      type: "single",
      options: [
        { label: "Under 1,500 sq ft", value: "small" },
        { label: "1,500 – 2,500 sq ft", value: "medium" },
        { label: "2,500 – 4,000 sq ft", value: "large" },
        { label: "4,000+ sq ft", value: "xlarge" },
      ],
    },
  ],
  hvac: [
    {
      id: "need",
      label: "What do you need?",
      type: "single",
      options: [
        { label: "AC Repair", value: "repair", icon: "🔧" },
        { label: "New AC System", value: "replace_ac", icon: "❄️" },
        { label: "New Heat Pump", value: "replace_hp", icon: "🔄" },
        { label: "Tune-Up", value: "tuneup", icon: "✅" },
        { label: "Heating / Furnace", value: "heating", icon: "🔥" },
      ],
    },
    {
      id: "system_type",
      label: "What type of system do you currently have?",
      type: "single",
      options: [
        { label: "Central AC + Furnace", value: "split_furnace", icon: "🏠" },
        { label: "Heat Pump (heats & cools)", value: "heat_pump", icon: "🔄" },
        { label: "Package Unit (rooftop)", value: "package", icon: "📦" },
        { label: "Not sure", value: "unsure", icon: "❓" },
      ],
    },
    {
      id: "has_furnace",
      label: "Do you have a gas furnace?",
      type: "single",
      options: [
        { label: "Yes — gas furnace", value: "yes", icon: "🔥" },
        { label: "No — electric / heat pump only", value: "no", icon: "⚡" },
        { label: "Not sure", value: "unsure", icon: "❓" },
      ],
    },
    {
      id: "system_age",
      label: "How old is your current system?",
      type: "single",
      options: [
        { label: "Under 5 years", value: "new", icon: "✨" },
        { label: "5 – 10 years", value: "mid", icon: "⏱️" },
        { label: "10 – 15 years", value: "aging", icon: "⚠️" },
        { label: "15+ years / Don't know", value: "old", icon: "🔴" },
      ],
    },
    {
      id: "sqft",
      label: "How big is your home?",
      type: "single",
      options: [
        { label: "Under 1,200 sq ft", value: "xs" },
        { label: "1,200 – 1,800 sq ft", value: "small" },
        { label: "1,800 – 2,500 sq ft", value: "medium" },
        { label: "2,500 – 3,500 sq ft", value: "large" },
        { label: "3,500+ sq ft", value: "xlarge" },
      ],
    },
  ],
  plumbing: [
    {
      id: "issue",
      label: "What's going on?",
      type: "single",
      options: [
        { label: "Leak / Pipe Issue", value: "leak", icon: "💧" },
        { label: "Drain Clog", value: "drain", icon: "🚿" },
        { label: "Water Heater", value: "waterheater", icon: "🔥" },
        { label: "Toilet / Faucet", value: "fixture", icon: "🚽" },
        { label: "Other", value: "other", icon: "🔧" },
      ],
    },
  ],
  weed: [
    {
      id: "service_type",
      label: "What do you need?",
      type: "single",
      options: [
        { label: "Weed Control", value: "weed", icon: "🌿" },
        { label: "Full Lawn Care", value: "lawn", icon: "🏡" },
        { label: "Weed + Lawn Combo", value: "combo", icon: "✨" },
      ],
    },
    {
      id: "lotsize",
      label: "What's your lot size?",
      type: "single",
      options: [
        { label: "Small — under 5,000 sq ft", value: "xs" },
        { label: "Standard — 5,000 – 7,500 sq ft", value: "small" },
        { label: "Mid — 7,500 – 10,000 sq ft", value: "medium" },
        { label: "Large — 10,000 – 15,000 sq ft", value: "large" },
        { label: "XL — 15,000+ sq ft", value: "xlarge" },
      ],
    },
    {
      id: "yard_area",
      label: "Which areas need treatment?",
      type: "single",
      options: [
        { label: "Front yard only", value: "front", icon: "🏠" },
        { label: "Back yard only", value: "back", icon: "🌳" },
        { label: "Full property", value: "full", icon: "🏡" },
      ],
    },
    {
      id: "condition",
      label: "Current weed situation?",
      type: "single",
      options: [
        { label: "Just a few weeds", value: "light", icon: "🌱" },
        { label: "Moderate — noticeable", value: "moderate", icon: "🌿" },
        { label: "Heavy — weeds everywhere", value: "heavy", icon: "🌾" },
        { label: "Prevention only (no weeds yet)", value: "prevention", icon: "🛡️" },
      ],
    },
  ],
};

/* ── Pricing logic ────────────────────────────────────────── */
function calculateEstimate(
  service: ServiceKey,
  answers: Record<string, string | string[]>
): { low: number; high: number; unit: string } {
  switch (service) {
    case "pest": {
      const sqft = answers.sqft as string;
      const base = { small: [39, 49], medium: [49, 59], large: [59, 79], xlarge: [79, 99] };
      const [lo, hi] = base[sqft as keyof typeof base] || [49, 69];
      const pests = answers.pests as string[];
      // Premium for termites or rodents
      const premium =
        pests?.includes("termites") || pests?.includes("rodents") ? 20 : 0;
      return { low: lo + premium, high: hi + premium, unit: "/mo" };
    }
    case "hvac": {
      const need = answers.need as string;
      const sqft = answers.sqft as string;
      if (need === "tuneup") return { low: 69, high: 89, unit: "" };
      if (need === "repair") return { low: 89, high: 350, unit: "" };
      if (need === "heating") return { low: 89, high: 250, unit: "" };
      // New system — 3 SEER tiers by tonnage (sqft → tonnage)
      // xs=1.5T, small=2T, medium=2.5-3T, large=3.5-4T, xlarge=5T
      const tonnage: Record<string, number> = {
        xs: 1.5, small: 2, medium: 2.5, large: 3.5, xlarge: 5,
      };
      const tons = tonnage[sqft] || 2.5;
      // Price per ton by SEER tier
      const standardPerTon = [1800, 2200]; // SEER 14-15
      const midPerTon = [2400, 3000];      // SEER 16-18
      const highPerTon = [3200, 4200];     // SEER 20+
      // Return mid-tier range as the primary estimate
      return {
        low: Math.round(standardPerTon[0] * tons),
        high: Math.round(highPerTon[1] * tons),
        unit: "",
        // Attach tier breakdown for display
        ...(need === "replace_ac" || need === "replace_hp" ? {
          tiers: {
            standard: { low: Math.round(standardPerTon[0] * tons), high: Math.round(standardPerTon[1] * tons), label: "Standard (14-15 SEER)" },
            mid: { low: Math.round(midPerTon[0] * tons), high: Math.round(midPerTon[1] * tons), label: "Mid-Range (16-18 SEER)" },
            high: { low: Math.round(highPerTon[0] * tons), high: Math.round(highPerTon[1] * tons), label: "High Efficiency (20+ SEER)" },
            tons,
          },
        } : {}),
      } as any;
    }
    case "plumbing": {
      const issue = answers.issue as string;
      const prices: Record<string, [number, number]> = {
        leak: [89, 350],
        drain: [89, 250],
        waterheater: [1200, 3500],
        fixture: [89, 250],
        other: [89, 350],
      };
      const [lo, hi] = prices[issue] || [89, 350];
      return { low: lo, high: hi, unit: "" };
    }
    case "weed": {
      const lot = answers.lotsize as string;
      const area = answers.yard_area as string;
      const svcType = answers.service_type as string;
      const base: Record<string, [number, number]> = {
        xs: [29, 39], small: [39, 49], medium: [49, 59],
        large: [59, 79], xlarge: [79, 99],
      };
      let [lo, hi] = base[lot] || [49, 59];
      // Front-only discount
      if (area === "front") { lo = Math.round(lo * 0.7); hi = Math.round(hi * 0.7); }
      else if (area === "back") { lo = Math.round(lo * 0.75); hi = Math.round(hi * 0.75); }
      // Combo upcharge
      if (svcType === "combo") { lo += 15; hi += 20; }
      else if (svcType === "lawn") { lo += 10; hi += 15; }
      return { low: lo, high: hi, unit: "/mo" };
    }
  }
}

/* ── Google Maps loader ───────────────────────────────────── */
const MAPS_LOADED = { current: false };
function loadGoogleMaps(apiKey: string): Promise<void> {
  if (MAPS_LOADED.current) return Promise.resolve();
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return reject();
    if ((window as any).google?.maps) {
      MAPS_LOADED.current = true;
      return resolve();
    }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.onload = () => {
      MAPS_LOADED.current = true;
      resolve();
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

/* ═══════════════════════════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════════════════════════ */
export default function InstantEstimator({
  isOpen,
  onClose,
  mapsApiKey,
}: {
  isOpen: boolean;
  onClose: () => void;
  mapsApiKey: string;
}) {
  const [state, setState] = useState<EstimatorState>({
    step: 1,
    service: null,
    address: "",
    lat: null,
    lng: null,
    formattedAddress: "",
    answers: {},
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consent: false,
    estimate: null,
    submitting: false,
    submitted: false,
  });

  const addressInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  /* ── Google Places Autocomplete (when API key present) ── */
  const hasMapsKey = !!mapsApiKey;
  useEffect(() => {
    if (state.step !== 2 || !isOpen || !hasMapsKey) return;
    loadGoogleMaps(mapsApiKey).then(() => {
      if (!addressInputRef.current || autocompleteRef.current) return;
      const ac = new (window as any).google.maps.places.Autocomplete(
        addressInputRef.current,
        {
          types: ["address"],
          componentRestrictions: { country: "us" },
          fields: ["formatted_address", "geometry"],
        }
      );
      ac.addListener("place_changed", () => {
        const place = ac.getPlace();
        if (place?.geometry?.location) {
          setState((s) => ({
            ...s,
            address: place.formatted_address || "",
            formattedAddress: place.formatted_address || "",
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          }));
        }
      });
      autocompleteRef.current = ac;
    });
  }, [state.step, isOpen, mapsApiKey, hasMapsKey]);

  /* ── Escape key ─────────────────────────────────────── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  /* ── Navigation helpers ─────────────────────────────── */
  const goTo = useCallback((step: number) => {
    setState((s) => ({ ...s, step }));
    // Reset autocomplete ref when leaving step 2
    if (step !== 2) autocompleteRef.current = null;
  }, []);

  const setAnswer = useCallback(
    (qId: string, value: string, isMulti: boolean) => {
      setState((s) => {
        const prev = s.answers[qId];
        if (isMulti) {
          const arr = Array.isArray(prev) ? [...prev] : [];
          const idx = arr.indexOf(value);
          if (idx >= 0) arr.splice(idx, 1);
          else arr.push(value);
          return { ...s, answers: { ...s.answers, [qId]: arr } };
        }
        return { ...s, answers: { ...s.answers, [qId]: value } };
      });
    },
    []
  );

  /* ── Submit lead ────────────────────────────────────── */
  const submitLead = useCallback(async () => {
    setState((s) => ({ ...s, submitting: true }));
    const estimate = calculateEstimate(state.service!, state.answers);
    try {
      await fetch("/api/request-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: state.firstName,
          lastName: state.lastName,
          email: state.email,
          phone: state.phone,
          service: SERVICES[state.service!].name,
          message: `Online Estimate Request\nAddress: ${state.formattedAddress}\nService: ${SERVICES[state.service!].name}\nAnswers: ${JSON.stringify(state.answers)}\nEstimate: $${estimate.low}-$${estimate.high}${estimate.unit}`,
        }),
      });
    } catch {
      /* continue to show estimate anyway */
    }
    setState((s) => ({
      ...s,
      estimate,
      submitting: false,
      submitted: true,
      step: 3 + (state.service ? QUESTIONS[state.service].length : 0) + 1,
    }));
  }, [state]);

  /* ── Progress bar ───────────────────────────────────── */
  const qLen = state.service ? QUESTIONS[state.service].length : 2;
  const leadCaptureStep = 3 + qLen;
  const resultStep = leadCaptureStep + 1;
  const totalSteps = resultStep;
  const progress = Math.min((state.step / totalSteps) * 100, 100);

  if (!isOpen) return null;

  const svc = state.service ? SERVICES[state.service] : null;

  return (
    <div
      className="ie-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="ie-modal" ref={modalRef}>
        {/* ── Header ─────────────────────────────────── */}
        <div
          className="ie-header"
          style={{
            background: svc
              ? `linear-gradient(135deg, ${svc.color}, ${svc.color}dd)`
              : "linear-gradient(135deg, #1e3a5f, #0f2337)",
          }}
        >
          <div className="ie-header-content">
            <img
              src="/images/logo.svg"
              alt="Bucksworth"
              className="ie-logo"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <button className="ie-close" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
          <div className="ie-progress">
            <div
              className="ie-progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* ── Body ────────────────────────────────────── */}
        <div className="ie-body">
          {/* STEP 1: Service Selection */}
          {state.step === 1 && (
            <div className="ie-step ie-fade-in">
              <h2 className="ie-title">
                Get Your Instant Estimate
              </h2>
              <p className="ie-subtitle">
                What service do you need?
              </p>
              <div className="ie-service-grid">
                {(Object.entries(SERVICES) as [ServiceKey, typeof SERVICES.pest][]).map(
                  ([key, s]) => (
                    <button
                      key={key}
                      className="ie-service-card"
                      onClick={() => {
                        setState((prev) => ({
                          ...prev,
                          service: key,
                          step: 2,
                          answers: {},
                        }));
                      }}
                    >
                      <div
                        className="ie-service-icon"
                        style={{ background: s.color + "15" }}
                      >
                        <span style={{ fontSize: "2rem" }}>{s.icon}</span>
                      </div>
                      <span className="ie-service-name">{s.name}</span>
                      <span className="ie-service-tagline">{s.tagline}</span>
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* STEP 2: Address + Map */}
          {state.step === 2 && (
            <div className="ie-step ie-fade-in">
              <button className="ie-back" onClick={() => goTo(1)}>
                ← Back
              </button>
              <h2 className="ie-title">
                {state.lat ? "Is this your home?" : "Where's your home?"}
              </h2>

              {!state.lat && (
                <>
                  <p className="ie-subtitle">
                    Enter your address for a personalized estimate
                  </p>
                  <div className="ie-address-wrap">
                    <span className="ie-address-icon">📍</span>
                    <input
                      ref={addressInputRef}
                      type="text"
                      className="ie-address-input"
                      placeholder="Start typing your address…"
                      value={state.address}
                      onChange={(e) =>
                        setState((s) => ({
                          ...s,
                          address: e.target.value,
                          formattedAddress: e.target.value,
                        }))
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && state.address.length >= 5 && !hasMapsKey) {
                          goTo(3);
                        }
                      }}
                      autoFocus
                    />
                  </div>
                  {/* Show Next button when no Maps API key (no autocomplete) */}
                  {!hasMapsKey && state.address.length >= 5 && (
                    <button
                      className="ie-btn ie-btn-primary ie-btn-full"
                      style={{ marginTop: "16px" }}
                      onClick={() => goTo(3)}
                    >
                      Next →
                    </button>
                  )}
                </>
              )}

              {state.lat && state.lng && hasMapsKey && (
                <>
                  <p className="ie-address-label">{state.formattedAddress}</p>
                  <div className="ie-map-wrap">
                    <img
                      src={`https://maps.googleapis.com/maps/api/staticmap?center=${state.lat},${state.lng}&zoom=20&size=600x400&maptype=satellite&markers=color:red%7C${state.lat},${state.lng}&key=${mapsApiKey}`}
                      alt="Satellite view of your home"
                      className="ie-map-img"
                    />
                  </div>
                  <div className="ie-map-actions">
                    <button
                      className="ie-btn ie-btn-outline"
                      onClick={() =>
                        setState((s) => ({
                          ...s,
                          lat: null,
                          lng: null,
                          address: "",
                          formattedAddress: "",
                        }))
                      }
                    >
                      Not My Home
                    </button>
                    <button
                      className="ie-btn ie-btn-primary"
                      onClick={() => goTo(3)}
                    >
                      Yes, That's My Home →
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* STEP 3+: Service-specific questions */}
          {state.step >= 3 &&
            state.step < leadCaptureStep &&
            state.service && (
              <div className="ie-step ie-fade-in" key={`q-${state.step}`}>
                <button className="ie-back" onClick={() => goTo(state.step - 1)}>
                  ← Back
                </button>
                {(() => {
                  const qIdx = state.step - 3;
                  const q = QUESTIONS[state.service!][qIdx];
                  if (!q) return null;
                  const selected = state.answers[q.id];
                  const isLast = qIdx === QUESTIONS[state.service!].length - 1;
                  const canProceed = q.type === "multi"
                    ? Array.isArray(selected) && selected.length > 0
                    : !!selected;

                  return (
                    <>
                      <h2 className="ie-title">{q.label}</h2>
                      {q.type === "multi" && (
                        <p className="ie-subtitle">Select all that apply</p>
                      )}
                      <div
                        className={
                          q.options.length <= 4
                            ? "ie-options-grid ie-options-2col"
                            : "ie-options-grid ie-options-3col"
                        }
                      >
                        {q.options.map((opt) => {
                          const isSelected = q.type === "multi"
                            ? Array.isArray(selected) && selected.includes(opt.value)
                            : selected === opt.value;
                          return (
                            <button
                              key={opt.value}
                              className={`ie-option ${isSelected ? "ie-option-selected" : ""}`}
                              style={
                                isSelected
                                  ? {
                                      borderColor: svc?.color,
                                      background: svc?.color + "10",
                                    }
                                  : {}
                              }
                              onClick={() => {
                                setAnswer(q.id, opt.value, q.type === "multi");
                                // Auto-advance on single-select
                                if (q.type === "single") {
                                  setTimeout(() => {
                                    if (isLast) {
                                      goTo(leadCaptureStep);
                                    } else {
                                      goTo(state.step + 1);
                                    }
                                  }, 200);
                                }
                              }}
                            >
                              {opt.icon && (
                                <span className="ie-option-icon">{opt.icon}</span>
                              )}
                              <span>{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                      {q.type === "multi" && canProceed && (
                        <button
                          className="ie-btn ie-btn-primary ie-btn-full"
                          onClick={() => {
                            if (isLast) {
                              goTo(leadCaptureStep);
                            } else {
                              goTo(state.step + 1);
                            }
                          }}
                        >
                          Next →
                        </button>
                      )}
                    </>
                  );
                })()}
              </div>
            )}

          {/* STEP: Lead Capture */}
          {state.service &&
            state.step === leadCaptureStep && (
              <div className="ie-step ie-fade-in">
                <button
                  className="ie-back"
                  onClick={() => goTo(state.step - 1)}
                >
                  ← Back
                </button>
                <h2 className="ie-title">Almost there!</h2>
                <p className="ie-subtitle">
                  Your estimate is ready — tell us who we&apos;re meeting with
                </p>
                <div className="ie-form">
                  <div className="ie-form-row">
                    <input
                      className="ie-input"
                      placeholder="First Name"
                      value={state.firstName}
                      onChange={(e) =>
                        setState((s) => ({ ...s, firstName: e.target.value }))
                      }
                    />
                    <input
                      className="ie-input"
                      placeholder="Last Name"
                      value={state.lastName}
                      onChange={(e) =>
                        setState((s) => ({ ...s, lastName: e.target.value }))
                      }
                    />
                  </div>
                  <input
                    className="ie-input"
                    type="email"
                    placeholder="Email"
                    value={state.email}
                    onChange={(e) =>
                      setState((s) => ({ ...s, email: e.target.value }))
                    }
                  />
                  <input
                    className="ie-input"
                    type="tel"
                    placeholder="Phone Number"
                    value={state.phone}
                    onChange={(e) =>
                      setState((s) => ({ ...s, phone: e.target.value }))
                    }
                  />
                  <label className="ie-consent">
                    <input
                      type="checkbox"
                      checked={state.consent}
                      onChange={(e) =>
                        setState((s) => ({ ...s, consent: e.target.checked }))
                      }
                    />
                    <span>
                      I consent to receive calls and texts from Bucksworth Home
                      Services. Msg & data rates may apply.
                    </span>
                  </label>
                  <button
                    className="ie-btn ie-btn-primary ie-btn-full ie-btn-lg"
                    disabled={
                      !state.firstName ||
                      !state.phone ||
                      !state.consent ||
                      state.submitting
                    }
                    onClick={submitLead}
                  >
                    {state.submitting ? "Calculating…" : "Get My Estimate →"}
                  </button>
                </div>
              </div>
            )}

          {/* STEP 5: Estimate Result + Video */}
          {state.step === resultStep && state.estimate && (
            <div className="ie-step ie-fade-in">
              <div className="ie-result">
                <div className="ie-result-badge" style={{ background: svc?.color }}>
                  ✓
                </div>
                <h2 className="ie-title">
                  Your {svc?.name} Estimate
                </h2>
                <div className="ie-estimate-card" style={{ borderColor: svc?.color }}>
                  <div className="ie-estimate-range">
                    <span className="ie-estimate-dollar">$</span>
                    <span className="ie-estimate-low">
                      {state.estimate.low.toLocaleString()}
                    </span>
                    <span className="ie-estimate-dash"> – </span>
                    <span className="ie-estimate-dollar">$</span>
                    <span className="ie-estimate-high">
                      {state.estimate.high.toLocaleString()}
                    </span>
                    {state.estimate.unit && (
                      <span className="ie-estimate-unit">
                        {state.estimate.unit}
                      </span>
                    )}
                  </div>
                  <p className="ie-estimate-note">
                    {state.formattedAddress}
                  </p>
                </div>

                {/* HVAC SEER Tier Breakdown */}
                {state.service === "hvac" && (state.estimate as any).tiers && (() => {
                  const t = (state.estimate as any).tiers;
                  return (
                    <div className="ie-seer-tiers">
                      <p className="ie-seer-label">
                        Estimated {t.tons}-ton system pricing by efficiency:
                      </p>
                      <div className="ie-seer-grid">
                        <div className="ie-seer-card">
                          <span className="ie-seer-badge ie-seer-standard">Standard</span>
                          <span className="ie-seer-rating">14–15 SEER</span>
                          <span className="ie-seer-price">
                            ${t.standard.low.toLocaleString()} – ${t.standard.high.toLocaleString()}
                          </span>
                        </div>
                        <div className="ie-seer-card ie-seer-featured">
                          <span className="ie-seer-badge ie-seer-mid">Mid-Range</span>
                          <span className="ie-seer-rating">16–18 SEER</span>
                          <span className="ie-seer-price">
                            ${t.mid.low.toLocaleString()} – ${t.mid.high.toLocaleString()}
                          </span>
                          <span className="ie-seer-popular">Most Popular</span>
                        </div>
                        <div className="ie-seer-card">
                          <span className="ie-seer-badge ie-seer-high">High Efficiency</span>
                          <span className="ie-seer-rating">20+ SEER</span>
                          <span className="ie-seer-price">
                            ${t.high.low.toLocaleString()} – ${t.high.high.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Brand Video */}
                <div className="ie-video-section">
                  <p className="ie-video-label">
                    Meet Bucksworth — The Gigi Promise
                  </p>
                  <video
                    className="ie-video"
                    src="/videos/gigi_video_v3.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/photos/gigi-poster.jpg"
                  />
                </div>

                <p className="ie-result-note">
                  This is an estimated range based on your inputs. A Bucksworth
                  technician will confirm exact pricing during your free
                  inspection — no surprises, no hidden fees.
                </p>

                <div className="ie-result-actions">
                  <a
                    href={`tel:${state.formattedAddress?.toLowerCase().includes("tucson") ? "5202849930" : "4804228388"}`}
                    className="ie-btn ie-btn-primary ie-btn-lg"
                  >
                    📞 Call Now
                  </a>
                  <a
                    href="/request-service"
                    className="ie-btn ie-btn-outline ie-btn-lg"
                  >
                    📅 Schedule Service
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Footer ─────────────────────────────────── */}
        <div className="ie-footer">
          <span>Bucksworth Home Services</span>
          <span>·</span>
          <span>Google Guaranteed ✓</span>
          <span>·</span>
          <span>AZ ROC #343924</span>
        </div>
      </div>
    </div>
  );
}
