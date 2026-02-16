from fastapi import APIRouter, Request

from app.core.limiter import limiter

from app.services.github import get_github_user, get_github_repos, get_github_events

router = APIRouter()


@router.get("/users/{username}")
@limiter.limit("30/minute")
def get_user(request: Request, username: str):
    return get_github_user(username)


@router.get("/users/{username}/repos")
@limiter.limit("30/minute")
def get_user_repos(request: Request, username: str):
    return get_github_repos(username)


@router.get("/users/{username}/summary")
@limiter.limit("30/minute")
def get_user_summary(request: Request, username: str):
    user = get_github_user(username)
    repos = get_github_repos(username)
    events = get_github_events(username)

    total_stars = sum(r["stars"] for r in repos)

    return {
        "user": user,
        "repos": repos,
        "events": events,
        "stats": {
            "total_repos": len(repos),
            "total_stars": total_stars,
        },
    }
