from langgraph.graph import StateGraph
from typing import TypedDict
from tools import (
    log_interaction,
    edit_interaction,
    suggest_followup,
    summarize_interaction,
    detect_sentiment
)

class State(TypedDict):
    input: str
    output: dict


def agent_node(state: State):
    text = state["input"].lower()

    if "edit" in text or "change" in text:
        result = edit_interaction.invoke(text)

    elif "follow" in text:
        result = suggest_followup.invoke(text)

    elif "summary" in text:
        result = summarize_interaction.invoke(text)

    elif "sentiment" in text:
        result = detect_sentiment.invoke(text)

    else:
        result = log_interaction.invoke(text)

    return {"output": result}


graph = StateGraph(State)
graph.add_node("agent", agent_node)
graph.set_entry_point("agent")

app = graph.compile()