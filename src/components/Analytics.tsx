"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = "G-C3DYG0PP8G";
const GTM_ID = "GTM-NKT8JLJD";

/**
 * Google Analytics 4 + Google Tag Manager
 * - GA4 fires directly via gtag.js for reliable pageview + event tracking
 * - GTM container loaded for any additional tags configured in GTM
 * - Tracks phone click conversions automatically
 */
export default function Analytics() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* GA4 via gtag.js (direct — doesn't depend on GTM config) */}
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
    </>
  );
}
