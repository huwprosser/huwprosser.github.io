---
title: Fury
date: 2026-02-12
excerpt: I built the agent wrapper I wish existed. No bells or whistles.
---
I'm excited to open source Fury. A lightweight python package making it easy to build with LLMs, even if it's your first time. 

[https://github.com/huwprosser/fury](https://github.com/huwprosser/fury)

With Fury the following things work out-of-the-box:
- Parallel Tool Calls
- Tool Call announcements eg "I am using the bash tool" (great for UI/UX)
- Multimodal inputs
- Audio input transcription.

```python
import asyncio
from fury import Agent

async def main():
    # Initialize the agent
    agent = Agent(
        model="your-model-name", # e.g., "gpt-4o" or a local model
        system_prompt="You are a helpful assistant.",
        base_url="http://127.0.0.1:8080/v1", # or https://openrouter.ai/api/v1, https://api.openai.com/v1
        api_key="your-api-key"
    )

    history = []

    # Simple chat loop
    while True:
        user_input = input("> ")
        history.append({"role": "user", "content": user_input})

        print()
        async for chunk, reasoning, tool_call in agent.chat(history):
            if chunk:
                print(chunk, end="", flush=True)
        print("\n")

if __name__ == "__main__":
    asyncio.run(main())
```

Examples:
- By far the most powerful example I have built so far is the coding agent. It is based on Pi.dev (powering OpenClaw) and offers compaction, extensible skills and terminal control out the box.
- The CRON example shows you how to create an OpenClaw-style heartbeat system with Fury (room for improvement here).

Pip package coming soon! For now, install directly from Github.

Build neat stuff 🚀