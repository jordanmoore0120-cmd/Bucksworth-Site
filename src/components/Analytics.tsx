"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = "G-ZDL1V7HMVV";
const META_PIXEL_ID = "1745744873282534";
// Google Ads (account 448-637-9637) — conversion tag + actions
const GOOGLE_ADS_ID = "AW-16665649274";
const ADS_CALL_CLICK = "AW-16665649274/jwM3CNKn44IdEPrA5oo-";
const ADS_FORM_LEAD = "AW-16665649274/0k_wCIChhNQcEPrA5oo-";

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
            gtag('config', '${GOOGLE_ADS_ID}', { allow_enhanced_conversions: true });

            // Google Ads form-lead conversion. Called by forms ONLY after a successful submit.
            window.bwTrackLead = function(data) {
              try {
                data = data || {};
                var ud = {};
                if (data.email) ud.email = String(data.email).trim().toLowerCase();
                if (data.phone) {
                  var d = String(data.phone).replace(/\\D/g, '');
                  if (d.length === 10) d = '1' + d;
                  if (d.length === 11) ud.phone_number = '+' + d;
                }
                if (ud.email || ud.phone_number) gtag('set', 'user_data', ud);
                gtag('event', 'conversion', { send_to: '${ADS_FORM_LEAD}' });
                gtag('event', 'generate_lead', { form_name: data.form || 'request_service' });
              } catch (err) {}
            };

            // Track phone call clicks as conversions
            document.addEventListener('click', function(e) {
              var link = e.target.closest('a[href^="tel:"]');
              if (link) {
                gtag('event', 'phone_call_click', {
                  event_category: 'engagement',
                  event_label: link.href.replace('tel:', ''),
                  value: 1
                });
                gtag('event', 'conversion', { send_to: '${ADS_CALL_CLICK}' });
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
