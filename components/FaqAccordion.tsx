"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  faqs: FaqItem[];
};

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className="overflow-hidden rounded-lg border border-neutral-200 transition-shadow hover:shadow-md"
        >
          <button
            type="button"
            className="flex w-full items-start justify-between gap-4 bg-white px-6 py-4 text-left transition-colors hover:bg-neutral-50"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="pr-4 font-semibold text-neutral-900">
              {faq.question}
            </span>
            <ChevronDown
              size={24}
              className={`flex-shrink-0 text-primary-600 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="border-t border-neutral-200 bg-neutral-50 px-6 py-4 text-neutral-700">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

