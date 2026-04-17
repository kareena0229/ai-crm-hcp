from langchain.tools import tool

@tool
def log_interaction(text: str) -> dict:
    """Extract interaction details"""
    return {
        "ai_output": {
            "hcp_name": "Dr. John",
            "sentiment": "positive",
            "summary": "Interaction recorded successfully",
            "materials_shared": "brochure"
        }
    }

@tool
def edit_interaction(text: str) -> dict:
    """Edit existing interaction"""
    return {
        "ai_output": {
            "sentiment": "negative"
        }
    }

@tool
def suggest_followup(text: str) -> dict:
    """Suggest follow up action"""
    return {
        "ai_output": {
            "followup": "Schedule next meeting"
        }
    }

@tool
def summarize_interaction(text: str) -> dict:
    """Summarize interaction details"""
    return {
        "ai_output": {
            "summary": "Short summary created"
        }
    }

@tool
def detect_sentiment(text: str) -> dict:
    """Detect sentiment of interaction"""
    return {
        "ai_output": {
            "sentiment": "neutral"
        }
    }