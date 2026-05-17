// import { streamText } from "ai"

// export async function POST(req: Request) {
//   const { title, description } = await req.json()

//   const result = streamText({
//     model: "openai/gpt-4o-mini",
//     system: `You are an expert research summarizer. When given a student's research paper, provide a concise 2-3 sentence summary that captures the key contributions, methodology, and significance of the work. Keep the language accessible but technically accurate.`,
//     prompt: `Please summarize this research paper:

// Title: ${title}
// Description: ${description}

// Provide a clear, concise summary of the key points and contributions.`,
//   })

//   return result.toTextStreamResponse()
// }

import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  try {
    const { title, description } = await req.json()

    const result = streamText({
      model: openai("gpt-4o-mini"),
    prompt: `Please summarize this research paper, as if you are a expert research summarizer. When given a student's research paper, provide a concise 2-3 sentence summary that captures the key contributions, methodology, and significance of the work. Keep the language accessible but technically accurate:

Title: ${title}
Description: ${description}

Provide a clear, concise summary of the key points and contributions.`,
  })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error("Error summarizing:", error)

    return new Response("Failed to generate summary.", {
      status: 500,
    })
  }
}