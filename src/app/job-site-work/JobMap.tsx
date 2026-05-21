"use client";

import { useEffect, useRef, useMemo } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import type { JobSite } from "@/lib/job-sites";
import { CATEGORY_META } from "@/lib/job-sites";
import "leaflet/dist/leaflet.css";

interface JobMapProps {
  jobs: JobSite[];
  selectedJob: JobSite | null;
  onPinClick: (job: JobSite) => void;
}

/* Fly map to selected job */
function FlyToSelected({ job }: { job: JobSite | null }) {
  const map = useMap();
  useEffect(() => {
    if (job) {
      map.flyTo([job.lat, job.lng], 13, { duration: 0.8 });
    }
  }, [job, map]);
  return null;
}

/* Auto-fit bounds when jobs change */
function FitBounds({ jobs }: { jobs: JobSite[] }) {
  const map = useMap();
  const prevLen = useRef(jobs.length);
  useEffect(() => {
    if (jobs.length > 0 && jobs.length !== prevLen.current) {
      const bounds = jobs.map((j) => [j.lat, j.lng] as [number, number]);
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 11 });
      prevLen.current = jobs.length;
    }
  }, [jobs, map]);
  return null;
}

export default function JobMap({ jobs, selectedJob, onPinClick }: JobMapProps) {
  /* Default center: between Phoenix and Tucson */
  const center = useMemo(() => {
    if (jobs.length === 0) return [33.4, -111.9] as [number, number];
    const avgLat = jobs.reduce((s, j) => s + j.lat, 0) / jobs.length;
    const avgLng = jobs.reduce((s, j) => s + j.lng, 0) / jobs.length;
    return [avgLat, avgLng] as [number, number];
  }, [jobs]);

  return (
    <MapContainer
      center={center}
      zoom={9}
      className="jsw-leaflet-map"
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <FlyToSelected job={selectedJob} />
      <FitBounds jobs={jobs} />
      {jobs.map((job) => {
        const meta = CATEGORY_META[job.category];
        const isSelected = selectedJob?.id === job.id;
        return (
          <CircleMarker
            key={job.id}
            center={[job.lat, job.lng]}
            radius={isSelected ? 14 : 9}
            pathOptions={{
              color: isSelected ? "#0f172a" : meta.color,
              fillColor: meta.color,
              fillOpacity: isSelected ? 1 : 0.8,
              weight: isSelected ? 3 : 2,
            }}
            eventHandlers={{
              click: () => onPinClick(job),
            }}
          >
            <Popup>
              <div className="jsw-popup">
                <img src={job.photo} alt={job.title} className="jsw-popup-img" />
                <strong>{job.title}</strong>
                <span>{job.neighborhood}, {job.city}</span>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
