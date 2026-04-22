import { ButtonLink, SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function TermsPage() {
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

        <section className="simpleHero">
          <p className="sectionEyebrow">Terms of service</p>
          <h1 className="heroTitle heroTitleSm">Demo interactions for a coffee shop prototype.</h1>
          <p className="heroBody heroBodyWide">
            These pages are a front-end example. Reservations and orders are not
            connected to live cafe systems.
          </p>
        </section>

        <section className="pageSection legalCard">
          <h2>Prototype status</h2>
          <p>
            Buttons, navigation, forms, and accordions are functional inside the
            demo, but submissions stop at the interface layer.
          </p>
          <h2>Availability and pricing</h2>
          <p>
            Menu details, event dates, and pricing shown here are sample content
            for the prototype.
          </p>
          <h2>Using the design</h2>
          <p>
            The generated imagery and implementation in this workspace are
            intended as a local example site.
          </p>
          <ButtonLink href="/menu" icon="arrow" variant="outline">
            Explore the menu
          </ButtonLink>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
