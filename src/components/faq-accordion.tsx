"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/site-data";

export function FaqAccordion() {
  const [openQuestion, setOpenQuestion] = useState(faqs[0]?.question ?? "");

  return (
    <div className="faqList">
      {faqs.map((faq) => {
        const isOpen = openQuestion === faq.question;

        return (
          <article className="faqItem" key={faq.question}>
            <button
              className="faqTrigger"
              onClick={() =>
                setOpenQuestion((current) =>
                  current === faq.question ? "" : faq.question,
                )
              }
              type="button"
            >
              <span>{faq.question}</span>
              {isOpen ? (
                <Minus className="faqIcon" strokeWidth={1.8} />
              ) : (
                <Plus className="faqIcon" strokeWidth={1.8} />
              )}
            </button>
            {isOpen ? <p className="faqAnswer">{faq.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
