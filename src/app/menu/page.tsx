import Image from "next/image";
import { AccordionSlices } from "@/components/accordion-slices";
import { ButtonLink, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { bakeryPairings, coreCoffeeMenu, tastingNotes } from "@/lib/site-data";

export default function MenuPage() {
  return (
    <main className="pageFrame">
      <div className="pageSurface">
        <SiteHeader
          action={{ href: "/order", icon: "bag", label: "Order ahead" }}
          links={[
            { href: "/", label: "Home" },
            { href: "/menu", label: "Menu", active: true },
            { href: "/#story", label: "About" },
            { href: "/visit#find-us", label: "Location" },
          ]}
        />

        <section className="heroGrid menuHero">
          <div className="heroCopy">
            <p className="sectionEyebrow motion-rise">Fresh pours and baked nearby</p>
            <div className="heroHeadlineWrap motion-rise">
              <h1 className="heroTitle heroTitleSm">The menu</h1>
            </div>
            <p className="heroBody heroBodyWide motion-rise">
              Classic pours, seasonal favorites, and pastries we keep coming
              back to.
            </p>
            <div className="buttonRow motion-rise">
              <ButtonLink href="/order" icon="bag">
                Order ahead
              </ButtonLink>
              <ButtonLink href="/visit" icon="map" variant="outline">
                Visit the cafe
              </ButtonLink>
            </div>
          </div>

          <div className="mediaPanel menuHeroPanel motion-image-scroll motion-tilt">
            <Image
              alt="A latte beside a leafy branch"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              src="/images/menu-hero.png"
            />
          </div>
        </section>

        <section className="tabRowCard motion-rise">
          <a className="tabLink tabLinkActive" href="#coffee">
            Coffee
          </a>
          <a className="tabLink" href="#seasonal">
            Seasonal
          </a>
          <a className="tabLink" href="#bakery">
            Bakery
          </a>
          <a className="tabLink" href="/order">
            Order ahead
          </a>
        </section>

        <section className="menuGrid pageSection" id="coffee">
          <article className="paperCard motion-rise">
            <div className="menuSectionIntro">
              <h2>Core coffee</h2>
              <p>Thoughtfully sourced. Perfectly poured.</p>
            </div>

            <div className="menuList">
              {coreCoffeeMenu.map((item) => (
                <div className="menuRow" key={item.name}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>

            <ButtonLink href="/order" variant="outline">
              View all coffee
            </ButtonLink>
          </article>

          <div className="menuRightColumn">
            <article className="highlightCard motion-rise" id="seasonal">
              <div className="highlightCopy">
                <p className="sectionEyebrow">Featured seasonal</p>
                <h2 className="highlightTitle">Maple Cinnamon Latte</h2>
                <p className="highlightText">
                  Espresso with maple, cinnamon, and steamed milk. Finished
                  with a hint of nutmeg.
                </p>
                <span className="highlightPrice">$5.75</span>
                <ButtonLink href="/order" variant="outline">
                  Make it yours
                </ButtonLink>
              </div>

              <div className="highlightImageWrap motion-image-scroll">
                <Image
                  alt="Maple cinnamon latte"
                  fill
                  sizes="(max-width: 900px) 100vw, 22vw"
                  src="/images/menu-seasonal.png"
                />
              </div>
            </article>

            <article className="paperCard notesCard motion-rise">
              <p className="sectionEyebrow">Tasting notes</p>
              <div className="notesGrid">
                {tastingNotes.map((note) => (
                  <div className="noteCard" key={note.title}>
                    <h3>{note.title}</h3>
                    <p>{note.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <AccordionSlices />

        <section className="bakerySection pageSection" id="bakery">
          <article className="paperCard bakeryListCard motion-rise">
            <div className="menuSectionIntro">
              <h2>Bakery pairings</h2>
              <p>Made nearby. Better together.</p>
            </div>

            <div className="bakeryList">
              {bakeryPairings.map((item) => (
                <div className="bakeryItem" key={item.name}>
                  <div className="bakeryThumb">
                    <Image
                      alt={item.name}
                      fill
                      sizes="72px"
                      src={item.image ?? "/images/menu-thumb-croissant.png"}
                    />
                  </div>
                  <div className="bakeryMeta">
                    <div className="bakeryTopRow">
                      <h3>{item.name}</h3>
                      <span>{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                    {item.note ? <em>{item.note}</em> : null}
                  </div>
                </div>
              ))}
            </div>

            <ButtonLink href="/order" variant="outline">
              See all bakery
            </ButtonLink>
          </article>

          <div className="mediaPanel mediaPanelWide bakeryHeroPanel motion-image-scroll motion-tilt">
            <Image
              alt="Fresh croissant on a ceramic plate"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              src="/images/menu-bakery-hero.png"
            />
          </div>
        </section>

        <section className="menuBand motion-rise">
          <div>
            <p className="sectionEyebrow sectionEyebrowLight">Skip the wait</p>
            <h2 className="ctaTitle ctaTitleSmall">
              Order ahead for pickup and enjoy more of what matters.
            </h2>
          </div>
          <ButtonLink href="/order" icon="bag" variant="outline">
            Order ahead
          </ButtonLink>
        </section>

        <SiteFooter variant="compact" />
      </div>
    </main>
  );
}
