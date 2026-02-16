export function renderUserCard(user) {
  return `
    <div class="card border-0 shadow-lg"
         style="background:#1e1e2f; border-radius:16px;">

      <div class="card-body text-center p-4">

        <img 
          src="${user.avatar_url}" 
          alt="${user.login}"
          class="rounded-circle mb-4 shadow"
          width="160"
          height="160"
          style="border:4px solid #ff9f43;"
        />

        <h4 class="text-light mb-1">
          ${user.name ?? user.login}
        </h4>

        <p class="mb-4" style="color:#a29bfe;">
          @${user.login}
        </p>

        <div class="mb-4">

          <div class="fw-bold text-light fs-5">
            ${user.public_repos}
          </div>
          <div class="small mb-2" style="color:#ff9f43;">
            Repositories
          </div>

          <div class="fw-bold text-light fs-5">
            ${user.followers}
          </div>
          <div class="small mb-2" style="color:#a29bfe;">
            Followers
          </div>

          <div class="fw-bold text-light fs-5">
            ${user.following}
          </div>
          <div class="small" style="color:#ff9f43;">
            Following
          </div>

        </div>

        <a href="${user.profile_url}" 
           target="_blank"
           class="btn w-100"
           style="background:#ff9f43; color:#1e1e2f; font-weight:600;">
          View on GitHub
        </a>

      </div>
    </div>
  `;
}
