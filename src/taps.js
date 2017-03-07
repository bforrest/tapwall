import './taps.css';


import {getTaps } from './api/tapsApi';

let tapBody = "";
result.forEach( tap => {
  tapBody += `
<div class="medium-6 large-4 columns">
    <article class="article-card">
      <img src="${tap.logo}" style="width: 300px;">
      <div class="card-content">

        <p class="post-author">By <a href="#">${tap.brewer}</a></p>
        <h4>${tap.name}</h4>
        <p>${tap.description}</p>
        <p>
          <a href="#">Stats:</a>
          <a href="#" class="right">ABV ${tap.abv}%</a>
          <a href="#" class="right">IBU ${tap.ibu}</a>
        </p>
      </div>
    </article>
  </div>`
});


