# AI-First CRM HCP Module

## 🚀 Overview
This is an AI-powered CRM system where users log HCP (Healthcare Professional) interactions using natural language instead of manually filling forms.

## 🧠 Features
- AI-based chat interaction
- Automatic form filling
- LangGraph tool routing
- 5 tools implemented:
  - Log Interaction
  - Edit Interaction
  - Suggest Follow-up
  - Summarize Interaction
  - Sentiment Detection

## 🛠 Tech Stack
- React (Frontend)
- Redux Toolkit
- FastAPI (Backend)
- LangGraph

## ⚙️ How to Run

### Backend
cd backend  
venv\Scripts\activate  
python -m uvicorn main:app_api --reload  

### Frontend
cd frontend  
npm install  
npm start  

## 🎯 Concept
LangGraph acts as an intelligent agent that decides which tool to use based on user input and updates the CRM form dynamically.
