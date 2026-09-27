# JK Lifestyle — Technical Architecture, Execution & Costing Board Proposal

Static GitHub Pages site for the JK Lifestyle Digital Ecosystem CTO / Technical Architect board proposal. The website and downloadable Word board pack are synchronized.

## Current synchronized architecture

- 24-month architecture-led roadmap.
- Hybrid enterprise model with **Odoo Community (open-source baseline)** plus a **custom JK ERP/Clinical platform**.
- **Odoo Community** is the commercial/financial system of record for Product, Inventory/Warehouse, Procurement, POS, outlet sales, online/e-commerce sales processing, customer financial invoices, payment/reconciliation and Accounting.
- **Custom JK ERP/Clinical** owns Doctor Profile, Patient/Appointment process, OPD/EMR, Care Plan, Clinical Billing workflow, ARM, Attendance and Payroll calculation/approval.
- Confirmed clinical charges and approved payroll results post to Odoo through controlled APIs/events so the financial ledger remains single-source.
- Website and Super App remain JK-owned experience channels; e-commerce transactions are processed through the Odoo integration boundary rather than a parallel custom sales ledger.
- Odoo POS offline/reconnect behavior must be validated for the selected Community version during the pilot; a second custom POS ledger is not built unless the gap analysis proves it necessary.
- Modular/bounded-domain architecture, API-first integration, RabbitMQ events, explicit consent/audit controls and progressive AI Buy→Build strategy remain unchanged.

## Current planning baseline

- BDT 26.9M loaded engineering + specialist cost
- BDT 48.4M delivery baseline
- BDT 5.8M controlled contingency
- BDT 54.3M total planning ceiling (~5.43 crore)
- ~14 active technical FTE at peak

The costing is retained as the current planning baseline. The revised Odoo ownership boundary must be validated during the M1–M2 module/version/gap analysis; any material implementation, hosting, add-on or support cost variance should be reforecast through the quarterly gate process.

## Files

- `index.html` — board proposal content and visual structure
- `styles.css` — responsive design and print styling
- `script.js` — roadmap, tables, charts and interactive elements
- `JK_Lifestyle_Technical_Architecture_Execution_Costing_Plan.docx` — synchronized downloadable Word board pack

The page links to the DOCX using a relative same-origin URL, so the **Download DOCX** button works directly on GitHub Pages.
