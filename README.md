# JK Lifestyle - Technical Architecture, Execution & Costing Proposal

This repository contains the synchronized GitHub Pages proposal and downloadable board documents for the JK Lifestyle Digital Ecosystem.

## Current architecture direction

- Existing outlet, product and opening-stock data is cleaned from Excel and migrated into Odoo Community Edition.
- Odoo Community Edition is used initially for outlet Point of Sale (POS) and Inventory so operations can stabilize quickly.
- JK Tech develops the long-term Inventory and POS modules in parallel.
- The new JK Inventory and POS modules run beside Odoo during testing and replace it outlet by outlet only after sales, payment, return and stock totals reconcile.
- The custom ERP manages doctor profiles, patients, appointments, outpatient workflows, patient medical records, clinical invoices, employee records, attendance, leave/rosters and payroll.
- The ERP is the single reporting application for management and operational reports. During the Odoo transition it receives synchronized Odoo data; after cut-over it reads JK-owned operational modules directly.
- Website and Super App remain the customer-facing channels. Their sales integration points to the active Inventory/sales backend during each transition stage.

## Files

- `index.html` - the GitHub Pages board proposal.
- `styles.css` - responsive layout and print styling.
- `script.js` - roadmap, team, costing and interactive content.
- `JK_Lifestyle_Technical_Architecture_Execution_Costing_Plan.docx` - synchronized Word proposal.
- `JK_Lifestyle_Technical_Architecture_Execution_Costing_Plan.pdf` - synchronized PDF proposal.

The web page uses relative links to the Word and PDF files, so both downloads work directly from GitHub Pages when all files are placed in the repository root.

## GitHub Pages

Use the repository default branch and publish from `/ (root)` in **Settings -> Pages**.

Project URL:

`https://zahangir015.github.io/jk-lifestyle-proposal/`
