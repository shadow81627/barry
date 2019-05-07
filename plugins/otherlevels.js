function olSetup() {
  // Application/Project Key. Available from Projects screen in Portal.
  const appKey = '7b9f8bc23f715afc5141842400f6451a';
  const options = {
    // name of the app. Change this for production app.
    appName: 'barry',
    preloadContent: ['Notification Prompt'],
    onError: function(e) {
      console.log(typeof e === 'string' ? e : e.message);
    },
  };
  _ol('create', appKey, options, function() {
    if (localStorage.getItem('OL_os_name') == null) {
      const olOsName = getOSName();
      localStorage.setItem('OL_os_name', olOsName);
      _ol('setTag', 'os_name', olOsName, 'string', function() {});
    }

    if (localStorage.getItem('OL_device_type') == null) {
      const olDeviceType = getMobileOrDesktop();
      localStorage.setItem('OL_device_type', olDeviceType);
      _ol('setTag', 'device_type', olDeviceType, 'string', function() {});
    }

    _ol('push.isSubscribed', function(isSubscribed) {
      if (!isSubscribed) {
        _ol('askForPermission', 'notification', function(subscribed) {
          if (subscribed === 'subscribed') {
            _ol('registerEvent', 'softyes_hardallow', '', function() {});
            setTimeout(sendWelcomePushSW, 5000);
          } else if (subscribed === 'notsubscribed') {
            _ol('registerEvent', 'softyes_hardblock', '', function() {});
          }
        });
      } else {
        _ol('push.subscribe');
      }
    });

    checkIncognito();

    _ol(
      'displayInterstitial',
      'Notification Prompt',
      {
        'click button-id': function(event, context) {
          console.log('User received interstitial with metadata', context.meta);
          console.log('We are closing this interstitial and setting new phash on the session');
          context.close();
          context.pushPhash();
        },
      },
      function() {
        console.log('User dismissed interstitial');
      },
      function() {
        console.log('Interstitial loaded');
      },
      function() {
        console.log('No interstitial found for this placement');
      },
    );
  });
}

function sendWelcomePushSW() {
  navigator.serviceWorker.ready.then(function(registration) {
    registration.showNotification('barry.com', {
      body: 'Thanks for subscribing to barry.com updates!',
      icon: 'https://cdn-image.otherlevels.com/12380/3a63fae7-81bd-47a1-950f-f07528d039f4.png',
    });
  });
}

function getOSName() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (navigator.userAgent.match(/(mobi)/i)) {
    if (/windows phone/i.test(userAgent)) {
      return 'Windows Phone';
    }
    if (/android/i.test(userAgent)) {
      return 'Android';
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'iOS';
    }
  } else {
    if (/Macintosh/i.test(userAgent)) {
      return 'Macintosh';
    }
    if (/Windows/i.test(userAgent)) {
      return 'Windows';
    }
    if (/Linux/i.test(userAgent)) {
      return 'Linux';
    }
  }
  return 'unknown';
}

function getMobileOrDesktop() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (userAgent.match(/(mobi)/i)) {
    return 'Mobile';
  } else {
    return 'Desktop';
  }
}

function checkIncognito() {
  const fs = window.RequestFileSystem || window.webkitRequestFileSystem;
  if (!fs) {
    return;
  }
  fs(
    window.TEMPORARY,
    100,
    function(fs) {
      // "not in incognito mode"
    },
    function(err) {
      _ol('getSessionId', function(x) {
        _ol('setTag', '__incognito_session', x, 'string', function() {});
      });
      console.log(err);
    },
  );
}

if (document) {
  if (/comp|inter|loaded/.test(document.readyState)) {
    olSetup();
  } else {
    document.addEventListener('DOMContentLoaded', olSetup, false);
  }
}
