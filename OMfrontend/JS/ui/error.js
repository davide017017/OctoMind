export function showError(el, message) {
  el.innerHTML = `
    <div class="alert alert-danger">
      ${message}
    </div>
  `;
}
