/* eslint-disable */
window.fbAsyncInit = function() {
  try {
    FB.init({
      appId: '286769528496888',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v2.10',
    });
  } catch (err) {
    console.log(err);
  }
};
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
