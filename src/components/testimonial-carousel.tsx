"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { homeQuotes } from "@/lib/site-data";

const testimonialImages = [
  "/images/visit-event-latte.png",
  "/images/home-story.png",
  "/images/visit-location.png",
];

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = homeQuotes.map((quote, index) => ({
    ...quote,
    image: testimonialImages[index % testimonialImages.length],
  }));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <div className="testimonialShell motion-rise">
      <div className="testimonialVisualRail" aria-hidden="true">
        {slides.map((slide, index) => {
          const relativeIndex = (index - activeIndex + slides.length) % slides.length;
          const cardClassName =
            relativeIndex === 0
              ? "testimonialVisualCard testimonialVisualCardActive"
              : relativeIndex === 1
                ? "testimonialVisualCard testimonialVisualCardNext"
                : "testimonialVisualCard testimonialVisualCardBack";

          return (
            <div className={cardClassName} key={slide.author}>
              <div className="testimonialVisualInner">
                <Image
                  alt={slide.author}
                  fill
                  sizes="(max-width: 900px) 100vw, 20vw"
                  src={slide.image}
                />
              </div>
            </div>
          );
        })}
      </div>

      <article className="testimonialPanel motion-tilt">
        <div className="motion-tilt-inner testimonialPanelInner">
          <p className="sectionEyebrow">From the regular table</p>
          <p className="testimonialQuote">{activeSlide.quote}</p>

          <div className="testimonialMeta">
            <div>
              <strong>{activeSlide.author}</strong>
              <p>Neighborhood regular</p>
            </div>

            <div className="testimonialDots" aria-label="Select testimonial">
              {slides.map((slide, index) => (
                <button
                  aria-label={`Show quote from ${slide.author}`}
                  className={
                    index === activeIndex
                      ? "testimonialDot testimonialDotActive"
                      : "testimonialDot"
                  }
                  key={slide.author}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              ))}
            </div>
          </div>

          <div className="testimonialControls">
            <button
              aria-label="Previous testimonial"
              className="carouselButton"
              onClick={() =>
                setActiveIndex(
                  (current) => (current - 1 + slides.length) % slides.length,
                )
              }
              type="button"
            >
              <ArrowLeft strokeWidth={1.8} />
            </button>
            <button
              aria-label="Next testimonial"
              className="carouselButton"
              onClick={() =>
                setActiveIndex((current) => (current + 1) % slides.length)
              }
              type="button"
            >
              <ArrowRight strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
