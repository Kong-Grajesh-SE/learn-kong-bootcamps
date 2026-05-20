# Kong Enablement Bootcamps

![Kong Gateway 3.14+](https://img.shields.io/badge/Kong%20Gateway-3.14%2B-CCFF00?style=for-the-badge&labelColor=001408)
![Bootcamps: 8](https://img.shields.io/badge/Bootcamps-8-CCFF00?style=for-the-badge&labelColor=001408)
![Platform: Konnect](https://img.shields.io/badge/Platform-Konnect-CCFF00?style=for-the-badge&labelColor=001408)

> Central dashboard for all Kong partner enablement bootcamps. Each bootcamp is a self-contained VitePress site with hands-on labs, checkpoints, and exit tickets.

## Bootcamps

| # | Bootcamp | Modules | Labs | Focus | Link |
|---|---|---|---|---|---|
| 1 | **API Gateway** | 8 | 17 | Core gateway: routing, auth, traffic, transforms, observability, capstone | [learn-kong-gateway ↗](https://kong-grajesh-se.github.io/learn-kong-gateway/) |
| 2 | **AI Gateway** | 1 | 12 | LLM proxy, prompt guard, semantic cache, PII redaction, multi-LLM failover | [learn-kong-ai-gateway ↗](https://kong-grajesh-se.github.io/learn-kong-ai-gateway/) |
| 3 | **Agentic AI** | 4 | 7 | MCP Proxy (4 modes), MCP OAuth2/PKCE, A2A routing, AI Custom Guardrail | [learn-kong-agentic-bootcamp ↗](https://kong-grajesh-se.github.io/learn-kong-agentic-bootcamp/) |
| 4 | **Bring Your Own Agent** | 9 + capstone | 18 | Plug your agent into Kong: security, reliability, MCP, OAuth 2.1, OPA, A2A | [bring-your-own-agent ↗](https://kong-grajesh-se.github.io/bring-your-own-agent/) |
| 5 | **APIOps** | 1 | 4 | decK GitOps, GitHub Actions CI/CD, multi-environment promotion | [learn-kong-apiops-bootcamp ↗](https://kong-grajesh-se.github.io/learn-kong-apiops-bootcamp/) |
| 6 | **Developer Portal** | 1 | 3 | API publishing, OIDC SSO, RBAC, self-service app registration | [learn-kong-dev-portal ↗](https://kong-grajesh-se.github.io/learn-kong-dev-portal/) |
| 7 | **Insomnia** | 8 | 8 | API design, collections, environments, testing, mock servers, Inso CLI | [learn-insomnia ↗](https://kong-grajesh-se.github.io/learn-insomnia/) |
| 8 | **Volcano SDK** | - | - | Coming soon | - |

## Quick Start

```bash
# Clone any bootcamp
git clone https://github.com/Kong-Grajesh-SE/<repo-name>
cd <repo-name>

# Install dependencies
npm install

# Start the docs site locally
npm run docs:dev
```

Open [http://localhost:5173](http://localhost:5173) to view the bootcamp site.

## Prerequisites (all bootcamps)

| Tool | Purpose | Min Version |
|---|---|---|
| Docker Desktop | Run Kong Data Plane, backends, supporting services | Latest |
| jq | Parse JSON responses in curl commands | 1.6+ |
| decK | Declarative Kong configuration (sync, diff, validate) | 1.43+ |
| Kong Konnect | Cloud control plane (free tier works for most labs) | - |

Individual bootcamps add specific prerequisites (Node.js, Keycloak, Insomnia, etc.) in their own `prerequisites.md`.
