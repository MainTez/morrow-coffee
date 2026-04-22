import { Suspense } from "react";
import Image from "next/image";
import { ReserveForm } from "@/components/reserve-form";
import { ReserveFormFromSearch } from "@/components/reserve-form-from-search";
import { ButtonLink, SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function ReservePage() {
  return (
    <main className="pageFrame">
      <div className="pageSurface">
        <SiteHeader
          action={{ href: "/order", icon: "bag", label: "Order ahead" }}
          links={[
            { href: "/", label: "Home" },
            { href: "/menu", label: "Menu" },
            { href: "/visit", label: "Visit" },
            { href: "/journal", label: "Journal" },
          ]}
        />

        <section className="heroGrid orderHero">
          <div className="heroCopy">
            <p className="sectionEyebrow motion-rise">Reserve</p>
            <div className="heroHeadlineWrap motion-rise">
              <h1 className="heroTitle heroTitleSm">
                Save your table or event spot.
              </h1>
            </div>
            <p className="heroBody heroBodyWide motion-rise">
              Planning a slow morning, a catch-up with friends, or one of our
              upcoming workshops? Send us the details and we&apos;ll take it from
              there.
            </p>
            <div className="buttonRow motion-rise">
              <ButtonLink href="/visit" icon="map">
                Back to visit
              </ButtonLink>
              <ButtonLink href="/order" icon="bag" variant="outline">
                Order ahead
              </ButtonLink>
            </div>
          </div>

          <div className="mediaPanel mediaPanelTall motion-image-scroll motion-tilt">
            <Image
              alt="Inside the cafe in warm light"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              src="/images/visit-hero.png"
            />
          </div>
        </section>

        <section className="pageSection motion-rise">
          <Suspense fallback={<ReserveForm initialEvent="" />}>
            <ReserveFormFromSearch />
          </Suspense>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
