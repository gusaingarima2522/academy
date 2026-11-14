import { Link } from "react-router-dom";
import { notificationList } from "../data/notifications";

const notificationFaqs = [
  { question: "Which notification is newest?", answer: "Notifications with a verified update date are shown first under Latest Notifications. Pending notices appear separately under Awaiting Official Update." },
  { question: "Does World Wise Academy issue these examinations?", answer: "No. World Wise Academy provides educational information. The examination authority, university, or official portal is responsible for the final notice, eligibility, dates, and application process." },
  { question: "What should I check before applying?", answer: "Always verify registration dates, eligibility, fees, documents, image specifications, and application links on the relevant official website before payment or submission." },
  { question: "Why are some notification details marked as pending?", answer: "Official 2027 information for those notices could not be verified or had not been published. No application deadline or requirement is invented." },
];

const Notifications = () => {
  const confirmed = notificationList.filter((item) => item.badge?.tone !== "pending");
  const awaiting = notificationList.filter((item) => item.badge?.tone === "pending");

  return (
    <main className="min-h-[70vh] bg-[#f7f4ef] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="overflow-hidden rounded-xl border border-red-900/10 bg-white shadow-sm">
          <div className="grid md:grid-cols-[1fr_280px]">
            <div className="border-b border-red-900/10 px-5 py-7 sm:px-8 md:border-b-0 md:border-r">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">World Wise Academy</p>
              <h1 className="mt-2 text-3xl font-bold text-red-950 sm:text-4xl">All Notifications</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">Official examinations, admissions, application deadlines, and current updates — arranged with the latest verified information first.</p>
            </div>
            <div className="grid grid-cols-2 divide-x divide-red-900/10 md:grid-cols-1 md:divide-x-0 md:divide-y">
              <div className="px-5 py-5"><p className="text-xs font-bold uppercase tracking-wider text-gray-500">Total updates</p><p className="mt-1 text-3xl font-bold text-red-950">{notificationList.length}</p></div>
              <div className="px-5 py-5"><p className="text-xs font-bold uppercase tracking-wider text-gray-500">Verification pending</p><p className="mt-1 text-3xl font-bold text-yellow-700">{awaiting.length}</p></div>
            </div>
          </div>
        </header>

        <section className="mt-7 grid items-start gap-7 lg:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="rounded-xl border border-red-900/10 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-red-950">Notice Board</h2>
            <nav className="mt-4 space-y-2" aria-label="Notification categories">
              <a href="#latest" className="block rounded-lg bg-red-950 px-4 py-3 text-sm font-bold text-white no-underline">Latest notifications</a>
              <a href="#awaiting" className="block rounded-lg px-4 py-3 text-sm font-bold text-gray-700 no-underline hover:bg-red-50 hover:text-red-900">Awaiting official update</a>
              <a href="#notification-faqs" className="block rounded-lg px-4 py-3 text-sm font-bold text-gray-700 no-underline hover:bg-red-50 hover:text-red-900">Frequently asked questions</a>
              <Link to="/contact#contact-form" className="block rounded-lg px-4 py-3 text-sm font-bold text-gray-700 no-underline hover:bg-red-50 hover:text-red-900">Need assistance?</Link>
            </nav>

            <div className="mt-5 border-t border-gray-100 pt-5">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-red-950">Mock Tests</h3>
              <div className="overflow-hidden rounded-lg border border-red-900/10">
                <table className="w-full table-fixed text-left text-xs" aria-label="Mock test links">
                  <tbody>
                    <tr className="border-b border-red-900/10"><th scope="row" className="px-3 py-2 font-bold text-red-950">CLAT</th><td className="px-3 py-2 text-right"><Link to="/mock#clat-mock" className="font-bold text-red-800 underline underline-offset-2">Open</Link></td></tr>
                    <tr className="border-b border-red-900/10"><th scope="row" className="px-3 py-2 font-bold text-red-950">CUET</th><td className="px-3 py-2 text-right"><Link to="/mock#cuet-mock" className="font-bold text-red-800 underline underline-offset-2">Open</Link></td></tr>
                    <tr><th scope="row" className="px-3 py-2 font-bold text-red-950">JEE</th><td className="px-3 py-2 text-right"><Link to="/jeemocktest" className="font-bold text-red-800 underline underline-offset-2">Open</Link></td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-5 border-t border-gray-100 pt-5">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-red-950">Popular Courses</h3>
              <div className="overflow-hidden rounded-lg border border-red-900/10">
                <table className="w-full table-fixed text-left text-xs" aria-label="Course links">
                  <tbody>
                    <tr className="border-b border-red-900/10"><th scope="row" className="px-3 py-2 font-bold text-red-950">CLAT Foundation</th><td className="px-3 py-2 text-right"><Link to="/courses/clat-foundation" className="font-bold text-red-800 underline underline-offset-2">View</Link></td></tr>
                    <tr className="border-b border-red-900/10"><th scope="row" className="px-3 py-2 font-bold text-red-950">CUET UG</th><td className="px-3 py-2 text-right"><Link to="/courses/cuet-ug-preparation" className="font-bold text-red-800 underline underline-offset-2">View</Link></td></tr>
                    <tr><th scope="row" className="px-3 py-2 font-bold text-red-950">All Courses</th><td className="px-3 py-2 text-right"><Link to="/courses" className="font-bold text-red-800 underline underline-offset-2">View</Link></td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-5 border-t border-gray-100 pt-4 text-xs leading-5 text-gray-500">Official examination portals remain the final authority.</p>
          </aside>

          <div>
            <section id="latest" aria-labelledby="latest-heading">
              <div className="mb-3 flex items-end justify-between border-b-2 border-red-950 pb-2"><h2 id="latest-heading" className="text-xl font-bold text-red-950">Latest Notifications</h2><span className="text-xs font-bold text-gray-500">Newest first</span></div>
              <div className="overflow-hidden rounded-xl border border-red-900/10 bg-white shadow-sm">
                {confirmed.map((item, index) => <NotificationRow key={item.slug} item={item} last={index === confirmed.length - 1} />)}
              </div>
            </section>

            {awaiting.length > 0 && (
              <section id="awaiting" className="mt-8" aria-labelledby="awaiting-heading">
                <div className="mb-3 border-b-2 border-yellow-500 pb-2"><h2 id="awaiting-heading" className="text-xl font-bold text-red-950">Awaiting Official Update</h2></div>
                <div className="overflow-hidden rounded-xl border border-yellow-300 bg-white shadow-sm">
                  {awaiting.map((item, index) => <NotificationRow key={item.slug} item={item} last={index === awaiting.length - 1} />)}
                </div>
              </section>
            )}

            <section id="notification-faqs" className="mt-8 scroll-mt-24" aria-labelledby="notification-faq-heading">
              <div className="mb-3 border-b-2 border-red-950 pb-2"><h2 id="notification-faq-heading" className="text-xl font-bold text-red-950">Frequently Asked Questions</h2></div>
              <div className="space-y-2">
                {notificationFaqs.map((faq, index) => (
                  <details key={faq.question} className="group rounded-lg border border-red-900/10 bg-white open:border-red-900/25">
                    <summary className="cursor-pointer list-none px-4 py-3 font-bold text-red-950 marker:hidden">
                      <span className="mr-2 text-red-700">{String(index + 1).padStart(2, "0")}</span>{faq.question}
                      <span className="float-right text-red-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    <p className="border-t border-red-900/10 px-4 py-3 text-sm leading-6 text-gray-700">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

const NotificationRow = ({ item, last }) => {
  const deadline = item.deadlineLabel && item.deadline ? `${item.deadlineLabel}: ${item.deadline}` : item.publishedOn;
  const badgeClass = item.badge?.tone === "deadline"
    ? "bg-red-100 text-red-900"
    : item.badge?.tone === "open"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-900";

  return (
    <Link to={`/notifications/${item.slug}`} className={`group grid gap-3 px-4 py-5 no-underline transition-colors hover:bg-[#fffdf8] sm:grid-cols-[110px_minmax(0,1fr)_auto] sm:items-center sm:px-5 ${last ? "" : "border-b border-red-900/10"}`}>
      <div className="flex items-center gap-2 sm:block">
        <span className={`inline-block rounded-md px-2.5 py-1 text-xs font-bold ${badgeClass}`}>{item.badge?.label ?? "Update"}</span>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-red-700">{item.eyebrow}</p>
        <h3 className="mt-1 text-base font-bold leading-6 text-red-950 group-hover:text-red-700 sm:text-lg">{item.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">{item.summary}</p>
      </div>
      <div className="text-left sm:max-w-[220px] sm:text-right"><p className="text-xs font-bold text-gray-500">{item.sortDate ? item.publishedOn : "Official status"}</p><p className="mt-1 text-sm font-semibold text-red-900">{deadline}</p><span className="mt-2 inline-block text-sm font-bold text-red-700">View details →</span></div>
    </Link>
  );
};

export default Notifications;
