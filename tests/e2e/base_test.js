const pages = [
  { slug: 'home', heading: 'Meet scUber', route: '/' },
  { slug: 'win', heading: 'WIN A SCUBER RIDE' },
];

for (const { slug, heading, route } of pages) {
  Feature(slug);

  Scenario('Heading 1', async ({ I }) => {
    I.amOnPage(route || `/${slug}`);
    I.see(heading, 'h1');
    I.wait(5);

    I.saveScreenshot(`${slug}.png`);
    await I.seeVisualDiff(`${slug}.png`);
  });
}
