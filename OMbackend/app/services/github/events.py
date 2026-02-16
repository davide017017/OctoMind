from app.services.github._client import github_get
from app.services.github.exceptions import GitHubEventsNotFound


def get_github_events(username: str) -> list[dict]:
    response = github_get(
        f"/users/{username}/events",
        params={"per_page": 10},
    )

    if response.status_code == 404:
        raise GitHubEventsNotFound()

    response.raise_for_status()

    events = response.json()

    return [
        {
            "type": event["type"],
            "repo": event["repo"]["name"] if event.get("repo") else None,
            "created_at": event["created_at"],
        }
        for event in events
    ]
