import httpx
from app.core.config import GITHUB_TOKEN

GITHUB_API_URL = "https://api.github.com"


def github_get(path: str, params: dict | None = None) -> httpx.Response:
    headers = {}
    if GITHUB_TOKEN:
        headers["Authorization"] = f"Bearer {GITHUB_TOKEN}"

    url = f"{GITHUB_API_URL}{path}"

    return httpx.get(
        url,
        headers=headers,
        params=params,
        timeout=5.0,
    )
