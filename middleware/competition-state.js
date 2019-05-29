export default function({ app, env }) {
  // Check competition state
  // const openTime = new Date(env.COMPETITON_OPEN_TIME);
  const closeTime = new Date(env.COMPETITON_CLOSE_TIME);
  const now = new Date();

  console.log(`now: ${now}`);
  console.log(`close: ${closeTime}`);

  // comming soon
  // if (now <= openTime) {
  //   return app.router.push(app.localePath('comingsoon'));
  // }

  // closed
  if (now >= closeTime) {
    return app.router.push(app.localePath('close'));
  }
}
