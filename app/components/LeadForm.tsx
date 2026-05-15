"use client";

import { useState } from "react";

export default function LeadForm() {
const [email, setEmail] = useState("");
const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

async function handleSubmit(e: React.FormEvent) {
e.preventDefault();
setStatus("loading");

try {
  const res = await fetch("https://ai-business-news-api.onrender.com/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    throw new Error("Failed to save lead");
  }

  setStatus("success");
  setEmail("");
} catch (error) {
  setStatus("error");
}
}

return (
<section
style={{
background: "#111827",
color: "white",
borderRadius: "20px",
padding: "32px",
marginBottom: "40px",
}}
>
<h2 style={{ fontSize: "28px", marginBottom: "12px" }}>
Get AI business insights in your inbox
</h2>

<p style={{ color: "#d1d5db", marginBottom: "24px", lineHeight: 1.6 }}>
Join the AI Business Daily newsletter and receive practical insights about AI, automation and productivity.
</p>

<form
onSubmit={handleSubmit}
style={{
display: "flex",
gap: "12px",
flexWrap: "wrap",
}}
>
<input
type="email"
required
placeholder="you@example.com"
value={email}
onChange={(e) => setEmail(e.target.value)}
style={{
flex: "1",
minWidth: "240px",
padding: "14px 16px",
borderRadius: "10px",
border: "1px solid #374151",
fontSize: "16px",
}}
/>

<button
type="submit"
disabled={status === "loading"}
style={{
padding: "14px 20px",
borderRadius: "10px",
border: "none",
background: "#2563eb",
color: "white",
fontWeight: "bold",
fontSize: "16px",
cursor: "pointer",
}}
>
{status === "loading" ? "Joining..." : "Join newsletter"}
</button>
</form>

{status === "success" && (
<p style={{ color: "#86efac", marginTop: "16px" }}>
You are in! Thanks for joining.
</p>
)}

{status === "error" && (
<p style={{ color: "#fca5a5", marginTop: "16px" }}>
Something went wrong. Please try again.
</p>
)}
</section>
);
}
