import Image from "next/image";
import {
  ButtonLink,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "@/components/site-chrome";
import { journalPosts } from "@/lib/site-data";

export default function JournalPage() {
  return (
    <main className="pageFrame">
      <div className="pageSurface">
        <SiteHeader
          action={{ href: "/visit", icon: "map", label: "Visit the cafe" }}
          links={[
            { href: "/", label: "Home" },
            { href: "/menu", label: "Menu" },
            { href: "/visit", label: "Visit" },
            { href: "/journal", label: "Journal", active: true },
          ]}
        />

        <section className="simpleHero">
          <SectionHeading
            eyebrow="Journal"
            text="A few notes from behind the bar: coffee routines, neighborhood stories, and the details we keep caring about."
            title="From the cafe notebook."
          />
          <div className="buttonRow motion-rise">
            <ButtonLink href="/menu" icon="arrow">
              Explore the menu
            </ButtonLink>
            <ButtonLink href="/visit" icon="map" variant="outline">
              Plan a visit
            </ButtonLink>
          </div>
        </section>

        <section className="journalGrid pageSection">
          {journalPosts.map((post) => (
            <article className="featureCard journalCard motion-rise motion-tilt" key={post.title}>
              <div className="featureImageWrap motion-image-scroll">
                <Image
                  alt={post.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                  src={post.image}
                />
              </div>
              <div className="featureBody">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <ButtonLink href={post.href} icon="arrow" variant="ghost">
                  Read more
                </ButtonLink>
              </div>
            </article>
          ))}
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
