"use strict";const DATA_URL="https://peaceful-chandrasekhar-efde8e.netlify.com/assets/json/data.json";function fetchSwag(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var a=t.responseText,n=JSON.parse(a);e(n)}},t.open("GET",DATA_URL,!0),t.send()}function renderSwag(e){for(var t of e){var a=document.createElement("div");a.className="item",document.getElementById("content").appendChild(a);var n=document.createElement("div");n.classList.add("title"),n.classList.add("flex"),a.appendChild(n);var d=document.createElement("h1");d.innerHTML=t.name,n.appendChild(d);var c=document.createElement("div");c.classList.add("difficulty"),c.classList.add(t.difficulty),n.appendChild(c);var s=document.createElement("p");s.className="swag",s.innerHTML="Stickers",a.appendChild(s);var r=document.createElement("img");r.src=t.image,a.appendChild(r);var i=document.createElement("p");i.className="description",i.innerHTML=t.description,a.appendChild(i);var o=document.createElement("a");o.href=t.reference,o.innerHTML="Go to page",a.appendChild(o)}}function bodyLoaded(){fetchSwag(renderSwag)}document.body.onload=bodyLoaded;