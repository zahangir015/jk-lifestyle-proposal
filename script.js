const stack = [
  { layer: 'Web', choice: 'Next.js + TypeScript', why: 'SSR for the public website; shared typed frontend patterns and a broad hiring pool.' },
  { layer: 'Mobile', choice: 'Flutter', why: 'One Android/iOS codebase with offline storage and BLE/device integration support.' },
  { layer: 'Backend', choice: 'NestJS + FastAPI', why: 'NestJS for structured business services; Python/FastAPI for AI, ML and data workloads.' },
  { layer: 'ERP Core', choice: 'Odoo + custom services', why: 'Odoo stays focused on Finance/Inventory while differentiated domains remain custom.' },
  { layer: 'Primary Data', choice: 'PostgreSQL + Redis', why: 'ACID transactions for core domains; Redis for session, cache, rate limit and queue state.' },
  { layer: 'Events', choice: 'RabbitMQ first', why: 'Simple, appropriate event infrastructure now; Kafka only if later device/event volume requires it.' },
  { layer: 'Storage', choice: 'S3-compatible + CDN', why: 'Food/progress photos and course media with compression and lifecycle controls.' },
  { layer: 'Hosting', choice: 'Managed Kubernetes', why: 'Consistent Dev/Staging/Prod with horizontal scaling and controlled platform operations.' },
  { layer: 'Delivery', choice: 'GitHub Actions + Argo CD', why: 'Traceable releases and repeatable deployments across three environments.' }
];

const budget = [
  { name: 'Engineering + specialists', value: 68.8, color: '#0d1b2b', note: 'Core delivery team + Odoo/UIUX/ML support' },
  { name: 'Cloud / platform', value: 10.0, color: '#2d6f7a', note: 'Compute, DB, cache/queue, storage/CDN, backup/DR' },
  { name: 'AI / Nutrition API', value: 1.8, color: '#7eaeb4', note: 'Buy-phase recognition and nutrition baseline' },
  { name: 'Communication / Maps / Monitoring', value: 2.4, color: '#d9a441', note: 'Messaging, maps, APM/logging and SaaS' },
  { name: 'Independent VAPT', value: 1.8, color: '#bd7d55', note: 'Three major pre-go-live security assessments' },
  { name: 'Equipment / field hardware', value: 2.5, color: '#827aaf', note: 'Engineering/test devices and POS/peripheral lab' },
  { name: 'Migration / training / change', value: 2.0, color: '#64a68f', note: 'Rehearsal, rollout support and reconciliation' },
  { name: 'Recruitment / onboarding', value: 1.0, color: '#9aa8b7', note: 'Hiring, screening and joining/onboarding reserve' },
  { name: 'Contingency reserve', value: 10.8, color: '#d7b766', note: '12% centrally controlled risk/change reserve' }
];

const quarters = [
  ['Q1 · M1–3', 7.67], ['Q2 · M4–6', 8.33], ['Q3 · M7–9', 11.23], ['Q4 · M10–12', 12.92],
  ['Q5 · M13–15', 13.15], ['Q6 · M16–18', 12.75], ['Q7 · M19–21', 12.11], ['Q8 · M22–24', 12.11]
];

const team = [
  ['Tech Lead / Architect', 'In-house', 'BDT 300K / month', 'Architecture, security, vendor governance and final go-live sign-off.'],
  ['Senior Backend Engineer', 'In-house', 'BDT 220K / month', 'API Gateway, core platform and domain architecture.'],
  ['Mid Backend Engineer', 'In-house', 'BDT 140K / month', 'ERP integration, Clinical, Commerce and Community services.'],
  ['Frontend Engineer', 'In-house', 'BDT 160K / month', 'Next.js website and admin experiences.'],
  ['Flutter Engineer', 'In-house', 'BDT 170K / month', 'Super App, offline sync and device integrations.'],
  ['QA / Test Engineer', 'In-house', 'BDT 110K / month', 'Manual + automation testing and release/UAT coordination.'],
  ['DevOps / Platform Engineer', 'In-house', 'BDT 200K / month', 'Cloud, Kubernetes, CI/CD, observability and security baseline.'],
  ['Business Analyst / Product Owner', 'In-house', 'BDT 150K / month', 'Backlog, process mapping and acceptance criteria.'],
  ['Odoo / ERP Engineer', 'Transition in-house', 'BDT 180K / month', 'Odoo extension and integration maintenance after specialist transition.'],
  ['Data / AI Engineer', 'Transition in-house', 'BDT 220K / month', 'Warehouse, ML pipeline and model serving after specialist transition.'],
  ['Odoo Specialist', 'Outsourced', 'BDT 300K / FTE-month', 'Initial stabilization, Finance/Inventory extension and knowledge transfer.'],
  ['ML / AI Specialist', 'Outsourced', 'BDT 350K / FTE-month', 'Food recognition, MLOps, dataset/model transition and KT.']
];

const workstreams = [
  ['Foundation / Platform', 'M1–M24', 'JK ID, API Gateway, CI/CD, observability, security, notification and integration contracts.', 'Blocks integration testing for every product stream.'],
  ['ERP / POS / Finance / Inventory', 'M2–M8 build', 'Odoo stabilization, POS, batch/FEFO, HR/payroll core and MIS.', 'Master data + finance/inventory reconciliation.'],
  ['Clinical', 'M4–M10 build', 'Registration, appointment, OPD, EMR, consent and Care Plan authoring.', 'Clinical SME availability + identity + audit/security.'],
  ['Website', 'M4–M10', 'Group hub, UOL e-commerce, Health Revolution booking and unified login/cart.', 'ERP stock + identity + booking APIs.'],
  ['Super App / Care Plan', 'M8–M14', 'Customer app, care plan loop, food log, membership, devices and notifications.', 'Clinical authoring model must be stable.'],
  ['Community / Education', 'M12–M18', 'Feed, moderation, LMS, content/video and expert presence.', 'Moderation console and content policy are hard go-live gates.'],
  ['Franchise / Staff Apps', 'M14–M18', 'Distribution, partner integrations and delivery/sample/field staff apps.', 'Verified partner APIs + stable inventory/identity.'],
  ['Data / BI / AI', 'M1 capture · M16–24 maturity', 'Warehouse, dashboards, adherence prediction and local food-model evolution.', 'Event/data lineage and consent capture must exist from day one.']
];

const roadmap = [
  {m:1, focus:'Mobilize & discover', deliver:'Steering cadence; architecture decision register; concern-by-concern discovery; Odoo/data access; baseline NFRs; security/data classification.', gate:'Approved scope v1; risk register; prioritized backlog.'},
  {m:2, focus:'Foundation v1', deliver:'Cloud accounts; Dev/Staging/Prod; Git/CI/CD; API Gateway skeleton; JK ID model; master-data rules; Odoo gap analysis.', gate:'Environment readiness review; identity design sign-off.'},
  {m:3, focus:'ERP core build starts', deliver:'Finance/Inventory cleanup; product/customer/employee migration tooling; POS domain model; MIS consolidation.', gate:'Data-quality report; migration rehearsal #1.'},
  {m:4, focus:'ERP/POS pilot + Clinical start', deliver:'Offline POS core; stock ledger/batch/FEFO; patient/appointment workflow discovery; Website design system.', gate:'POS alpha UAT; clinical workflow sign-off.'},
  {m:5, focus:'Operational workflows', deliver:'POS shift/cash flows; HR/payroll core; patient registration; appointment/OPD queue; website catalogue/booking APIs.', gate:'Outlet staff UAT; clinical desk UAT.'},
  {m:6, focus:'ERP/POS Gate 1', deliver:'Shadow-mode pilot; inventory reconciliation; Finance posting integration; MIS v1; pilot-outlet training.', gate:'Gate 1: POS pilot accepted; VAPT #1 / security review.'},
  {m:7, focus:'ERP rollout + Clinical build', deliver:'POS first-outlet wave; EMR core; consent/audit; website frontend; unified login/cart.', gate:'Outlet-wave UAT; EMR test cases signed off.'},
  {m:8, focus:'App workstream starts', deliver:'Care Plan authoring; website commerce/booking; Flutter foundation; notification framework; AI-food API procurement.', gate:'Website beta; mobile architecture review.'},
  {m:9, focus:'Clinical pilot + App core', deliver:'Clinical pilot; website full journey; app login/profile; care-plan read APIs; membership model.', gate:'Clinical pilot UAT; web regression UAT.'},
  {m:10, focus:'Clinical + Website v1 go-live', deliver:'Patient/Appointment/OPD/EMR + basic Care Plan live; Group Hub/UOL commerce/HR booking live.', gate:'Gate 2: production go-live; VAPT #2.'},
  {m:11, focus:'Care loop implementation', deliver:'App planner/tasks; manual food log; reminders; membership/fitness; CRM/Customer 360 read model.', gate:'App feature UAT; care-team acceptance.'},
  {m:12, focus:'AI + device + community foundation', deliver:'Food recognition buy-phase; Health Connect/HealthKit foundation; moderation console; analytics events.', gate:'AI accuracy baseline; moderation go-live checklist.'},
  {m:13, focus:'Super App beta', deliver:'App care plan; nutrition log; membership; CRM; notifications; basic device sync; pilot cohort.', gate:'Closed beta + clinician/patient UAT.'},
  {m:14, focus:'Super App v1 go-live', deliver:'Care Plan loop end-to-end; Food Log AI; basic wearable/CGM path; operational support model.', gate:'Gate 3: App v1 accepted; VAPT #3.'},
  {m:15, focus:'Community/LMS beta', deliver:'Community feed + moderation; LMS/course delivery; franchise/distribution workflows; staff-app prototypes.', gate:'Moderation UAT; franchise process sign-off.'},
  {m:16, focus:'Community live + Data platform', deliver:'Community v1; education v1; central warehouse foundation; event ingestion; BI semantic model.', gate:'Content-safety gate; data-quality checks.'},
  {m:17, focus:'Franchise & staff operations', deliver:'Franchise/distribution; corporate MOU; Health Tourism/Sinbad if API verified; delivery/sample/field apps.', gate:'Integration UAT; field pilot.'},
  {m:18, focus:'Phase 4 Gate', deliver:'Community/Education/Franchise/staff apps release; operating procedures and training.', gate:'Gate 4: business acceptance; operational handover.'},
  {m:19, focus:'Data/BI scale', deliver:'Warehouse pipelines; advanced role-based dashboards; finance/clinical/commerce KPI layer.', gate:'BI reconciliation against source systems.'},
  {m:20, focus:'Predictive analytics prototype', deliver:'Adherence/drop-off prototype; cohort features; alert-quality monitoring; dataset governance.', gate:'Offline model evaluation; clinical SME review.'},
  {m:21, focus:'In-house food model POC', deliver:'Local dataset training loop; model-serving POC; buy-vs-build cost benchmark.', gate:'Model quality/cost decision gate.'},
  {m:22, focus:'Scale-out', deliver:'Manager dashboard app; support 15–20 outlets; performance tuning; autoscaling/budget optimization.', gate:'Load/performance UAT; DR rehearsal.'},
  {m:23, focus:'Hardening & transition', deliver:'Security hardening; audit cleanup; upgrade rehearsal; ownership transfer from specialists to JK Tech.', gate:'KT acceptance; runbook audit; resilience test.'},
  {m:24, focus:'Program close / steady state', deliver:'Stabilization; backlog triage; SLO dashboard; annual operating model; Year-3 roadmap.', gate:'Gate 5: program closure; BAU ownership accepted.'}
];

const first90 = [
  ['W1','Program mobilization','Confirm sponsors/owners, RAID log, stakeholder map, decision cadence, repo ownership and access request list.','Kickoff minutes + accountable owner per concern.'],
  ['W2','Current-state & data audit','Review Odoo, Excel sources, website, patient workflows, master-data duplicates and integration inventory.','As-is inventory + migration risk report.'],
  ['W3','Cloud / engineering baseline','Dev/Staging/Prod; network/IAM; secrets; repository; branch/release model; CI skeleton.','Environment checklist.'],
  ['W4','Platform skeleton','API Gateway; observability; logging/trace IDs; auth architecture; backup baseline; security standards.','Architecture review #1.'],
  ['W5','JK ID / SSO','Party/role model; OTP/staff 2FA; token flow; consent linkage; first end-to-end login.','Identity demo + security UAT.'],
  ['W6','Master Data','Product/customer/employee schemas; mapping rules; cleansing scripts; staged imports.','Migration rehearsal #1.'],
  ['W7','Odoo stabilization','Finance/inventory gap analysis; stock ledger; accounts/inventory integration contract.','Odoo remediation backlog approved.'],
  ['W8','POS core','Sale/return/shift/cash flow; local store; sync queue; offline event strategy.','POS alpha demo.'],
  ['W9','Offline & reconciliation','Conflict policy; idempotency; stock-negative exception; end-of-day reconciliation.','Network-failure test.'],
  ['W10','MIS & migration rehearsal','Weekly sales/stock MIS; Odoo/Excel reconciliation; pilot-outlet master data.','MIS sign-off + migration rehearsal #2.'],
  ['W11','Pilot outlet UAT','Staff training; device/printer/payment tests; parallel-run script; support channel.','Pilot-readiness checklist.'],
  ['W12','Shadow pilot & Gate 1 prep','Live shadow usage; defect burn-down; reconciliation; management demo; next-quarter plan.','Go/no-go for controlled POS cut-over.']
];

const governance = [
  ['Daily','Engineering stand-up','Engineering leads','Blockers, defects and environment issues.'],
  ['Weekly','Architecture / vendor / risk review','Tech Lead + PO + DevOps + module leads','RAID, ADRs, dependency plan, burn vs plan.'],
  ['Bi-weekly','Sprint review + UAT + planning','Business owners + engineering','Accepted increments and next-sprint commitment.'],
  ['Monthly','Steering committee','GMO/CEO/CFO/Tech Lead/Product','Budget, timeline, scope and risk decisions.'],
  ['Quarterly','Phase gate / budget release','Steering committee','Acceptance gate, next-quarter budget and hiring/vendor decisions.']
];

const risks = [
  ['Hiring delay','High','Pushes the critical path because JK Tech starts with no engineering bench.','Start Phase-2/3 hiring during Phase 0–1; use approved specialist bridge contracts.'],
  ['Dirty Odoo / Excel data','High','Rework, reconciliation failure and rollout delay.','Profile data in M1–2; stage migration; physical stock count before outlet cut-over.'],
  ['Clinical workflow churn','High','EMR / Care Plan rework.','Embed clinical SME; prototype workflows early; sign acceptance criteria before build.'],
  ['Odoo over-customization','Medium / High','Upgrade lock-in and vendor dependency.','Keep custom domains outside Odoo; API boundary; upgrade integration tests.'],
  ['Cloud / media / AI usage spike','Medium','Run-cost exceeds the approved envelope.','Compression/lifecycle, caching/batching, quotas and monthly unit-cost dashboard.'],
  ['Vendor / API availability','Medium','Can block Sinbad, wearable or AI features.','Use adapter interfaces, manual fallback and defer unverified integrations.'],
  ['Scope expansion','High','Budget and timeline drift.','Definition of Done + change control; contingency is not a scope-slush fund.'],
  ['Security / compliance defect','High','Go-live delay and business risk.','Security by design, field encryption, read-audit for health data and VAPT gates.']
];

function renderStack() {
  document.querySelector('#stack-grid').innerHTML = stack.map(x => `
    <article class="stack-card reveal">
      <span>${x.layer}</span><h3>${x.choice}</h3><p>${x.why}</p>
    </article>`).join('');
}

function renderBudget() {
  document.querySelector('#budget-list').innerHTML = budget.map(x => `
    <div class="budget-row reveal">
      <span class="budget-dot" style="background:${x.color}"></span>
      <strong>${x.name}</strong><span class="amount">BDT ${x.value.toFixed(1)}M</span>
      <small>${x.note}</small>
    </div>`).join('');
  const max = Math.max(...quarters.map(q => q[1]));
  document.querySelector('#quarter-bars').innerHTML = quarters.map(([label,value]) => `
    <div class="q-row reveal">
      <span class="q-label">${label}</span>
      <div class="q-track"><div class="q-bar" style="width:${(value/max)*100}%"></div></div>
      <span class="q-value">${value.toFixed(2)}M</span>
    </div>`).join('');
}

function renderTeam() {
  document.querySelector('#team-grid').innerHTML = team.map(x => `
    <article class="team-card reveal">
      <span class="mode">${x[1]}</span>
      <h3>${x[0]}</h3><p>${x[3]}</p><strong>${x[2]}</strong>
    </article>`).join('');
}

function renderWorkstreams() {
  document.querySelector('#workstream-grid').innerHTML = workstreams.map(x => `
    <article class="workstream-card reveal">
      <div class="workstream-window"><span>Active window</span><strong>${x[1]}</strong></div>
      <div><h3>${x[0]}</h3><p>${x[2]}</p><small>Critical dependency: ${x[3]}</small></div>
    </article>`).join('');
}

function renderRoadmap(year=1) {
  const items = roadmap.filter(x => year === 1 ? x.m <= 12 : x.m >= 13);
  document.querySelector('#roadmap-list').innerHTML = items.map(x => `
    <article class="month-card reveal">
      <span class="month">MONTH ${x.m}</span>
      <h3>${x.focus}</h3><p>${x.deliver}</p>
      <div class="month-gate"><span>Acceptance / UAT gate</span><strong>${x.gate}</strong></div>
    </article>`).join('');
  initReveal();
}

function renderFirst90() {
  document.querySelector('#first90-grid').innerHTML = first90.map(x => `
    <article class="week-card reveal">
      <span class="week">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p><small>${x[3]}</small>
    </article>`).join('');
}

function renderGovernance() {
  document.querySelector('#governance-grid').innerHTML = governance.map(x => `
    <article class="gov-card reveal">
      <span>${x[0]}</span><h3>${x[1]}</h3><p><strong>${x[2]}</strong><br>${x[3]}</p>
    </article>`).join('');
}

function renderRisks() {
  document.querySelector('#risk-grid').innerHTML = risks.map(x => `
    <article class="risk-card reveal">
      <div class="risk-head"><h3>${x[0]}</h3><span class="risk-badge">${x[1]}</span></div>
      <p>${x[2]}</p><small>Control: ${x[3]}</small>
    </article>`).join('');
}

function initTabs() {
  document.querySelectorAll('.roadmap-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.roadmap-tab').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active'); btn.setAttribute('aria-selected','true');
      renderRoadmap(Number(btn.dataset.year));
    });
  });
}

function initProgress() {
  const bar = document.querySelector('#scroll-progress');
  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    bar.style.width = `${max > 0 ? (doc.scrollTop/max)*100 : 0}%`;
  };
  document.addEventListener('scroll', update, {passive:true});
  update();
}

function initActiveNav() {
  const links = [...document.querySelectorAll('.desktop-nav a')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(x => x.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${visible.target.id}`));
  }, {rootMargin:'-30% 0px -55% 0px', threshold:[0,.1,.5]});
  sections.forEach(s => observer.observe(s));
}

let revealObserver;
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObserver.unobserve(e.target);
        }
      });
    }, {threshold:.08});
  }
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

renderStack();
renderBudget();
renderTeam();
renderWorkstreams();
renderRoadmap(1);
renderFirst90();
renderGovernance();
renderRisks();
initTabs();
initProgress();
initActiveNav();
initReveal();
