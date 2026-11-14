import { Link } from "react-router-dom";

const legalPages = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "This page explains how Worldwise Education Consultants handles information when you browse the website, submit an enquiry, or use an online mock test.",
    sections: [
      {
        title: "Information you provide",
        paragraphs: [
          "When you submit an enquiry, the form may ask for details such as your name, email address, phone number, preferred contact time, course interest, and message. Only provide information you are comfortable sharing for the purpose of your enquiry.",
          "The mock-test flow lets you enter a name, email address, and phone number, or continue as a guest. These details are currently saved in your browser session to identify your test attempt.",
        ],
      },
      {
        title: "How information is used",
        paragraphs: [
          "Information submitted through an enquiry form is sent securely to the website's Hostinger PHP API and stored in the contact database so the team can respond to your request.",
          "We use mock-test answers and attempt state to run the test, preserve progress, and calculate the result in your browser.",
        ],
      },
      {
        title: "Storage in your browser",
        paragraphs: [
          "The site uses browser session storage for the home enquiry prompt and mock-test student details. It uses local storage to preserve mock-test answers and progress so an attempt can be restored. This information remains on your device unless it is cleared by the site or you clear your browser storage.",
        ],
      },
      {
        title: "Sharing and external services",
        paragraphs: [
          "Enquiry details are processed by Worldwise Education Consultants through its Hostinger-hosted website and database. The site may also load resources from external providers, which may receive technical information such as your IP address when your browser requests a resource.",
        ],
      },
      {
        title: "Your choices and questions",
        paragraphs: [
          "You can choose guest mode for mock tests and can clear browser storage through your browser settings. To ask about information you submitted through an enquiry form, email info@worldwiseedu.org.",
          "This policy describes the current website features and should be reviewed if the site's data collection or service providers change.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    intro:
      "This policy describes necessary cookies and similar browser storage used by the Worldwise Education Consultants website.",
    sections: [
      {
        title: "Cookies",
        paragraphs: [
          "The website does not currently use analytics or advertising cookies. It uses necessary browser storage for consent, mock-test progress, student details, and the Home enquiry prompt.",
        ],
      },
      {
        title: "Similar browser storage",
        paragraphs: [
          "The site uses local storage to remember your cookie decision and to preserve mock-test answers and progress. It uses session storage for the Home enquiry prompt and mock-test student details.",
          "These browser storage features support site functionality and are not cookies. You can remove stored data using your browser's site-data or storage settings. Removing it may also clear an unfinished test attempt or cause the home prompt to appear again.",
        ],
      },
      {
        title: "Managing cookies",
        paragraphs: [
          "Most browsers let you review, block, or remove cookies and site storage in their privacy settings. Withdrawing storage may clear mock-test progress or cause the Home enquiry prompt to appear again.",
        ],
      },
      {
        title: "Policy updates",
        paragraphs: [
          "We will update this page if the website begins using cookies or similar technologies in a materially different way. Check back here for the latest information.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    intro:
      "By using the Worldwise Education Consultants website, you agree to use its pages, study resources, course information, and mock tests responsibly and in line with these terms.",
    sections: [
      {
        title: "Educational information",
        paragraphs: [
          "Website articles, resources, course descriptions, and mock tests are provided for general educational and preparation purposes. They are not a substitute for official exam notifications, syllabi, eligibility rules, or university admission requirements. Check the relevant official sources for current and authoritative information.",
        ],
      },
      {
        title: "Courses and enquiries",
        paragraphs: [
          "Course descriptions and listed prices are provided to help you explore available preparation options. Availability, coverage, schedules, and prices may change. Contact Worldwise Education Consultants to confirm current details before making an enrolment or payment decision.",
          "Submitting an enquiry does not itself create an enrolment, guarantee a response time, or establish a student-institute relationship.",
        ],
      },
      {
        title: "Mock tests and results",
        paragraphs: [
          "Mock tests are practice tools. Scores depend on the questions, answer choices, and marking rules configured for a particular test. They are not official exam results and do not predict or guarantee admission, a rank, or any other outcome.",
          "You are responsible for reviewing the test instructions and marking scheme before starting. Avoid refreshing, clearing browser data, or switching devices during an attempt if you want to preserve locally stored progress.",
        ],
      },
      {
        title: "Acceptable use",
        paragraphs: [
          "Do not misuse the website, interfere with its operation, attempt unauthorized access, upload harmful material, or use its content in a way that violates applicable law or another person's rights.",
          "Website text, design, and materials may not be copied, republished, or commercially redistributed without permission, except where applicable law allows it.",
        ],
      },
      {
        title: "Availability and changes",
        paragraphs: [
          "We aim to keep the website useful and available, but features and content may be changed, interrupted, or removed. The website is provided without a promise that it will always be uninterrupted, error-free, or suitable for every purpose.",
          "These terms may be updated as the website changes. Continued use after an update means you agree to the revised terms.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "Questions about these terms can be sent to info@worldwiseedu.org or by post to G-93 2nd Floor Ramphal Chowk Road, Palam Extention Dwarka - 110077, India.",
        ],
      },
    ],
  },
};

const LegalPage = ({ type }) => {
  const page = legalPages[type];

  if (!page) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-900">
          Policy page not found
        </h1>
        <Link
          to="/"
          className="mt-5 inline-block font-semibold text-red-900 underline underline-offset-2"
        >
          Return home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-[65vh] bg-gray-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-gray-500">
          <Link to="/" className="text-red-900 hover:underline">
            Home
          </Link>
          <span aria-hidden="true" className="px-2">/</span>
          <span>{page.title}</span>
        </nav>

        <header className="rounded-2xl bg-red-900 px-5 py-8 text-white sm:px-8 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300 sm:text-sm">
            World Wise Education
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            {page.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-100 sm:text-base">
            {page.intro}
          </p>
          <p className="mt-4 text-xs text-red-100">
            Last updated: October 27, 2026
          </p>
        </header>

        <div className="mt-6 space-y-4">
          {page.sections.map((section, index) => (
            <section
              key={section.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7"
            >
              <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                <span className="mr-2 text-sm font-bold text-red-800">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-gray-600 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm leading-6 text-gray-700">
          These pages explain the website's current practices in plain
          language and are not legal advice. Contact us if you have a question
          about the website or information you submitted.
        </p>
      </div>
    </main>
  );
};

export default LegalPage;
