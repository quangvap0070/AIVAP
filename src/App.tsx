import { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");

  const callAPI = async () => {
    const res = await fetch("/api/generate");
    const data = await res.json();
    setResult(data.message);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AIVAP PRO 🚀</h1>
      <button onClick={callAPI}>Gọi API</button>
      <p>{result}</p>
    </div>
  );
}
