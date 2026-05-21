"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { JOB_SITES, CATEGORY_META, type ServiceCategory, type JobSite } from "@/lib/job-sites";
import dynamic from "next/dynamic";

const JobMap = dynamic(() => import("./JobMap"), { ssr: false, loading: () => <div className="jsw-map-placeholder">Loading map…</div> });

const ALL_CATS: ServiceCategory[] = ["pest", "ac", "plumbing", "lawn"];

export default function JobSiteClient() {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory | "all">("all");
  const [selectedJob, setSelectedJob] = useState<JobSite | null>(null);
  const [mediaMode, setMediaMode] = useState<"photo" | "video">("photo");
  const detailRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredJobs = useMemo(() => {
    if (activeFilter === "all") return JOB_SITES;
    return JOB_SITES.filter((j) => j.category === activeFilter);
  }, [activeFilter]);

  const handlePinClick = useCallback((job: JobSite) => {
    setSelectedJob(job);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
  }, []);

  const handleCardClick = useCallback((job: JobSite) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Count by category
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: JOB_SITES.length };
    ALL_CATS.forEach((cat) => { c[cat] = JOB_SITES.filter((j) => j.category === cat).length; });
    return c;
  }, []);

  return (
    <main className="jsw-page">
      {/* Hero */}
      <section className="jsw-hero">
        <h1>Our Work Across Arizona</h1>
        <div className="jsw-hero-rule" />
        <p>Real jobs. Real homes. Click a pin to see what we did.</p>
      </section>

      {/* Filter bar */}
      <section className="jsw-filters">
        <button
          className={`jsw-filter-btn ${activeFilter === "all" ? "jsw-filter-btn--active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          All <span className="jsw-filter-count">{counts.all}</span>
        </button>
        {ALL_CATS.map((cat) => (
          <button
            key={cat}
            className={`jsw-filter-btn ${activeFilter === cat ? "jsw-filter-btn--active" : ""}`}
            style={activeFilter === cat ? { borderColor: CATEGORY_META[cat].color, color: CATEGORY_META[cat].color } : {}}
            onClick={() => setActiveFilter(cat)}
          >
            <span className="jsw-filter-icon">{CATEGORY_META[cat].icon}</span>
            {CATEGORY_META[cat].label}
            <span className="jsw-filter-count">{counts[cat]}</span>
          </button>
        ))}
      </section>

      {/* Map */}
      <section className="jsw-map-section">
        <JobMap jobs={filteredJobs} selectedJob={selectedJob} onPinClick={handlePinClick} />
      </section>

      {/* Selected job detail (when pin is clicked) */}
      {selectedJob && (
        <section className="jsw-detail" ref={detailRef}>
          <div className="jsw-detail-inner">
            <button className="jsw-detail-close" onClick={() => setSelectedJob(null)} aria-label="Close">&times;</button>
            <div className="jsw-detail-media">
              <img src={selectedJob.photo} alt={selectedJob.title} className="jsw-detail-img" />
            </div>
            <div className="jsw-detail-info">
              <span className="jsw-detail-badge" style={{ background: CATEGORY_META[selectedJob.category].color }}>
                {CATEGORY_META[selectedJob.category].icon} {CATEGORY_META[selectedJob.category].label}
              </span>
              <h2>{selectedJob.title}</h2>
              <p className="jsw-detail-location">📍 {selectedJob.neighborhood}, {selectedJob.city}</p>
              <p className="jsw-detail-desc">{selectedJob.description}</p>
              <p className="jsw-detail-date">{new Date(selectedJob.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
            </div>
          </div>
        </section>
      )}

      {/* Grid gallery */}
      <section className="jsw-gallery" ref={gridRef}>
        <div className="jsw-gallery-header">
          <h2>Browse All Jobs {activeFilter !== "all" && <span>— {CATEGORY_META[activeFilter].label}</span>}</h2>
          <span className="jsw-gallery-count">{filteredJobs.length} jobs</span>
        </div>
        <div className="jsw-grid">
          {filteredJobs.map((job) => (
            <button
              key={job.id}
              className={`jsw-card ${selectedJob?.id === job.id ? "jsw-card--active" : ""}`}
              onClick={() => handleCardClick(job)}
            >
              <div className="jsw-card-img" style={{ backgroundImage: `url(${job.photo})` }}>
                <span className="jsw-card-cat" style={{ background: CATEGORY_META[job.category].color }}>
                  {CATEGORY_META[job.category].icon}
                </span>
              </div>
              <div className="jsw-card-body">
                <h3>{job.title}</h3>
                <p className="jsw-card-loc">📍 {job.neighborhood}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="jsw-cta">
        <h2>Ready for Your Home to Be Next?</h2>
        <p>Same-day service available. Free inspections. No gimmicks.</p>
        <div className="jsw-cta-btns">
          <a href="/request-service" className="jsw-cta-btn jsw-cta-btn--primary">Request Service →</a>
          <a href="tel:4804228388" className="jsw-cta-btn jsw-cta-btn--outline">Call (480) 422-8388</a>
        </div>
      </section>
    </main>
  );
}
