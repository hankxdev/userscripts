// ==UserScript==
// @name         DoubanRarbg
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Search a movie in rarbg from douban page with just 1 click
// @author       You
// @match        https://movie.douban.com/subject/*
// @icon         https://www.google.com/s2/favicons?domain=douban.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const gotoRarbg=(id)=>{
        return `https://rarbgprx.org/torrents.php?search=${id}&order=seeders&by=DESC`
    }

    const id = document.querySelector('#info').textContent.match(/tt\d+/)[0]
    const url = gotoRarbg(id)
    const link = document.createElement('a')
    link.setAttribute("href", url)
    link.textContent="rarbg"
    document.querySelector('#info').appendChild(link)
})();
