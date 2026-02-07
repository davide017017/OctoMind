from app.services.github._client import github_get


def get_github_user(username: str) -> dict:
    response = github_get(f"/users/{username}")

    if response.status_code != 200:
        return {
            "error": "GitHub user not found",
            "status_code": response.status_code,
        }

    data = response.json()

    return {
        "login": data.get("login"),
        "name": data.get("name"),
        "avatar_url": data.get("avatar_url"),
        "public_repos": data.get("public_repos"),
        "followers": data.get("followers"),
        "following": data.get("following"),
        "profile_url": data.get("html_url"),
    }
