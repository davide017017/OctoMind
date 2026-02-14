# 🐍 OctoMind Backend

Backend API del progetto **OctoMind**.

Servizio Python sviluppato con **FastAPI** che funge da wrapper delle GitHub Public API,
esponendo endpoint REST semplificati e sicuri per il frontend.

---

## 🎯 Responsabilità

- Comunicare con la GitHub REST API
- Autenticarsi tramite Personal Access Token
- Normalizzare e filtrare i dati ricevuti
- Esporre endpoint REST puliti

---

## 🧱 Stack Tecnologico

- Python 3.10+
- FastAPI
- HTTPX
- Uvicorn

---

## 📂 Struttura Principale

app/
├── main.py # Entry point FastAPI
├── routers/ # Definizione endpoint
├── services/ # Logica di integrazione GitHub
├── core/ # Configurazione
└── models/ # Schemi dati (opzionali)

---

## ⚙️ Configurazione

È richiesto un GitHub Personal Access Token.

Creare un file `.env` (vedi `.env.example`) con:

GITHUB_TOKEN=your_token_here

# ▶️ Avvio in locale

pip install -r requirements.txt
uvicorn app.main:app --reload

# 🚧 Scope & Limitazioni

Nessun database
Nessuna autenticazione utenti
Nessun OAuth
Accesso read-only a dati pubblici GitHub

# 🎯 Perché ora è meglio

- Sezioni coerenti
- Struttura chiara
- Linguaggio tecnico ma sobrio
- Niente testo superfluo
- Allineato al README principale
