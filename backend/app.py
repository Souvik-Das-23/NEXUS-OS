from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import psutil
import platform
from datetime import datetime

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/system")

def system():

    return{

        "os":platform.system()+" "+platform.release(),

        "cpu":psutil.cpu_percent(interval=1),

        "ram":round(psutil.virtual_memory().percent,1),

        "time":datetime.now().strftime("%H:%M:%S"),

        "date":datetime.now().strftime("%d-%m-%Y")

    }