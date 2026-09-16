<<<<<<< HEAD
# NIM Lab AI

A Next.js (App Router) build of NIM Lab AI: a marketing landing page plus a
working product shell for the Detect → Investigate → Recommend → Approve →
Fix → Verify workflow.

## Structure

- `app/page.js` — marketing landing page (hero, how it works, product demo
  section, testimonials, CTA)
- `app/dashboard/` — the product itself, one folder per sidebar page:
  - `dashboard/page.js` — Dashboard (service health overview)
  - `dashboard/ai-agent/page.js` — AI Agent (the full investigation workflow)
  - `dashboard/incidents/page.js` — Incidents history
  - `dashboard/monitoring/page.js`, `cost/page.js`, `logs/page.js`,
    `settings/page.js` — lighter supporting pages
- `lib/incident-context.js` — shared React Context holding the one live
  incident's state (`normal → critical → investigating → recommended →
  fixing → resolved`), so triggering it on the Dashboard is reflected
  live on AI Agent, Incidents, Monitoring, and Logs.
- `components/` — `Sidebar.js` (nav) and `ui.js` (shared building blocks:
  stat tiles, metric tiles, banners, the stage tracker, buttons).

## Run it

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` for the landing page, and
`http://localhost:3000/dashboard` for the product.

## Demo flow

1. On **Dashboard**, click **Simulate traffic spike**.
2. Click **Open AI Agent** in the banner (or use the sidebar — it now shows
   a red dot).
3. On **AI Agent**, click **Investigate with NIM AI**, then
   **Apply recommended fix**.
4. Check **Incidents** and **Logs** — both reflect the same incident
   automatically.
5. Use **Reset demo** (bottom of Dashboard or AI Agent) to run it again.

## Notes for extending

- Swap the mock data in `lib/incident-context.js` and the service lists in
  each page for a real Prometheus/Datadog/log-source integration when
  you're ready to go past the hackathon demo.
- The landing page and the dashboard intentionally use two different visual
  languages (light marketing site vs. dark ops console) — that split is
  common for infra products (e.g. Vercel, Datadog) and is easy to keep or
  merge depending on your pitch.
=======
# NIM-AI
>>>>>>> ec0dc8cfd9ac9c002020b80b8208599f4b629477
