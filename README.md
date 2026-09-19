# JK Lifestyle — Technical Architecture, Execution & Costing Board Proposal

Static GitHub Pages site for the JK Lifestyle Digital Ecosystem CTO / Technical Architect board proposal. The website and Word board pack are synchronized.

## Current synchronized baseline

- 24-month architecture-led roadmap
- BDT 26.9M loaded engineering + specialist cost
- BDT 48.4M delivery baseline
- BDT 5.8M controlled contingency
- BDT 54.3M total planning ceiling (~5.43 crore)
- ~14 active technical FTE at peak
- No separate Product Owner, Data/AI Engineer, ML/AI Specialist or Community Moderator FTE in the current costing baseline; those responsibilities are consolidated under the Tech Lead / Architect.
- Hybrid ERP: Odoo for Finance/Inventory; custom platform for Clinical, Care Plan, Commerce, Membership, Community/Franchise and Data/AI.
- Modular/bounded-domain architecture with API-first integration, RabbitMQ events, offline-first POS, explicit consent/audit controls and progressive AI Buy→Build strategy.

## Files

- `index.html` — board proposal content and visual structure
- `styles.css` — responsive design and print styling
- `script.js` — roadmap, tables, charts and interactive elements
- `JK_Lifestyle_Technical_Architecture_Execution_Costing_Plan.docx` — synchronized downloadable Word board pack

The page links to the DOCX using a relative same-origin URL, so the **Download DOCX** button works directly on GitHub Pages.

## Deploy with GitHub Pages

1. Upload **all four files** to the repository root.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Select your default branch (`main` or `master`) and `/ (root)`.
5. Save and wait for deployment.

For a repository named `jk-lifestyle-board-proposal` under user `zahangir015`, the default Pages URL is typically:

`https://zahangir015.github.io/jk-lifestyle-board-proposal/`

Leave **Custom domain** blank unless you own a real DNS domain such as `proposal.example.com`.

## Important

Do not rename or move the DOCX without also updating the three download links in `index.html`.
