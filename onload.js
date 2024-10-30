/*! InstantDataScraperNext - 2024-01-30 */

function e(e){return Math.max.apply(null,Object.keys(e).map(function(t){return e[t]}))}function t(e,t){return(t||".")+e.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&").trim()}function o(e){return(e.attr("class")||"").trim().split(/\s+/).filter(function(e){return e.length>0})}function n(e){var t=$(e).children(),n={},r={};t.each(function(){if(!["script","img","meta","style"].includes(this.nodeName.toLowerCase())&&$(this).text().trim().length){var e=o($(this)).sort(),t=e.join(" ");t in r||(r[t]=0),r[t]++,e.forEach(function(e){e in n||(n[e]=0),n[e]++})}});var l=Object.keys(r).filter(function(e){return r[e]>=t.length/2-2});if(l.length||(l=Object.keys(n).filter(function(e){return n[e]>=t.length/2-2})),$(e).width()*$(e).height()>5e4&&t.length,!l.length||1===l.length&&""===l[0])return{children:t.filter(function(){return this.nodeName?!["script","img","meta","style"].includes(this.nodeName.toLowerCase())&&!!$(this).text().trim().length:(console.log("???",this),!1)}),goodClasses:[]};return{children:t.filter(function(){var e=!1,t=$(this);return l.forEach(function(o){e|=function(e,t){for(var o=t.split(" "),n=0;n<o.length;n++)if(!e.hasClass(o[n]))return!1;return!0}(t,o)}),e}),goodClasses:l}}var r=[],l=0,s=5;function a(e){e&&e.length;var t=$("body").width()*$("body").height();$("body *").each(function(){if(area=this.offsetWidth*this.offsetHeight,!(isNaN(area)||area<.02*t)){var e=n(this),o=e.children,l=o.length;if(!(isNaN(l)||l<3)){var s=area*l*l;r.push({table:this,goodClasses:e.goodClasses,area:area,children:o,text:o.text(),score:s,selector:w(this),type:"selector"})}}}),r=r.sort((e,t)=>t.score-e.score).slice(0,s),console.log("findTables:",r)}function i(){var e=(l+r.length-1)%r.length;$(r[e].table).removeClass("tablescraper-selected-table"),$(r[e].children).removeClass("tablescraper-selected-row"),$(r[l].table).addClass("tablescraper-selected-table"),$(r[l].children).addClass("tablescraper-selected-row")}function c(){$("*").removeClass("tablescraper-selected-table"),$("*").removeClass("tablescraper-selected-row")}function u(e){return e.clone().children().remove().end().text()}var h,d,f=new Set;function g(e){var t=sha256.create();return t.update(e),t.hex()}function m(e){if(null===localStorage.getItem("visited"))return!1;{const t=g(e),o=JSON.parse(localStorage.getItem("visited"));return o[o.length-1]===t||o[o.length-2]===t}}function v(e){null===localStorage.getItem("visited")&&localStorage.setItem("visited",JSON.stringify([]));const t=JSON.parse(localStorage.getItem("visited"));t.push(g(e)),localStorage.setItem("visited",JSON.stringify(t))}function p(e){for(;e.length;){if($(e).length)return $(e);e=e.split(">").slice(1).join(">")}return null}async function b(e,t){if(t){var s=p(t);if(console.log("getTableData:",t,s),!s)return e({error:"Table not found"}),void console.log("Table not found");r.length||(r=[{}]);var a=n(s),c=a.children;return m(c.text())?(e({error:"Table not changed. If the last page was not reached, try to increase crawl delay.",errorId:"finished"}),void console.log("Table not changed")):(r[l].table=s,r[l].children=c,r[l].goodClasses=a.goodClasses,r[l].text=c.text(),v(c.text()),i(),void b(e))}var h=[];r[l].children.each(function(){var e={},t=[];function n(o,n,r){if(o){var l=n+(r?" "+r:""),s=l,a=0;t.forEach(e=>{e==n&&a++}),a>1&&(s=l+" "+a),e[s]=o}}!function e(r,l,s){if(s.nodeName){var a=l+"/"+s.nodeName.toLowerCase()+o(r).map(e=>"."+e).join("");t.push(a),n(u(r).trim(),a),n(r.prop("href"),a,"href"),n(r.prop("src"),a,"src"),r.children().each(function(){e($(this),a,this)})}else console.log("what???",s)}($(this),"",this),Object.keys(e).length&&h.push(e)}),e({data:h,tableId:l,tableSelector:r[l].selector,goodClasses:r[l].goodClasses})}function w(e){return $(e).trigger("mouseleave"),$(e).trigger("blur"),$(e).parents().addBack().not("html").not("body").map(function(){var e=this.tagName.toLowerCase();return"string"==typeof this.id&&this.id.trim()&&!this.id.match(/\d+/g)?e+=t(this.id,"#"):"string"==typeof this.className&&this.className.trim()&&(e+=t(this.className).replace(/\s+/g,".")),e}).get().join(">")}function x(e){window.focus(),d=function(e){$(this).is($(e.target))&&($("*").removeClass("tablescraper-hover"),$(w(this)).last().addClass("tablescraper-hover"))};h=function(t){return t.preventDefault(),function(t){$("*").off("click",h).off("mouseenter",d),$(".tablescraper-hover").removeClass("tablescraper-hover"),$(".tablescraper-next-button").removeClass("tablescraper-next-button");var o=w(t.target);$(t.target).addClass("tablescraper-next-button"),console.log("Next button selector:",o),e({selector:o})}(t),!1},$("*").click(h).on("mouseenter",d)}var y=!1;function C(e){var t=document.createEvent("MouseEvents");t.initMouseEvent("mousedown",!0,!0,window,1,e.x,e.y,e.x,e.y,!1,!1,!1,!1,0,null);var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,1,e.x,e.y,e.x,e.y,!1,!1,!1,!1,0,null);var n=document.createEvent("MouseEvents");n.initMouseEvent("mouseup",!0,!0,window,1,e.x,e.y,e.x,e.y,!1,!1,!1,!1,0,null),e.dispatchEvent(t),e.dispatchEvent(o),e.dispatchEvent(n)}async function N(e,t){let o=e=>{return new Promise((t,o)=>{e.scrollTop+5>=50?t(!0):(e.scrollTop=e.scrollTop+50,setTimeout(()=>{let o=e.scrollTop+5>=50;t(o)},10))})},n=(e,t)=>new Promise((o,n)=>{e.scrollTop=e.scrollTop+t,setTimeout(()=>{o()},1e3)}),r=document.querySelector(e);for(;r;){if(await o(r))break;r=r.parentElement}if(console.log("Element with scrollbar"),console.log(r),!r)return void t({error:"No element with a scrollbar found"});let l=!1,s=!1,a=$(e).children().length,i=r.scrollTop;for(;!l&&!s;)await n(r,1e3),l=a!=$(e).children().length,s=r.scrollTop==i,i=r.scrollTop;t({})}function T(){return new Promise(function(e,t){console.log("Scrolling down"),$("html, body").animate({scrollTop:$(document).height()},5e3),setTimeout(()=>{e()},5e3)})}function E(e){return new Promise(function(t,o){var n=$(e.rows),s=0,a=50;n.length*a>3e3&&(a=3e3/n.length),a<10&&(a=10),console.log("Lazy scrolling",n.length,a);var c=setInterval(function(){var o=$(e.rows);if(o.length>n.length&&r[l].robot.next_page&&((n=o).addClass("tablescraper-selected-row"),i()),s>=n.length||s*a>1e4)return clearInterval(c),void t();console.log("Scrolling to: ",n[s]),n[s].scrollIntoView(!1),s++},a)})}function S(e,t,o){var n=function(e){for(;e.length;){if($(e).length)return $(e);e=e.split(">").slice(1).join(">")}return null}(e);return n?(n.last().addClass("tablescraper-next-button"),o?t({}):($("*").off("click",h).off("mouseenter",d),void setTimeout(function(){t({}),C(n.last()[0])},100))):t(o?{error:"Next button not found",errorId:"error"}:{error:"No more next buttons: Finished crawling. Download CSV or Excel file",errorId:"finished"})}function I(e){let t=document.documentElement.innerHTML;e({html:t=t.replace(/<\/?(!--)?(html|body|StartFragment|EndFragment)-*>/g,"")})}function j(e,t,o){let n=(t=t.replace(".tablescraper-selected-row","").split(" "))[0].split("/").filter(e=>e).slice(1).map(e=>e.split(".").map(e=>$.escapeSelector(e)).join("."));for(var r=0;r<n.length;r++){let t=e+" "+n.slice(0,r+1).join(">"),o=t+':not([class]:not([class=""]))';n[r].includes(".")||selectors_equivalent(t,o)||(n[r]=n[r]+':not([class]:not([class=""]))')}n=n.join(">");let l="";isNaN(t[t.length-1])?n.length>0&&(l=":eq(0)"):l=`:eq(${+t[t.length-1]-1})`;n+=l;o({selector:n})}chrome.runtime.onMessage.addListener(function(e,t,o){return"nextTable"==e.action||"findTables"==e.action?("findTables"==e.action?(r=[],a(e.robots)):(r.filter(e=>!e.robot).length||a(),l=(l+1)%r.length),i(),localStorage.removeItem("visited"),o({tableId:l,tableSelector:r[l].selector,robot:r[l].robot,href:window.location.href,hostname:window.location.hostname}),!0):"getTableData"==e.action?(b(o,e.selector),!0):"getNextButton"==e.action?(x(o),!0):"clickNext"==e.action?(S(e.selector,o),!0):"scrollDown"===e.action?(c(),N(e.selector,o),!0):"markNextButton"==e.action?(S(e.selector,o,!0),!0):void o({})});