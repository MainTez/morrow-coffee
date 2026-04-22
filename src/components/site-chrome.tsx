import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Leaf,
  MapPin,
  ShoppingBag,
} from "lucide-react";

type ButtonIcon = "arrow" | "calendar" | "map" | "bag";

type SmartLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export type HeaderLink = {
  href: string;
  label: string;
  active?: boolean;
};

type HeaderAction = {
  href: string;
  label: string;
  icon?: ButtonIcon;
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  icon?: ButtonIcon;
  className?: string;
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

type SiteHeaderProps = {
  links: HeaderLink[];
  action: HeaderAction;
};

type SiteFooterProps = {
  variant?: "compact" | "full";
};

const iconMap = {
  arrow: ArrowRight,
  calendar: CalendarDays,
  map: MapPin,
  bag: ShoppingBag,
} as const;

function mergeClassNames(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

function SmartLink({ href, className, children }: SmartLinkProps) {
  if (isExternalHref(href)) {
    const shouldOpenNewTab = href.startsWith("http");

    return (
      <a
        className={className}
        href={href}
        rel={shouldOpenNewTab ? "noreferrer" : undefined}
        target={shouldOpenNewTab ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  icon,
  className,
}: ButtonLinkProps) {
  const Icon = icon ? iconMap[icon] : null;

  return (
    <SmartLink
      className={mergeClassNames("buttonLink", `button${variant}`, className)}
      href={href}
    >
      <span>{children}</span>
      {Icon ? <Icon className="buttonIcon" strokeWidth={1.8} /> : null}
    </SmartLink>
  );
}

export function SiteHeader({ links, action }: SiteHeaderProps) {
  return (
    <header className="siteHeader">
      <Link className="brandLink" href="/">
        <Leaf className="brandLeaf" strokeWidth={1.5} />
        <span className="brandWordmark">Morrow Coffee</span>
      </Link>

      <nav aria-label="Primary" className="siteNav">
        {links.map((link) => (
          <Link
            aria-current={link.active ? "page" : undefined}
            className={mergeClassNames(
              "navLink",
              link.active && "navLinkActive",
            )}
            href={link.href}
            key={`${link.href}-${link.label}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <ButtonLink href={action.href} icon={action.icon} variant="solid">
        {action.label}
      </ButtonLink>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={mergeClassNames(
        "sectionHeading",
        align === "center" && "sectionHeadingCenter",
      )}
    >
      <p className="sectionEyebrow">{eyebrow}</p>
      <h2 className="sectionTitle">{title}</h2>
      {text ? <p className="sectionText">{text}</p> : null}
    </div>
  );
}

export function SiteFooter({ variant = "full" }: SiteFooterProps) {
  if (variant === "compact") {
    return (
      <footer className="compactFooter">
        <div>
          <div className="footerBrand">Morrow Coffee</div>
          <p className="footerTagline">Coffee. Community. Every day.</p>
        </div>

        <div className="compactFooterMeta">
          <p>123 Greenway Ave</p>
          <p>Portland, OR 97214</p>
          <p>Open daily 7am - 6pm</p>
        </div>

        <div className="compactFooterLinks">
          <SmartLink href="https://instagram.com" className="footerLink">
            Instagram
          </SmartLink>
          <SmartLink href="/#story" className="footerLink">
            About
          </SmartLink>
          <SmartLink href="/visit#find-us" className="footerLink">
            Location
          </SmartLink>
          <SmartLink
            href="mailto:hello@morrowcoffee.com"
            className="footerLink"
          >
            Contact
          </SmartLink>
        </div>
      </footer>
    );
  }

  return (
    <footer className="siteFooter">
      <div className="siteFooterGrid">
        <div className="footerColumn">
          <div className="footerBrandRow">
            <Leaf className="brandLeaf" strokeWidth={1.5} />
            <span className="brandWordmark">Morrow Coffee</span>
          </div>
          <p className="footerDescription">
            Good coffee. Good people. Better together.
          </p>
        </div>

        <div className="footerColumn">
          <h3 className="footerHeading">Navigate</h3>
          <SmartLink href="/" className="footerLink">
            Home
          </SmartLink>
          <SmartLink href="/menu" className="footerLink">
            Menu
          </SmartLink>
          <SmartLink href="/visit" className="footerLink">
            Visit
          </SmartLink>
          <SmartLink href="/journal" className="footerLink">
            Journal
          </SmartLink>
        </div>

        <div className="footerColumn">
          <h3 className="footerHeading">Hours</h3>
          <p className="footerLinkStatic">Open every day</p>
          <SmartLink href="/visit#find-us" className="footerLink">
            See all hours
          </SmartLink>
        </div>

        <div className="footerColumn">
          <h3 className="footerHeading">Connect</h3>
          <SmartLink href="https://instagram.com" className="footerLink">
            Instagram
          </SmartLink>
          <SmartLink
            href="mailto:hello@morrowcoffee.com"
            className="footerLink"
          >
            Email
          </SmartLink>
          <SmartLink href="tel:+12075550143" className="footerLink">
            (207) 555-0143
          </SmartLink>
        </div>

        <div className="footerSeal">MORROW COFFEE<br />PORTLAND, MAINE</div>
      </div>

      <div className="siteFooterBottom">
        <p>© 2026 Morrow Coffee. All rights reserved.</p>
        <div className="siteFooterPolicies">
          <SmartLink href="/privacy-policy" className="footerLink">
            Privacy Policy
          </SmartLink>
          <SmartLink href="/terms" className="footerLink">
            Terms of Service
          </SmartLink>
        </div>
      </div>
    </footer>
  );
}
