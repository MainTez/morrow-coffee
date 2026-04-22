export type FeaturedDrink = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  note?: string;
  image?: string;
};

export type EventItem = {
  title: string;
  date: string;
  summary: string;
  image: string;
  href: string;
};

export type JournalPost = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const featuredDrinks: FeaturedDrink[] = [
  {
    name: "Maple Cinnamon Latte",
    description: "Smooth espresso with maple, cinnamon, and steamed milk.",
    price: "$5.25",
    image: "/images/home-latte.png",
  },
  {
    name: "Iced Honey Oat Latte",
    description: "Espresso, oat milk, and wildflower honey over ice.",
    price: "$5.00",
    image: "/images/home-iced-latte.png",
  },
  {
    name: "House Drip",
    description: "Our daily roast, balanced and clean, brewed fresh.",
    price: "$3.25",
    image: "/images/home-drip.png",
  },
];

export const homeQuotes = [
  {
    quote:
      "Morrow is my daily ritual. The coffee is consistently excellent and the vibe is unmatched.",
    author: "Jenna R.",
  },
  {
    quote:
      "You can taste the care in every cup. So grateful to have this spot in the neighborhood.",
    author: "Marcus T.",
  },
  {
    quote:
      "The staff are the best, friendly, thoughtful, and they remember your order.",
    author: "Priya S.",
  },
];

export const coreCoffeeMenu: MenuItem[] = [
  {
    name: "Espresso",
    description: "Bold and balanced.",
    price: "$3.00",
  },
  {
    name: "Americano",
    description: "Clean and smooth.",
    price: "$3.50",
  },
  {
    name: "Cappuccino",
    description: "Equal parts rich espresso, steamed milk, and foam.",
    price: "$4.50",
  },
  {
    name: "Latte",
    description: "Silky steamed milk with a smooth espresso finish.",
    price: "$4.75",
  },
  {
    name: "Mocha",
    description: "Dark chocolate, espresso, and steamed milk.",
    price: "$5.25",
  },
  {
    name: "Pour Over",
    description: "Single-origin, brewed to highlight each coffee's best notes.",
    price: "$5.75",
  },
  {
    name: "Cold Brew",
    description: "Slow-steeped for 18 hours. Crisp and refreshing.",
    price: "$4.75",
  },
  {
    name: "Iced Latte",
    description: "Smooth espresso over ice with your choice of milk.",
    price: "$4.75",
  },
];

export const bakeryPairings: MenuItem[] = [
  {
    name: "Butter Croissant",
    description: "Buttery, flaky, and golden.",
    price: "$4.25",
    note: "Perfect with a Latte",
    image: "/images/menu-thumb-croissant.png",
  },
  {
    name: "Blueberry Scone",
    description: "Tart blueberries and vanilla glaze.",
    price: "$4.75",
    note: "Perfect with a Cappuccino",
    image: "/images/menu-thumb-scone.png",
  },
  {
    name: "Chocolate Chunk Cookie",
    description: "Crispy edges, soft center, dark chocolate.",
    price: "$3.50",
    note: "Perfect with a Cold Brew",
    image: "/images/menu-thumb-cookie.png",
  },
];

export const tastingNotes = [
  {
    title: "Maple",
    description: "Warm, mellow sweetness",
  },
  {
    title: "Cinnamon",
    description: "Cozy spice with gentle warmth",
  },
  {
    title: "Nutmeg",
    description: "Soft, aromatic finish",
  },
];

export const visitHours = [
  { day: "Monday", hours: "6:30am - 6:00pm" },
  { day: "Tuesday", hours: "6:30am - 6:00pm" },
  { day: "Wednesday", hours: "6:30am - 6:00pm" },
  { day: "Thursday", hours: "6:30am - 7:00pm" },
  { day: "Friday", hours: "6:30am - 7:00pm" },
  { day: "Saturday", hours: "7:00am - 7:00pm" },
  { day: "Sunday", hours: "7:00am - 6:00pm" },
];

export const events: EventItem[] = [
  {
    title: "Latte Art Workshop",
    date: "May 17 • 10:00am",
    summary: "Learn the basics and pour your heart out.",
    image: "/images/visit-event-latte.png",
    href: "/reserve?event=Latte%20Art%20Workshop",
  },
  {
    title: "Brewing Better at Home",
    date: "May 24 • 11:00am",
    summary: "Tips, tasting, and good conversation.",
    image: "/images/visit-event-brew.png",
    href: "/reserve?event=Brewing%20Better%20at%20Home",
  },
  {
    title: "Morning Pages",
    date: "Jun 7 • 9:00am",
    summary: "Coffee, quiet, and community.",
    image: "/images/visit-event-journal.png",
    href: "/reserve?event=Morning%20Pages",
  },
];

export const faqs = [
  {
    question: "Do you take reservations?",
    answer:
      "Yes. Reservations are available for parties of up to 6 guests. For larger groups or private events, email us and we'll help plan something special.",
  },
  {
    question: "Do you have Wi-Fi?",
    answer:
      "We do. The network is available all day, and we keep a few tables set aside for longer working sessions.",
  },
  {
    question: "Is there parking nearby?",
    answer:
      "Street parking is usually easy in the morning, and there is a public lot one block east of the cafe.",
  },
  {
    question: "Are dogs allowed?",
    answer:
      "Friendly dogs are welcome on the front patio. Inside, only service animals are permitted.",
  },
  {
    question: "Do you offer gift cards?",
    answer:
      "Yes. You can grab a digital gift card at the counter or by emailing us for a custom amount.",
  },
];

export const journalPosts: JournalPost[] = [
  {
    title: "A slower way to start the day",
    description:
      "Why we design our mornings around great coffee, natural light, and room to linger.",
    image: "/images/home-story.png",
    href: "/visit#community",
  },
  {
    title: "What makes a neighborhood cafe feel personal",
    description:
      "A short note on regulars, open tables, and the difference small rituals make.",
    image: "/images/visit-location.png",
    href: "/#story",
  },
  {
    title: "Pairing pastry with your daily order",
    description:
      "The croissant, the cookie, and the drinks we keep reaching for with each one.",
    image: "/images/menu-bakery-hero.png",
    href: "/menu#bakery",
  },
];
