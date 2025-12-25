# GitHub PR Guard (n8n + Groq AI) 🛡️

> **Status:** Learning project, NOT production-ready  
> This repository documents a real-world learning experiment using n8n, Groq AI, and GitHub to explore automated PR review workflows.

---

## 🔍 What Is GitHub PR Guard?

GitHub PR Guard is an **n8n workflow** that listens to GitHub Pull Requests, sends the diff to **Groq’s LLM**, and returns structured feedback about potential issues. It is designed as a **learning project** to understand:

- How to integrate GitHub webhooks with n8n  
- How to call an AI model (Groq) from n8n  
- How to parse and use AI output in automations  
- How to experiment with blocking/flagging PRs based on AI feedback  

It is **not** a polished product or a security tool. It’s a **documented learning journey**, similar in spirit to other AI PR workflows built with n8n and GitHub.[web:43][web:50]

---

## ⚠️ Important Disclaimer

This workflow:

- ❌ Is **not** a replacement for human code review  
- ❌ Is **not** audited for security or compliance  
- ❌ Is **not** tuned for low false positives/false negatives  
- ❌ Should **not** be used as the sole gate in a production pipeline  

It **is**:

- ✅ A learning resource about n8n, GitHub, and Groq  
- ✅ An example of multi-service integration with n8n  
- ✅ A starting point for your own experiments and improvements  

Use it to **learn**, not to secure your production repositories.

---

## 🧱 High-Level Architecture

The workflow follows a pattern similar to other AI-powered PR helpers built with n8n and GitHub.[web:43][web:47][web:50]

1. **GitHub → n8n (Webhook Trigger)**  
   - A GitHub webhook is configured to fire on `pull_request` events.  
   - n8n receives PR metadata and repository details.

2. **Fetch PR Difference**  
   - n8n calls the GitHub API to retrieve the diff for the PR.  
   - Optionally filters by file types or paths.

3. **Send to Groq AI**  
   - The diff + minimal context is sent to Groq’s LLM via HTTP Request.  
   - The prompt asks the model to review for readability, maintainability, and potential issues.

4. **Parse AI Response**  
   - n8n parses the response into structured JSON (issues, severities, summary, recommendations).  
   - Handles basic error cases and timeouts.

5. **Decision Logic (Experimental)**  
   - If “critical” issues are found, the workflow can **flag** or **block** the PR (e.g. via labels, status checks, or comments).  
   - Otherwise, it just posts feedback.

6. **Notify**  
   - Sends feedback back to GitHub (PR comment).  
   - Optionally sends a message to Slack/other channels.

---

## 🧩 Features (Learning-Focused)

- 🔗 **GitHub Integration** – Webhook + REST API usage  
- 🤖 **Groq AI Integration** – Call a fast LLM from n8n  
- 🧠 **Prompt + Response Design** – How to structure prompts & parse responses  
- 🔀 **Branch Logic** – Different flows for “block / warn / allow”  
- 📡 **Notifications** – Post comments to GitHub, optional Slack notifications  

The goal is to **touch as many real-world integration points as possible**, not to optimize any single part perfectly.

---

## 🛠️ Requirements

To run this workflow, you’ll need:

- An **n8n instance** (self-hosted or cloud)[web:51]  
- A **GitHub repository** where you can configure webhooks  
- A **Groq API account** and API key (LLM access)[web:49][web:52]  
- (Optional) A **Slack workspace** + bot token for notifications  

### n8n Version

- Tested with n8n **v1.x+** (any recent version that supports HTTP Request, Webhook, and basic nodes).

---

## 🔐 Credentials & Security

The workflow JSON in this repo **does not include**:

- Groq API keys  
- GitHub personal access tokens  
- Slack tokens  
- Google / Gmail credentials  

These are stored as **n8n credentials** inside your own instance and must be configured manually.

### Credentials You Must Create in n8n

1. **Groq API**  
   - Type: `HTTP Request` credentials (Bearer token)  
   - Value: Your Groq API key

2. **GitHub**  
   - Type: GitHub OAuth2 or Personal Access Token  
   - Scopes: `repo` (minimum for PRs)  

3. **Slack** (optional)  
   - Type: Slack (OAuth2 or Bot token)  
   - Scope: `chat:write` at minimum

> 💡 The exported workflow **only references credential names/IDs**, not the actual keys, as recommended in n8n’s export docs.[web:33][web:37]

---

## 🙋 FAQ

**Q: Can I use this in production?**  
**A:** You *can*, but it’s not designed for that. Treat this repo as a **learning template**, not a finished product.

**Q: Does the JSON contain credentials?**  
**A:** No. n8n exports workflow JSON without actual secrets; you must configure credentials in your own n8n instance.[web:33][web:35][web:40]

**Q: Why Groq and not another LLM?**  
**A:** Groq is fast and cost-effective, making it great for experimentation. You can swap in your preferred provider with minor changes.[web:52]

---

Happy experimenting! 🧪  
If you build your own version, feel free to link it back or mention what you learned.
