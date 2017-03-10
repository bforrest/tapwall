import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getBeers() {
  return get('beers');
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// Can't call func delete since reserved word.
// function del(url) {
//   const request = new Request(baseUrl + url, {
//     method: 'DELETE'
//   });

//   return fetch(request).then(onSuccess, onError);
// }

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
