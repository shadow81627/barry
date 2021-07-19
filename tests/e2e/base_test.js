const pages = [
  { slug: 'home', heading: 'Meet scUber', route: '/' },
  { slug: 'close' },
  { slug: 'confirm' },
  { slug: 'commingsoon', route: '/comingsoon/index.html' },
  { slug: 'emailshare' },
  { slug: 'explore' },
  { slug: 'offers' },
  { slug: 'request' },
  { slug: 'unsubscribe' },
  { slug: 'win', heading: 'WIN A SCUBER RIDE' },
];

for (const { slug, heading, route } of pages) {
  Feature(slug);

  Scenario('Heading 1', async ({ I }) => {
    I.amOnPage(route || `/${slug}`);

    if (heading) {
      I.see(heading, 'h1');
    }

    I.wait(5);
    I.saveScreenshot(`${slug}.png`);
    await I.seeVisualDiff(`${slug}.png`);
  });
}
