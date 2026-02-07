import { API_BASE_URL } from "./config.js";

const btn = document.getElementById("loadBtn");
const result = document.getElementById("result");

function showLoading() {
  result.innerHTML = `
    <div class="d-flex align-items-center gap-2">
      <div class="spinner-border text-primary" role="status"></div>
      <span>Loading data…</span>
    </div>
  `;
}

function showError(message) {
  result.innerHTML = `
    <div class="alert alert-danger">
      ${message}
    </div>
  `;
}

function renderUser(user, repos) {
  result.innerHTML = `
    <div class="card mb-4">
      <div class="card-body">
        <h5>${user.name ?? user.login}</h5>
        <p class="text-muted mb-1">${user.login}</p>
        <p>
          ⭐ ${user.public_repos} repos ·
          👥 ${user.followers} followers
        </p>
        <a href="${user.profile_url}" target="_blank">
          View GitHub profile
        </a>
      </div>
    </div>

    <h5 class="mb-2">Repositories</h5>
    <ul class="list-group">
      ${repos
        .map(
          (r) => `
          <li class="list-group-item d-flex justify-content-between">
            <div>
              <strong>${r.name}</strong>
              <div class="text-muted small">
                ${r.description ?? ""}
              </div>
            </div>
            <span class="badge bg-secondary">
              ⭐ ${r.stars}
            </span>
          </li>
        `,
        )
        .join("")}
    </ul>
  `;
}

btn.addEventListener("click", async () => {
  const username = document.getElementById("username").value.trim();
  if (!username) {
    showError("Please enter a GitHub username.");
    return;
  }

  showLoading();

  try {
    const userRes = await fetch(`${API_BASE_URL}/users/${username}`);
    if (!userRes.ok) {
      showError("User not found.");
      return;
    }

    const reposRes = await fetch(`${API_BASE_URL}/users/${username}/repos`);
    if (!reposRes.ok) {
      showError("Cannot load repositories.");
      return;
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    renderUser(user, repos);
  } catch (err) {
    showError("Network error. Backend not reachable.");
  }
});
