import creatinePostHeroImage from "../../imports/HomeDesktopWeb/creatine-post-hero.webp";
import readingLabelPostHeroImage from "../../imports/HomeDesktopWeb/reading-label-post-hero.webp";
import thirtySecondTestPostHeroImage from "../../imports/HomeDesktopWeb/thirty-second-test-post-hero.webp";
import moreIsntBetterPostHeroImage from "../../imports/HomeDesktopWeb/more-isnt-better-post-hero.webp";

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
    slug: "more-isnt-better-when-a-bigger-dose-becomes-a-worse-formula",
    title: "More Isn't Better: When a Bigger Dose Becomes a Worse Formula",
    excerpt: "A higher number on the front of the tub doesn't automatically mean a better product. Here's what to check instead.",
    date: "2026-08-12",
    image: moreIsntBetterPostHeroImage,
    imageAlt: "Supplement dosing being measured.",
    body: [
      p("Supplement marketing loves big numbers."),
      p("10,000 mg sounds better than 5,000 mg."),
      p("Eight active ingredients sound better than three."),
      p("“Maximum strength” sounds better than “enough.”"),
      p("But dosage does not work like a scoreboard."),
      p("For many ingredients, there is a useful range. Below it, you may not get much benefit. Above it, you may simply get more cost, more side effects, or more ingredients competing for space in the formula."),
      p("That is why a higher number on the front of the tub does not automatically mean a better product."),
      p("The better question is:"),
      h3("Why is this dose here?"),
      p("Is it based on published research?"),
      p("Does it fit the intended use?"),
      p("Is every ingredient present in a meaningful amount, or is the formula packed with impressive names that leave no room for effective dosing?"),
      p("This matters especially with products containing long ingredient lists. A label can look advanced while spreading the total serving across so many compounds that several are included mainly for appearance."),
      p("A simpler formula can sometimes be the more serious one."),
      p("Not because fewer ingredients are always better, but because every ingredient should have a reason to be there."),
      p("The goal is not the biggest number."),
      p("It is the **right amount, for the right reason**."),
      p("That is a much harder thing to market."),
      p("And a much better thing to look for."),
    ],
  },
  {
    slug: "the-30-second-supplement-test",
    title: "The 30-Second Supplement Test",
    excerpt: "You can learn a surprising amount about a supplement in about 30 seconds. Here's what to check.",
    date: "2026-08-12",
    image: thirtySecondTestPostHeroImage,
    imageAlt: "Supplement label being read closely.",
    body: [
      p("Most supplement shopping decisions happen too fast."),
      p("A bold claim catches your eye. The ingredient list looks long. The packaging feels premium. You assume the formula must be good."),
      p("But you can learn a surprising amount in about 30 seconds."),
      p("Start with the **serving size**."),
      p("If the product needs three, four, or six capsules to reach the advertised dose, check whether that serving is actually what the front of the package makes you expect."),
      p("Then scan the **active ingredients**."),
      p("Look for clear amounts beside each one. If the label hides everything inside a proprietary blend, you know what is present — but not whether there is enough of it to matter."),
      p("Next, compare the dosage with the **research-backed range** for the ingredient."),
      p("A familiar name on a label is not the same as an effective formula."),
      p("Then check for **testing and transparency**."),
      p("Independent certification, batch testing, clearly listed ingredients, and accessible product information are stronger signals than vague phrases like “premium quality” or “scientifically formulated.”"),
      p("Finally, ignore the front for a moment."),
      p("Turn the product around and ask one simple question:"),
      h3("Does the back of the label support the promise on the front?"),
      p("If the answer is unclear, that is useful information too."),
      p("A better supplement does not always have the longest ingredient list."),
      p("Often, it is the one that makes the fewest things difficult to verify."),
    ],
  },
  {
    slug: "reading-a-supplement-label-like-a-scientist",
    title: "Reading a Supplement Label Like a Scientist",
    excerpt: "A supplement label can look impressive without telling you very much. Here's how to read it like evidence, not an ad.",
    date: "2026-08-05",
    image: readingLabelPostHeroImage,
    imageAlt: "Close-up of a supplement label being examined.",
    body: [
      p("A supplement label can look impressive without telling you very much."),
      p("Big ingredient names. Tiny disclaimers. Numbers positioned exactly where your eye lands first."),
      p("The trick is to stop reading it like an advertisement and start reading it like evidence."),
      p("Begin with the **dose**."),
      p("If a product celebrates an ingredient on the front but gives you only a fraction of the amount typically used in research, the ingredient may be doing more work for the marketing than for the formula."),
      p("Then look for **proprietary blends**."),
      p("A blend can tell you what is inside without telling you how much of each ingredient you are actually getting. That makes an otherwise impressive ingredient list difficult to evaluate."),
      p("Next comes **testing**."),
      p("“Lab tested” sounds reassuring, but the useful question is: **tested by whom, and for what?**"),
      p("Independent testing can help verify things like ingredient identity, purity, contaminants, or whether the product contains what the label claims."),
      p("Finally, compare the front of the package with the back."),
      p("The front sells the story."),
      p("The back has to explain it."),
      p("If the promises get bigger while the numbers stay vague, pay attention."),
      p("You do not need to memorize every ingredient or become a chemist."),
      p("You only need four habits:"),
      p("**Check the dose.**"),
      p("**Question hidden blends.**"),
      p("**Look for meaningful testing.**"),
      p("**Read the back before believing the front.**"),
      p("Once you start doing that, a supplement label becomes much less persuasive — and much more useful."),
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
];
