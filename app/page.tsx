const projects = [
  {
    id: "scenario-model",
    number: "01",
    category: "Forecasting & scenario analysis",
    title: "Four-Scenario Financial Model",
    summary: "Built an interactive operating model to show how growth, cost structure, and reinvestment choices change long-term value.",
    challenge: "The CFO needed a decision tool—not a static forecast—to compare four operating paths for Acme Inc. across revenue growth, COGS, R&D, SG&A, free cash flow, and valuation.",
    approach: "I created a scenario selector that flows assumptions through the forecast, linked the income statement drivers to leveraged free cash flow, and calculated NPV and IRR for each case. The dashboard updates with each selection.",
    tools: ["Scenario modeling", "NPV / IRR", "IF / IFS", "Data validation", "LFCF forecast", "Dashboard design"],
    findings: [{value:"$26.4B",label:"Base-case NPV"},{value:"16.2%",label:"Base-case IRR"},{value:"4",label:"Operating scenarios"}],
    recommendation: "Use a hybrid of the Base and Growth cases: pursue measured revenue expansion while protecting margin discipline and cash-flow stability. Treat the High Growth case as upside potential, not the operating baseline.",
    fullSummary: [
      {heading:"Objective", text:"Build a decision-ready model showing how different growth, cost, and reinvestment assumptions affect Acme Inc.’s long-term cash generation and enterprise value."},
      {heading:"Analysis", text:"I created four linked cases—Base, Conservative, Growth, and High Growth—and used a validated scenario selector to flow assumptions through revenue, COGS, R&D, SG&A, leveraged free cash flow, NPV, and IRR. The Base case produced a $26.4 billion NPV and 16.2% IRR; stronger growth cases increased modeled value but also required more aggressive operating assumptions."},
      {heading:"Conclusion", text:"The model supports a measured growth strategy that combines the Base case’s cash-flow stability with selected Growth-case investments. The High Growth case is useful as an upside scenario, but its added volatility makes it less appropriate as the central operating plan."}
    ],
    image: "/projects/dashboards/scenario-model.png"
  },
  {
    id: "activision",
    number: "02",
    category: "M&A valuation",
    title: "Microsoft–Activision Acquisition",
    summary: "Evaluated an all-debt acquisition using combined statements, ratio analysis, CAPM/WACC, and a 10-year discounted cash flow model.",
    challenge: "Determine whether Microsoft’s proposed acquisition of Activision Blizzard would create value after a 25% offer premium and debt financing at 8%.",
    approach: "I standardized both companies’ financial statements, built combined income statement, balance sheet, and cash flow views, then evaluated profitability, leverage, cost of capital, EVA, and discounted operating cash flows.",
    tools: ["Three-statement modeling", "DCF", "CAPM / WACC", "EVA", "XLOOKUP", "Ratio analysis"],
    findings: [{value:"$4.44T",label:"Modeled combined DCF value"},{value:"7.07%",label:"Combined WACC"},{value:"$391B",label:"Modeled synergy value"}],
    recommendation: "The model supports proceeding: Activision is earnings-accretive, the combined entity retains strong asset coverage, and the modeled offer appears supportable relative to intrinsic value and synergy potential.",
    fullSummary: [
      {heading:"Objective", text:"Evaluate whether Microsoft’s proposed acquisition of Activision Blizzard could create financial value after incorporating a 25% offer premium and an all-debt financing assumption at 8%."},
      {heading:"Analysis", text:"I standardized both companies’ reported statements, assembled combined income statement, balance sheet, and cash-flow views, and compared profitability, asset efficiency, leverage, and margins. I then estimated required returns using CAPM and WACC, modeled economic value added, and built a ten-year discounted cash-flow valuation for the combined business."},
      {heading:"Conclusion", text:"The modeled combined business produced a $4.44 trillion DCF value at a 7.07% WACC, with approximately $391 billion of modeled synergy value. Under the stated case assumptions, the acquisition appears financially supportable, though the recommendation depends on realizing integration benefits and managing the additional debt burden."}
    ],
    image: "/projects/dashboards/microsoft-activision.png"
  },
  {
    id: "labor",
    number: "03",
    category: "FP&A & workforce planning",
    title: "500-Store Labor Scenario Analysis",
    summary: "Modeled the network-wide impact of 3%, 5%, and 10% wage increases on labor cost, turnover, revenue, and store profitability.",
    challenge: "Management needed to understand whether higher wages could improve retention without weakening profitability across 500 Northeast coffee stores and 14,000 employees.",
    approach: "I linked employee-level labor data with store financials, modeled wage, turnover, and same-store-sales assumptions, and analyzed outcomes by role, store type, city, and location.",
    tools: ["FP&A modeling", "SUMIFS", "PivotTables", "Sensitivity analysis", "Store-level P&L", "KPI dashboard"],
    findings: [{value:"500",label:"Stores modeled"},{value:"207",label:"Unprofitable at 5% vs. 218 base"},{value:"7.87%",label:"Urban margin at 5%"}],
    recommendation: "Adopt the 5% wage increase. It produced the fewest unprofitable stores and the strongest average margins, while a 10% increase introduced excess pressure in weaker locations. Review structurally challenged mall stores separately.",
    fullSummary: [
      {heading:"Objective", text:"Determine whether higher wages could reduce turnover and support sales without weakening profitability across a network of 500 stores and roughly 14,000 employees."},
      {heading:"Analysis", text:"I connected employee-level labor data with store financials and modeled 3%, 5%, and 10% wage increases. Each case incorporated changes in turnover cost and sales, then measured profit and margin by store, role, city, and store type. The Base and 3% cases each left 218 stores unprofitable; the 5% case reduced that count to 207, while the 10% case increased it to 210."},
      {heading:"Conclusion", text:"The 5% wage increase delivered the strongest network-wide balance: fewer loss-making locations and a peak 7.87% urban-store margin. A uniform policy still masks meaningful location differences, so persistently unprofitable mall stores should receive a separate operating review."}
    ],
    image: "/projects/dashboards/northeast-coffee-labor.png"
  },
  {
    id: "receivables",
    number: "04",
    category: "Working capital & risk",
    title: "Accounts Receivable Aging",
    summary: "Converted invoice-level data into an aging model and collection dashboard to expose liquidity risk and prioritize follow-up.",
    challenge: "The CFO needed a clear view of customer payment behavior, overdue concentration, and invoices most likely to threaten near-term cash flow.",
    approach: "I categorized invoices into five aging buckets, flagged current versus past due balances, applied exception formatting, and built customer, monthly, concentration, and payment-timeliness views.",
    tools: ["AR aging", "IF / AND", "PivotTables", "Conditional formatting", "Concentration analysis", "Dashboard design"],
    findings: [{value:"$14.15M",label:"Total receivables"},{value:"96.8%",label:"Past due"},{value:"59%",label:"Over 180 days"}],
    recommendation: "Prioritize the oldest and largest customer balances, tighten credit controls, formalize collection escalation, and reassess the allowance for doubtful accounts given the concentration of severely aged invoices.",
    fullSummary: [
      {heading:"Objective", text:"Convert invoice-level data into a clear aging and collections view that management could use to assess liquidity exposure, customer concentration, and payment behavior as of January 1, 2025."},
      {heading:"Analysis", text:"I assigned invoices to five aging brackets with logical formulas, classified balances as current or past due, and used exception formatting to flag the most severe cases. PivotTables and dashboard views summarized balances by customer, month, aging category, concentration, and payment timeliness."},
      {heading:"Conclusion", text:"Of $14.15 million in receivables, 96.8% was past due and 59% had been outstanding for more than 180 days. The age and concentration of the balance indicate material collection and liquidity risk, supporting immediate escalation on the largest accounts, tighter credit controls, and a review of the allowance for doubtful accounts."}
    ],
    image: "/projects/dashboards/accounts-receivable.png"
  },
  {
    id: "incentives",
    number: "05",
    category: "Revenue & profitability",
    title: "Seasonal Sales Incentive Strategy",
    summary: "Built a linked model to test how discounts, rebates, free goods, and coupons affect seasonal sales, cost, and margin.",
    challenge: "The CFO wanted to identify which promotional mix could increase seasonal sales without allowing incentive costs to erode profitability.",
    approach: "I cleaned and segmented order data, connected four seasonal models to a commission master, automated product and cost retrieval, and created an interactive eight-chart dashboard with slicers.",
    tools: ["XLOOKUP", "IFS", "Data validation", "Margin analysis", "Seasonality", "Interactive dashboard"],
    findings: [{value:"$86.2M",label:"Summer profit peak"},{value:"35%",label:"Summer revenue share"},{value:"4",label:"Incentive levers"}],
    recommendation: "Use a balanced incentive mix as the default and reserve heavier promotions for proven high-demand periods. Winter delivered strong profit with more moderate spending, while Spring showed weaker returns from aggressive incentives.",
    fullSummary: [
      {heading:"Objective", text:"Assess how discounts, rebates, free goods, and coupons influenced seasonal sales, total cost, and profit, then identify a promotional mix that supports growth without unnecessary margin erosion."},
      {heading:"Analysis", text:"I organized order data, applied IFS-based segmentation, created controlled incentive inputs, and used XLOOKUP to retrieve product and cost data. Linked seasonal models calculated the effect of each incentive layer, while an interactive dashboard compared revenue share, profit trends, incentive mix, product performance, and margins."},
      {heading:"Conclusion", text:"Summer produced the highest profit at $86.2 million and 35% of annual revenue, while Winter generated about $67.8 million with a more moderate incentive level. Spring’s weaker return shows that aggressive promotions are not equally productive in every season. Promotions should concentrate on proven products and high-demand periods, with a balanced mix as the default."}
    ],
    image: "/projects/dashboards/sales-incentives.png"
  },
  {
    id: "rebates",
    number: "06",
    category: "Pricing & sensitivity analysis",
    title: "Sales Rebate Profitability",
    summary: "Tested five growth-and-rebate scenarios to quantify the trade-off between higher gross-profit dollars and declining margin efficiency.",
    challenge: "Management needed to determine how aggressively it could use customer rebates to drive incremental sales before margin pressure outweighed the value of additional volume.",
    approach: "I built five what-if cases pairing 25%–100% sales growth with 5%–30% rebates, applied rebates only to incremental sales, and compared revenue, cost, gross profit before and after rebates, margin, and SKU-level economics.",
    tools: ["Sensitivity analysis", "What-if modeling", "Gross-margin analysis", "Incremental economics", "SKU analysis", "Dashboard design"],
    findings: [{value:"$5.98M",label:"Baseline sales"},{value:"63%",label:"Margin at 25% growth / 5% rebate"},{value:"49%",label:"Margin at 100% growth / 30% rebate"}],
    recommendation: "Favor a controlled rebate tier in the 5%–10% range, where gross-profit dollars grow while margin remains above 60%. Require stronger evidence of incremental demand before moving beyond a 15% rebate.",
    fullSummary: [
      {heading:"Objective", text:"Measure how an escalating rebate program changes sales, gross-profit dollars, and gross margin, and identify the point where incentive-driven growth begins to produce diminishing returns."},
      {heading:"Analysis", text:"The model starts with $5.98 million of sales, $2.14 million of cost, and $3.84 million of gross profit at a 64% margin. I then paired sales-growth cases of 25%, 35%, 50%, 75%, and 100% with rebate rates of 5%, 10%, 15%, 20%, and 30%, applying each rebate only to incremental revenue. Product-level views added context on price, standard cost, volume, and margin."},
      {heading:"Conclusion", text:"A 25% growth and 5% rebate case increased after-rebate gross profit to $4.73 million while preserving a 63% margin; the 35% and 10% case produced $4.98 million at 62%. More aggressive tiers increased gross-profit dollars but compressed margin to 59%, 56%, and ultimately 49%, indicating that lower rebate tiers offer the strongest balance of growth and efficiency."}
    ],
    image: "/projects/dashboards/sales-rebate.png"
  }
];

const additional = [
  ["Financial Statement Modeling", "Integrated income statement, balance sheet, cash flow, revenue, gross margin, and depreciation schedules."],
  ["Fast-Food Equity Ratio Analysis", "Compared five public companies across profitability, growth, leverage, efficiency, and valuation ratios."],
  ["Loan Refinancing Optimization", "Reworked a debt portfolio around a $550 million, 7%, 30-year refinancing option using payment, rate, term, and weighted-rate analysis."],
  ["1,749-Position Portfolio Analysis", "Analyzed return distribution, sector contribution, valuation, beta, concentration, and realized gains."]
];

function ProjectVisual({project}:{project:(typeof projects)[number]}) {
  return <img src={project.image} alt={`${project.title} Excel dashboard preview`} loading="lazy" />;
}

export default function Home() {
  return <main id="top">
    <header className="site-nav">
      <a className="brand" href="#top"><span>IH</span><b>Irfan Hussain</b></a>
      <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a><a className="nav-linkedin" href="https://www.linkedin.com/in/irfanhussain2" target="_blank" rel="noreferrer">LinkedIn ↗</a></nav>
    </header>

    <section className="hero">
      <div className="eyebrow"><span/>Financial Analyst · FP&amp;A · Corporate Finance</div>
      <h1>Financial analysis with a <em>point of view.</em></h1>
      <p>I turn complex financial data into clear models, decision-ready dashboards, and actionable business recommendations.</p>
      <div className="hero-actions"><a className="button primary" href="#work">View my work <span>↘</span></a><a className="button secondary" href="https://www.linkedin.com/in/irfanhussain2" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a className="text-link" href="mailto:irfanhussainnyc@gmail.com">Contact me →</a></div>
      <div className="proof"><div><strong>14</strong><span>Analyses completed</span></div><div><strong>6</strong><span>Featured case studies</span></div><div><strong>Excel</strong><span>Models to dashboards</span></div></div>
    </section>

    <section className="featured" id="work">
      <div className="section-label">Selected work</div>
      <div className="section-intro"><h2>Built to answer the question behind the numbers.</h2><p>Six projects selected from fourteen for their relevance to FP&amp;A, corporate finance, and financial analyst roles.</p></div>
      <div className="project-grid">
        {projects.map((p)=><article className="project-card" key={p.id}>
          <div className="project-visual"><ProjectVisual project={p}/><span className="project-index">{p.number}</span></div>
          <div className="project-body"><span className="project-category">{p.category}</span><h3>{p.title}</h3><p>{p.summary}</p><div className="tag-row">{p.tools.slice(0,4).map(t=><span key={t}>{t}</span>)}</div><a href={`#case-${p.id}`}>View case study <b>→</b></a></div>
        </article>)}
      </div>
    </section>

    <section className="about" id="about"><div><div className="section-label dark">About</div><h2>I’m interested in the space where finance, data, and business decisions meet.</h2></div><div><p>I’m an early-career financial analyst pursuing opportunities in FP&amp;A, corporate finance, and finance-focused analytics. My project work was completed through CFO-style briefs: each assignment began with a business question and ended with an executive recommendation.</p><p>I enjoy building models that are structured and auditable, finding the drivers behind performance, and communicating the answer clearly enough for someone to act on it.</p><a href="mailto:irfanhussainnyc@gmail.com">Start a conversation →</a></div></section>

    <section className="skills" id="skills"><div className="section-label">Capabilities</div><div className="skills-grid"><div><span>01</span><h3>Model</h3><p>Financial statement modeling, forecasting, scenario analysis, DCF, NPV/IRR, CAPM/WACC, debt schedules.</p></div><div><span>02</span><h3>Analyze</h3><p>Variance, profitability, KPI, working capital, ratio, sensitivity, investment, and cost analysis.</p></div><div><span>03</span><h3>Build</h3><p>Advanced Excel formulas, XLOOKUP, SUMIFS, PivotTables, data validation, cleaning, and model controls.</p></div><div><span>04</span><h3>Communicate</h3><p>Executive summaries, dashboards, data visualization, concise findings, and action-oriented recommendations.</p></div></div></section>

    <section className="case-studies">
      <div className="section-label">Case studies</div><h2>Problem → analysis → insight → recommendation.</h2>
      {projects.map((p)=><article className="case" id={`case-${p.id}`} key={p.id}>
        <div className="case-top"><span>{p.number} / {p.category}</span><h3>{p.title}</h3><p>{p.summary}</p></div>
        <div className="case-preview"><ProjectVisual project={p}/></div>
        <div className="case-story"><div><span>Business challenge</span><p>{p.challenge}</p></div><div><span>My approach</span><p>{p.approach}</p></div></div>
        <div className="findings">{p.findings.map(f=><div key={f.label}><strong>{f.value}</strong><span>{f.label}</span></div>)}</div>
        <div className="recommendation"><span>Recommendation</span><p>{p.recommendation}</p></div>
        <details className="executive-details"><summary><span>Read full executive summary</span><b aria-hidden="true">+</b></summary><div className="executive-content">{p.fullSummary.map(section=><section key={section.heading}><h4>{section.heading}</h4><p>{section.text}</p></section>)}</div></details>
        <div className="case-bottom"><div className="tag-row">{p.tools.map(t=><span key={t}>{t}</span>)}</div><a href={`mailto:irfanhussainnyc@gmail.com?subject=${encodeURIComponent(`Workbook request: ${p.title}`)}`}>Workbook available upon request ↗</a></div>
      </article>)}
    </section>

    <section className="additional"><div className="section-label dark">Additional analysis</div><div className="additional-list">{additional.map((a,i)=><div key={a[0]}><span>0{i+7}</span><h3>{a[0]}</h3><p>{a[1]}</p></div>)}</div></section>

    <section className="contact"><span>Open to entry-level financial analyst opportunities</span><h2>Let’s turn the next question into a decision.</h2><div><a className="button light" href="mailto:irfanhussainnyc@gmail.com">irfanhussainnyc@gmail.com ↗</a><a className="button outline-light" href="https://www.linkedin.com/in/irfanhussain2" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></section>
    <footer><span>© 2026 Irfan Hussain</span><span>Financial Analyst · New York, NY</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}
