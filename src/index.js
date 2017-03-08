import './index.css';

import {getTaps } from './api/tapsApi';

let tapBody = "";

//get taps list
getTaps().then( result => {

  result.forEach( tap => {
    tapBody += `
  <div class="medium-6 large-4 columns">
      <article class="article-card">

        <div class="card-content">

          <h4>${tap.beer.name}</h4>

          <p class="post-author">By <a href="#">${tap.beer.brewer}</a></p>

          <p>${tap.beer.description}</p>
          <p>
            <a href="#">Stats:</a>
            <a href="#" class="right">ABV ${tap.beer.abv}%</a>
            <a href="#" class="right">IBU ${tap.beer.ibu}</a>
          </p>
        </div>
      </article>
    </div>`
  });
global.document.getElementById('taps').innerHTML = tapBody;
});
