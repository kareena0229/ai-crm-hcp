from pydantic import BaseModel

class Interaction(BaseModel):
    hcp_name: str
    sentiment: str
    notes: str