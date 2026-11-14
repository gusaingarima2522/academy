import { Link, useParams } from "react-router-dom";
import { notifications } from "../data/notifications";

const legacyRoutes = {
  "clat-last-date": "clat-2027",
  "jee-registration": "jee-2027",
  "viteee-registration": "viteee-2027",
  "kiitee-registration": "kiitee-2027",
  "med-admission-2027": "manipal-met-2027",
  "manipal-met": "manipal-met-2027",
  "christ-registration": "christ-admission-2027",
};

const SectionTitle = ({ number, title }) => (
  <h2 className="mb-3 mt-8 border-b border-red-900/15 pb-2 text-xl font-bold text-red-950 first:mt-0">
    <span className="mr-2 text-sm text-red-700">{number}</span>{title}
  </h2>
);

const Table = ({ title, headers, rows }) => (
  <div className="overflow-x-auto rounded-lg border border-red-900/10" role="region" aria-label={title} tabIndex="0">
    <table className="w-full min-w-[420px] border-collapse text-sm">
      <thead className="bg-red-950 text-left text-white">
        <tr>{headers.map((header) => <th key={header} scope="col" className="px-4 py-3">{header}</th>)}</tr>
      </thead>
      <tbody>{rows.map((row, index) => (
        <tr key={`${row[0]}-${index}`} className={index % 2 ? "bg-white" : "bg-[#fffdf8]"}>
          {row.map((cell, cellIndex) => cellIndex === 0
            ? <td key={cell} className="border-t px-4 py-3 font-semibold text-red-950">{cell}</td>
            : <td key={`${cell}-${cellIndex}`} className="border-t px-4 py-3 leading-6 text-gray-700">{cell}</td>)}
        </tr>
      ))}</tbody>
    </table>
  </div>
);

const NotificationDetailPage = () => {
  const { slug } = useParams();
  const page = notifications[legacyRoutes[slug] ?? slug];

  if (!page) {
    return <main className="mx-auto max-w-3xl px-4 py-16 text-center"><h1 className="text-3xl font-bold text-red-950">Notification not found</h1><Link to="/" className="mt-6 inline-block rounded-lg bg-red-900 px-5 py-3 font-bold text-white">Return home</Link></main>;
  }

  const badgeTone = page.badge?.tone === "deadline"
    ? "border-red-700 bg-red-50 text-red-900"
    : page.badge?.tone === "open"
      ? "border-green-700 bg-green-50 text-green-800"
      : "border-yellow-600 bg-yellow-50 text-yellow-900";

  const eligibility = page.eligibility ?? [];
  const documents = page.documents;
  const links = page.links ?? [];
  const resources = page.resources ?? [];
  const faqs = page.faqs ?? [
    {
      question: `Where can I find the official ${page.title} information?`,
      answer: page.primaryLink?.url
        ? "Use the official website or application link listed in the Important Links section. World Wise Academy provides an informational summary, not the official authority."
        : "Check the verified official examination or university portal. Important official links will be shown here once the current notice is available.",
    },
    {
      question: `What is the current status of ${page.title}?`,
      answer: page.badge?.label === "Check Official Update"
        ? "The official 2027 schedule or registration status has not been verified yet. Recheck the official portal before making any application or payment."
        : `${page.badge?.label ?? "Current update"}. Always confirm dates and instructions on the official portal before applying.`,
    },
    {
      question: "Are fees, documents, and application requirements final here?",
      answer: "No. Eligibility, fees, document formats, and technical upload limits can change. Follow the latest official notification for the final requirements.",
    },
  ];

  return (
    <main className="min-h-[70vh] bg-[#f7f4ef] px-3 py-6 sm:px-6 sm:py-10 lg:px-8">
      <article className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-red-900/10 bg-white shadow-sm">
        <header className="border-b-4 border-yellow-400 bg-red-950 px-5 py-7 text-white sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-300">{page.eyebrow} • World Wise Academy</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight sm:text-4xl">{page.title}</h1>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-red-50 sm:text-base">{page.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            {page.badge && <span className={`rounded-md border px-3 py-2 font-bold ${badgeTone}`}>{page.badge.label}</span>}
            {page.publishedOn && <span className="rounded-md border border-white/20 bg-white/10 px-3 py-2">{page.publishedOn}</span>}
          </div>
          {page.deadlineLabel && page.deadline && <p className="mt-3 text-sm font-semibold text-yellow-200">{page.deadlineLabel}: {page.deadline}</p>}
        </header>

        <div className="px-4 py-6 sm:px-8 sm:py-8">
          {page.verificationNote && <p className="mb-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 px-4 py-3 text-sm leading-6 text-gray-700">{page.verificationNote}</p>}

          {page.importantDates?.length > 0 && <>
            <SectionTitle number="01" title="Important Dates" />
            <Table title="Important dates" headers={["Event", "Date / Status"]} rows={page.importantDates} />
          </>}

          {page.fee && <>
            <SectionTitle number="02" title="Application Fee" />
            {page.fee.note && <p className="mb-3 text-sm text-gray-600">{page.fee.note}</p>}
            <Table title="Application fee" headers={["Category / Item", "Amount"]} rows={page.fee.rows ?? []} />
          </>}

          {eligibility.length > 0 && <>
            <SectionTitle number="03" title="Eligibility Criteria" />
            <div className="grid gap-3 md:grid-cols-2">
              {eligibility.map((group) => <div key={group.heading} className="rounded-lg border border-red-900/10 bg-[#fffdf8] p-4"><h3 className="font-bold text-red-950">{group.heading}</h3><ul className="mt-2 space-y-2 text-sm leading-6 text-gray-700">{group.items.map((item) => <li key={item}>• {item}</li>)}</ul></div>)}
            </div>
          </>}

          {documents && <>
            <SectionTitle number="04" title={documents.title ?? `Documents Required — ${page.title}`} />
            <div className="grid gap-3 md:grid-cols-2">
              <DocumentBox title="Mandatory documents" items={documents.mandatory} tone="red" />
              <DocumentBox title="Conditional documents" items={documents.conditional} tone="gray" />
            </div>
            {documents.note && <p className="mt-3 text-xs leading-5 text-gray-600">{documents.note}</p>}
          </>}

          {page.steps?.length > 0 && <>
            <SectionTitle number="05" title="How to Apply — Step by Step" />
            <ol className="grid gap-2 sm:grid-cols-2">{page.steps.map((step, index) => <li key={step} className="flex gap-3 rounded-lg border border-red-900/10 bg-[#fffdf8] px-4 py-3 text-sm leading-6 text-gray-700"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-950 text-xs font-bold text-white">{index + 1}</span><span>{step}</span></li>)}</ol>
          </>}

          <SectionTitle number="06" title="Important Links" />
          {links.length > 0 ? <div className="overflow-x-auto rounded-lg border border-red-900/10"><table className="w-full min-w-[520px] border-collapse text-sm"><thead className="bg-red-950 text-left text-white"><tr><th scope="col" className="px-4 py-3">Link Description</th><th scope="col" className="px-4 py-3">Action</th></tr></thead><tbody>{links.map((link, index) => <tr key={link.label} className={index % 2 ? "bg-white" : "bg-[#fffdf8]"}><td className="border-t px-4 py-3 font-semibold text-red-950">{link.label}</td><td className="border-t px-4 py-3">{link.url ? <a href={link.url} target="_blank" rel="noopener noreferrer" className="font-bold text-red-800 underline underline-offset-4">{link.action}</a> : <span className="text-gray-500">{link.action}</span>}</td></tr>)}</tbody></table></div> : <p className="rounded-lg border border-red-900/10 bg-[#fffdf8] px-4 py-4 text-sm text-gray-600">Official programme-specific links are pending publication or verification.</p>}
          {page.primaryLink && !links.length && <a href={page.primaryLink.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block rounded-lg bg-red-900 px-4 py-3 text-sm font-bold text-white">{page.primaryLink.label}</a>}

          {page.instructions?.length > 0 && <>
            <SectionTitle number="07" title="Important Instructions" />
            <ul className="grid gap-2 sm:grid-cols-2">{page.instructions.map((instruction) => <li key={instruction} className="rounded-lg border border-yellow-300/70 bg-yellow-50 px-4 py-3 text-sm leading-6 text-gray-700"><span className="mr-2 font-bold text-red-900">•</span>{instruction}</li>)}</ul>
          </>}

          {resources.length > 0 && <>
            <SectionTitle number="08" title="World Wise Academy Resources" />
            <div className="flex flex-wrap gap-2">{resources.map((resource) => <Link key={resource.label} to={resource.to} className="rounded-lg border border-red-900 px-3 py-2 text-sm font-bold text-red-900 no-underline hover:bg-red-900 hover:text-white">{resource.label}</Link>)}</div>
          </>}

          <SectionTitle number="09" title="Frequently Asked Questions" />
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group rounded-lg border border-red-900/10 bg-[#fffdf8] open:border-red-900/25">
                <summary className="cursor-pointer list-none px-4 py-3 font-bold text-red-950 marker:hidden">
                  <span className="mr-2 text-red-700">{String(index + 1).padStart(2, "0")}</span>{faq.question}
                  <span className="float-right text-red-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="border-t border-red-900/10 px-4 py-3 text-sm leading-6 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-red-900 bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-600">Always verify dates, eligibility, fees, and documents on the official examination or university portal. This World Wise Academy page is an informational guide, not the official authority.</div>
        </div>
      </article>
    </main>
  );
};

const DocumentBox = ({ title, items = [], tone }) => <div className={`rounded-lg border p-4 ${tone === "red" ? "border-red-900/15 bg-[#fffdf8]" : "border-gray-200 bg-gray-50"}`}><h3 className="font-bold text-red-950">{title}</h3><ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">{items.map((item) => <li key={item}>✓ {item}</li>)}</ul></div>;

export default NotificationDetailPage;
