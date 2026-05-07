/* ==========================================================================
   VamiSec Compliance Module — Landing Page Scripts
   ========================================================================== */

/* ── Translations ───────────────────────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    'nav-product':'Product','nav-frameworks':'Frameworks','nav-trust':'Trust',
    'nav-usecases':'Use Cases','nav-signin':'Sign in',
    'hero-heading':'From controls<br />to audit evidence.<br /><span class="highlight">Continuously.</span>',
    'hero-sub':'A structured compliance workflow platform for regulated organizations. Map frameworks, document control responses, collect evidence, track remediation, and produce audit-ready exports — from a single, sovereign system of record.',
    'hero-cta':'Explore the module',
    'hero-proof-1':'12+ frameworks supported','hero-proof-2':'EU / German sovereign hosting',
    'hero-proof-3':'Immutable audit trail','hero-proof-4':'OSCAL-aligned data model',
    'stats-label-1':'Compliance frameworks','stats-label-2':'Evidence traceable',
    'stats-label-3':'Time to first assessment','stats-label-4':'Sovereign infrastructure',
    'problem-eyebrow':'The compliance gap',
    'problem-heading':'Most compliance programs run on spreadsheets and good intentions.',
    'problem-sub':'Regulated organizations spend more time managing documents than managing actual compliance. The result: evidence is scattered, ownership is unclear, and every audit cycle starts from scratch.',
    'problem-1-title':'Static spreadsheets, dynamic regulations',
    'problem-1-desc':'Compliance registers built in Excel break the moment a new regulation drops or a control changes. There is no live link between policy and evidence.',
    'problem-2-title':'Evidence buried in shared drives',
    'problem-2-desc':'Screenshots, logs, scan outputs, and policy documents live in ten different folders, owned by different teams, with no structured link to the control they support.',
    'problem-3-title':'Manual, error-prone control mapping',
    'problem-3-desc':'ISO 27001, NIS2, DORA, and GDPR share overlapping controls. Without a structured crosswalk, teams duplicate work and miss critical gaps between frameworks.',
    'problem-4-title':'Remediation without accountability',
    'problem-4-desc':'Audit findings get noted, action items get assigned — then lost. Without tracked ownership and deadlines, the same gaps resurface in the next assessment cycle.',
    'problem-5-title':'No single owner, no single view',
    'problem-5-desc':'The CISO sees risk. The Compliance Officer sees frameworks. The Security Engineer sees controls. No one sees all three together with a clear compliance posture.',
    'problem-6-title':'Audit pressure every single cycle',
    'problem-6-desc':'Certification audits, regulatory inspections, and board reporting demand structured, timestamped evidence. Assembling it under pressure, each time, is a structural failure.',
    'problem-7-title':'Changing regulations, fixed workflows',
    'problem-7-desc':'DORA, NIS2, EU AI Act, and CRA all introduce new obligations on overlapping timelines. Static compliance programs cannot absorb new requirements without being rebuilt.',
    'product-eyebrow':'VamiAudit',
    'product-heading':'A compliance operating system for regulated organizations.',
    'product-sub':'Not a document management tool. Not a GRC spreadsheet in a web browser. A structured, OSCAL-aligned compliance workflow engine — built for the specific demands of EU-regulated industries.',
    'feat-1-tag':'Core','feat-1-title':'Structured Control Mapping',
    'feat-1-desc':'Map your security and privacy controls to any supported framework — from ISO 27001 to DORA to EU AI Act. Each control carries implementation status, owner, statement text, and linked evidence. When a regulation updates, you update the mapping once.',
    'feat-1-li-1':'OSCAL-compatible System Security Plans (SSPs)',
    'feat-1-li-2':'Per-control implementation status tracking',
    'feat-1-li-3':'Cross-framework control inheritance and overlap detection',
    'feat-1-li-4':'Control statement versioning',
    'feat-2-tag':'Evidence','feat-2-title':'Evidence Management',
    'feat-2-desc':'Attach documents, screenshots, logs, tool outputs, and interview notes directly to control assessments. Every evidence item is timestamped and linked to the observation that captured it.',
    'feat-2-li-1':'EXAMINE / INTERVIEW / TEST method classification',
    'feat-2-li-2':'File upload from workspace or external URL reference',
    'feat-2-li-3':'Evidence type labeling (document, log, screenshot, tool output)',
    'feat-3-tag':'Risk','feat-3-title':'Risk Register',
    'feat-3-desc':'Maintain a structured inventory of risks linked to the controls, systems, and findings that surface them. Not-satisfied assessment findings automatically become risk candidates.',
    'feat-3-li-1':'Risk classification and scoring',
    'feat-3-li-2':'Control-to-risk traceability',
    'feat-3-li-3':'Treatment tracking and residual risk capture',
    'feat-4-tag':'Assessment','feat-4-title':'Audit-Ready Assessments',
    'feat-4-desc':'Plan and execute internal audits, external assessments, and third-party evaluations. Define scope per-control, record findings and observations, attach evidence, and produce a complete assessment record.',
    'feat-4-li-1':'Scoped control selection per assessment',
    'feat-4-li-2':'Findings: satisfied / not-satisfied / N/A',
    'feat-4-li-3':'OSCAL Assessment Results-aligned export',
    'feat-5-tag':'CAPA','feat-5-title':'Remediation Tracking',
    'feat-5-desc':'Convert not-satisfied findings into owned, time-bound corrective actions. Track status from identification through resolution, with evidence of closure captured at each step.',
    'feat-5-li-1':'Owner assignment and deadline tracking',
    'feat-5-li-2':'Finding-to-action traceability',
    'feat-5-li-3':'Re-assessment support',
    'feat-6-tag':'Crosswalk','feat-6-title':'Framework Crosswalks',
    'feat-6-desc':'Map overlapping obligations across frameworks without duplicating work. ISO 27001 controls shared with NIS2, DORA, and GDPR are implemented once and referenced everywhere. Add a new framework to an existing program and the common controls carry over automatically.',
    'feat-6-li-1':'Framework-to-framework control overlap mapping',
    'feat-6-li-2':'Shared implementation reuse across programs',
    'feat-6-li-3':'Gap identification for new framework adoption',
    'feat-6-li-4':'Applicability statements per framework scope',
    'feat-7-tag':'Documentation','feat-7-title':'Policy &amp; Control Documentation',
    'feat-7-desc':'Maintain structured control statements, policy references, and implementation documentation. AI-assisted drafting extracts compliance controls directly from uploaded policy documents.',
    'feat-7-li-1':'Document workspace with type classification',
    'feat-7-li-2':'AI-assisted control extraction',
    'feat-7-li-3':'Policy-to-control linkage',
    'feat-8-tag':'Reporting','feat-8-title':'Executive &amp; Audit Reporting',
    'feat-8-desc':'Export structured compliance posture reports for boards, regulators, and certification bodies. Every export is backed by traceable evidence — not manually assembled summaries.',
    'feat-8-li-1':'OSCAL JSON export (Assessment Results)',
    'feat-8-li-2':'Compliance posture dashboards',
    'feat-8-li-3':'Regulator-ready audit packages',
    'how-eyebrow':'Workflow',
    'how-heading':'Compliance as a continuous practice, not a point-in-time event.',
    'how-sub':'VamiAudit structures the entire lifecycle — from initial control mapping through live assessments, to audit-ready exports and closed remediation loops.',
    'step-1-title':'Ingest your compliance inputs',
    'step-1-desc':'Upload your existing policy documents, procedure manuals, technical standards, and architecture descriptions. The AI-assisted extraction layer identifies control responses, maps them to applicable framework controls, and proposes initial implementation statements for review.',
    'step-1-tag-1':'Document workspace','step-1-tag-2':'AI extraction','step-1-tag-3':'Control mapping',
    'step-2-title':'Map controls to applicable frameworks',
    'step-2-desc':'Attach your system (the technical environment) and compliance programs (the framework obligations). Define which controls are in scope per program. Implementations are shared across frameworks — write a control response once, reference it in ISO 27001, NIS2, and DORA simultaneously.',
    'step-2-tag-1':'System Security Plan','step-2-tag-2':'Framework applicability','step-2-tag-3':'Crosswalk',
    'step-3-title':'Collect evidence and run assessments',
    'step-3-desc':'Plan and execute internal audits or third-party assessments. Select the controls in scope for each assessment, record findings per control (satisfied / not-satisfied), attach observations classified by method (EXAMINE, INTERVIEW, TEST), and link evidence artifacts directly from the file workspace or by URL.',
    'step-3-tag-1':'Assessment scope','step-3-tag-2':'Findings','step-3-tag-3':'Observations','step-3-tag-4':'Evidence',
    'step-4-title':'Track owners and close findings',
    'step-4-desc':'Convert not-satisfied findings into corrective action items with assigned owners, deadlines, and resolution evidence. The risk register captures findings that represent ongoing organizational risks. Nothing is lost between assessment cycles.',
    'step-4-tag-1':'CAPA / action items','step-4-tag-2':'Risk register','step-4-tag-3':'Owner assignment',
    'step-5-title':'Export audit-ready packages',
    'step-5-desc':'Produce structured exports for regulators, external auditors, and internal boards. Every output is backed by the full evidence graph — traceable from the export line item to the specific artifact, observation, assessment, control, and system that produced it.',
    'step-5-tag-1':'OSCAL JSON export','step-5-tag-2':'Compliance posture report','step-5-tag-3':'Audit package','step-5-tag-4':'Executive dashboard',
    'fw-eyebrow':'Framework coverage',
    'fw-heading':'Built for the EU regulatory landscape — and beyond.',
    'fw-sub':'VamiAudit ships with structured support for the frameworks that matter most to regulated European organizations. Coverage is defined as: control mapping, crosswalk references, and evidence structure — not as certification attestation.',
    'fw-dora-label':'EU Financial','fw-dora-desc':'Digital Operational Resilience Act — ICT risk, incident reporting, third-party oversight',
    'fw-nis2-label':'EU Cybersecurity','fw-nis2-desc':'Network and Information Security Directive 2 — essential and important entities',
    'fw-gdpr-label':'EU Privacy','fw-gdpr-desc':'General Data Protection Regulation — data processing, rights, DPIA, and security measures',
    'fw-euai-label':'EU AI Regulation','fw-euai-desc':'Risk classification, transparency, and technical documentation obligations for AI deployers and providers',
    'fw-cra-label':'EU Product Security','fw-cra-desc':'Cyber Resilience Act — security-by-design requirements for products with digital elements',
    'fw-mdr-label':'EU Medical Devices','fw-mdr-desc':'Medical Device Regulation — cybersecurity requirements for medical device software and connected devices',
    'fw-27001-label':'ISO · Information Security','fw-27001-desc':'Information Security Management System — Annex A control objectives and certification framework',
    'fw-27002-label':'ISO · Security Controls','fw-27002-desc':'Information security controls — implementation guidance for ISO 27001 Annex A controls',
    'fw-27017-label':'ISO · Cloud Security','fw-27017-desc':'Code of practice for information security controls for cloud services — cloud provider and customer controls',
    'fw-21434-label':'ISO · Automotive','fw-21434-desc':'Road vehicles cybersecurity engineering — risk management for automotive systems throughout the lifecycle',
    'fw-62443-label':'ISO · OT / ICS Security','fw-62443-desc':'Industrial automation and control systems security — security levels and zone/conduit model for OT environments',
    'fw-badge-mapped':'Mapped','fw-badge-progress':'In progress',
    'fw-disclaimer':'"Mapped" indicates structured control alignment and evidence scaffolding. Coverage does not constitute certification, regulatory attestation, or legal compliance assurance. Always consult qualified legal counsel for regulatory interpretation.',
    'ev-eyebrow':'Evidence graph',
    'ev-heading':'One record connects every compliance data point.',
    'ev-sub':'The evidence graph links every control, risk, finding, owner, policy reference, and remediation step into a single queryable structure. Nothing is assembled manually at audit time — it is already there.',
    'ev-1-title':'Every control is structured and versioned',
    'ev-1-desc':'Control statements carry implementation status, history, and framework cross-references. Changing a response updates the record — it never replaces it.',
    'ev-2-title':'Every evidence item is timestamped and typed',
    'ev-2-desc':'Documents, screenshots, log exports, and interview records carry collection timestamp, method (EXAMINE / INTERVIEW / TEST), and a direct link to the observation that captured them.',
    'ev-3-title':'Every risk and finding has a traceable owner',
    'ev-3-desc':'From the risk record to the control gap that produced it, to the corrective action assigned to resolve it — ownership and accountability are built into the data model.',
    'ev-4-title':'Every export is backed by live data',
    'ev-4-desc':'There is no "manual export preparation." Audit packages are generated from the live record. An OSCAL Assessment Results export reflects the data exactly as it was entered, with no intermediate assembly step.',
    'sov-eyebrow':'Sovereignty &amp; Trust',
    'sov-heading':'Designed for regulated European infrastructure.',
    'sov-p1':'Compliance data is among the most sensitive an organization holds. VamiAudit is built on infrastructure and architecture principles that align with the sovereignty expectations of EU-regulated industries.',
    'sov-p2':'This is not a US SaaS platform marketed into Europe. It is a platform designed from the outset for the European regulatory environment.',
    'pillar-1-title':'EU / DE Hosting','pillar-1-desc':'Hosted on EU infrastructure with German data center options. Data residency is contractually defined and verifiable.',
    'pillar-2-title':'Sovereign Deployment','pillar-2-desc':'Available as an on-premises or private cloud deployment for organizations with strict data localisation requirements.',
    'pillar-3-title':'Immutable Audit Trail','pillar-3-desc':'Every data change is logged with actor, timestamp, and delta. Audit trails cannot be retroactively modified by users or administrators.',
    'pillar-4-title':'Role-Based Access Control','pillar-4-desc':'Fine-grained RBAC ensures that CISO, compliance officer, auditor, and system owner roles see only what they are authorized to access.',
    'pillar-5-title':'Encryption at Rest &amp; in Transit','pillar-5-desc':'AES-256 encryption at rest. TLS 1.3 for all data in transit. BYOK and HSM integration available for enterprise deployments.',
    'pillar-6-title':'No Unnecessary Third-Country Transfer','pillar-6-desc':'Processing is architected to avoid transfers of compliance data outside the EU/EEA by default. SCCs and transfer impact assessments available where applicable.',
    'pillar-7-title':'GDPR-Conscious Architecture','pillar-7-desc':'Data minimisation by design. No telemetry that exfiltrates compliance content. DPA available. Sub-processor list maintained and disclosed.',
    'pillar-8-title':'BYOK / HSM Option','pillar-8-desc':'Bring your own encryption key or integrate with a Hardware Security Module for organizations that require cryptographic key sovereignty.',
    'uc-eyebrow':'Use cases',
    'uc-heading':'Built for the compliance challenges your organization faces today.',
    'uc-sub':'Not a generic GRC platform. A purpose-built compliance workflow engine for the specific obligations of regulated European industries.',
    'uc-1-fw':'DORA · Financial','uc-1-title':'ICT resilience evidence for DORA',
    'uc-1-desc':'Map DORA Chapter II ICT risk management controls to your systems, collect evidence of testing and incident response procedures, and prepare structured reports for your competent authority.',
    'uc-2-fw':'NIS2 · Essential entities','uc-2-title':'NIS2 management reporting',
    'uc-2-desc':'Produce structured security measure documentation for Article 21 obligations. Demonstrate technical and organizational measures to national competent authorities with timestamped evidence.',
    'uc-3-fw':'EU AI Act · Deployers','uc-3-title':'EU AI Act documentation',
    'uc-3-desc':'Maintain Article 9 risk management documentation, Annex IV technical files, and post-market monitoring records for high-risk AI systems — structured, current, and audit-ready.',
    'uc-4-fw':'ISO 27001 · ISMS','uc-4-title':'ISO 27001 control tracking',
    'uc-4-desc':'Maintain a live Statement of Applicability with implementation status per Annex A control. Run internal audits, record findings, and close corrective actions in a single workflow.',
    'uc-5-fw':'Third-party risk','uc-5-title':'Supplier security assessment evidence',
    'uc-5-desc':'Conduct structured supplier assessments mapped to your TPRM framework. Record findings, observations, and evidence per supplier per assessment cycle. Supports DORA Article 28 ICT third-party risk obligations.',
    'uc-6-fw':'Internal audit','uc-6-title':'Internal audit preparation',
    'uc-6-desc':'Plan internal audits with defined scope, record EXAMINE / INTERVIEW / TEST observations, and produce a complete assessment record ready for an external auditor to verify — without any manual assembly.',
    'uc-7-fw':'Remediation · CAPA','uc-7-title':'Remediation oversight',
    'uc-7-desc':'Turn not-satisfied audit findings into tracked corrective actions with owners, deadlines, and evidence of closure. Show auditors a complete remediation chain — from finding to resolved risk.',
    'cta-eyebrow':'Get started',
    'cta-heading':'Your next audit cycle is <span class="highlight">already in progress.</span>',
    'cta-sub':'Talk to the VamiSec team about how VamiAudit fits your regulatory environment, your infrastructure requirements, and your existing compliance workflows.',
    'cta-micro-1':'No commitment required','cta-micro-2':'EU infrastructure',
    'cta-micro-3':'GDPR-ready DPA provided','cta-micro-4':'On-premises deployment available',
    'footer-tagline':'Structured compliance workflows for regulated organizations. From controls to audit evidence — continuously.',
    'footer-product-title':'Product','footer-fw-title':'Frameworks','footer-company-title':'Company',
    'footer-product-1':'Control Mapping','footer-product-2':'Evidence Management',
    'footer-product-3':'Risk Register','footer-product-4':'Assessments','footer-product-5':'Reporting',
    'footer-company-1':'About VamiSec','footer-company-2':'Security',
    'footer-company-3':'Privacy Policy','footer-company-4':'Terms of Service',
    'footer-company-5':'Imprint','footer-company-6':'Contact',
    'footer-copy':'&copy; 2025 VamiSec. All rights reserved. Registered in the European Union.',
    'footer-privacy':'Privacy','footer-terms':'Terms','footer-imprint':'Imprint',
  },
  de: {
    'nav-product':'Produkt','nav-frameworks':'Frameworks','nav-trust':'Vertrauen',
    'nav-usecases':'Anwendungsfälle','nav-signin':'Anmelden',
    'hero-heading':'Von Controls<br />zu Audit-Nachweisen.<br /><span class="highlight">Kontinuierlich.</span>',
    'hero-sub':'Eine strukturierte Compliance-Workflow-Plattform für regulierte Organisationen. Frameworks zuordnen, Kontrollantworten dokumentieren, Nachweise sammeln, Remediation verfolgen und prüffertige Exporte erstellen – aus einem einzigen, souveränen System.',
    'hero-cta':'Modul erkunden',
    'hero-proof-1':'12+ unterstützte Frameworks','hero-proof-2':'EU / deutsches souveränes Hosting',
    'hero-proof-3':'Unveränderliches Audit-Trail','hero-proof-4':'OSCAL-ausgerichtetes Datenmodell',
    'stats-label-1':'Compliance-Frameworks','stats-label-2':'Nachweise zurückverfolgbar',
    'stats-label-3':'Zeit bis zur ersten Prüfung','stats-label-4':'Souveräne Infrastruktur',
    'problem-eyebrow':'Die Compliance-Lücke',
    'problem-heading':'Die meisten Compliance-Programme laufen auf Tabellenkalkulationen und guten Vorsätzen.',
    'problem-sub':'Regulierte Organisationen verbringen mehr Zeit mit der Verwaltung von Dokumenten als mit dem eigentlichen Compliance-Management. Das Ergebnis: Nachweise sind verstreut, Verantwortlichkeiten unklar, und jeder Prüfzyklus beginnt von vorn.',
    'problem-1-title':'Statische Tabellen, dynamische Vorschriften',
    'problem-1-desc':'In Excel aufgebaute Compliance-Register brechen zusammen, sobald eine neue Verordnung in Kraft tritt oder ein Control sich ändert. Es gibt keine lebendige Verbindung zwischen Richtlinie und Nachweis.',
    'problem-2-title':'Nachweise in gemeinsamen Laufwerken vergraben',
    'problem-2-desc':'Screenshots, Logs, Scan-Ausgaben und Richtliniendokumente liegen in zehn verschiedenen Ordnern, die verschiedenen Teams gehören – ohne strukturierten Bezug zum Control, das sie belegen.',
    'problem-3-title':'Manuelle, fehleranfällige Control-Zuordnung',
    'problem-3-desc':'ISO 27001, NIS2, DORA und DSGVO teilen überlappende Controls. Ohne einen strukturierten Crosswalk duplizieren Teams Arbeit und übersehen kritische Lücken zwischen den Frameworks.',
    'problem-4-title':'Remediation ohne Verantwortlichkeit',
    'problem-4-desc':'Audit-Findings werden notiert, Aufgaben werden zugewiesen – und dann vergessen. Ohne nachverfolgbare Eigentümerschaft und Fristen tauchen dieselben Lücken im nächsten Prüfzyklus wieder auf.',
    'problem-5-title':'Kein einziger Verantwortlicher, keine einheitliche Sicht',
    'problem-5-desc':'Der CISO sieht Risiken. Der Compliance-Beauftragte sieht Frameworks. Der Security Engineer sieht Controls. Niemand sieht alle drei zusammen mit einer klaren Compliance-Gesamtlage.',
    'problem-6-title':'Prüfungsdruck in jedem Zyklus',
    'problem-6-desc':'Zertifizierungsaudits, regulatorische Prüfungen und Vorstandsberichte verlangen strukturierte, zeitgestempelte Nachweise. Diese jedes Mal unter Druck zusammenzustellen, ist ein strukturelles Versagen.',
    'problem-7-title':'Sich ändernde Vorschriften, starre Workflows',
    'problem-7-desc':'DORA, NIS2, EU AI Act und CRA führen alle neue Verpflichtungen mit überlappenden Zeitplänen ein. Statische Compliance-Programme können neue Anforderungen nicht aufnehmen, ohne komplett neu aufgebaut zu werden.',
    'product-eyebrow':'VamiAudit',
    'product-heading':'Ein Compliance-Betriebssystem für regulierte Organisationen.',
    'product-sub':'Kein Dokumentenverwaltungs-Tool. Keine GRC-Tabellenkalkulation im Browser. Eine strukturierte, OSCAL-ausgerichtete Compliance-Workflow-Engine – entwickelt für die spezifischen Anforderungen EU-regulierter Branchen.',
    'feat-1-tag':'Kern','feat-1-title':'Strukturierte Control-Zuordnung',
    'feat-1-desc':'Ordnen Sie Ihre Sicherheits- und Datenschutz-Controls jedem unterstützten Framework zu – von ISO 27001 bis DORA bis EU AI Act. Jedes Control enthält Umsetzungsstatus, Eigentümer, Formulierungstext und verknüpfte Nachweise. Wenn eine Verordnung aktualisiert wird, passen Sie die Zuordnung einmal an.',
    'feat-1-li-1':'OSCAL-kompatible System Security Plans (SSPs)',
    'feat-1-li-2':'Control-basierte Umsetzungsstatusverfolgung',
    'feat-1-li-3':'Framework-übergreifende Control-Vererbung und Überschneidungserkennung',
    'feat-1-li-4':'Versionierung von Control-Aussagen',
    'feat-2-tag':'Nachweise','feat-2-title':'Nachweisverwaltung',
    'feat-2-desc':'Fügen Sie Dokumente, Screenshots, Logs, Tool-Ausgaben und Interview-Notizen direkt zu Control-Assessments hinzu. Jeder Nachweis ist zeitgestempelt und mit der Beobachtung verknüpft, die ihn erfasst hat.',
    'feat-2-li-1':'EXAMINE / INTERVIEW / TEST Methodenklassifikation',
    'feat-2-li-2':'Datei-Upload aus dem Workspace oder externer URL-Verweis',
    'feat-2-li-3':'Nachweis-Typbeschriftung (Dokument, Log, Screenshot, Tool-Ausgabe)',
    'feat-3-tag':'Risiko','feat-3-title':'Risikoregister',
    'feat-3-desc':'Pflegen Sie ein strukturiertes Inventar der Risiken, die mit den Controls, Systemen und Findings verknüpft sind, die sie aufdecken. Nicht-erfüllte Assessment-Findings werden automatisch zu Risikokandidaten.',
    'feat-3-li-1':'Risikoklassifikation und -bewertung',
    'feat-3-li-2':'Rückverfolgbarkeit von Control zu Risiko',
    'feat-3-li-3':'Behandlungsverfolgung und Restrisikodokumentation',
    'feat-4-tag':'Assessment','feat-4-title':'Prüffertige Assessments',
    'feat-4-desc':'Planen und führen Sie interne Audits, externe Assessments und Drittanbieter-Evaluierungen durch. Definieren Sie den Scope pro Control, erfassen Sie Findings und Beobachtungen, fügen Sie Nachweise hinzu und erstellen Sie einen vollständigen Assessment-Bericht.',
    'feat-4-li-1':'Scope-basierte Control-Auswahl pro Assessment',
    'feat-4-li-2':'Findings: erfüllt / nicht erfüllt / Nicht anwendbar',
    'feat-4-li-3':'OSCAL Assessment Results-konformer Export',
    'feat-5-tag':'CAPA','feat-5-title':'Remediation-Verfolgung',
    'feat-5-desc':'Wandeln Sie nicht-erfüllte Findings in eigenverantwortliche, zeitgebundene Korrekturmaßnahmen um. Verfolgen Sie den Status von der Identifizierung bis zur Lösung, mit Nachweisen der Schließung bei jedem Schritt.',
    'feat-5-li-1':'Eigentümer-Zuweisung und Fristenverfolgung',
    'feat-5-li-2':'Rückverfolgbarkeit von Finding zu Maßnahme',
    'feat-5-li-3':'Unterstützung für Neu-Assessments',
    'feat-6-tag':'Crosswalk','feat-6-title':'Framework-Crosswalks',
    'feat-6-desc':'Ordnen Sie überlappende Verpflichtungen über Frameworks hinweg zu, ohne Arbeit zu duplizieren. ISO 27001-Controls, die mit NIS2, DORA und DSGVO geteilt werden, werden einmal implementiert und überall referenziert. Fügen Sie ein neues Framework zu einem bestehenden Programm hinzu – gemeinsame Controls werden automatisch übernommen.',
    'feat-6-li-1':'Framework-zu-Framework Control-Überschneidungszuordnung',
    'feat-6-li-2':'Wiederverwendung gemeinsamer Implementierungen über Programme hinweg',
    'feat-6-li-3':'Lückenidentifikation bei der Einführung neuer Frameworks',
    'feat-6-li-4':'Anwendbarkeitserklärungen pro Framework-Scope',
    'feat-7-tag':'Dokumentation','feat-7-title':'Richtlinien- &amp; Control-Dokumentation',
    'feat-7-desc':'Pflegen Sie strukturierte Control-Aussagen, Richtlinienverweise und Implementierungsdokumentation. KI-gestütztes Verfassen extrahiert Compliance-Controls direkt aus hochgeladenen Richtliniendokumenten.',
    'feat-7-li-1':'Dokument-Workspace mit Typklassifikation',
    'feat-7-li-2':'KI-gestützte Control-Extraktion',
    'feat-7-li-3':'Richtlinien-zu-Control-Verknüpfung',
    'feat-8-tag':'Reporting','feat-8-title':'Vorstands- &amp; Audit-Reporting',
    'feat-8-desc':'Exportieren Sie strukturierte Compliance-Lageberichte für Vorstände, Regulatoren und Zertifizierungsstellen. Jeder Export ist durch rückverfolgbare Nachweise untermauert – keine manuell zusammengestellten Zusammenfassungen.',
    'feat-8-li-1':'OSCAL JSON-Export (Assessment Results)',
    'feat-8-li-2':'Compliance-Lage-Dashboards',
    'feat-8-li-3':'Regulatoren-fertige Audit-Pakete',
    'how-eyebrow':'Workflow',
    'how-heading':'Compliance als kontinuierliche Praxis, nicht als einmaliges Ereignis.',
    'how-sub':'VamiAudit strukturiert den gesamten Lebenszyklus – von der ersten Control-Zuordnung über laufende Assessments bis zu prüffertigen Exporten und geschlossenen Remediation-Schleifen.',
    'step-1-title':'Compliance-Eingaben erfassen',
    'step-1-desc':'Laden Sie bestehende Richtliniendokumente, Verfahrenshandbücher, technische Standards und Architekturbeschreibungen hoch. Die KI-gestützte Extraktionsschicht identifiziert Control-Antworten, ordnet sie den anwendbaren Framework-Controls zu und schlägt initiale Implementierungsaussagen zur Überprüfung vor.',
    'step-1-tag-1':'Dokument-Workspace','step-1-tag-2':'KI-Extraktion','step-1-tag-3':'Control-Zuordnung',
    'step-2-title':'Controls den anwendbaren Frameworks zuordnen',
    'step-2-desc':'Verbinden Sie Ihr System (die technische Umgebung) und die Compliance-Programme (die Framework-Verpflichtungen). Definieren Sie, welche Controls pro Programm im Scope sind. Implementierungen werden über Frameworks hinweg geteilt – eine Control-Antwort schreiben, gleichzeitig in ISO 27001, NIS2 und DORA referenzieren.',
    'step-2-tag-1':'System Security Plan','step-2-tag-2':'Framework-Anwendbarkeit','step-2-tag-3':'Crosswalk',
    'step-3-title':'Nachweise sammeln und Assessments durchführen',
    'step-3-desc':'Planen und führen Sie interne Audits oder Drittanbieter-Assessments durch. Wählen Sie die Controls im Scope für jedes Assessment, erfassen Sie Findings pro Control (erfüllt / nicht erfüllt), fügen Sie Beobachtungen nach Methode klassifiziert hinzu (EXAMINE, INTERVIEW, TEST) und verknüpfen Sie Nachweisartefakte direkt aus dem Datei-Workspace oder per URL.',
    'step-3-tag-1':'Assessment-Scope','step-3-tag-2':'Findings','step-3-tag-3':'Beobachtungen','step-3-tag-4':'Nachweise',
    'step-4-title':'Eigentümer verfolgen und Findings schließen',
    'step-4-desc':'Wandeln Sie nicht-erfüllte Findings in Korrekturmaßnahmen mit zugewiesenen Eigentümern, Fristen und Lösungsnachweisen um. Das Risikoregister erfasst Findings, die fortlaufende organisatorische Risiken darstellen. Zwischen den Prüfzyklen geht nichts verloren.',
    'step-4-tag-1':'CAPA / Maßnahmen','step-4-tag-2':'Risikoregister','step-4-tag-3':'Eigentümer-Zuweisung',
    'step-5-title':'Prüffertige Pakete exportieren',
    'step-5-desc':'Erstellen Sie strukturierte Exporte für Regulatoren, externe Prüfer und interne Vorstände. Jede Ausgabe ist durch den vollständigen Nachweis-Graph untermauert – rückverfolgbar vom Export-Posten bis zum spezifischen Artefakt, zur Beobachtung, zum Assessment, zum Control und zum System, das es erstellt hat.',
    'step-5-tag-1':'OSCAL JSON-Export','step-5-tag-2':'Compliance-Lagebericht','step-5-tag-3':'Audit-Paket','step-5-tag-4':'Vorstands-Dashboard',
    'fw-eyebrow':'Framework-Abdeckung',
    'fw-heading':'Entwickelt für die EU-regulatorische Landschaft – und darüber hinaus.',
    'fw-sub':'VamiAudit wird mit strukturierter Unterstützung für die Frameworks ausgeliefert, die für regulierte europäische Organisationen am wichtigsten sind. Abdeckung ist definiert als: Control-Zuordnung, Crosswalk-Referenzen und Nachweisstruktur – nicht als Zertifizierungsbestätigung.',
    'fw-dora-label':'EU Finanzwesen','fw-dora-desc':'Digital Operational Resilience Act — IKT-Risiko, Vorfallmeldung, Drittanbieter-Aufsicht',
    'fw-nis2-label':'EU Cybersicherheit','fw-nis2-desc':'Netz- und Informationssicherheitsrichtlinie 2 — wesentliche und wichtige Einrichtungen',
    'fw-gdpr-label':'EU Datenschutz','fw-gdpr-desc':'Datenschutz-Grundverordnung — Datenverarbeitung, Rechte, DSFA und Sicherheitsmaßnahmen',
    'fw-euai-label':'EU KI-Verordnung','fw-euai-desc':'Risikoklassifikation, Transparenz und technische Dokumentationspflichten für KI-Betreiber und -Anbieter',
    'fw-cra-label':'EU Produktsicherheit','fw-cra-desc':'Cyber Resilience Act — Security-by-Design-Anforderungen für Produkte mit digitalen Elementen',
    'fw-mdr-label':'EU Medizinprodukte','fw-mdr-desc':'Medizinprodukteverordnung — Cybersicherheitsanforderungen für Medizinprodukt-Software und vernetzte Geräte',
    'fw-27001-label':'ISO · Informationssicherheit','fw-27001-desc':'Informationssicherheitsmanagementsystem — Annex A Kontrollziele und Zertifizierungsrahmen',
    'fw-27002-label':'ISO · Sicherheitskontrollen','fw-27002-desc':'Informationssicherheitsmaßnahmen — Implementierungsleitfaden für ISO 27001 Annex A Controls',
    'fw-27017-label':'ISO · Cloud-Sicherheit','fw-27017-desc':'Verhaltenskodex für Informationssicherheitsmaßnahmen für Cloud-Dienste — Cloud-Anbieter- und Kundenkontrollen',
    'fw-21434-label':'ISO · Automotive','fw-21434-desc':'Cybersicherheitstechnik für Straßenfahrzeuge — Risikomanagement für Automobil-Systeme über den gesamten Lebenszyklus',
    'fw-62443-label':'ISO · OT / ICS-Sicherheit','fw-62443-desc':'Sicherheit industrieller Automatisierungs- und Steuerungssysteme — Sicherheitsstufen und Zonen-/Kanal-Modell für OT-Umgebungen',
    'fw-badge-mapped':'Zugeordnet','fw-badge-progress':'In Bearbeitung',
    'fw-disclaimer':'„Zugeordnet" bezeichnet strukturierte Control-Ausrichtung und Nachweisgerüst. Die Abdeckung stellt keine Zertifizierung, regulatorische Bestätigung oder rechtliche Compliance-Zusicherung dar. Konsultieren Sie stets qualifizierten Rechtsbeistand für die regulatorische Interpretation.',
    'ev-eyebrow':'Nachweis-Graph',
    'ev-heading':'Ein Datensatz verbindet jeden Compliance-Datenpunkt.',
    'ev-sub':'Der Nachweis-Graph verknüpft jeden Control, jedes Risiko, jeden Fund, jeden Eigentümer, jeden Richtlinienverweis und jeden Remediation-Schritt in einer einzigen abfragbaren Struktur. Zum Prüfungszeitpunkt wird nichts manuell zusammengestellt – alles ist bereits vorhanden.',
    'ev-1-title':'Jeder Control ist strukturiert und versioniert',
    'ev-1-desc':'Control-Aussagen tragen Umsetzungsstatus, Verlauf und Framework-Querverweise. Die Änderung einer Antwort aktualisiert den Datensatz – ersetzt ihn nie.',
    'ev-2-title':'Jeder Nachweis ist zeitgestempelt und typisiert',
    'ev-2-desc':'Dokumente, Screenshots, Log-Exporte und Interview-Aufzeichnungen tragen Erfassungszeitstempel, Methode (EXAMINE / INTERVIEW / TEST) und einen direkten Link zur erfassenden Beobachtung.',
    'ev-3-title':'Jedes Risiko und jeder Fund hat einen rückverfolgbaren Eigentümer',
    'ev-3-desc':'Vom Risikodatensatz zur Control-Lücke, die ihn erzeugt hat, bis zur Korrekturmaßnahme, die zu seiner Lösung zugewiesen wurde – Eigentümerschaft und Verantwortlichkeit sind im Datenmodell verankert.',
    'ev-4-title':'Jeder Export basiert auf Live-Daten',
    'ev-4-desc':'Es gibt keine „manuelle Exportvorbereitung". Audit-Pakete werden aus dem Live-Datensatz generiert. Ein OSCAL Assessment Results-Export spiegelt die Daten genau so wider, wie sie eingegeben wurden – ohne zwischengeschalteten Montageschritt.',
    'sov-eyebrow':'Souveränität &amp; Vertrauen',
    'sov-heading':'Entwickelt für regulierte europäische Infrastruktur.',
    'sov-p1':'Compliance-Daten gehören zu den sensibelsten, die eine Organisation hält. VamiAudit basiert auf Infrastruktur- und Architekturprinzipien, die den Souveränitätserwartungen EU-regulierter Branchen entsprechen.',
    'sov-p2':'Dies ist keine US-SaaS-Plattform, die in Europa vermarktet wird. Es ist eine Plattform, die von Grund auf für das europäische regulatorische Umfeld konzipiert wurde.',
    'pillar-1-title':'EU / DE Hosting','pillar-1-desc':'Auf EU-Infrastruktur gehostet mit deutschen Rechenzentrum-Optionen. Datenresidenz ist vertraglich definiert und überprüfbar.',
    'pillar-2-title':'Souveräne Bereitstellung','pillar-2-desc':'Als On-Premises- oder Private-Cloud-Bereitstellung verfügbar für Organisationen mit strengen Datenlokalisierungsanforderungen.',
    'pillar-3-title':'Unveränderliches Audit-Trail','pillar-3-desc':'Jede Datenänderung wird mit Akteur, Zeitstempel und Delta protokolliert. Audit-Trails können von Benutzern oder Administratoren nicht nachträglich verändert werden.',
    'pillar-4-title':'Rollenbasierte Zugriffskontrolle','pillar-4-desc':'Feinkörniges RBAC stellt sicher, dass CISO-, Compliance-Beauftragter-, Prüfer- und Systemverantwortlichen-Rollen nur das sehen, wozu sie autorisiert sind.',
    'pillar-5-title':'Verschlüsselung im Ruhezustand &amp; bei der Übertragung','pillar-5-desc':'AES-256-Verschlüsselung im Ruhezustand. TLS 1.3 für alle Daten bei der Übertragung. BYOK und HSM-Integration für Enterprise-Bereitstellungen verfügbar.',
    'pillar-6-title':'Keine unnötige Drittlandübermittlung','pillar-6-desc':'Die Verarbeitung ist so konzipiert, dass Compliance-Daten standardmäßig nicht außerhalb der EU/des EWR übertragen werden. SCCs und Datentransfer-Folgenabschätzungen verfügbar, wo zutreffend.',
    'pillar-7-title':'DSGVO-bewusste Architektur','pillar-7-desc':'Datensparsamkeit by Design. Kein Telemetrie, das Compliance-Inhalte exfiltriert. DPA verfügbar. Unterauftragsverarbeiterliste gepflegt und offengelegt.',
    'pillar-8-title':'BYOK / HSM-Option','pillar-8-desc':'Bringen Sie Ihren eigenen Verschlüsselungsschlüssel mit oder integrieren Sie ein Hardware-Sicherheitsmodul für Organisationen, die kryptografische Schlüsselsouveränität erfordern.',
    'uc-eyebrow':'Anwendungsfälle',
    'uc-heading':'Entwickelt für die Compliance-Herausforderungen, mit denen Ihre Organisation heute konfrontiert ist.',
    'uc-sub':'Keine generische GRC-Plattform. Eine zweckgebundene Compliance-Workflow-Engine für die spezifischen Verpflichtungen regulierter europäischer Branchen.',
    'uc-1-fw':'DORA · Finanzwesen','uc-1-title':'IKT-Resilienz-Nachweise für DORA',
    'uc-1-desc':'Ordnen Sie DORA Kapitel II IKT-Risikomanagement-Controls Ihren Systemen zu, sammeln Sie Nachweise zu Test- und Incident-Response-Verfahren und erstellen Sie strukturierte Berichte für Ihre zuständige Behörde.',
    'uc-2-fw':'NIS2 · Wesentliche Einrichtungen','uc-2-title':'NIS2-Management-Reporting',
    'uc-2-desc':'Erstellen Sie strukturierte Sicherheitsmaßnahmen-Dokumentation für Artikel-21-Verpflichtungen. Weisen Sie technische und organisatorische Maßnahmen gegenüber nationalen Behörden mit zeitgestempelten Nachweisen nach.',
    'uc-3-fw':'EU AI Act · Betreiber','uc-3-title':'EU AI Act Dokumentation',
    'uc-3-desc':'Pflegen Sie Artikel-9-Risikomanagementdokumentation, Anhang-IV-Technische Unterlagen und Post-Market-Monitoring-Aufzeichnungen für Hochrisiko-KI-Systeme – strukturiert, aktuell und prüffertig.',
    'uc-4-fw':'ISO 27001 · ISMS','uc-4-title':'ISO 27001 Control-Verfolgung',
    'uc-4-desc':'Pflegen Sie eine lebendige Erklärung zur Anwendbarkeit mit Umsetzungsstatus pro Annex-A-Control. Führen Sie interne Audits durch, erfassen Sie Findings und schließen Sie Korrekturmaßnahmen in einem einzigen Workflow.',
    'uc-5-fw':'Drittanbieter-Risiko','uc-5-title':'Lieferanten-Sicherheitsassessment-Nachweise',
    'uc-5-desc':'Führen Sie strukturierte Lieferantenbewertungen durch, die Ihrem TPRM-Framework zugeordnet sind. Erfassen Sie Findings, Beobachtungen und Nachweise pro Lieferant pro Prüfzyklus. Unterstützt DORA Artikel 28 IKT-Drittanbieter-Risikopflichten.',
    'uc-6-fw':'Interne Prüfung','uc-6-title':'Interne Audit-Vorbereitung',
    'uc-6-desc':'Planen Sie interne Audits mit definiertem Scope, erfassen Sie EXAMINE / INTERVIEW / TEST-Beobachtungen und erstellen Sie einen vollständigen Assessment-Bericht, bereit für einen externen Prüfer zur Verifikation – ohne manuelle Zusammenstellung.',
    'uc-7-fw':'Remediation · CAPA','uc-7-title':'Remediation-Überwachung',
    'uc-7-desc':'Wandeln Sie nicht-erfüllte Audit-Findings in nachverfolgte Korrekturmaßnahmen mit Eigentümern, Fristen und Schließungsnachweisen um. Zeigen Sie Prüfern eine vollständige Remediation-Kette – vom Fund bis zum gelösten Risiko.',
    'cta-eyebrow':'Loslegen',
    'cta-heading':'Ihr nächster Prüfzyklus ist <span class="highlight">bereits im Gange.</span>',
    'cta-sub':'Sprechen Sie mit dem VamiSec-Team darüber, wie VamiAudit zu Ihrer regulatorischen Umgebung, Ihren Infrastrukturanforderungen und Ihren bestehenden Compliance-Workflows passt.',
    'cta-micro-1':'Keine Verpflichtung erforderlich','cta-micro-2':'EU-Infrastruktur',
    'cta-micro-3':'DSGVO-konforme DPA bereitgestellt','cta-micro-4':'On-Premises-Bereitstellung verfügbar',
    'footer-tagline':'Strukturierte Compliance-Workflows für regulierte Organisationen. Von Controls zu Audit-Nachweisen – kontinuierlich.',
    'footer-product-title':'Produkt','footer-fw-title':'Frameworks','footer-company-title':'Unternehmen',
    'footer-product-1':'Control-Zuordnung','footer-product-2':'Nachweisverwaltung',
    'footer-product-3':'Risikoregister','footer-product-4':'Assessments','footer-product-5':'Reporting',
    'footer-company-1':'Über VamiSec','footer-company-2':'Sicherheit',
    'footer-company-3':'Datenschutzerklärung','footer-company-4':'Nutzungsbedingungen',
    'footer-company-5':'Impressum','footer-company-6':'Kontakt',
    'footer-copy':'&copy; 2025 VamiSec. Alle Rechte vorbehalten. In der Europäischen Union registriert.',
    'footer-privacy':'Datenschutz','footer-terms':'AGB','footer-imprint':'Impressum',
  }
};

/* ── Theme switching ─────────────────────────────────────────────────────── */
(function () {
  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('va-theme', theme);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      applyTheme(isLight ? 'dark' : 'light');
    });
  });
})();

/* ── Language switching ─────────────────────────────────────────────────── */
(function () {
  const saved = localStorage.getItem('va-lang') || 'en';
  let current = saved;

  function applyLang(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    // Update active state on toggle options
    document.querySelectorAll('.lang-toggle__option').forEach((opt) => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });
    current = lang;
    localStorage.setItem('va-lang', lang);
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLang(current);
    const toggle = document.getElementById('lang-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      applyLang(current === 'en' ? 'de' : 'en');
    });
  });
})();

/* ── Sticky nav ─────────────────────────────────────────────────────── */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Mobile nav toggle ──────────────────────────────────────────────── */
(function () {
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
})();

/* ── Scroll-reveal (IntersectionObserver) ───────────────────────────── */
(function () {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((el) => observer.observe(el));
})();

/* ── Animated dash-bar fills (hero) ────────────────────────────────── */
(function () {
  const fills = document.querySelectorAll('.dash-bar__fill[data-pct]');
  if (!fills.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.getAttribute('data-pct') + '%';
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  fills.forEach((f) => {
    f.style.width = '0%';
    f.style.transition = 'width 1.2s cubic-bezier(0.4,0,0.2,1)';
    observer.observe(f);
  });
})();

/* ── Simple counter animation ───────────────────────────────────────── */
(function () {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const animate = (el) => {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const val = target * ease;
      el.textContent = (Number.isInteger(target) ? Math.round(val) : val.toFixed(1)) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { animate(e.target); observer.unobserve(e.target); } });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => observer.observe(c));
})();

/* ── Smooth scroll for anchor links ─────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
