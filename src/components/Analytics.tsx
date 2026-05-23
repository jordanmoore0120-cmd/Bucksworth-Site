"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = "G-C3DYG0PP8G";
const META_PIXEL_ID = "1745744873282534";

/**
 * Google Analytics 4 + Meta Pixel (direct tracking)
 * 
 * GTM container (GTM-NKT8JLJD) REMOVED — it was controlled by the previous
 * agency (TopServ Digital) and contained 16 tags sending data to their own
 * analytics accounts (wrong GA4 ID, their FB pixel, their TikTok, etc.).
 * 
 * All tracking now fires directly:
 * - GA4 via gtag.js for pageview + event tracking
 * - Meta Pixel tracks pageviews + conversion events (phone, form, book-now)
 */
export default function Analytics() {
  return (
    <>
      {/* GA4 via gtag.js (direct — no GTM dependency) */}
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
                if (typeof fbq === 'function') {
                  fbq('track', 'Contact', {
                    content_name: 'Phone Call',
                    content_category: 'phone_click',
                    value: link.href.replace('tel:', '')
                  });
                }
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
                if (typeof fbq === 'function') {
                  fbq('track', 'Lead', {
                    content_name: 'Form Submission',
                    content_category: form.id || 'contact_form'
                  });
                }
              }
            });

            // Track "Book Now" / CTA button clicks
            document.addEventListener('click', function(e) {
              var btn = e.target.closest('a[href*="book"], button[class*="book"], a[href*="schedule"]');
              if (btn) {
                gtag('event', 'book_now_click', {
                  event_category: 'conversion',
                  event_label: btn.textContent || 'book_now',
                  value: 1
                });
                if (typeof fbq === 'function') {
                  fbq('track', 'Schedule', {
                    content_name: 'Book Now Click',
                    content_category: 'booking'
                  });
                }
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
