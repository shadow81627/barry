export default function({ route }) {
  if (route.query.hash !== undefined) {
    _ol('setTag', 'subscriber_hash', route.query.hash, 'string', function() {});
  }
}
