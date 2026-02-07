# 🐙 OctoMind

**OctoMind** is a small but realistic project designed to study how a Python backend API
communicates with a frontend dashboard.

The project is structured as a monorepo and focuses on:

- API design
- Backend ↔ Frontend communication
- Real-world API consumption (GitHub API)

---

## 📦 Project Structure

OctoMind/
├─ OMbackend/ # Python FastAPI backend
└─ OMfrontend/ # Static frontend dashboard

---

## 🎯 Goals

- Build a clean Python API that wraps GitHub public APIs
- Expose simple and safe endpoints to the frontend
- Keep backend and frontend clearly separated
- Learn deployment and environment configuration

---

## 🚧 Scope & Limitations

- No authentication
- No database
- No OAuth
- Read-only data

---

## 🚀 Next Steps

- Implement backend health check
- Add `/users/{username}` endpoint
- Connect frontend via fetch API
