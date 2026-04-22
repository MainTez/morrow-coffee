"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MotionOrchestrator() {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const hoverCleanups: Array<() => void> = [];
      const context = gsap.context(() => {
        const header = document.querySelector(".siteHeader");

        if (header) {
          gsap.fromTo(
            header,
            {
              y: -26,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
            },
          );
        }

        gsap.utils.toArray<HTMLElement>(".motion-rise").forEach((element) => {
          gsap.fromTo(
            element,
            {
              y: 30,
              opacity: 0,
              filter: "blur(10px)",
            },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

        gsap.utils
          .toArray<HTMLElement>(".motion-divider")
          .forEach((element) => {
            gsap.fromTo(
              element,
              {
                scaleX: 0,
                transformOrigin: "left center",
              },
              {
                scaleX: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 90%",
                  once: true,
                },
              },
            );
          });

        gsap.utils
          .toArray<HTMLElement>(".motion-image-scroll")
          .forEach((element) => {
            const target = element.querySelector("img") ?? element;

            gsap.fromTo(
              target,
              {
                scale: 0.84,
                opacity: 0.38,
                filter: "blur(10px) saturate(0.82) brightness(0.88)",
              },
              {
                scale: 1,
                opacity: 1,
                filter: "blur(0px) saturate(1) brightness(1)",
                ease: "none",
                scrollTrigger: {
                  trigger: element,
                  start: "top 88%",
                  end: "bottom 38%",
                  scrub: 0.85,
                },
              },
            );
          });

        gsap.utils
          .toArray<HTMLElement>(".motion-scrub")
          .forEach((element) => {
            const words = element.querySelectorAll<HTMLElement>(".motionWord");

            gsap.set(words, {
              opacity: 0.14,
              yPercent: 28,
            });

            gsap.to(words, {
              opacity: 1,
              yPercent: 0,
              ease: "none",
              stagger: 0.08,
              scrollTrigger: {
                trigger: element,
                start: "top 82%",
                end: "bottom 40%",
                scrub: 0.85,
              },
            });
          });

        if (window.matchMedia("(pointer: fine)").matches) {
          gsap.utils.toArray<HTMLElement>(".motion-tilt").forEach((element) => {
            const target =
              element.querySelector<HTMLElement>(".motion-tilt-inner") ?? element;

            const onMove = (event: MouseEvent) => {
              const rect = element.getBoundingClientRect();
              const x = (event.clientX - rect.left) / rect.width - 0.5;
              const y = (event.clientY - rect.top) / rect.height - 0.5;

              gsap.to(target, {
                x: x * 12,
                y: y * 12,
                rotateY: x * 9,
                rotateX: y * -9,
                duration: 0.45,
                ease: "power2.out",
                transformPerspective: 1000,
                transformOrigin: "center",
              });
            };

            const onLeave = () => {
              gsap.to(target, {
                x: 0,
                y: 0,
                rotateY: 0,
                rotateX: 0,
                duration: 0.7,
                ease: "power3.out",
              });
            };

            element.addEventListener("mousemove", onMove);
            element.addEventListener("mouseleave", onLeave);

            hoverCleanups.push(() => {
              element.removeEventListener("mousemove", onMove);
              element.removeEventListener("mouseleave", onLeave);
            });
          });
        }

        requestAnimationFrame(() => ScrollTrigger.refresh());
      });

      return () => {
        hoverCleanups.forEach((cleanup) => cleanup());
        context.revert();
      };
    },
    {
      dependencies: [pathname],
      revertOnUpdate: true,
    },
  );

  return null;
}
