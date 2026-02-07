from app.services.github._client import github_get


def get_github_repos(username: str) -> list:
    response = github_get(
        f"/users/{username}/repos",
        params={
            "per_page": 100,
            "sort": "stars",
            "direction": "desc",
        },
    )

    if response.status_code != 200:
        return [
            {
                "error": "Cannot fetch repos",
                "status_code": response.status_code,
            }
        ]

    repos = response.json()

    return [
        {
            "name": repo.get("name"),
            "full_name": repo.get("full_name"),
            "description": repo.get("description"),
            "stars": repo.get("stargazers_count"),
            "language": repo.get("language"),
            "fork": repo.get("fork"),
            "repo_url": repo.get("html_url"),
        }
        for repo in repos
    ]
