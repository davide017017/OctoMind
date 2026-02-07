# 🐍 OctoMind Backend

This is the **backend API** for the OctoMind project.

It is a Python service built with **FastAPI** that acts as a wrapper around the
GitHub public APIs, exposing simplified and safe endpoints for the frontend.

---

## 🎯 Responsibilities

- Communicate with the GitHub REST API
- Handle authentication via personal access token
- Normalize and filter raw GitHub data
- Expose clean REST endpoints

---

## 🧱 Tech Stack

- Python 3.10+
- FastAPI
- HTTPX
- Uvicorn

---

## ⚙️ Configuration

The backend requires a GitHub personal access token.

Create a `.env` file (see `.env.example`) and define:

```env
GITHUB_TOKEN=your_token_here
▶️ Run locally
pip install -r requirements.txt
uvicorn app.main:app --reload
The API will be available at:

http://127.0.0.1:8000
Interactive API docs:

http://127.0.0.1:8000/docs
🚧 Scope & Limitations
No database
No user authentication
No OAuth flow
Read-only access to public GitHub data
```
