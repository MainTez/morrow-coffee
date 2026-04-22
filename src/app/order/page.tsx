import Image from "next/image";
import { OrderForm } from "@/components/order-form";
import { ButtonLink, SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function OrderPage() {
  return (
    <main className="pageFrame">
      <div className="pageSurface">
        <SiteHeader
          action={{ href: "/reserve", icon: "calendar", label: "Reserve a table" }}
          links={[
            { href: "/", label: "Home" },
            { href: "/menu", label: "Menu" },
            { href: "/visit", label: "Visit" },
            { href: "/journal", label: "Journal" },
          ]}
        />

        <section className="heroGrid orderHero">
          <div className="heroCopy">
            <p className="sectionEyebrow motion-rise">Order ahead</p>
            <div className="heroHeadlineWrap motion-rise">
              <h1 className="heroTitle heroTitleSm">
                Grab your coffee before you arrive.
              </h1>
            </div>
            <p className="heroBody heroBodyWide motion-rise">
              Keep the line short and the morning easy. Choose your drink,
              pickup window, and pastry in a couple of taps.
            </p>
            <div className="buttonRow motion-rise">
              <ButtonLink href="/menu" icon="arrow">
                Back to the menu
              </ButtonLink>
              <ButtonLink href="/visit" icon="map" variant="outline">
                Visit the cafe
              </ButtonLink>
            </div>
          </div>

          <div className="mediaPanel mediaPanelTall motion-image-scroll motion-tilt">
            <Image
              alt="Seasonal latte"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              src="/images/menu-seasonal.png"
            />
          </div>
        </section>

        <section className="pageSection motion-rise">
          <OrderForm />
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
