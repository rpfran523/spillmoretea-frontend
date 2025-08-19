// Azure OpenAI version (use when Azure OpenAI access is available)
import { AzureOpenAI } from "openai";

export default async function (context, req) {
  try {
    if (req.method !== "POST") {
      context.res = { status: 405, body: "Method Not Allowed" };
      return;
    }
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const messages = body.messages || [{ role: "user", content: "Say hello to SpillMoreTea!" }];

    // Check if using Azure OpenAI or regular OpenAI
    const useAzure = process.env.AZURE_OPENAI_ENDPOINT && process.env.AZURE_OPENAI_KEY;
    
    let client, model;
    
    if (useAzure) {
      // Azure OpenAI configuration
      client = new AzureOpenAI({
        endpoint: process.env.AZURE_OPENAI_ENDPOINT,
        apiKey: process.env.AZURE_OPENAI_KEY,
        apiVersion: process.env.AZURE_OPENAI_API_VERSION || "2024-02-15-preview"
      });
      model = process.env.AZURE_OPENAI_DEPLOYMENT;
    } else {
      // Regular OpenAI configuration (fallback)
      const { OpenAI } = await import("openai");
      client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
      });
      model = process.env.OPENAI_MODEL || "gpt-3.5-turbo";
    }

    const result = await client.chat.completions.create({
      model,
      messages,
      temperature: 0.5
    });

    context.res = { status: 200, headers: { "Content-Type": "application/json" }, body: result };
  } catch (err) {
    context.log("chat error:", err);
    context.res = { status: 500, body: JSON.stringify({ error: String(err?.message || err) }) };
  }
}
