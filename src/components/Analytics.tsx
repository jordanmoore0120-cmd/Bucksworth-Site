"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = "G-ZDL1V7HMVV";
const META_PIXEL_ID = "1745744873282534";

/**
 * Bucksworth Home Services 2026 — Analytics & Tracking
 * - GA4 via gtag.js (direct, no GTM dependency)
 * - Meta Pixel for Facebook/Instagram ad tracking
 * - Phone call click + form submission conversion tracking
 * - Agency GTM container removed (all 16 agency tags killed)
 */
export default function Analytics() {
  return (
    <>
      {/* GA4 via gtag.js (direct — Bucksworth Home Services 2026 property) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga4-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              send_page_view: true
            });

            // Track phone call clicks as conversions
            document.addEventListener('click', function(e) {
              var link = e.target.closest('a[href^="tel:"]');
              if (link) {
                gtag('event', 'phone_call_click', {
                  event_category: 'engagement',
                  event_label: link.href.replace('tel:', ''),
                  value: 1
                });
              }
            });

            // Track form submissions
            document.addEventListener('submit', function(e) {
              var form = e.target.closest('form');
              if (form) {
                gtag('event', 'form_submission', {
                  event_category: 'conversion',
                  event_label: form.id || form.action || 'unknown_form',
                  value: 1
                });
              }
            });
          `,
        }}
      />

      {/* Meta Pixel */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');

            // Track phone calls as Meta Lead events
            document.addEventListener('click', function(e) {
              var link = e.target.closest('a[href^="tel:"]');
              if (link) {
                fbq('track', 'Contact', {
                  content_name: 'Phone Call',
                  content_category: link.href.replace('tel:', '')
                });
              }
            });

            // Track form submissions as Meta Lead events
            document.addEventListener('submit', function(e) {
              var form = e.target.closest('form');
              if (form) {
                fbq('track', 'Lead', {
                  content_name: form.id || 'contact_form',
                  content_category: 'Form Submission'
                });
              }
            });
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
