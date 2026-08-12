import creatinePostHeroImage from "../../imports/HomeDesktopWeb/creatine-post-hero.webp";

export type BlogBodyBlock = { type: "p" | "h3"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: BlogBodyBlock[];
  image?: string;
  imageAlt?: string;
};

function p(text: string): BlogBodyBlock {
  return { type: "p", text };
}

function h3(text: string): BlogBodyBlock {
  return { type: "h3", text };
}

// Newest first.
export const POSTS: BlogPost[] = [
  {
    slug: "why-proprietary-blends-are-a-red-flag",
    title: "Why “Proprietary Blend” Is a Red Flag",
    excerpt: "If a label hides dosages behind a blend name, you can't verify what you're actually taking. Here's why that matters.",
    date: "2026-08-05",
    body: [
      p("Walk down any supplement aisle and you'll see it: a tidy little box labeled “Proprietary Blend,” followed by a list of ingredients with no individual dosages attached. It sounds technical. It sounds protected. What it actually means is simpler — the company isn't telling you how much of anything is in there."),
      p("That matters because most active ingredients only work at specific doses, backed by specific studies. Creatine monohydrate works at 3–5g a day. Citrulline malate needs 6–8g to move the needle on pump and endurance. A proprietary blend can legally contain milligram amounts of six “science-backed” ingredients and call it a day — technically true on the label, practically useless in your body."),
      p("We list every dose on every label, full stop. Not because it's required — most of the industry proves it isn't — but because a label you can't verify isn't really information. It's marketing wearing a lab coat."),
    ],
  },
  {
    slug: "what-third-party-testing-actually-checks-for",
    title: "What Third-Party Testing Actually Checks For",
    excerpt: "“Lab tested” means nothing on its own. Here's what a real third-party certification is actually verifying.",
    date: "2026-07-18",
    body: [
      p("“Lab tested” is one of the most overused phrases in the industry — and one of the least regulated. Every company tests something, somewhere, at some point. The real question is who's doing the testing, and what they're actually checking for."),
      p("Third-party certification — the kind we carry, NSF Certified for Sport — means an organization with no financial stake in our sales pulls product straight off the shelf and verifies two things: that what's on the label is actually in the tub (potency testing), and that nothing that shouldn't be there is in the tub either (banned substance and contaminant screening — heavy metals, pesticides, undeclared stimulants)."),
      p("It's the difference between a company grading its own homework and an independent third party doing it. If a brand won't name the certifying body, assume there isn't one."),
    ],
  },
  {
    slug: "creatine-the-most-studied-supplement-youre-under-dosing",
    title: "Creatine: The Most Studied Supplement You're Probably Under-Dosing",
    excerpt: "Decades of research point to one dose. Most people are still guessing.",
    date: "2026-06-30",
    image: creatinePostHeroImage,
    imageAlt: "Creatine monohydrate scoop and powder.",
    body: [
      p("Creatine is one of the most researched supplements in sports nutrition, with decades of evidence behind its ability to support strength, training performance, and muscle growth. Yet many people still take too little, use it only on workout days, or stop and start without realizing that consistency matters more than timing."),
      p("Creatine works by increasing the amount of phosphocreatine stored in your muscles. This helps your body regenerate ATP — the energy used during short, intense efforts like heavy lifting, sprinting, and explosive training."),
      p("Over time, that can mean better training quality, more repeated high-intensity effort, and greater progress when combined with a well-structured resistance training program."),
      p("For most healthy adults, the approach is simple:"),
      h3("3–5 g of creatine monohydrate every day"),
      p("You don't need to take it immediately before training. You don't need to cycle on and off. A loading phase can increase muscle creatine stores faster, but it isn't required."),
      p("And when it comes to the type of creatine, **creatine monohydrate remains the standard**. It's affordable, extensively studied, and alternative forms haven't consistently shown superior results."),
      p("Some people also notice a small increase in body weight after starting creatine. This is often related to increased water inside the muscle, not an increase in body fat."),
      p("The biggest mistake isn't choosing the wrong creatine."),
      p("It's taking an ineffective dose inconsistently."),
      p("**Keep it simple: 3–5 grams of creatine monohydrate, every day, and let consistency do the work.**"),
    ],
  },
  {
    slug: "reading-a-supplement-label-like-a-scientist",
    title: "Reading a Supplement Label Like a Scientist",
    excerpt: "Four things to check before you trust a label — none of them require a chemistry degree.",
    date: "2026-06-09",
    body: [
      p("You don't need a lab coat to read a supplement label critically. You need four questions."),
      p("First: are doses listed individually, or hidden behind a blend name? Second: does the per-serving dose actually match published research, or is it a fraction of it dressed up in bigger type? Third: is there an independent certification mark on the label — NSF, Informed Sport, USP — or just a company's own claim of testing? Fourth: does the ingredient list match what the marketing copy is actually promising, or is the front of the label doing a lot more work than the back?"),
      p("Run any product through those four questions and the label starts telling you the truth, whether or not the company wants it to. It's the same standard we hold every one of our own labels to."),
    ],
  },
];
