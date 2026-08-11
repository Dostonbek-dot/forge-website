// Protein still exists at /protein (linked from the homepage Categories section) — it's just not in the main nav.
export const NAV_LINKS = ["Shop", "About", "Blog", "Contact"] as const;

export const NAV_HREFS: Record<(typeof NAV_LINKS)[number], string> = {
  Shop: "/shop",
  About: "/about",
  Blog: "/blog",
  Contact: "/contact",
};
