import os
from dotenv import load_dotenv

# carica il file .env
load_dotenv()

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
