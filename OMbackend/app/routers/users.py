from fastapi import APIRouter

from app.services.github import get_github_user, get_github_repos

router = APIRouter()


@router.get("/users/{username}")
def get_user(username: str):
    return get_github_user(username)


@router.get("/users/{username}/repos")
def get_user_repos(username: str):
    return get_github_repos(username)


@router.get("/users/{username}/summary")
def get_user_summary(username: str):
    user = get_github_user(username)
    repos = get_github_repos(username)

    total_stars = sum(r["stars"] for r in repos)

    return {
        "user": user,
        "repos": repos,
        "stats": {
            "total_repos": len(repos),
            "total_stars": total_stars,
        },
    }
