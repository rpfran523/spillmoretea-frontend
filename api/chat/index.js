import OpenAI from "@azure/openai";

export default async function (context, req) {
  try {
    if (req.method !== "POST") {
      context.res = { status: 405, body: "Method Not Allowed" };
      return;
    }
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const messages = body.messages || [{ role: "user", content: "Say hello to SpillMoreTea!" }];

    const client = new OpenAI({
      endpoint: process.env.AZURE_OPENAI_ENDPOINT,
      apiKey: process.env.AZURE_OPENAI_KEY,
      apiVersion: process.env.AZURE_OPENAI_API_VERSION || "2024-02-15-preview"
    });

    const result = await client.chat.completions.create({
      model: process.env.AZURE_OPENAI_DEPLOYMENT,
      messages,
      temperature: 0.5
    });

    context.res = { status: 200, headers: { "Content-Type": "application/json" }, body: result };
  } catch (err) {
    context.log("chat error:", err);
    context.res = { status: 500, body: JSON.stringify({ error: String(err?.message || err) }) };
  }
}
