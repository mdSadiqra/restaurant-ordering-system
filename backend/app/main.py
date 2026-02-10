from fastapi import FastAPI

app = FastAPI(title="Restaurant Ordering System Backend")

@app.get("/")
def home():
    return {"message": "Backend is running successfully"}
