"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const slices = [
  {
    eyebrow: "Espresso bar",
    title: "Quick pour. Long finish.",
    description:
      "Shots, cappuccinos, and the first rush of the day moving in one clean rhythm.",
    href: "/order",
    image: "/images/menu-hero.png",
  },
  {
    eyebrow: "Seasonal drinks",
    title: "Soft spice, bright milk, clean sweetness.",
    description:
      "Rotating specials built to feel like a small shift in the season, not a gimmick.",
    href: "/order",
    image: "/images/menu-seasonal.png",
  },
  {
    eyebrow: "Bakery counter",
    title: "Flaky layers and the slow table.",
    description:
      "Pastries baked nearby, warm plates, and enough room to let the cup last a little longer.",
    href: "/visit",
    image: "/images/menu-bakery-hero.png",
  },
];

export function AccordionSlices() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="pageSection accordionSection">
      <div className="accordionIntro motion-rise">
        <p className="sectionEyebrow">Scenes from the counter</p>
        <h2 className="sectionTitle accordionTitle">
          A menu that changes with the pace of the room.
        </h2>
        <p className="sectionText">
          Hover through the bar, the seasonal board, and the bakery pass to see
          how the cafe moves across the day.
        </p>
      </div>

      <div className="accordionRail">
        {slices.map((slice, index) => (
          <article
            className={
              index === activeIndex
                ? "accordionSlice accordionSliceActive motion-image-scroll"
                : "accordionSlice motion-image-scroll"
            }
            key={slice.title}
            onFocus={() => setActiveIndex(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActiveIndex(index);
              }
            }}
            onMouseEnter={() => setActiveIndex(index)}
            tabIndex={0}
          >
            <Image
              alt={slice.title}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              src={slice.image}
            />
            <div className="accordionShade" />
            <div className="accordionContent">
              <p className="sectionEyebrow sectionEyebrowLight">{slice.eyebrow}</p>
              <h3>{slice.title}</h3>
              <p>{slice.description}</p>
              <Link className="accordionLink" href={slice.href}>
                <span>Open this scene</span>
                <ArrowRight strokeWidth={1.8} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
