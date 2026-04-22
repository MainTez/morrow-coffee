import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import {
  ButtonLink,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "@/components/site-chrome";
import { events, visitHours } from "@/lib/site-data";

export default function VisitPage() {
  return (
    <main className="pageFrame">
      <div className="pageSurface">
        <SiteHeader
          action={{ href: "/order", icon: "bag", label: "Order ahead" }}
          links={[
            { href: "/", label: "Home" },
            { href: "/menu", label: "Menu" },
            { href: "/visit", label: "Visit", active: true },
          ]}
        />

        <section className="heroGrid visitHero">
          <div className="heroCopy">
            <p className="sectionEyebrow motion-rise">Open every day</p>
            <div className="heroHeadlineWrap motion-rise">
              <h1 className="heroTitle heroTitleSm">Visit the cafe</h1>
            </div>
            <p className="heroBody heroBodyWide motion-rise">
              Good coffee is better together. We can&apos;t wait to welcome you.
            </p>
            <div className="buttonRow motion-rise">
              <ButtonLink href="/reserve" variant="solid">
                Reserve a table
              </ButtonLink>
              <ButtonLink href="/order" icon="bag" variant="outline">
                Order ahead
              </ButtonLink>
            </div>
          </div>

          <div className="mediaPanel mediaPanelTall motion-image-scroll motion-tilt">
            <Image
              alt="Inside Morrow Coffee with warm afternoon light"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              src="/images/visit-hero.png"
            />
          </div>
        </section>

        <section className="visitDetailsGrid pageSection" id="find-us">
          <article className="paperCard infoCard motion-rise">
            <SectionHeading
              eyebrow="Find us"
              text="In the heart of the West End, just around the corner from Deering Oaks."
              title="23 Oakwood Avenue"
            />
            <p className="infoText">Portland, Maine 04101</p>
            <p className="infoText">United States</p>
            <ButtonLink
              href="https://maps.google.com/?q=23+Oakwood+Avenue+Portland+Maine+04101"
              icon="map"
              variant="outline"
            >
              Get directions
            </ButtonLink>
          </article>

          <article className="paperCard infoCard motion-rise">
            <SectionHeading eyebrow="Hours" title="Open every day" />
            <div className="hoursList">
              {visitHours.map((row) => (
                <div className="hoursRow" key={row.day}>
                  <span>{row.day}</span>
                  <span>{row.hours}</span>
                </div>
              ))}
            </div>
          </article>

          <div className="mediaPanel infoImagePanel motion-image-scroll motion-tilt">
            <Image
              alt="Street view of the Morrow Coffee storefront"
              fill
              sizes="(max-width: 900px) 100vw, 25vw"
              src="/images/visit-location.png"
            />
          </div>
        </section>

        <section className="communityGrid pageSection" id="community">
          <article className="paperCard neighborhoodCard motion-rise">
            <SectionHeading
              eyebrow="Our neighborhood"
              text="Morrow Coffee is rooted in the West End, a walkable, creative corner of Portland. We're proud to be part of this community and grateful to grow with you."
              title="A local spot with a long memory."
            />
            <ButtonLink href="/journal" variant="outline">
              Our story
            </ButtonLink>
          </article>

          <article className="paperCard eventsCard motion-rise" id="events">
            <div className="eventsHeader">
              <SectionHeading eyebrow="Upcoming events" title="Gather around the table." />
              <ButtonLink href="/reserve" icon="calendar" variant="ghost">
                View all events
              </ButtonLink>
            </div>

            <div className="eventGrid">
              {events.map((event) => (
                <article className="eventItem motion-tilt" key={event.title}>
                  <div className="eventImageWrap motion-image-scroll">
                    <Image
                      alt={event.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 20vw"
                      src={event.image}
                    />
                  </div>
                  <p className="eventDate">{event.date}</p>
                  <h3>{event.title}</h3>
                  <p>{event.summary}</p>
                  <ButtonLink href={event.href} icon="calendar" variant="ghost">
                    Save your spot
                  </ButtonLink>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="faqContactGrid pageSection" id="contact">
          <article className="paperCard faqCard motion-rise">
            <SectionHeading eyebrow="Questions" title="A few helpful details." />
            <FaqAccordion />
          </article>

          <article className="paperCard contactCard motion-rise">
            <SectionHeading eyebrow="Contact us" title="Reach out any time." />
            <div className="contactList">
              <a className="contactLink" href="tel:+12075550143">
                (207) 555-0143
              </a>
              <a className="contactLink" href="mailto:hello@morrowcoffee.com">
                hello@morrowcoffee.com
              </a>
              <a
                className="contactLink"
                href="https://instagram.com"
                rel="noreferrer"
                target="_blank"
              >
                @morrow.coffee
              </a>
            </div>
            <div className="buttonStack">
              <ButtonLink href="/reserve" variant="outline">
                Reserve a table
              </ButtonLink>
              <ButtonLink href="/order" icon="bag" variant="ghost">
                Order ahead
              </ButtonLink>
            </div>
          </article>

          <div className="mediaPanel mugPanel motion-image-scroll motion-tilt">
            <Image
              alt="A Morrow Coffee mug near a bright window"
              fill
              sizes="(max-width: 900px) 100vw, 25vw"
              src="/images/visit-mug.png"
            />
          </div>
        </section>

        <section className="visitBand motion-rise">
          <div>
            <p className="sectionEyebrow sectionEyebrowLight">
              We can&apos;t wait to see you
            </p>
            <h2 className="ctaTitle">Whether it&apos;s your morning ritual or a new favorite stop, you&apos;re always welcome here.</h2>
          </div>
          <div className="buttonRow">
            <ButtonLink href="/reserve" variant="outline">
              Reserve a table
            </ButtonLink>
            <ButtonLink href="/order" icon="bag" variant="outline">
              Order ahead
            </ButtonLink>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
