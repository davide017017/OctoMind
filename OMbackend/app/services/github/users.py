from app.services.github._client import github_get
from app.services.github.exceptions import GitHubUserNotFound


def get_github_user(username: str) -> dict:
    response = github_get(f"/users/{username}")

    if response.status_code == 404:
        raise GitHubUserNotFound()

    response.raise_for_status()  # gestisce 401, 403, 500 ecc.

    data = response.json()

    return {
        "login": data["login"],
        "name": data["name"],
        "avatar_url": data["avatar_url"],
        "public_repos": data["public_repos"],
        "followers": data["followers"],
        "following": data["following"],
        "profile_url": data["html_url"],
    }
