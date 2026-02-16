export function showLoading(el) {
  el.innerHTML = `
    <div class="d-flex align-items-center gap-2">
      <div class="spinner-border text-primary"></div>
      <span>Loading data…</span>
    </div>
  `;
}
