
import os
import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

# --- Modelo de Datos ---
# Define la estructura de los datos que esperas recibir.
# FastAPI lo usará para validar automáticamente la información.
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

# --- Inicialización de la App ---
app = FastAPI()

# --- Configuración de CORS ---
# Permite que tu frontend (ej. localhost) se comunique con esta API.
origins = [
    "http://localhost",
    "http://localhost:5000",
    "http://127.0.0.1:5000",
    # Añade aquí el dominio de tu web cuando la despliegues
    # "https://www.automatia.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # O especifica los orígenes en la lista `origins`
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Endpoints de la API ---
@app.get("/")
def read_root():
    return {"Status": "Automatia API is running"}

@app.post("/api/contact")
async def handle_contact(form: ContactForm):
    """
    Endpoint para recibir los datos del formulario de contacto.
    """
    print(f"📧 Nueva solicitud de contacto recibida:")
    print(f"   Nombre: {form.name}")
    print(f"   Email: {form.email}")
    print(f"   Asunto: {form.subject}")
    print(f"   Mensaje: {form.message}")
    print("-" * 50)

    # --- Aquí es donde procesas los datos ---
    # Opción 1: Enviar a un webhook de n8n (recomendado)
    send_to_n8n(form)
    
    # Opción 2: Enviar directamente por email (más abajo explico cómo)
    # send_email_notification(form)

    return {"success": True, "message": "Datos recibidos correctamente"}

# --- Lógica de Procesamiento ---
def send_to_n8n(form: ContactForm):
    """
    Envía los datos del formulario a un webhook de n8n.
    """
    # DEBES REEMPLAZAR ESTA URL POR LA DE TU WEBHOOK DE N8N
    n8n_webhook_url = os.getenv("N8N_WEBHOOK_URL", "https://tu-instancia-n8n.com/webhook/...")

    if "tu-instancia-n8n.com" in n8n_webhook_url:
        print("⚠️ Alerta: La URL del webhook de n8n no está configurada.")
        return

    try:
        # `form.dict()` convierte los datos Pydantic a un diccionario
        response = requests.post(n8n_webhook_url, json=form.dict())
        response.raise_for_status()  # Lanza un error si la petición falla
        print("✅ Datos enviados a n8n exitosamente.")
    except requests.exceptions.RequestException as e:
        print(f"❌ Error al enviar datos a n8n: {e}")

# --- Cómo ejecutar el servidor ---
# En tu terminal (con el ambiente virtual activado):
# uvicorn api:app --host 0.0.0.0 --port 8000 --reload
