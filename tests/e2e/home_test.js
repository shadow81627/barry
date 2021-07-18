const slug = 'home';
const heading = 'Meet scUber';

Feature(slug);

Scenario('Heading 1', async ({ I }) => {
  I.amOnPage('/');
  // I.see(heading, 'h1');
  I.wait(5);

  I.saveScreenshot(`${slug}.png`);
  await I.seeVisualDiff(`${slug}.png`);
});
