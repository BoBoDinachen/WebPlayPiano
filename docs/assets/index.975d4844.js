import{j as E,r as d,R as h,a as A,h as B,b as Z}from"./vendor.5c67c7b8.js";const G=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};G();const x="_container_1kvsp_1",k="_left_1kvsp_17",R="_right_1kvsp_28",F="_keyBoxsA_1kvsp_34",f="_keyBoxsC_1kvsp_34",N="_keyBoxsB_1kvsp_34";var p={container:x,left:k,right:R,keyBoxsA:F,keyBoxsC:f,keyBoxsB:N};const M="_container_1f5an_1",Q="_warpBox_1f5an_12",D="_insideBox_1f5an_21";var g={container:M,warpBox:Q,insideBox:D};const e=E.exports.jsx,s=E.exports.jsxs;function v(i){const{keyName:a,symbol:o,word:u,playSound:t,playAnima:n}=i;d.exports.useEffect(()=>{},[]);function c(){n(a),t(a)}return s("div",{className:g.container,onClick:c,children:[e("div",{className:`${g.warpBox} warp-box-${a}`}),s("div",{className:g.insideBox,children:[e("span",{children:o}),e("span",{children:u})]})]})}const Y="_container_eg2lu_1";var S={container:Y};function I({keyName:i}){return e("div",{className:S.container,children:e("span",{children:i})})}function r(i){let a=document.getElementById("popup-box");if(a){document.body.removeChild(a);let o=document.createElement("div");o.id="popup-box",document.body.appendChild(o),h.render(e(I,{keyName:i}),document.getElementById("popup-box")),A({targets:"#popup-box",translateY:-10,opacity:0,easing:"easeInOutExpo",duration:1e3,loop:!0}),setTimeout(()=>{document.body.contains(o)&&document.body.removeChild(o)},1e3)}else{let o=document.createElement("div");o.id="popup-box",document.body.appendChild(o),h.render(e(I,{keyName:i}),document.getElementById("popup-box")),A({targets:"#popup-box",translateY:-10,opacity:0,easing:"easeInOutExpo",duration:1e3,loop:!0}),setTimeout(()=>{document.body.contains(o)&&document.body.removeChild(o)},1e3)}}const U={A1:[0,1e3],A2:[3500,1e3],A3:[7e3,1e3],A4:[10500,1e3],A5:[14e3,1e3],A6:[17500,1e3],A7:[21e3,1e3]},z={B1:[0,1e3],B2:[3500,1e3],B3:[7e3,1e3],B4:[10500,1e3],B5:[14e3,1e3],B6:[17500,1e3],B7:[21e3,1e3]},L={C1:[0,1e3],C2:[3500,1e3],C3:[7e3,1e3],C4:[10500,1e3],C5:[14e3,1e3],C6:[17500,1e3],C7:[21e3,1e3]},O=[{index:"A1",symbol:"\u0424",word:"do"},{index:"A2",symbol:"\u0427",word:"re"},{index:"A3",symbol:"\u042A",word:"mi"},{index:"A4",symbol:"\u042D",word:"fa"},{index:"A5",symbol:"\u042E",word:"so"},{index:"A6",symbol:"\u0431",word:"la"},{index:"A7",symbol:"\u0434",word:"ti"}],T=[{index:"B1",symbol:"\u0424",word:"do"},{index:"B2",symbol:"\u0427",word:"re"},{index:"B3",symbol:"\u042A",word:"mi"},{index:"B4",symbol:"\u042D",word:"fa"},{index:"B5",symbol:"\u042E",word:"so"},{index:"B6",symbol:"\u0431",word:"la"},{index:"B7",symbol:"\u0434",word:"ti"}],V=[{index:"C1",symbol:"\u0424",word:"do"},{index:"C2",symbol:"\u0427",word:"re"},{index:"C3",symbol:"\u042A",word:"mi"},{index:"C4",symbol:"\u042D",word:"fa"},{index:"C5",symbol:"\u042E",word:"so"},{index:"C6",symbol:"\u0431",word:"la"},{index:"C7",symbol:"\u0434",word:"ti"}];var j="./assets/\u97F3\u7B26A.01c20080.svg",W="./assets/\u97F3\u7B26B.1e4d7c0d.svg",J="./assets/\u97F3\u7B26C.eaabf9d2.svg",C="./assets/audio.e7452ae9.mp3";function H(){let i=null,a=null,o=null;d.exports.useEffect(()=>{u(),t()},[]);function u(){i=new B.Howl({src:C,html5:!0,pool:7,volume:1,sprite:U,onend:function(l){console.log("\u89E6\u53D1\u97F3...")}}),a=new B.Howl({src:C,html5:!0,pool:7,volume:.5,sprite:z,onend:function(){console.log("\u89E6\u53D1\u97F3...")}}),o=new B.Howl({src:C,html5:!0,pool:7,volume:.2,sprite:L,onend:function(){console.log("\u89E6\u53D1\u97F3...")}})}function t(){window.addEventListener("keydown",l=>{switch(l.code){case"KeyQ":r("Q"),n("C1"),c("C1");break;case"KeyW":r("W"),n("C2"),c("C2");break;case"KeyE":r("E"),n("C3"),c("C3");break;case"KeyR":r("R"),n("C4"),c("C4");break;case"KeyT":r("T"),n("C5"),c("C5");break;case"KeyY":r("Y"),n("C6"),c("C6");break;case"KeyU":r("U"),n("C7"),c("C7");break;case"KeyA":r("A"),n("B1"),c("B1");break;case"KeyS":r("S"),n("B2"),c("B2");break;case"KeyD":r("D"),n("B3"),c("B3");break;case"KeyF":r("F"),n("B4"),c("B4");break;case"KeyG":r("G"),n("B5"),c("B5");break;case"KeyH":r("H"),n("B6"),c("B6");break;case"KeyJ":r("J"),n("B7"),c("B7");break;case"KeyZ":r("Z"),n("A1"),c("A1");break;case"KeyX":r("X"),n("A2"),c("A2");break;case"KeyC":r("C"),n("A3"),c("A3");break;case"KeyV":r("V"),n("A4"),c("A4");break;case"KeyB":r("B"),n("A5"),c("A5");break;case"KeyN":r("N"),n("A6"),c("A6");break;case"KeyM":r("M"),n("A7"),c("A7");break}})}function n(l){const m=l.split("");m[0]==="A"?i.play(l):m[0]==="B"?a.play(l):m[0]==="C"&&o.play(l)}function c(l){A({targets:".warp-box-"+l,keyframes:[{scale:1,opacity:1},{scale:1.5,opacity:.7},{scale:2,opacity:.3},{scale:1,opacity:1}],duration:500,easing:"easeInOutQuart"})}return s("div",{className:p.container,children:[s("div",{className:p.left,children:[e("img",{src:j,alt:""}),e("img",{src:W,alt:""}),e("img",{src:J,alt:""})]}),s("div",{className:p.right,children:[e("div",{className:p.keyBoxsC,children:V.map((l,m)=>e(v,{playAnima:c,playSound:n,keyName:l.index,symbol:l.symbol,word:l.word},l.index))}),e("div",{className:p.keyBoxsB,children:T.map((l,m)=>e(v,{playAnima:c,playSound:n,keyName:l.index,symbol:l.symbol,word:l.word},l.index))}),e("div",{className:p.keyBoxsA,children:O.map((l,m)=>e(v,{playAnima:c,playSound:n,keyName:l.index,symbol:l.symbol,word:l.word},l.index))})]})]})}const X="_container_etabn_1",P="_warpBtn_etabn_17";var w={container:X,warpBtn:P},K="data:image/png;base64,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UmVhZHlxyWU8AAADIWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFGQkNGNzQyQTBBQTExRUFCOTNCOURDRTQ4OUM0OEE0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFGQkNGNzQzQTBBQTExRUFCOTNCOURDRTQ4OUM0OEE0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUZCQ0Y3NDBBMEFBMTFFQUI5M0I5RENFNDg5QzQ4QTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUZCQ0Y3NDFBMEFBMTFFQUI5M0I5RENFNDg5QzQ4QTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7hALoJAAAAlklEQVR42mL8f2U+AxQ0APF/IG5kwANYkBTXI4nj1MQExFpAXIkkhq4ZQ8M1II4C4l/EaGKC0muJ1cSExCZKExOaAQQ1MWFxJl5NLDgCA6ZpGRCzIWnCagMM/McixohLQxAQL0cyHRaZDUykKMbmJLyK0TUQVIysgSjFsGDVwqK4AVeKhSW+DmIUI0ccLOr/EcpAAAEGAJGGKlHFAvzFAAAAAElFTkSuQmCC";function q({showRuleBox:i,showPaperBox:a}){const[o,u]=d.exports.useState(!0);d.exports.useEffect(()=>{o?(A({targets:"#affix-box",translateX:0,duration:1e3}),A({targets:"#social-icon",rotateY:360,duration:1e3})):(A({targets:"#affix-box",translateX:100,duration:1e3}),A({targets:"#social-icon",rotateY:-180,duration:1e3}))},[o]);function t(){u(!o)}return s("div",{className:w.container,id:"affix-box",children:[e("span",{className:w.warpBtn,onClick:t,children:e("img",{src:K,alt:"",id:"social-icon"})}),s("div",{onClick:i,children:[s("svg",{t:"1636212811376",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"18480",width:"200",height:"200",children:[e("path",{d:"M693.8 63.7H208.9C142 63.7 87.7 118 87.7 184.9v654.3c0 66.9 54.3 121.2 121.2 121.2H815c66.9 0 121.2-54.3 121.2-121.2V306.1L693.8 63.7z m181.9 775.5c0 33.4-27.2 60.6-60.6 60.6H208.9c-33.5 0-60.6-27.2-60.6-60.6V184.8c0-33.5 27.1-60.6 60.6-60.6H602c-0.5 72.6 0.9 181.8 0.9 181.8 0 67 54.3 90.9 121.2 90.9h151.5v442.3zM724.1 336.4c-33.5 0-60.6-27.1-60.6-60.6V124.2l212.1 212.1H724.1z m0 0",fill:"#333333","p-id":"18481"}),e("path",{d:"M693.9 513H330.2c-16.7 0-30.3 13.5-30.3 30.3s13.6 30.3 30.3 30.3h363.7c16.7 0 30.3-13.6 30.3-30.3-0.1-16.7-13.6-30.3-30.3-30.3z m0 0M693.9 664.6H330.2c-16.7 0-30.3 13.5-30.3 30.3s13.6 30.3 30.3 30.3h363.7c16.7 0 30.3-13.6 30.3-30.3-0.1-16.8-13.6-30.3-30.3-30.3z m0 0",fill:"#333333","p-id":"18482"})]}),e("span",{children:"\u6559\u7A0B"})]}),s("div",{onClick:a,children:[e("svg",{t:"1636213366254",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"18818",width:"200",height:"200",children:e("path",{d:"M954.480668 0.000401a33.555333 33.555333 0 0 0-33.635609 33.555334v580.39488a204.141657 204.141657 0 0 0-102.110966-34.036988c-62.374388-4.816555-131.090573 12.282215-193.384685 48.16555S513.926435 714.456064 486.953727 770.649206c-29.059882 60.528041-29.621813 120.413876-1.525242 169.061081s80.275917 78.028191 147.627411 83.246126q10.435869 0.802759 21.032291 0.802759a350.645206 350.645206 0 0 0 172.352394-48.888033c62.294112-35.883335 111.422973-86.617715 138.475957-142.971409a211.36649 211.36649 0 0 0 22.156153-88.303508 33.153954 33.153954 0 0 0 1.123863-8.027592V33.555735a33.555333 33.555333 0 0 0-33.715886-33.555334z m-50.333 803.160551c-21.192842 44.23203-60.768869 84.691093-111.422973 113.83125s-105.562831 43.108167-154.852244 39.3352c-44.312306-3.451864-77.947916-21.112566-94.56503-49.851345s-15.252424-66.629011 3.93352-106.606418c21.192842-44.23203 60.768869-84.691093 111.422973-113.83125a282.651504 282.651504 0 0 1 138.556233-40.137959c5.378486 0 10.756973 0 16.055183 0.642208 44.312306 3.451864 77.947916 21.112566 94.565031 49.851344s15.493252 66.789563-3.612417 106.76697zM67.91344 141.847947h543.227131a32.110367 32.110367 0 0 0 0-64.220734H67.91344a32.110367 32.110367 0 0 0 0 64.220734zM67.91344 353.696092h543.227131a32.110367 32.110367 0 0 0 0-64.220734H67.91344a32.110367 32.110367 0 0 0 0 64.220734zM67.91344 570.681896h446.89603a32.110367 32.110367 0 0 0 0-64.220734H67.91344a32.110367 32.110367 0 0 0 0 64.220734zM308.741191 711.806958H67.91344a32.110367 32.110367 0 0 0 0 64.220734h240.827751a32.110367 32.110367 0 0 0 0-64.220734z","p-id":"18819"})}),e("span",{children:"\u4E50\u8C31"})]})]})}const _="_container_1jq4x_1";var $={container:_},ee="./assets/log.fe40c276.png",ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzFFQUE5Nzk1RDI3MTFFOTlGNjlGQ0Y5MEYwNzU5RDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzFFQUE5N0E1RDI3MTFFOTlGNjlGQ0Y5MEYwNzU5RDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMUVBQTk3NzVEMjcxMUU5OUY2OUZDRjkwRjA3NTlENCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMUVBQTk3ODVEMjcxMUU5OUY2OUZDRjkwRjA3NTlENCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpFlAhoAAAonSURBVHja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",ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzU2MUMyMjQ1RDI3MTFFOTlGNjlGQ0Y5MEYwNzU5RDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzU2MUMyMjU1RDI3MTFFOTlGNjlGQ0Y5MEYwNzU5RDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMUVBQTk3RjVEMjcxMUU5OUY2OUZDRjkwRjA3NTlENCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMUVBQTk4MDVEMjcxMUU5OUY2OUZDRjkwRjA3NTlENCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGvQ5sAAAgdSURBVHja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";function te(i){const[a,o]=d.exports.useState(!1),{playSound:u,pauseSound:t}=i;d.exports.useEffect(()=>{a?u():t()},[a]);function n(){o(!a)}return s("div",{className:$.container,children:[e("img",{onClick:n,src:a?ce:ne,alt:""}),e("img",{src:ee,alt:""})]})}const ie="_container_1jork_1",oe="_content_1jork_17",le="_cancelBtn_1jork_25",ae="_topBar_1jork_38";var b={container:ie,content:oe,cancelBtn:le,topBar:ae},re="./assets/\u952E\u4F4D\u56FE.545fc159.png",se="./assets/\u793A\u4F8B\u4E50\u8C31\u56FE1.c69270c4.png";function ue(){function i(){A({targets:"#rule-box",translateY:-450,duration:2e3})}return s("div",{className:b.container,id:"rule-box",children:[e("div",{className:b.topBar,children:"\u6559\u7A0B"}),s("div",{className:b.content,children:[s("div",{children:[e("h3",{children:"1.\u7434\u952E\u600E\u4E48\u770B"}),e("p",{children:"1\u3001\u4E0B\u9762\u8FD9\u4E2A\u56FE\u5C31\u662F\u539F\u795E\u7434\u8C31\u7684\u952E\u4F4D\u56FE\uFF0C\u5206\u522B\u5BF9\u5E94\u952E\u76D8\u4E0A\u7684\uFF1A"}),s("ul",{children:[e("li",{children:"Q W E R T Y U"}),e("li",{children:"A S D F G H J "}),e("li",{children:"Z X C V B N M"})]}),e("img",{src:re,alt:""})]}),s("div",{children:[e("h3",{children:"2.\u97F3\u96367\u4E2A"}),e("p",{children:"Do Re Mi Fa Sol La Si"}),e("p",{children:"\u6570\u5B57\u5206\u522B\u5BF9\u5E94:"}),e("p",{children:"1 2 3 4 5 6 7"}),e("p",{children:"0\u4EE3\u8868\u4F11\u6B62"}),e("p",{children:"\u5B57\u6BCD\u5219\u5206\u522B\u5BF9\u5E94\uFF1A"}),e("p",{children:"Q W E R T Y U"})]}),s("div",{children:[e("h3",{children:"3.\u516B\u5EA6"}),e("img",{src:se,alt:""}),s("ul",{children:[e("li",{children:"\u500D\u9AD8\u97F3 1 2 3 4 5 6 7(\u6570\u5B57\u4E0A\u4E24\u4E2A\u70B9)"}),e("li",{children:"\u9AD8\u97F3 1 2 3 4 5 6 7(\u6570\u5B57\u4E0A\u4E00\u4E2A\u70B9)"}),e("li",{children:"\u4E2D\u97F3 1 2 3 4 5 6 7"}),e("li",{children:"\u4F4E\u97F3 1 2 3 4 5 6 7(\u6570\u5B57\u4E0B\u4E00\u4E2A\u70B9)"}),e("li",{children:"\u500D\u4F4E\u97F3 1 2 3 4 5 6 7(\u6570\u5B57\u4E0B\u4E24\u4E2A\u70B9)"}),e("h4",{children:"\u5BF9\u5E94\u952E\u76D8"}),e("li",{children:"\u9AD8\u97F31 2 3 4 5 6 7 8(\u9006\u6C34\u5BD2)"}),e("li",{children:"\u4E2D\u97F3Q W E R T Y U I(\u9006\u6C34\u5BD2)"}),e("li",{children:"\u4F4E\u97F3A S D F G H J K(\u9006\u6C34\u5BD2)"})]})]})]}),e("div",{className:b.cancelBtn,onClick:i})]})}const Ae="_container_t8u3r_2",de="_content_t8u3r_19",me="_log_t8u3r_34",pe="_bottomBtn_t8u3r_54";var y={container:Ae,content:de,log:me,bottomBtn:pe},Be="./assets/\u4E50\u8C3101.aa1870be.png",be="./assets/\u4E50\u8C3102.df617a5f.png";function ye(){function i(){A({targets:"#paper-box",opacity:0,duration:2e3})}return s("div",{className:y.container,id:"paper-box",children:[e("div",{className:y.log,children:"\u7EC3\u4E60\u4E50\u8C31"}),e("ul",{className:y.content,children:s("li",{children:[e("h3",{children:"\u300A\u7A7F\u8D8A\u65F6\u7A7A\u7684\u7231\u604B\u300B-\u7247\u6BB5"}),e("img",{src:Be,alt:""}),e("img",{src:be,alt:""})]})}),e("div",{className:y.bottomBtn,onClick:i})]})}var he="./assets/bj_music.c901aa71.mp3";function ge(){let i=null;d.exports.useEffect(()=>{i=new B.Howl({src:he,volume:1,loop:!0,autoplay:!1})},[]);function a(){i!==null&&i.pause()}function o(){i!==null&&i.play()}function u(){A({targets:"#rule-box",translateY:420,duration:1e3})}function t(){A({targets:"#paper-box",opacity:1,duration:2e3})}return s("div",{className:"App",children:[e(te,{pauseSound:a,playSound:o}),e(H,{}),e(q,{showRuleBox:u,showPaperBox:t}),e(ue,{}),e(ye,{})]})}h.render(e(Z.StrictMode,{children:e(ge,{})}),document.getElementById("root"));
