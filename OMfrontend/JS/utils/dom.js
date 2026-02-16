export function qs(selector) {
  return document.querySelector(selector);
}

export function setHTML(el, html) {
  el.innerHTML = html;
}

export function clear(el) {
  el.innerHTML = "";
}
