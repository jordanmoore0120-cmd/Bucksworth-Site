"use client";

import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  cityName?: string;
}

export default function FAQAccordion({
  faqs,
  title = "Frequently Asked Questions",
  cityName,
}: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="faq-section">
      <h2 className="faq-heading">{title}</h2>
      <div className="faq-list" itemScope itemType="https://schema.org/FAQPage">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`faq-item ${openIdx === i ? "faq-item--open" : ""}`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              className="faq-question"
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              aria-expanded={openIdx === i}
              itemProp="name"
            >
              {faq.q}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="faq-chevron"
                style={{
                  transform: openIdx === i ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {openIdx === i && (
              <div
                className="faq-answer"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
