import { Link, useParams } from "react-router-dom";
import { notifications } from "../data/notifications";

const toneClasses = {
  deadline: "bg-red-700 text-white",
  open: "bg-emerald-700 text-white",
  pending: "bg-yellow-100 text-red-950",
};

const DataTable = ({ headers, rows, labelledBy }) => (
  <div className="mt-5 overflow-x-auto rounded-xl border border-red-900/10">
    <table className="min-w-full border-collapse text-sm text-gray-700" aria-labelledby={labelledBy}>
      <thead className="bg-red-900 text-left text-white">
        <tr>
          {headers.map((header) => (
            <th key={header} scope="col" className="px-4 py-3">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(([label, ...cells], index) => (
          <tr key={label} className={index % 2 === 0 ? "bg-[#fffdf8]" : "bg-white"}>
            <th scope="row" className="border-t border-red-900/10 px-4 py-3 text-left font-semibold text-red-950">{label}</th>
            {cells.map((cell, cellIndex) => (
              <td key={cellIndex} className="border-t border-red-900/10 px-4 py-3 leading-6">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Section = ({ id, title, children }) => (
  <section className="mt-9" aria-labelledby={id}>
    <h2 id={id} className="text-2xl font-bold text-red-950">{title}</h2>
    {children}
  </section>
);

const BulletList = ({ items }) => (
  <ul className="mt-5 list-disc space-y-2 pl-5 leading-7 text-gray-700">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const NotificationPage = () => {
  const { slug } = useParams();
  const notification = notifications[slug];

  if (!notification) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-900">Notification not found</h1>
        <Link to="/" className="mt-6 inline-block rounded-lg bg-red-900 px-5 py-3 font-semibold text-white">Return home</Link>
      </main>
    );
  }

  const n = notification;

  return (
    <main className="min-h-[70vh] bg-[#f7f4ef] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <article className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
        <header className="border-b border-red-900/10 bg-red-900 px-6 py-8 text-white sm:px-10 sm:py-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-300">{n.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">{n.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-red-50 sm:text-lg">{n.summary}</p>
          <p className="mt-4 text-sm text-red-100">Notification date: {n.publishedOn}</p>
        </header>

        <div className="grid gap-8 px-6 py-8 sm:px-10 sm:py-10 md:grid-cols-[1fr_320px]">
          <div>
            <span className={`inline-flex rounded-full px-4 py-2 text-sm font-bold ${toneClasses[n.badge.tone]}`}>
              {n.badge.label}
            </span>

            {n.deadline && (
              <div className="mt-6 rounded-xl border-l-4 border-red-700 bg-red-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-red-800">{n.deadlineLabel}</p>
                <p className="mt-2 text-lg font-bold text-red-950">{n.deadline}</p>
              </div>
            )}

            <p className="mt-6 rounded-xl bg-gray-50 p-4 text-sm leading-6 text-gray-700 ring-1 ring-black/5">{n.verificationNote}</p>

            {n.importantDates && (
              <Section id="important-dates-heading" title="Important dates">
                <DataTable
                  headers={["Event", "Date / status"]}
                  rows={n.importantDates}
                  labelledBy="important-dates-heading"
                />
              </Section>
            )}

            {n.fee && (
              <Section id="fee-heading" title="Application fee">
                <p className="mt-4 leading-7 text-gray-700">{n.fee.note}</p>
                <DataTable headers={["Category", "Amount"]} rows={n.fee.rows} labelledBy="fee-heading" />
              </Section>
            )}

            {n.eligibility && (
              <Section id="eligibility-heading" title="Eligibility criteria">
                {n.eligibility.map((group) => (
                  <div key={group.heading} className="mt-5">
                    <h3 className="text-lg font-bold text-red-950">{group.heading}</h3>
                    <BulletList items={group.items} />
                  </div>
                ))}
              </Section>
            )}

            {n.documents && (
              <Section id="documents-heading" title={n.documents.title}>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-900/10 bg-[#fffdf8] p-5">
                    <h3 className="font-bold text-red-950">Mandatory</h3>
                    <ul className="mt-3 space-y-2 leading-6 text-gray-700">
                      {n.documents.mandatory.map((item) => (
                        <li key={item} className="flex gap-2"><span aria-hidden="true">•</span><span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-red-900/10 bg-white p-5">
                    <h3 className="font-bold text-red-950">Conditional</h3>
                    <ul className="mt-3 space-y-2 leading-6 text-gray-700">
                      {n.documents.conditional.map((item) => (
                        <li key={item} className="flex gap-2"><span aria-hidden="true">•</span><span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{n.documents.note}</p>
              </Section>
            )}

            {n.steps && (
              <Section id="steps-heading" title="Steps to apply">
                <ol className="mt-5 overflow-hidden rounded-xl border border-red-900/10">
                  {n.steps.map((step, index) => (
                    <li
                      key={step}
                      className={`flex gap-3 px-4 py-4 leading-7 text-gray-700 ${index % 2 === 0 ? "bg-[#fffdf8]" : "bg-white"} ${index > 0 ? "border-t border-red-900/10" : ""}`}
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-900 text-sm font-bold text-white">{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </Section>
            )}

            {n.links && (
              <Section id="links-heading" title="Important links">
                <DataTable
                  headers={["Link", "Action"]}
                  rows={n.links.map((link) => [
                    link.label,
                    link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-red-900 underline underline-offset-2 hover:text-red-700"
                      >
                        {link.action}
                      </a>
                    ) : (
                      <span className="text-gray-500">{link.action}</span>
                    ),
                  ])}
                  labelledBy="links-heading"
                />
              </Section>
            )}

            {n.instructions && (
              <Section id="instructions-heading" title="Important instructions">
                <BulletList items={n.instructions} />
              </Section>
            )}

            {n.resources && (
              <Section id="resources-heading" title="Related Academy resources">
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {n.resources.map((resource) => (
                    <li key={resource.to}>
                      <Link
                        to={resource.to}
                        className="block rounded-xl border border-red-900/10 bg-[#fffdf8] p-4 font-semibold text-red-900 transition hover:bg-red-50"
                      >
                        {resource.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Section>
            )}
          </div>

          <aside className="h-fit rounded-xl bg-gray-50 p-5 ring-1 ring-black/5">
            <h2 className="text-lg font-bold text-red-950">Need assistance?</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">Speak with our team about preparation, eligibility, schedules, fees, or document requirements.</p>
            <Link
              to="/contact"
              state={{ course: n.contactCourse }}
              className="mt-5 block rounded-lg bg-red-900 px-4 py-3 text-center font-bold text-white transition hover:bg-red-800"
            >
              Contact our counsellor
            </Link>

            {n.primaryLink && (
              <a
                href={n.primaryLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block rounded-lg border border-red-900 px-4 py-3 text-center font-bold text-red-900 transition hover:bg-red-50"
              >
                {n.primaryLink.label}
              </a>
            )}

            <p className="mt-5 border-t border-gray-200 pt-4 text-xs leading-5 text-gray-500">
              World Wise Education is an educational information provider and is not the official examination authority. Dates, fees, and eligibility can change; the official website or notification is final.
            </p>
          </aside>
        </div>
      </article>
    </main>
  );
};

export default NotificationPage;
