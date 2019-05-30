export default function({ app, env, redirect }) {
  return redirect(app.localePath('index'));
}
