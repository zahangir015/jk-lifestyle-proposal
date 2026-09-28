const stack = [
  ["Web frontend", "Next.js (React) + TypeScript", "This provides search-friendly customer pages and a shared frontend technology for the website and administration screens."],
  ["Mobile", "Flutter", "This provides one Android/iOS codebase and supports offline storage and device integrations."],
  ["Application backend", "Node.js / NestJS", "This provides clear modules, well-defined system interfaces and a good fit for the custom ERP and business services."],
  ["AI / data services", "Python / FastAPI", "This keeps data processing, AI and model-serving work in the Python ecosystem."],
  ["Initial POS & Inventory", "Odoo Community Edition", "Odoo CE is the first operational bridge. Clean Excel product, outlet and opening-stock data is migrated into Odoo so POS and Inventory can go live quickly."],
  ["Long-term POS & Inventory", "JK-built modules", "The JK team builds the replacement Inventory and POS in parallel, tests it beside Odoo and moves outlets only after reconciliation passes."],
  ["ERP reporting", "Central ERP reporting layer", "All management and operational reports are generated in the ERP, using synchronized Odoo data during transition and JK-owned data after cut-over."],
  ["Primary database", "Managed PostgreSQL", "This provides reliable transactions for clinical, ERP and reporting data, with JSON support where flexible fields are needed."],
  ["Cache / session", "Redis", "This supports sessions, rate limiting, caching and short-lived operational state."],
  ["Events", "RabbitMQ first", "This supports background processing and system-to-system events without adding unnecessary infrastructure complexity."],
  ["Object storage", "S3-compatible storage + Content Delivery Network", "This stores food photos, progress images and course media with compression and lifecycle rules to control cost."],
  ["Hosting / delivery", "Managed Kubernetes + automated build/deployment", "This supports repeatable Development, Staging and Production deployments and allows workloads to scale when needed."]
];

const roadmap = {
  1: [
    ["M1", "Mobilize & discover", "Confirm business owners, create the architecture decision log, review Excel/Odoo/current systems, define security and performance requirements, and prioritize the backlog.", "Scope v1 approved · risk register ready · backlog prioritized"],
    ["M2", "Foundation + data preparation", "Set up the Development, Staging and Production environments, automated deployment, the central integration gateway, JK ID, master-data rules and the detailed Excel-to-Odoo migration mapping.", "Environment ready · identity approved · Excel data-quality report completed"],
    ["M3", "Excel → Odoo CE migration", "Clean product, outlet and opening-stock data from Excel; configure Odoo CE Inventory and POS; create migration scripts and ERP reporting synchronization.", "Migration rehearsal #1 · opening stock reconciled · pilot dataset approved"],
    ["M4", "Odoo CE outlet pilot + ERP start", "Run the first Odoo CE POS/Inventory outlet pilot. Start Doctor Profile, Appointment and patient medical-record design, and define the central ERP report catalogue.", "Outlet user acceptance test · stock/sales reconciliation · clinical workflow approved"],
    ["M5", "ERP workforce + reporting core", "Keep Odoo CE live for outlet POS/Inventory. Build employee management, attendance, leave/roster, payroll, patient registration, Appointment/outpatient queue and first ERP sales/stock/clinical reports.", "Outlet acceptance · employee workflow acceptance · first report reconciliation"],
    ["M6", "Odoo transition Gate 1", "Stabilize the Odoo CE pilot, reconcile sales/payments/stock, train outlet users, and approve the functional requirements for the JK-built Inventory and POS modules.", "Gate 1 · Odoo CE pilot accepted · reconciliation passed · independent security test #1"],
    ["M7", "Odoo rollout + JK Inventory build", "Move the first outlet wave to Odoo CE, build the JK Inventory service, continue patient medical records and consent/audit, and connect the website to a sales adapter that can later switch away from Odoo.", "Outlet-wave acceptance · Inventory prototype · medical-record tests approved"],
    ["M8", "JK POS build + App starts", "Build the first JK Point of Sale module on top of the new Inventory service. Continue Care Plan authoring, website sales integration, the Flutter mobile foundation, notifications and procurement of the food-recognition service.", "JK POS alpha · Website beta · mobile architecture review"],
    ["M9", "Parallel POS/Inventory test", "Run Odoo CE and the JK-built POS/Inventory side by side at a pilot outlet. Compare sales, returns, payments, stock and closing balances while continuing the Clinical and App pilot.", "Parallel reconciliation passed · clinical pilot accepted · website regression passed"],
    ["M10", "Clinical + Website v1 and first JK cut-over", "Go live with Doctor/Patient/Appointment/outpatient/patient medical records and basic Care Plan. If parallel reconciliation is successful, move the first approved outlet from Odoo CE to the JK POS/Inventory modules.", "Gate 2 · production go-live · first outlet cut-over accepted · independent security test #2"],
    ["M11", "Care loop + outlet migration", "Continue the App planner, food log, reminders, membership and customer view while moving additional approved outlets to the JK POS/Inventory platform.", "App feature acceptance · outlet reconciliation remains clean"],
    ["M12", "AI, devices + migration review", "Start food-recognition buy phase, Health Connect/HealthKit integration, moderation tools and analytics events. Review the remaining Odoo-to-JK outlet migration plan.", "AI quality baseline · migration progress reviewed"]
  ],
  2: [
    ["M13", "Super App beta + JK POS/Inventory rollout", "Run the Super App beta and continue outlet migration to the JK POS/Inventory modules with sales, stock and payment reconciliation.", "Closed beta · outlet cut-over evidence approved"],
    ["M14", "Super App v1 go-live", "Release the end-to-end Care Plan loop, Food Log AI and basic wearable path, while keeping central ERP reporting across all modules.", "Gate 3 · App v1 accepted · independent security test #3"],
    ["M15", "Complete main POS/Inventory migration", "Move the remaining priority outlets from Odoo CE to the JK POS/Inventory platform and close major operational gaps.", "Priority outlet migration accepted · Odoo transition reduced"],
    ["M16", "Community live + reporting scale", "Release Community/Education v1 and expand ERP reporting and central data pipelines.", "Content-safety gate · report reconciliation passed"],
    ["M17", "Franchise & staff operations", "Add franchise/distribution, selected partner integrations and field staff applications.", "Integration acceptance · field pilot"],
    ["M18", "Phase 4 Gate", "Complete the Community/Education/Franchise release, operating procedures, training and ownership handover.", "Gate 4 · business acceptance · operational handover"],
    ["M19", "Reporting and analytics scale", "Expand ERP dashboards for outlet sales, Inventory, online sales, clinical operations, attendance and payroll.", "ERP reports reconcile with all source systems"],
    ["M20", "Predictive analytics prototype", "Prototype adherence/drop-off analysis, review alert quality and strengthen dataset governance.", "Offline model evaluation · clinical expert review"],
    ["M21", "In-house food model proof of concept", "Train the prototype with the local dataset, test how the model is served and compare the in-house operating cost with the third-party service cost.", "Model quality/cost decision gate"],
    ["M22", "Scale-out", "Support 15–20 outlets, tune performance, test autoscaling and complete a disaster-recovery rehearsal.", "Load/performance acceptance · disaster-recovery test passed"],
    ["M23", "Hardening & transition", "Complete security hardening, audit cleanup, upgrade rehearsal, documentation and knowledge transfer.", "Knowledge transfer accepted · runbooks reviewed · resilience tested"],
    ["M24", "Program close / steady operations", "Stabilize the platform, close critical backlog items, review the service performance dashboard, confirm the annual operating model and approve the Year-3 roadmap.", "Gate 5 · normal operational ownership accepted"]
  ]
};

const weeks = [
  ["W1", "Program mobilization", "Confirm sponsors, business owners, risks, decision cadence, repository ownership and required system access.", "Kickoff minutes + accountable owner per business area"],
  ["W2", "Current-state & data audit", "Review Excel files, current Odoo use, website, outlet operations, clinical workflows, duplicate master data and integrations.", "Current-state inventory + migration risk report"],
  ["W3", "Cloud / engineering baseline", "Set up Development, Staging and Production, network access, secrets, repositories, release rules and automated build/deployment.", "Environment checklist"],
  ["W4", "Platform skeleton", "Create the central integration gateway, system monitoring, request tracking, login design, backup baseline and security standards.", "Architecture review #1"],
  ["W5", "JK ID / single sign-on", "Create the person-and-role model, one-time-password login, staff two-step verification, session/token flow, consent linkage and the first end-to-end login.", "Identity demo + security acceptance"],
  ["W6", "Clean and map Excel data", "Clean product, outlet, stock, customer and employee data; define mapping IDs; prepare staged imports into Odoo CE and the ERP reporting layer.", "Migration rehearsal #1"],
  ["W7", "Configure Odoo CE POS & Inventory", "Configure products, outlets, opening stock, Point of Sale sessions, users and permissions. Confirm the system interfaces and reporting synchronization needed by the ERP.", "Odoo CE pilot configuration approved"],
  ["W8", "Odoo CE outlet pilot", "Test sale, return, payment, outlet closing, stock movement, receipt/printer and internet-loss/reconnect behavior in Odoo CE.", "Odoo CE POS & Inventory alpha demo"],
  ["W9", "Reconciliation & replacement requirements", "Compare Excel opening data with Odoo, test network failure/reconnect, document gaps, and convert real outlet workflows into requirements for the JK-built POS and Inventory modules.", "Reconciliation report + approved replacement backlog"],
  ["W10", "ERP reporting v1", "Build the first ERP reports for outlet sales and stock using synchronized Odoo data, and for online sales using the Website/App order source. Reconcile the combined report totals.", "ERP report totals match Odoo for outlet/stock data and the Website/App source for online sales · migration rehearsal #2"],
  ["W11", "Pilot outlet user acceptance", "Train outlet users and test device, printer, payment, stock and reporting workflows. Finalize support and rollback steps.", "Pilot-readiness checklist"],
  ["W12", "Odoo CE live pilot & JK build plan", "Run the controlled Odoo CE pilot, close critical defects, reconcile sales/stock, demonstrate ERP reports and approve the next-quarter plan for the JK Inventory and POS build.", "Go/no-go for wider Odoo transition + approved JK replacement plan"]
];

const team = [
  ["M1–2", "6.0", "Architect, 2 backend engineers, Platform/DevOps engineer, part-time test engineer, Odoo specialist and part-time user-interface designer", "Foundation + Excel/Odoo discovery"],
  ["M3–6", "8.5", "Architect, 3 backend engineers, Platform/DevOps engineer, test engineer, frontend engineer, Odoo specialist and part-time user-interface designer", "Odoo CE transition + early ERP/Clinical/Reporting"],
  ["M7–10", "13.5", "Architect, 4 backend engineers, Platform/DevOps engineer, 2 test engineers, 2 frontend engineers, 2 mobile engineers, Odoo specialist and part-time user-interface designer", "JK Inventory/POS build + Clinical/Website + App start"],
  ["M11–14", "14.0", "Architect, 4 backend engineers, Platform/DevOps engineer, 2 test engineers, 2 frontend engineers, 3 mobile engineers and ERP/Odoo engineer", "Super App + outlet migration + reporting"],
  ["M15–18", "12.0", "Architect, 4 backend engineers, Platform/DevOps engineer, 2 test engineers, frontend engineer, 2 mobile engineers and ERP engineer", "Finish POS/Inventory migration + Community/Franchise"],
  ["M19–24", "11.0", "Architect, 3 backend engineers, Platform/DevOps engineer, 2 test engineers, frontend engineer, 2 mobile engineers and ERP engineer", "Reporting, analytics, hardening and knowledge transfer"]
];

const rates = [
  ["Tech Lead / Architect", "In-house", "200,000", "Architecture, security, vendor management, product/backlog ownership, process mapping, acceptance criteria, Data/AI oversight, moderation governance and final go-live approval"],
  ["Senior Backend Engineer", "In-house", "100,000", "Central integration gateway, core ERP platform, Inventory and Point of Sale architecture, and business-module design"],
  ["Mid Backend Engineer", "In-house", "80,000", "Custom ERP/Clinical, employee management, Attendance, Payroll, central reporting, Odoo transition adapters, Membership and Community services"],
  ["Frontend Engineer", "In-house", "80,000", "Next.js website and administration experiences"],
  ["Flutter Mobile Engineer", "In-house", "70,000", "Super App, offline synchronization and device integrations"],
  ["Test Engineer", "In-house", "50,000", "Manual testing, automation, release testing and user acceptance coordination"],
  ["DevOps / Platform Engineer", "In-house", "100,000", "Cloud, Kubernetes, automated build/deployment, security baseline and system monitoring"],
  ["ERP / Odoo Engineer", "In-house", "70,000", "Odoo CE transition support, ERP reporting integration and migration to JK-built POS/Inventory"],
  ["Odoo Specialist", "Outsourced", "70,000 / person-month", "Initial Excel migration, Odoo CE Inventory/POS setup, pilot support, integration support and knowledge transfer"],
  ["UI/UX Designer", "Contract", "80,000 / month", "Design system, accessible user experience and service flows"]
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
  ["Food-recognition and nutrition service", 1.8],
  ["Communication / Maps / Monitoring / SaaS", 2.4],
  ["Independent security testing", 1.8],
  ["Engineering / test / field hardware", 2.5],
  ["Migration / training / change", 2.0],
  ["Recruitment / onboarding", 1.0],
  ["Contingency", 5.81]
];

const quarters = [
  ["Q1 · M1–3", 4.79, "Foundation + Excel cleanup + Odoo CE migration start"],
  ["Q2 · M4–6", 5.06, "Odoo CE POS/Inventory pilot + ERP/Clinical/Reporting start"],
  ["Q3 · M7–9", 6.06, "JK Inventory/POS build + Odoo rollout + Clinical/Website/App foundation"],
  ["Q4 · M10–12", 7.06, "First JK POS/Inventory cut-over + Clinical/Website go-live + App build"],
  ["Q5 · M13–15", 6.88, "Super App go-live + main outlet migration + Community beta"],
  ["Q6 · M16–18", 6.33, "Community/Education/Franchise + central data/reporting"],
  ["Q7 · M19–21", 6.11, "ERP reporting/analytics + AI maturity"],
  ["Q8 · M22–24", 6.15, "Scale, disaster recovery, hardening and handover"]
];

const infra = [
  ["M1–3", "0.12", "0.36", "Foundation, Development/Testing and a small pilot footprint"],
  ["M4–6", "0.20", "0.60", "Odoo CE outlet pilot + early ERP/Clinical/Website"],
  ["M7–12", "0.30", "1.80", "Odoo transition + JK POS/Inventory build + Website/Clinical/App beta"],
  ["M13–18", "0.50", "3.00", "Super App, media, Community/Education and reporting/data platform"],
  ["M19–24", "0.70", "4.20", "Higher usage, analytics/AI workloads and 15–20 outlet support"],
  ["TOTAL", "", "9.96", "Rounded to BDT 10.0M in the program budget"]
];

const quality = [
  ["Every sprint", "Run unit tests, integration tests, system-interface checks, targeted user acceptance tests, demonstrations and security/dependency scans.", "Critical defects are triaged before the next sprint."],
  ["Every month", "Run regression tests, cloud-cost review, security backlog review and data/report reconciliation.", "A monthly delivery and cost report is approved."],
  ["Before outlet/clinic rollout", "Complete migration rehearsal, staff training, parallel run, rollback plan and support roster.", "The business owner approves cut-over."],
  ["Before major public go-live", "Run performance tests, independent security testing, disaster-recovery/backup restore testing, monitoring checks, agreed service-target checks and privacy/consent verification.", "The Tech Lead and Business Owner make the formal go/no-go decision."],
  ["Post go-live 2–4 weeks", "Provide focused post-launch support, review incidents, adoption and open defects.", "Exit focused support only when agreed service targets and defect levels are stable."]
];

const risks = [
  ["Hiring delay", "High", "The delivery schedule can slip because JK Tech starts with a small team.", "Start hiring early and keep approved specialist support available for transition work."],
  ["Dirty Excel / Odoo data", "High", "Bad source data can cause stock errors, failed reconciliation and rollout delay.", "Profile and clean data early, stage migrations and perform physical stock checks before outlet cut-over."],
  ["Clinical workflow changes", "High", "Late workflow changes can cause repeated work in patient records and Care Plans.", "Keep clinical subject-matter experts involved, prototype early and approve acceptance criteria before full build."],
  ["Odoo transition becomes permanent", "Medium/High", "A temporary bridge can become long-term technical debt if the JK replacement is delayed.", "Give the JK Inventory/POS replacement a dated roadmap, run parallel reconciliation and move outlets in controlled waves."],
  ["Reporting mismatch", "High", "Management can lose trust if ERP reports do not match outlet, Inventory, clinical or payroll source totals.", "Use source references, daily reconciliation and report sign-off during every migration wave."],
  ["Cloud / media / AI usage spike", "Medium", "Monthly run cost can exceed the approved budget.", "Use compression, lifecycle rules, caching, batching, quotas and monthly unit-cost reviews."],
  ["Scope expansion", "High", "Uncontrolled additions can increase budget and timeline.", "Use a clear Definition of Done, formal change control and quarterly approval gates."],
  ["Security / compliance defect", "High", "A serious defect can delay go-live and create business risk.", "Use security-by-design, encryption, access audit logs and independent security testing before major releases."]
];

const gantt = [
  ["Foundation / Platform", 1, 24, false],
  ["Odoo CE POS / Inventory transition", 2, 15, true],
  ["Custom ERP / Clinical / Reporting", 4, 24, false],
  ["JK-built POS / Inventory", 7, 16, true],
  ["Website", 4, 10, false],
  ["Super App / Care Plan", 8, 14, true],
  ["Community / Education", 12, 18, false],
  ["Data / Analytics / AI", 1, 24, true]
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
