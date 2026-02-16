export function renderEventsList(events) {
  if (!events || events.length === 0) return "";

  return `
    <div class="card border-0 shadow-lg"
         style="background:#1e1e2f; border-radius:16px;">

      <div class="card-body">

        <h6 class="mb-3 text-light">Recent Activity</h6>

        ${events
          .slice(0, 5)
          .map(
            (e) => `
          <div class="py-2 border-bottom"
               style="border-color:#2c2c3e !important;">

            <div class="d-flex justify-content-between">

              <span style="color:#a29bfe;">
                ${e.type}
              </span>

              <small style="color:#ff9f43;">
                ${new Date(e.created_at).toLocaleDateString()}
              </small>

            </div>

            <div class="small text-muted">
              ${e.repo ?? ""}
            </div>

          </div>
        `,
          )
          .join("")}

      </div>
    </div>
  `;
}
