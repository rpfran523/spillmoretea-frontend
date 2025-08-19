export async function askGPT(messages: {role: "system"|"user"|"assistant", content: string}[]) {
  const r = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages })
  });
  if (!r.ok) throw new Error(`Chat failed: ${r.status}`);
  return r.json();
}
