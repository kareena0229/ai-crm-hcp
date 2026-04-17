from fastapi import FastAPI
from pydantic import BaseModel
from agent import app
from fastapi.middleware.cors import CORSMiddleware

app_api = FastAPI()

# ✅ CORS (IMPORTANT)
app_api.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app_api.get("/")
def root():
    return {"message": "Backend is running 🚀"}


class ChatRequest(BaseModel):
    message: str


@app_api.post("/chat")
async def chat(req: ChatRequest):
    result = app.invoke({"input": req.message})
    return result["output"]