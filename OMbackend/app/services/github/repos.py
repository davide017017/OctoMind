from app.services.github._client import github_get
from app.services.github.exceptions import GitHubReposNotFound


def get_github_repos(username: str) -> list[dict]:
    response = github_get(
        f"/users/{username}/repos",
        params={
            "per_page": 100,
            "sort": "stars",
            "direction": "desc",
        },
    )

    if response.status_code == 404:
        raise GitHubReposNotFound()

    response.raise_for_status()

    repos = response.json()

    return [
        {
            "name": repo["name"],
            "full_name": repo["full_name"],
            "description": repo["description"],
            "stars": repo["stargazers_count"],
            "language": repo["language"],
            "fork": repo["fork"],
            "repo_url": repo["html_url"],
        }
        for repo in repos
    ]
