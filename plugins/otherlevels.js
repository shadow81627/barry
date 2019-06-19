// import axios from 'axios';

// import EventBus from '@/assets/js/EventBus.js';

export default ({ app }, inject) => {
  console.log(app);
  function olSetup(page) {
    console.log(`page: ${page}`);
    // Application/Project Key. Available from Projects screen in Portal.
    const appKey = '7b9f8bc23f715afc5141842400f6451a';
    const options = {
      // name of the app. Change this for production app.
      appName: 'barry',
      preloadContent: ['Notification Prompt'],
      serviceWorkerLocation: '/sw.js',
      safariWebsitePushId: 'web.com.scuberqueensland',
      onError: function(e) {
        console.log(typeof e === 'string' ? e : e.message);
      },
    };

    // const olMaxDepth = 3;
    const olPageUrlArray = location.pathname
      .substring(location.pathname.indexOf('/') + 1)
      .split('/');
    console.log(olPageUrlArray);
    const olCurrentPageName = page;

    // grab the URL relative path and dissect it for use in tags and events
    // const olLastPageCategoryTags = olPageUrlArray
    //   .slice(0, olMaxDepth)
    //   .filter(function(url, index) {
    //     return url && url.length;
    //   })
    //   .map(function(url, index) {
    //     return {
    //       name: 'lastPageCategory' + (index + 1),
    //       value: olPageUrlArray[index] || '',
    //       type: 'string',
    //     };
    //   });

    // if (olLastPageCategoryTags.length) {
    //   olCurrentPageName = olPageUrlArray[0];
    //   console.log(route);
    //   console.log(olCurrentPageName);
    // } else {
    //   olCurrentPageName = route.path;
    //   console.log(route);
    //   console.log(olCurrentPageName);
    // }

    _ol('create', appKey, options, function() {
      if (window.localStorage) {
        // localStorage is supported
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
      } else {
        // localStorage is not supported
        _ol('getTag', 'os_name', function(tag) {
          const olOsName = getOSName();
          if (!tag.value) {
            _ol('setTag', 'os_name', olOsName, 'string', function() {});
          } else if (olOsName !== tag.value) {
            _ol('setTag', 'os_name', olOsName, 'string', function() {});
          }
        });

        _ol('getTag', 'device_type', function(tag) {
          const olDeviceType = getMobileOrDesktop();
          if (!tag.value) {
            _ol('setTag', 'device_type', olDeviceType, 'string', function() {});
          } else if (olDeviceType !== tag.value) {
            _ol('setTag', 'device_type', olDeviceType, 'string', function() {});
          }
        });
      }

      checkIncognito();

      _ol('registerEvent', 'pageview', '', function() {});

      _ol('push.isSupported', function(isSupported) {
        if (isSupported) {
          _ol('push.isSubscribed', function(isSubscribed) {
            if (!isSubscribed) {
              console.log(`Push supported: ${page}`);
              if (!olCurrentPageName.includes('win')) {
                _ol('registerEvent', 'notSubscribed', '', function() {});
              }
            } else {
              _ol('push.subscribe');
            }
          });
        } else {
          _ol('registerEvent', 'unsupportedBrowser', '', function() {});
        }
      });

      // const submitForm = _ol('getTag', 'submitForm', function(tag) {
      //   return tag.value;
      // });
      // console.log(`submitForm: ${submitForm}`);

      // const TEQOptIn = _ol('getTag', 'TEQOptIn', function(tag) {
      //   return tag.value;
      // });

      // console.log(`TEQOptin: ${TEQOptIn}`);

      // if (submitForm && TEQOptIn === 0) {
      //   // subscriber here
      //   console.log('UpdateTEQOptin');
      //   const url = `${process.env.API_BASE_URL}/api/teq_opt_in`;
      //   axios
      //     .post(url, { secret: 'secret', hash: 'some hash' })
      //     .then(response => {
      //       console.log(response);

      //       _ol('setTag', 'updateTEQOptIn', 1, 'numeric', function() {});

      //       // Trigger event
      //       EventBus.$emit('entry-confirmed', true);
      //       EventBus.$emit('notification', {
      //         type: 'success',
      //         message: 'Subscribe successful.',
      //       });
      //       this.$router.push(this.localePath('confirm'));
      //     })
      //     .catch(error => {
      //       EventBus.$emit('notification', {
      //         type: 'error',
      //         message: 'Error submitting update.',
      //       });
      //       if (error.response) {
      //         // The request was made and the server responded with a status code
      //         // that falls out of the range of 2xx
      //         console.log(error.response.data);
      //         console.log(error.response.status);
      //         console.log(error.response.headers);
      //       } else if (error.request) {
      //         console.log(error.request);
      //       } else {
      //         // Something happened in setting up the request that triggered an Error
      //         console.log('Error', error.message);
      //       }
      //       console.log(error.config);
      //     });
      // }

      if (!olCurrentPageName.includes('win')) {
        console.log(`olSubscribed: ${page}`);
        const olSubscribed = function(event, context) {
          context.close();
          context.pushPhash();
        };

        const olSubscribeHandler = {};
        olSubscribeHandler['click Subscribe'] = olSubscribed;

        _ol('displayInterstitial', 'Placement 2', olSubscribeHandler);
        console.log('placement 2');
      }

      // if user visits win page

      // i) NOT ticked opt-in to TEQ; NOT an existing subscriber (no v2hash or hash)
      // ii) NOT ticked opt-in to TEQ; is an existing subscriber (has a v2hash or hash)
      // iii) Ticked opt-in to TEQ; NOT an existing subscriber (no v2hash or hash)
      // iv) Ticked opt-in to TEQ; is an existing subscriber (has a v2hash or hash)
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

  // if (document) {
  //   if (/comp|inter|loaded/.test(document.readyState)) {
  //     olSetup();
  //   } else {
  //     document.addEventListener('DOMContentLoaded', olSetup, false);
  //   }
  // }

  // Set the function directly on the context.app object
  inject('olSetup', olSetup);
  // app.olSetup = olSetup();
};
