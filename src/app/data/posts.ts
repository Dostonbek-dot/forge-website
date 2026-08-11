export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  body: string[];
};

// Newest first.
export const POSTS: BlogPost[] = [
  {
    slug: "why-proprietary-blends-are-a-red-flag",
    title: "Why “Proprietary Blend” Is a Red Flag",
    excerpt: "If a label hides dosages behind a blend name, you can't verify what you're actually taking. Here's why that matters.",
    tag: "Label Literacy",
    date: "2026-08-05",
    body: [
      "Walk down any supplement aisle and you'll see it: a tidy little box labeled “Proprietary Blend,” followed by a list of ingredients with no individual dosages attached. It sounds technical. It sounds protected. What it actually means is simpler — the company isn't telling you how much of anything is in there.",
      "That matters because most active ingredients only work at specific doses, backed by specific studies. Creatine monohydrate works at 3–5g a day. Citrulline malate needs 6–8g to move the needle on pump and endurance. A proprietary blend can legally contain milligram amounts of six “science-backed” ingredients and call it a day — technically true on the label, practically useless in your body.",
      "We list every dose on every label, full stop. Not because it's required — most of the industry proves it isn't — but because a label you can't verify isn't really information. It's marketing wearing a lab coat.",
    ],
  },
  {
    slug: "what-third-party-testing-actually-checks-for",
    title: "What Third-Party Testing Actually Checks For",
    excerpt: "“Lab tested” means nothing on its own. Here's what a real third-party certification is actually verifying.",
    tag: "Testing",
    date: "2026-07-18",
    body: [
      "“Lab tested” is one of the most overused phrases in the industry — and one of the least regulated. Every company tests something, somewhere, at some point. The real question is who's doing the testing, and what they're actually checking for.",
      "Third-party certification — the kind we carry, NSF Certified for Sport — means an organization with no financial stake in our sales pulls product straight off the shelf and verifies two things: that what's on the label is actually in the tub (potency testing), and that nothing that shouldn't be there is in the tub either (banned substance and contaminant screening — heavy metals, pesticides, undeclared stimulants).",
      "It's the difference between a company grading its own homework and an independent third party doing it. If a brand won't name the certifying body, assume there isn't one.",
    ],
  },
  {
    slug: "creatine-the-most-studied-supplement-youre-under-dosing",
    title: "Creatine: The Most Studied Supplement You're Probably Under-Dosing",
    excerpt: "Decades of research point to one dose. Most people are still guessing.",
    tag: "Research",
    date: "2026-06-30",
    body: [
      "Creatine monohydrate has more research behind it than almost any other supplement on the market — hundreds of studies, decades of safety data, consistent results across strength, power output, and even some early cognitive research. And yet it's one of the most inconsistently dosed products on shelves.",
      "The number that actually holds up across the literature is simple: 3–5g per day, taken consistently. Not cycled, not loaded with a week of 20g doses (that just gets you to saturation faster — the maintenance dose is the same either way), not flavored into oblivion with a proprietary blend that buries the actual number.",
      "Our Creatine Monohydrate is exactly one ingredient: creatine monohydrate, dosed at 5g a scoop. No blend, no filler, no guessing what you're actually getting.",
    ],
  },
  {
    slug: "reading-a-supplement-label-like-a-scientist",
    title: "Reading a Supplement Label Like a Scientist",
    excerpt: "Four things to check before you trust a label — none of them require a chemistry degree.",
    tag: "Label Literacy",
    date: "2026-06-09",
    body: [
      "You don't need a lab coat to read a supplement label critically. You need four questions.",
      "First: are doses listed individually, or hidden behind a blend name? Second: does the per-serving dose actually match published research, or is it a fraction of it dressed up in bigger type? Third: is there an independent certification mark on the label — NSF, Informed Sport, USP — or just a company's own claim of testing? Fourth: does the ingredient list match what the marketing copy is actually promising, or is the front of the label doing a lot more work than the back?",
      "Run any product through those four questions and the label starts telling you the truth, whether or not the company wants it to. It's the same standard we hold every one of our own labels to.",
    ],
  },
];
