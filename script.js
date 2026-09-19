const stack = [
  ["Web frontend", "Next.js (React) + TypeScript", "SSR for customer-facing SEO and a shared TypeScript component model for web/admin experiences."],
  ["Mobile", "Flutter", "Single Android/iOS codebase with strong offline storage and BLE integration support."],
  ["Application backend", "Node.js / NestJS", "Structured modules, TypeScript DTOs and a clean fit for the domain-oriented modular architecture."],
  ["AI / ML services", "Python / FastAPI", "Keeps model inference, data science and ML tooling inside the native Python ecosystem."],
  ["ERP core", "Odoo + API boundary", "Finance, inventory, warehouse and procurement remain in Odoo; custom domains do not reach into its database."],
  ["Primary database", "Managed PostgreSQL", "ACID behavior for finance/clinical data and JSONB flexibility for semi-structured care-plan data."],
  ["Cache / session", "Redis", "Session state, rate limiting, queue support and fast operational state such as OPD tokens."],
  ["Search", "PostgreSQL FTS → OpenSearch later", "Start simple; introduce OpenSearch only when catalogue/community/course volume justifies the operating cost."],
  ["Events", "RabbitMQ → Kafka only if needed", "RabbitMQ is sufficient early; Kafka is deferred until device/event volume proves the need."],
  ["Object storage", "S3-compatible + CDN", "Food/progress photos and course media, with compression and lifecycle policies to control cost."],
  ["Offline store", "SQLite / Isar", "Local-first POS, food log and care-plan sync for intermittent connectivity."],
  ["Hosting / delivery", "Managed Kubernetes + GitHub Actions / Argo CD", "Repeatable deployments, Dev/Staging/Prod parity and horizontal scaling for peak demand."]
];

const roadmap = {
  1: [
    ["M1", "Mobilize & discover", "Steering cadence, ADR register, concern discovery, Odoo/data access, NFRs and data classification.", "Approved scope v1 · risk register · prioritized backlog"],
    ["M2", "Foundation v1", "Dev/Staging/Prod, CI/CD, API Gateway skeleton, JK ID model, master-data rules and Odoo gap analysis.", "Environment readiness · identity sign-off"],
    ["M3", "ERP core build starts", "Finance/Inventory cleanup, master migration tooling, POS domain model and MIS consolidation.", "Data-quality report · migration rehearsal #1"],
    ["M4", "ERP/POS pilot + Clinical start", "Offline POS core, stock ledger/batch/FEFO, clinical workflow discovery and website design system.", "POS alpha UAT · clinical workflow sign-off"],
    ["M5", "Operational workflows", "POS shift/cash, HR/payroll core, patient registration, OPD queue and website catalogue/booking APIs.", "Outlet staff UAT · clinical desk UAT"],
    ["M6", "ERP/POS Gate 1", "Shadow-mode pilot, inventory reconciliation, finance posting, MIS v1 and pilot training.", "Gate 1 · POS pilot accepted · VAPT #1"],
    ["M7", "ERP rollout + Clinical build", "First outlet wave, EMR core, consent/audit, website frontend and unified login/cart.", "Outlet-wave UAT · EMR test sign-off"],
    ["M8", "App workstream starts", "Care Plan authoring, website commerce/booking, Flutter foundation, notification framework and AI-food API procurement.", "Website beta · mobile architecture review"],
    ["M9", "Clinical pilot + App core", "Clinical pilot, website journey, app login/profile, care-plan APIs and membership model.", "Clinical pilot UAT · web regression UAT"],
    ["M10", "Clinical + Website v1 go-live", "Patient/Appointment/OPD/EMR + basic Care Plan live; Group Hub/UOL commerce/HR booking live.", "Gate 2 · production go-live · VAPT #2"],
    ["M11", "Care loop implementation", "App planner/tasks, manual food log, reminders, membership/fitness and CRM/Customer 360 read model.", "App feature UAT · care-team acceptance"],
    ["M12", "AI + device + community foundation", "Food-recognition buy phase, Health Connect/HealthKit foundation, moderation console and analytics events.", "AI accuracy baseline · moderation checklist"]
  ],
  2: [
    ["M13", "Super App beta", "Care plan, nutrition log, membership, CRM, notifications, basic device sync and pilot cohort.", "Closed beta · clinician/patient UAT"],
    ["M14", "Super App v1 go-live", "End-to-end Care Plan loop, Food Log AI, basic wearable/CGM path and operating support model.", "Gate 3 · App v1 accepted · VAPT #3"],
    ["M15", "Community/LMS beta", "Community feed + moderation, LMS/course delivery, franchise/distribution and staff-app prototypes.", "Moderation UAT · franchise sign-off"],
    ["M16", "Community live + Data platform", "Community v1, Education v1, warehouse foundation, event ingestion and BI semantic model.", "Content-safety gate · data-quality checks"],
    ["M17", "Franchise & staff operations", "Franchise/distribution, corporate MOU, conditional Sinbad integration and field staff apps.", "Integration UAT · field pilot"],
    ["M18", "Phase 4 Gate", "Community/Education/Franchise/staff apps release, SOPs and training.", "Gate 4 · business acceptance · handover"],
    ["M19", "Data/BI scale", "Warehouse pipelines, advanced role dashboards and finance/clinical/commerce KPI layer.", "BI reconciliation against source systems"],
    ["M20", "Predictive analytics prototype", "Adherence/drop-off prototype, cohort features, alert-quality monitoring and dataset governance.", "Offline model evaluation · clinical SME review"],
    ["M21", "In-house food model POC", "Local dataset loop, model-serving POC and buy-vs-build cost benchmark.", "Model quality/cost decision gate"],
    ["M22", "Scale-out", "Manager dashboard app, 15–20 outlet support, performance tuning and autoscaling/budget optimization.", "Load/performance UAT · DR rehearsal"],
    ["M23", "Hardening & transition", "Security hardening, audit cleanup, upgrade rehearsal and ownership transfer to JK Tech.", "KT acceptance · runbook audit · resilience test"],
    ["M24", "Program close / steady state", "Stabilization, backlog triage, SLO dashboard, annual operating model and Year-3 roadmap.", "Gate 5 · BAU ownership accepted"]
  ]
};

const weeks = [
  ["W1", "Program mobilization", "Sponsors/owners, RAID, stakeholder map, decision cadence, repo ownership and access requests.", "Kickoff minutes + accountable owner per concern"],
  ["W2", "Current-state & data audit", "Odoo, Excel, website, patient/clinical workflows, duplicate master data and integration inventory.", "As-is inventory + migration risk report"],
  ["W3", "Cloud / engineering baseline", "Dev/Staging/Prod, network/IAM, secrets, repo, release model and CI skeleton.", "Environment checklist"],
  ["W4", "Platform skeleton", "API Gateway, observability, logging/trace IDs, auth architecture, backup baseline and standards.", "Architecture review #1"],
  ["W5", "JK ID / SSO", "Party/role model, OTP/staff 2FA, token flow, consent linkage and first login.", "Identity demo + security UAT"],
  ["W6", "Master Data", "Product/customer/employee schemas, mapping rules, cleansing scripts and staged imports.", "Migration rehearsal #1"],
  ["W7", "Odoo stabilization", "Finance/inventory gap analysis, stock ledger and integration contract.", "Odoo remediation backlog approved"],
  ["W8", "POS core", "Sale/return/shift/cash flow, local store, sync queue and offline event strategy.", "POS alpha demo"],
  ["W9", "Offline & reconciliation", "Conflict policy, idempotency, stock-negative exception and end-of-day reconciliation.", "Network-failure test"],
  ["W10", "MIS & migration rehearsal", "Weekly sales/stock MIS, Odoo/Excel reconciliation and pilot outlet master data.", "MIS sign-off + migration rehearsal #2"],
  ["W11", "Pilot outlet UAT", "Training, device/printer/payment tests, parallel-run script and support channel.", "Pilot-readiness checklist"],
  ["W12", "Shadow-mode pilot & Gate 1 prep", "Live shadow usage, defect burn-down, reconciliation, management demo and next-quarter plan.", "Go/no-go for controlled POS cut-over"]
];

const team = [
  ["M1–2", "6.0", "Architect, 2 backend, DevOps, 0.5 QA, Odoo specialist, 0.5 UI/UX", "Foundation + Odoo discovery"],
  ["M3–6", "8.5", "Architect, 3 backend, DevOps, QA, Frontend, Odoo specialist, 0.5 UI/UX", "ERP/POS + early Clinical/Website"],
  ["M7–10", "13.5", "Architect, 4 backend, DevOps, 2 QA, 2 Frontend, 2 Mobile, Odoo specialist, 0.5 UI/UX", "Peak Clinical/Website + App start"],
  ["M11–14", "14.0", "Architect, 4 backend, DevOps, 2 QA, 2 Frontend, 3 Mobile, in-house Odoo", "Super App / Care Plan peak"],
  ["M15–18", "12.0", "Architect, 4 backend, DevOps, 2 QA, Frontend, 2 Mobile, in-house Odoo", "Community/Franchise + Data foundation"],
  ["M19–24", "11.0", "Architect, 3 backend, DevOps, 2 QA, Frontend, 2 Mobile, in-house Odoo", "Scale, BI/AI, hardening, KT"]
];

const rates = [
  ["Tech Lead / Architect", "In-house", "200,000", "Architecture, security, vendor governance, product/backlog, process mapping, acceptance, Data/AI & ML oversight, moderation governance, final go-live sign-off"],
  ["Senior Backend Engineer", "In-house", "100,000", "API Gateway, core platform, domain architecture"],
  ["Mid Backend Engineer", "In-house", "80,000", "ERP integration, Clinical, Commerce and Community services"],
  ["Frontend Engineer", "In-house", "80,000", "Next.js website/admin experiences"],
  ["Flutter Mobile Engineer", "In-house", "70,000", "Super App, offline sync and device integrations"],
  ["QA / Test Engineer", "In-house", "50,000", "Manual + automation + release/UAT coordination"],
  ["DevOps / Platform Engineer", "In-house", "100,000", "Cloud, Kubernetes, CI/CD, security baseline and observability"],
  ["Odoo/ERP Engineer (after transition)", "In-house", "70,000", "Odoo extension and integration maintenance"],
  ["Odoo Specialist", "Outsourced", "70,000 / FTE-month", "Initial stabilization, finance/inventory extension and knowledge transfer"],
  ["UI/UX Designer", "Contract", "80,000 / month", "Design system, low-literacy UX and service flows"]
];

const devCosts = [
  ["M1–2", "0.505", "0.110", "0.691", "1.382"],
  ["M3–6", "0.690", "0.110", "0.904", "3.614"],
  ["M7–10", "1.040", "0.110", "1.306", "5.224"],
  ["M11–14", "1.180", "0.000", "1.357", "5.428"],
  ["M15–18", "1.030", "0.000", "1.185", "4.738"],
  ["M19–24", "0.950", "0.000", "1.093", "6.555"],
  ["TOTAL", "", "", "", "26.941"]
];

const budget = [
  ["Engineering + specialists", 26.94],
  ["Cloud / platform", 10.0],
  ["AI / Nutrition API", 1.8],
  ["Communication / Maps / Monitoring / SaaS", 2.4],
  ["Independent VAPT / security", 1.8],
  ["Engineering / test / field hardware", 2.5],
  ["Migration / training / change", 2.0],
  ["Recruitment / onboarding", 1.0],
  ["Contingency", 5.81]
];

const quarters = [
  ["Q1 · M1–3", 4.79, "Foundation + identity/master data + ERP start"],
  ["Q2 · M4–6", 5.06, "ERP/POS pilot + Clinical/Website start"],
  ["Q3 · M7–9", 6.06, "ERP rollout + Clinical/Website build + App foundation"],
  ["Q4 · M10–12", 7.06, "Clinical + Website go-live; App/Care loop build"],
  ["Q5 · M13–15", 6.88, "Super App go-live + Community/LMS beta"],
  ["Q6 · M16–18", 6.33, "Community/Education/Franchise + warehouse"],
  ["Q7 · M19–21", 6.11, "BI/AI maturity + local model POC"],
  ["Q8 · M22–24", 6.15, "Scale, DR, hardening and handover"]
];

const infra = [
  ["M1–3", "0.12", "0.36", "Foundation/dev/test + small production footprint"],
  ["M4–6", "0.20", "0.60", "ERP/POS pilot + early Clinical/Website"],
  ["M7–12", "0.30", "1.80", "Website/Clinical production + App beta/media"],
  ["M13–18", "0.50", "3.00", "Super App + food photos + Community/LMS + warehouse"],
  ["M19–24", "0.70", "4.20", "Higher usage, BI/AI workloads and 15–20 outlet support"],
  ["TOTAL", "", "9.96", "Rounded to BDT 10.0M in the program budget"]
];

const quality = [
  ["Every sprint", "Unit/integration tests, API contract checks, targeted UAT, demo and security/dependency scan", "Defects triaged before next sprint planning"],
  ["Every month", "Regression pack, cloud-cost review, vulnerability backlog and data reconciliation", "Monthly delivery + burn report"],
  ["Before outlet/clinic rollout", "Migration rehearsal, staff training, parallel run, rollback plan and support roster", "Business-owner cut-over approval"],
  ["Before major public go-live", "Performance/load test, VAPT, DR/backup restore, observability/SLOs and privacy/consent verification", "Formal go/no-go chaired by Tech Lead + Business Owner"],
  ["Post go-live 2–4 weeks", "Hypercare, incident review, adoption metrics and backlog stabilization", "Exit only when SLO/defect thresholds are stable"]
];

const risks = [
  ["Hiring delay", "High", "Pushes the critical path because JK Tech starts with no bench.", "Start Phase-2/3 hiring during Phase 0–1; keep approved specialist bridge contracts."],
  ["Dirty Odoo / Excel data", "High", "Rework, failed reconciliation and rollout delay.", "Profile data in M1–2; stage migration; physical stock count before outlet cut-over."],
  ["Clinical workflow churn", "High", "EMR / Care Plan rework.", "Embed Clinical SME, prototype early and sign acceptance criteria before build."],
  ["Odoo over-customization", "Medium/High", "Upgrade lock-in and vendor dependency.", "Keep custom domains outside Odoo; API boundary; integration tests for upgrades."],
  ["Cloud / media / AI usage spike", "Medium", "Run cost exceeds envelope.", "Compression/lifecycle, caching/batching, quotas and monthly unit-cost dashboard."],
  ["Vendor / API availability", "Medium", "Blocks Sinbad, wearable or AI features.", "Adapter interfaces, manual fallback and defer unverified integrations."],
  ["Scope expansion", "High", "Budget and timeline drift.", "Definition of Done + change control; contingency is not a scope-slush fund."],
  ["Security / compliance defect", "High", "Go-live delay and business risk.", "Security by design, field encryption, read-audit and independent VAPT gates."]
];

const gantt = [
  ["Foundation / Platform", 1, 24, false],
  ["ERP / POS / Finance / Inventory", 2, 8, true],
  ["Clinical", 4, 24, false],
  ["Website", 4, 10, true],
  ["Super App / Care Plan", 8, 14, false],
  ["Community / Education", 12, 18, true],
  ["Franchise / Staff Apps", 14, 18, false],
  ["Data / BI / AI", 1, 24, true]
];

function makeTable(el, headers, rows) {
  el.innerHTML = `<thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>`;
}

document.getElementById('stack-grid').innerHTML = stack.map(([layer, tech, why]) => `
  <article class="stack-card"><span>${layer}</span><h3>${tech}</h3><p>${why}</p></article>`).join('');

function renderRoadmap(range = 1) {
  const grid = document.getElementById('roadmap-grid');
  grid.innerHTML = roadmap[range].map(([m, title, body, gate]) => `
    <article class="month-card"><span class="month">${m}</span><h3>${title}</h3><p>${body}</p><span class="gate">${gate}</span></article>`).join('');
}
renderRoadmap(1);

document.querySelectorAll('.roadmap-tab').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.roadmap-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderRoadmap(Number(btn.dataset.range));
}));

document.getElementById('week-grid').innerHTML = weeks.map(([w, title, body, done]) => `
  <article class="week-card"><span>${w}</span><h3>${title}</h3><p>${body}</p><small>${done}</small></article>`).join('');

makeTable(document.getElementById('team-table'), ['Period', 'Approx. Team Size', 'Composition', 'Primary Delivery Load'], team);
makeTable(document.getElementById('rates-table'), ['Role', 'Mode', 'Planning Rate (BDT/month)', 'Scope'], rates);
makeTable(document.getElementById('dev-cost-table'), ['Period', 'In-house Payroll/mo (M BDT)', 'External/mo (M BDT)', 'Loaded Dev Cost/mo (M BDT)', 'Period Total (M BDT)'], devCosts);
makeTable(document.getElementById('infra-table'), ['Period', 'Monthly Infra (M BDT)', 'Period Total (M BDT)', 'What drives cost'], infra);
makeTable(document.getElementById('quality-table'), ['Cadence / Gate', 'Required Activities', 'Exit Condition'], quality);

const maxBudget = Math.max(...budget.map(x => x[1]));
document.getElementById('budget-list').innerHTML = budget.map(([label, value]) => `
  <div class="budget-row"><div class="label">${label}</div><div class="budget-track"><div class="budget-fill" style="width:${(value/maxBudget)*100}%"></div></div><div class="value">${value.toFixed(1)}M</div></div>`).join('');

const maxQ = Math.max(...quarters.map(x => x[1]));
document.getElementById('quarter-chart').innerHTML = quarters.map(([q, value, note]) => `
  <div class="quarter-row"><div class="qname">${q}</div><div class="quarter-track"><div class="quarter-fill" style="width:${(value/maxQ)*100}%"></div></div><div class="quarter-value">${value.toFixed(2)}M</div><div class="quarter-note">${note}</div></div>`).join('');

document.getElementById('risk-grid').innerHTML = risks.map(([name, level, impact, control]) => {
  const cls = level.toLowerCase().startsWith('high') ? 'high' : 'medium';
  return `<article class="risk-card"><div class="risk-head"><h3>${name}</h3><span class="risk-level ${cls}">${level}</span></div><p><strong>Impact:</strong> ${impact}</p><p><strong>Control:</strong> ${control}</p></article>`;
}).join('');

function renderGantt() {
  let html = `<div class="gantt-inner"><div class="gantt-header"><div class="label">Workstream</div>${Array.from({length:24}, (_,i)=>`<div>M${i+1}</div>`).join('')}</div>`;
  gantt.forEach(([label, start, end, alt]) => {
    html += `<div class="gantt-row"><div class="label">${label}</div>`;
    for (let m=1; m<=24; m++) {
      const active = m >= start && m <= end;
      const marker = [6,10,14,18,24].includes(m) && active;
      html += `<div class="gantt-cell ${active ? 'active' : ''} ${alt && active ? 'alt' : ''} ${marker ? 'marker' : ''}" title="${label} · M${m}"></div>`;
    }
    html += `</div>`;
  });
  html += `</div>`;
  document.getElementById('workstream-gantt').innerHTML = html;
}
renderGantt();

const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('main-nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  document.getElementById('scroll-progress').style.width = `${pct}%`;
});
