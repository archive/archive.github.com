'use strict';

const loadFont = () => {
  window.WebFontConfig = {
    google: { families: ['Lora::latin'] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
};

const oldScrollTrick = () => window.scrollTo(0, 1);

const loadGa = () => {
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-34649514-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
};

const pleaseUpgradeYourBrowserInfo = () => {
  if (document.getElementById('media-queries-enabled').offsetWidth !== 0) {
    var message = '<div class="indiana-jones-browser">Wow, you are using a really old browser! Only Indian Jones is interested in stuff like this. <br>Please visit <a href="http://browsehappy.com/">http://browsehappy.com/</a> to understand why you should upgrade.</div>';
    document.getElementById('indiana-jones-browser').innerHTML = message;
  }
};

loadFont();
oldScrollTrick();
loadGa();
pleaseUpgradeYourBrowserInfo();