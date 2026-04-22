import Image from "next/image";
import { ScrubRevealText } from "@/components/scrub-reveal-text";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import {
  ButtonLink,
  SectionHeading,
  SiteHeader,
} from "@/components/site-chrome";
import { featuredDrinks } from "@/lib/site-data";

export default function Home() {
  const featureCardClasses = [
    "featureCard featureCardWide motion-rise motion-tilt",
    "featureCard featureCardTall motion-rise motion-tilt",
    "featureCard featureCardCompact motion-rise motion-tilt",
  ];

  return (
    <main className="pageFrame">
      <div className="pageSurface">
        <SiteHeader
          action={{ href: "/visit", icon: "map", label: "Visit the cafe" }}
          links={[
            { href: "/menu", label: "Menu" },
            { href: "/visit", label: "Visit" },
            { href: "/#story", label: "About" },
            { href: "/journal", label: "Journal" },
          ]}
        />

        <section className="heroGrid homeHero">
          <div className="heroCopy">
            <p className="sectionEyebrow motion-rise">Neighborhood roasted daily</p>
            <div className="heroHeadlineWrap motion-rise">
              <h1 className="heroTitle">
                Morrow{" "}
                <span className="inlineMediaPill" aria-hidden="true">
                  <Image
                    alt=""
                    fill
                    sizes="120px"
                    src="/images/home-beans.png"
                  />
                </span>{" "}
                Coffee
              </h1>
            </div>
            <div className="heroRule motion-divider" />
            <p className="heroSubtitle motion-rise">Slow mornings. Strong coffee.</p>
            <p className="heroBody motion-rise">
              Small-batch coffee, baked nearby pastries, and a place that feels
              like part of the block.
            </p>
            <div className="buttonRow motion-rise">
              <ButtonLink href="/menu" icon="arrow">
                See the menu
              </ButtonLink>
              <ButtonLink href="/visit" icon="map" variant="outline">
                Visit the cafe
              </ButtonLink>
            </div>
          </div>

          <div className="mediaPanel mediaPanelTall motion-image-scroll motion-tilt">
            <Image
              alt="A latte on a wooden table near morning light"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              src="/images/home-hero.png"
            />
          </div>
        </section>

        <section className="pageSection">
          <SectionHeading
            align="center"
            eyebrow="Featured"
            title="Made with care. Enjoyed daily."
          />

          <div className="featureGrid">
            {featuredDrinks.map((drink, index) => (
              <article className={featureCardClasses[index]} key={drink.name}>
                <div className="featureImageWrap motion-image-scroll">
                  <Image
                    alt={drink.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 30vw"
                    src={drink.image}
                  />
                </div>
                <div className="featureBody">
                  <h3>{drink.name}</h3>
                  <p>{drink.description}</p>
                  <span>{drink.price}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="centeredAction">
            <ButtonLink href="/menu#coffee" icon="arrow" variant="ghost">
              View full menu
            </ButtonLink>
          </div>
        </section>

        <section className="pageSection ritualSection">
          <p className="sectionEyebrow motion-rise">Morning rhythm</p>
          <h2 className="editorialStatement motion-rise">
            Slow mornings{" "}
            <span className="inlineMediaPill inlineMediaPillWide" aria-hidden="true">
              <Image
                alt=""
                fill
                sizes="160px"
                src="/images/home-hero.png"
              />
            </span>{" "}
            deserve coffee worth staying for.
          </h2>
          <ScrubRevealText
            text="From the first light on the bar to the last warm pastry plate, every detail is built to make the room feel steady, generous, and deeply local."
          />
        </section>

        <section className="pageSection storySection" id="story">
          <div className="storyCopy motion-rise">
            <SectionHeading
              eyebrow="Our story"
              text="Morrow Coffee began with a simple belief: great coffee brings people together. We roast in small batches, know our regulars by name, and show up for the community every day."
              title="Rooted in this neighborhood."
            />
            <ButtonLink href="/journal" icon="arrow" variant="ghost">
              Learn more about us
            </ButtonLink>
          </div>

          <div className="mediaPanel mediaPanelWide motion-image-scroll motion-tilt">
            <Image
              alt="The interior of Morrow Coffee with warm lights and pastries"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              src="/images/home-story.png"
            />
          </div>
        </section>

        <section className="pageSection" id="community">
          <div className="motion-rise">
            <SectionHeading
              align="center"
              eyebrow="From our community"
              title="Kind words from our neighbors."
            />
          </div>

          <TestimonialCarousel />
        </section>

        <section className="ctaBand">
          <div className="ctaBandImage motion-image-scroll">
            <Image
              alt="Fresh coffee beans"
              fill
              sizes="(max-width: 900px) 100vw, 32vw"
              src="/images/home-beans.png"
            />
          </div>
          <div className="ctaBandContent motion-rise">
            <p className="sectionEyebrow">Come say hi</p>
            <h2 className="ctaTitle">Good coffee is better together.</h2>
            <p className="ctaText">We can&apos;t wait to welcome you.</p>
            <div className="buttonRow">
              <ButtonLink href="/visit" icon="map" variant="outline">
                Visit the cafe
              </ButtonLink>
              <ButtonLink href="/menu" icon="arrow" className="buttonDarkOutline">
                See the menu
              </ButtonLink>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
