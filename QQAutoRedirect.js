// ==UserScript==
// @name         QQ auto redirect
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  当QQ点击链接跳转到外部浏览器，却被腾讯拦截时，脚本会自动跳转到目标网页
// @author       Poker
// @match        http*://c.pc.qq.com/*
// @license      MIT
// ==/UserScript==
 
(function () {
    "use strict";
    const url = getParams("pfurl") || getParams("url");
    url && (window.location.href = url);
})();