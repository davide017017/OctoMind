# 🐙 OctoMind

![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi)
![JavaScript](https://img.shields.io/badge/JavaScript-Frontend-yellow?logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-Markup-orange?logo=html5)
![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify)
![Render](https://img.shields.io/badge/Deploy-Render-46E3B7)

[🌐 Vai all’app live](https://TUO-LINK-FRONTEND.netlify.app)

![OctoMind Banner](OMfrontend/img/octomind.webp)

---

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

---

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
