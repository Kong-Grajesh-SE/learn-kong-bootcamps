---
layout: home

hero:
  name: "Kong"
  text: "Enablement Bootcamps"
  tagline: "Hands-on, module-based learning paths for Kong Gateway, AI Gateway, Agentic AI, APIOps, Developer Portal, Insomnia, and more. Each bootcamp follows the same structure - scenario-driven labs, checkpoints, and exit tickets."
  image:
    src: /kong-logomark-lime.svg
    alt: Kong Enablement
  actions:
    - theme: brand
      text: "🔀 API Gateway Bootcamp"
      link: https://kong-grajesh-se.github.io/learn-kong-gateway/
    - theme: brand
      text: "🤖 AI Gateway Bootcamp"
      link: https://kong-grajesh-se.github.io/learn-kong-ai-gateway/
    - theme: alt
      text: "☁️ Konnect ↗"
      link: https://cloud.konghq.com

features:
  - icon: 🔀
    title: "API Gateway Bootcamp"
    details: "8 modules, 17 labs, 20+ plugins. From your first proxied request to a 15-step production capstone. Routing, auth, traffic control, transformations, observability, enterprise features."
    link: https://kong-grajesh-se.github.io/learn-kong-gateway/
    linkText: Start bootcamp

  - icon: 🤖
    title: "AI Gateway Bootcamp"
    details: "12 labs covering ai-proxy, prompt guard, prompt decorator, semantic caching, rate-limiting by tokens, PII redaction, and multi-LLM failover."
    link: https://kong-grajesh-se.github.io/learn-kong-ai-gateway/
    linkText: Start bootcamp

  - icon: 🛠️
    title: "Agentic AI Bootcamp"
    details: "4 modules: MCP Proxy (4 modes), MCP OAuth2/PKCE with Keycloak, A2A agent routing, AI Custom Guardrail. Kong 3.14+ required."
    link: https://kong-grajesh-se.github.io/learn-kong-agentic-bootcamp/
    linkText: Start bootcamp

  - icon: 🤝
    title: "Bring Your Own Agent"
    details: "9 modules + capstone. Plug your own AI agent into Kong. Security guardrails, reliability, observability, MCP gateway, OAuth 2.1, OPA, A2A."
    link: https://kong-grajesh-se.github.io/bring-your-own-agent/
    linkText: Start bootcamp

  - icon: 🔄
    title: "APIOps Bootcamp"
    details: "GitOps with decK and GitHub Actions. Declarative config, multi-environment promotion, CI/CD pipelines with quality gates."
    link: https://kong-grajesh-se.github.io/learn-kong-apiops-bootcamp/
    linkText: Start bootcamp

  - icon: 🌐
    title: "Developer Portal Bootcamp"
    details: "Publish APIs, configure OIDC SSO, manage teams with RBAC. Self-service app registration and API key management on Konnect."
    link: https://kong-grajesh-se.github.io/learn-kong-dev-portal/
    linkText: Start bootcamp

  - icon: 🎮
    title: "Insomnia Bootcamp"
    details: "8 modules: API design, collections, environments, testing, mock servers, Inso CLI CI/CD, and enterprise features."
    link: https://kong-grajesh-se.github.io/learn-insomnia/
    linkText: Start bootcamp

  - icon: 🌋
    title: "Volcano SDK Bootcamp"
    details: "5 modules, 10 labs. Build production-ready AI agents with Volcano Agent SDK - fluent API, MCP tools, multi-provider pipelines, observability."
    link: https://kong-grajesh-se.github.io/learn-volcano-sdk/
    linkText: Start bootcamp

---

<div class="kong-version-banner">
  <span class="kong-version-pill">⚙️ Kong Gateway 3.14+</span>
  <span class="kong-version-text">All bootcamps target <strong>Kong Gateway 3.14</strong> on Konnect (free tier works). Plugin schemas, header behavior, and decK syntax assume 3.14 or newer.</span>
</div>

<div class="kong-stats-strip">
  <div class="stat">
    <div class="stat-num">8</div>
    <div class="stat-label">Bootcamps</div>
  </div>
  <div class="stat">
    <div class="stat-num">30+</div>
    <div class="stat-label">Modules</div>
  </div>
  <div class="stat">
    <div class="stat-num">60+</div>
    <div class="stat-label">Hands-on labs</div>
  </div>
  <div class="stat">
    <div class="stat-num">40+</div>
    <div class="stat-label">Plugins covered</div>
  </div>
</div>

## Learning Paths

### Path 1 - Platform Engineer

Start with the API Gateway Bootcamp for core gateway skills, then add observability (Module 06), APIOps for CI/CD, and the Developer Portal.

```
API Gateway (M01–M06) → APIOps → Developer Portal
```

### Path 2 - AI / ML Engineer

Start with the AI Gateway Bootcamp for LLM proxy and guardrails, then the Agentic AI Bootcamp for MCP and A2A protocols.

```
AI Gateway → Agentic AI → Bring Your Own Agent
```

### Path 3 - API Developer

Start with Insomnia for API design and testing, then the API Gateway Bootcamp for deployment, and the Developer Portal for publishing.

```
Insomnia → API Gateway (M01–M04) → Developer Portal
```

### Path 4 - Full Stack

Complete all bootcamps in order:

```
API Gateway → AI Gateway → Agentic AI → BYOA → APIOps → Dev Portal → Insomnia
```

## Bootcamp Structure

Every bootcamp follows the same design pattern:

| Element | Description |
|---|---|
| **Module README** | Scenario blockquote → "What you'll have" → 3 concepts → Labs table → Exit ticket → Common pitfalls |
| **Lab files** | Goal blockquote → Step-by-step with time estimates → ✅ Checkpoints → code-group (Admin API + decK) → tip/warning/info callouts |
| **Prerequisites** | Required tools table with verification commands |
| **VitePress docs** | Dark-theme documentation site with sidebar navigation |
