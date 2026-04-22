import { ButtonLink, SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function PrivacyPolicyPage() {
  return (
    <main className="pageFrame">
      <div className="pageSurface">
        <SiteHeader
          action={{ href: "/visit", icon: "map", label: "Visit the cafe" }}
          links={[
            { href: "/", label: "Home" },
            { href: "/menu", label: "Menu" },
            { href: "/visit", label: "Visit" },
            { href: "/journal", label: "Journal" },
          ]}
        />

        <section className="simpleHero">
          <p className="sectionEyebrow">Privacy policy</p>
          <h1 className="heroTitle heroTitleSm">How we handle reservation and order details.</h1>
          <p className="heroBody heroBodyWide">
            This demo site keeps submissions in the browser only. We do not send
            or store personal details on a server.
          </p>
        </section>

        <section className="pageSection legalCard">
          <h2>Information used on this site</h2>
          <p>
            Order and reservation forms on this demo site are client-side only.
            They exist to show interaction and do not persist submitted data.
          </p>
          <h2>External links</h2>
          <p>
            Links to maps, phone, email, and Instagram hand off directly to
            those services.
          </p>
          <h2>Contact</h2>
          <p>
            For a real implementation, privacy and retention details should be
            updated to match the production booking system.
          </p>
          <ButtonLink href="/" icon="arrow" variant="outline">
            Back home
          </ButtonLink>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
