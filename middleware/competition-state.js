export default function({ app, env }) {
  // Check competition state
  const openTime = new Date(env.COMPETITON_OPEN_TIME);
  const closeTime = new Date(env.COMPETITON_CLOSE_TIME);
  const now = Date.now();

  // comming soon
  if (now <= openTime) {
    console.log('comingsoon');
    return app.router.push(app.localePath('comingsoon'));
  }

  // closed
  if (now >= closeTime) {
    console.log('closed');
    return app.router.push(app.localePath('closed'));
  }
}
