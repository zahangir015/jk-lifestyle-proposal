# JK Lifestyle — Technical Architect Board Proposal

A static, board-ready microsite derived from the JK Lifestyle Technical Development Plan and Detailed Execution / Costing Plan.

## Run locally

No build step or package install is required.

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish to GitHub Pages

1. Create a GitHub repository, for example `jk-lifestyle-board-proposal`.
2. Copy `index.html`, `styles.css`, and `script.js` to the repository root.
3. Push to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose `main` and `/ (root)`, then Save.

The site uses no framework, external fonts, analytics, CDN libraries, or runtime API, so it can be hosted directly on GitHub Pages, Cloudflare Pages, Netlify, Vercel, S3/CloudFront, or any static server.

## Content model

Editable datasets live at the top of `script.js`:

- Technology stack
- Budget categories
- Quarterly budget release
- Role-rate assumptions
- Workstreams
- Month-by-month roadmap
- First-90-day plan
- Governance cadence
- Program risks

The HTML contains the executive narrative and architecture presentation.

## Financial disclaimer

The site presents planning assumptions, not signed quotations. Salary bands, cloud sizing, Odoo licensing, AI/API pricing, SMS/payment fees, VAPT quotes, taxes/VAT and high media usage should be validated before financial approval.
