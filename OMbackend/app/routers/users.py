from fastapi import APIRouter
from fastapi import HTTPException

from app.services.github import get_github_user, get_github_repos

router = APIRouter()


@router.get("/users/{username}")
def get_user(username: str):
    user = get_github_user(username)

    if "error" in user:
        raise HTTPException(status_code=404, detail=user["error"])

    return user


@router.get("/users/{username}/repos")
def get_user_repos(username: str):
    repos = get_github_repos(username)

    if isinstance(repos, dict) and "error" in repos:
        raise HTTPException(status_code=404, detail=repos.get("error"))

    return repos
