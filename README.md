# 🐙 OctoMind

**OctoMind** è un mini progetto full-stack pensato per studiare come una API Python
comunica con un frontend leggero.

L’applicazione consuma le GitHub Public API ed espone endpoint REST puliti che aggregano dati utente e repository.

---

## 📦 Struttura del progetto

OctoMind/
├── OMbackend/ # Backend FastAPI (Python)
└── OMfrontend/ # Frontend statico (HTML + JS)

---

## 🎯 Obiettivi

- Progettare una REST API chiara e strutturata
- Separare responsabilità tra backend e frontend
- Incapsulare in modo sicuro API esterne (GitHub)
- Praticare deploy e gestione delle variabili ambiente

---

## 🔌 Panoramica API

GET /health
GET /users/{username}
GET /users/{username}/repos
GET /users/{username}/summary

L’endpoint `/summary` aggrega informazioni utente e statistiche sui repository.

## 🚧 Scope & Limitazioni

- Nessuna autenticazione
- Nessun database
- Nessun OAuth
- Solo dati pubblici in modalità read-only

---

## 🌍 Deploy

- Backend → Render
- Frontend → Netlify

---

## 👨‍💻 Finalità del progetto

OctoMind nasce come esercizio pratico per approfondire:

- API design
- Separazione backend/frontend
- Integrazione HTTP reale
- Workflow di deploy su cloud
