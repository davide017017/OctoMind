# 🌐 OctoMind Frontend

Frontend del progetto **OctoMind**.

Applicazione web statica che consuma la API backend e visualizza
informazioni pubbliche provenienti da GitHub.

---

## 🎯 Responsabilità

- Fornire un’interfaccia utente semplice
- Effettuare richieste al backend
- Gestire stati di loading ed errore
- Renderizzare dinamicamente i dati ricevuti

---

## 🧱 Stack Tecnologico

- HTML
- CSS
- JavaScript (Vanilla)
- Fetch API

---

## ⚙️ Configurazione

L’URL del backend è definito in `config.js`:

```js
export const API_BASE_URL = "https://octomind.onrender.com";


In ambiente locale:

export const API_BASE_URL = "http://127.0.0.1:8000";

▶️ Avvio in locale

Aprire direttamente:

index.html

Non è richiesto alcun build step.
```
