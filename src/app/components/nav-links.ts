export const NAV_LINKS = ["Shop", "Protein", "Performance", "Science", "About"] as const;

/** Only links with a real page get a route — everything else stays a `#` placeholder until that page exists. */
export const NAV_HREFS: Partial<Record<(typeof NAV_LINKS)[number], string>> = {
  Protein: "/protein",
  About: "/about",
};
