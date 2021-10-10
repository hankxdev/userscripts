// ==UserScript==
// @name         Rarbg Ads Remover
// @namespace    http://momane.com/
// @version      0.1
// @description  Remove the full page click ads on rarbg
// @author       Hank X
// @match        https://rarbgprx.org/torrents.php*
// @icon         https://www.google.com/s2/favicons?domain=rarbgprx.org
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const ads = document.body.lastChild;
  if(ads.childNodes.length < 1){
    return
  }
  const adsLink = ads.querySelectorAll("a")
  if(adsLink && adsLink.length === 1){
      document.body.removeChild(ads)
      console.log("found ads and removed", ads)
  }
})();