/* eslint-disable */
// window.fbAsyncInit = function() {
//   try {
//     FB.init({
//       appId: process.env.FACEBOOK_APP_ID,
//       autoLogAppEvents: true,
//       xfbml: true,
//       version: process.env.FACEBOOK_API_VERSION,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
/* eslint-enable */
