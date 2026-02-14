# FastAPI: 
# framework principale per definire l'app, le route e il ciclo HTTP
from fastapi import FastAPI

# Request: 
# rappresenta la richiesta HTTP in ingresso 
# (usata negli exception handler)
from fastapi import Request

# CORSMiddleware: 
# abilita richieste cross-origin dal frontend (browser → API)
from fastapi.middleware.cors import CORSMiddleware

# JSONResponse: 
# permette di costruire risposte HTTP JSON personalizzate (status + body)
from fastapi.responses import JSONResponse

# Router dell'app: 
# health (ping) e users (endpoint GitHub)
from app.routers import health, users

# Eccezioni di dominio GitHub sollevate dai service 
# e intercettate globalmente
from app.services.github.exceptions import (
    GitHubUserNotFound,
    GitHubReposNotFound,
)


# --------------------------------------------------
# App initialization
# --------------------------------------------------
app = FastAPI(
    title="OctoMind API",
    description="Backend API for GitHub insights",
    version="0.1.0",
)


# --------------------------------------------------
# CORS configuration
# (frontend will live on a different domain)
# --------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # in produzione lo restringeremo
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --------------------------------------------------
# Exception handlers
# --------------------------------------------------
@app.exception_handler(GitHubUserNotFound)
async def github_user_not_found_handler(request: Request, exc: GitHubUserNotFound):
    return JSONResponse(
        status_code=404,
        content={
            "error": {
                "code": "GITHUB_USER_NOT_FOUND",
                "message": "GitHub user not found",
            }
        },
    )


@app.exception_handler(GitHubReposNotFound)
async def github_repos_not_found_handler(request: Request, exc: GitHubReposNotFound):
    return JSONResponse(
        status_code=404,
        content={
            "error": {
                "code": "GITHUB_REPOS_NOT_FOUND",
                "message": "GitHub repositories not found",
            }
        },
    )


# --------------------------------------------------
# Health check
# --------------------------------------------------
app.include_router(health.router)
# --------------------------------------------------

app.include_router(users.router)
