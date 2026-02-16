import { fetchUserSummary } from "./api/github.js";
import { renderUserCard } from "./components/userCard.js";
import { renderRepoList } from "./components/repoList.js";
import { renderEventsList } from "./components/eventsList.js";

import { showLoading } from "./ui/loading.js";
import { showError } from "./ui/error.js";

const btn = document.getElementById("loadBtn");
const result = document.getElementById("result");

btn.addEventListener("click", async () => {
  const username = document.getElementById("username").value.trim();

  if (!username) {
    showError(result, "Please enter a GitHub username.");
    return;
  }

  showLoading(result);

  try {
    const data = await fetchUserSummary(username);

    result.innerHTML = `
  <div class="row g-4">

    <div class="col-lg-3">
      ${renderUserCard(data.user)}
    </div>

    <div class="col-lg-9">
      ${renderRepoList(data.repos ?? [])}
      ${renderEventsList(data.events ?? [])}
    </div>

  </div>
`;
  } catch (err) {
    showError(result, err.message);
  }
});
