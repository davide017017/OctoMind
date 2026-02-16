function getLanguageColor(lang) {
  const colors = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    PHP: "#8892bf",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Shell: "#89e051",
    Java: "#b07219",
    Go: "#00ADD8",
    default: "#6c757d",
  };

  return colors[lang] || colors.default;
}

function renderLanguageBadges(languages) {
  if (!languages || languages.length === 0) return "";

  return `
    <div class="d-flex flex-wrap gap-2">
      ${languages
        .map(
          (lang) => `
        <span class="badge"
              style="
                background:${getLanguageColor(lang)};
                color:#111;
                font-weight:600;
                font-size:0.75rem;
              ">
          ${lang}
        </span>
      `,
        )
        .join("")}
    </div>
  `;
}

export function renderRepoList(repos) {
  if (!repos || repos.length === 0) return "";

  return `
    <div class="card border-0 shadow-lg mb-4"
         style="background:#1e1e2f; border-radius:16px;">

      <div class="card-body">

        <h5 class="mb-4 text-light">Repositories</h5>

        <div class="row g-4">

          ${repos
            .map(
              (r) => `
            <div class="col-md-6 col-xl-4">

              <div class="h-100 d-flex flex-column p-4 rounded"
                   style="
                     background:#26263a;
                     border:1px solid #2c2c3e;
                     transition: all 0.2s ease;
                   ">

                <!-- TITLE -->
                <h6 class="text-center text-light mb-3 fw-bold">
                  ${r.name}
                </h6>

                <!-- DESCRIPTION -->
                <div class="small flex-grow-1 mb-3"
                     style="
                       color:#cfcfe6;
                       line-height:1.4;
                       min-height:60px;
                     ">
                  ${r.description ?? "No description provided."}
                </div>

                <!-- FOOTER -->
                <div class="mt-auto">

                  <div class="d-flex justify-content-between align-items-start">

                    <!-- LANGUAGES LEFT -->
                    <div class="me-2">
                      ${renderLanguageBadges(
                        r.languages ?? (r.language ? [r.language] : []),
                      )}
                    </div>

                    <!-- STARS RIGHT -->
                    <div style="
                          color:#ff9f43;
                          font-weight:600;
                          white-space:nowrap;
                        ">
                      ⭐ ${r.stars}
                    </div>

                  </div>

                  <!-- CTA -->
                  <div class="mt-3 text-center">
                    <a href="${r.repo_url}" 
                       target="_blank"
                       class="btn btn-sm w-100"
                       style="
                         background:#ff9f43;
                         color:#1e1e2f;
                         font-weight:600;
                       ">
                      View Repository
                    </a>
                  </div>

                </div>

              </div>

            </div>
          `,
            )
            .join("")}

        </div>

      </div>
    </div>
  `;
}
