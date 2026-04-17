import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "./formSlice";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const sendMessage = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await res.json();
      const ai = data.ai_output;

      setChat([...chat, { user: message, bot: JSON.stringify(ai) }]);

      // ✅ Redux update
      dispatch(updateForm(ai));

    } catch (err) {
      alert("Backend not connected");
    }

    setLoading(false);
    setMessage("");
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Inter" }}>

      {/* LEFT PANEL */}
      <div style={{
        flex: 1,
        padding: 30,
        background: "#f7f9fc"
      }}>
        <h2>Log HCP Interaction</h2>

        <p><b>HCP:</b> {formData.hcp_name}</p>
        <p><b>Sentiment:</b> {formData.sentiment}</p>
        <p><b>Summary:</b> {formData.summary}</p>
        <p><b>Materials:</b> {formData.materials_shared}</p>
        <p><b>Follow-up:</b> {formData.followup}</p>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ flex: 1, padding: 30 }}>
        <h2>AI Assistant</h2>

        <div style={{ height: 300, overflow: "auto" }}>
          {chat.map((c, i) => (
            <div key={i}>
              <p><b>You:</b> {c.user}</p>
              <p><b>AI:</b> {c.bot}</p>
            </div>
          ))}
        </div>

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe interaction..."
        />

        <button onClick={sendMessage}>
          {loading ? "Processing..." : "Log"}
        </button>
      </div>
    </div>
  );
}

export default App;