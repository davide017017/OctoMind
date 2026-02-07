# --------------------------------------------------
# FastAPI serve per creare l’API
from fastapi import FastAPI

# CORS serve perché frontend e backend saranno su domini diversi
from fastapi.middleware.cors import CORSMiddleware

# Import dei router
from app.routers import health, users


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
# Health check
# --------------------------------------------------
app.include_router(health.router)
# --------------------------------------------------

app.include_router(users.router)
