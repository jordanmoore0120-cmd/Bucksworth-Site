import type { Metadata } from "next";
import JobSiteClient from "./JobSiteClient";

export const metadata: Metadata = {
  title: "Job Site Work | See Our Work Across Arizona | Bucksworth Home Services",
  description:
    "Browse real Bucksworth job sites across Phoenix and Tucson. See our pest control, AC, plumbing, and lawn care work on an interactive map. Photos and videos from actual Arizona homes we've serviced.",
  alternates: {
    canonical: "https://getyourbucksworth.com/job-site-work",
  },
};

export default function JobSiteWorkPage() {
  return <JobSiteClient />;
}
