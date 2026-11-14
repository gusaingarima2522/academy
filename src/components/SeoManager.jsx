import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteName = "Worldwise Education Consultants";
const siteUrl = "https://worldwiseedu.org";

const pageMeta = {
  "/": {
    title: "Worldwise Education Consultants | CLAT, CUET & JEE Preparation",
    description:
      "Explore CLAT and CUET preparation guidance, courses, study resources, and JEE mock tests from Worldwise Education Consultants.",
  },
  "/courses": {
    title: "Courses | Worldwise Education Consultants",
    description: "Explore structured CLAT, CUET, and entrance-exam preparation options.",
  },
  "/about": {
    title: "About Worldwise Education Consultants",
    description: "Learn about Worldwise Education Consultants and its exam preparation support.",
  },
  "/clat": {
    title: "CLAT Coaching and Preparation | Worldwise Education Consultants",
    description: "Explore CLAT preparation guidance and coaching support in Delhi.",
  },
  "/cuet": {
    title: "CUET Coaching and Preparation | Worldwise Education Consultants",
    description: "Explore CUET preparation guidance and coaching support in Delhi.",
  },
  "/resources": {
    title: "Study Resources | Worldwise Education Consultants",
    description: "Find study resources and preparation guidance for CLAT, CUET, and JEE.",
  },
  "/blogs": {
    title: "Exam Preparation Blogs | Worldwise Education Consultants",
    description: "Read practical preparation guidance for CLAT, CUET, and entrance exams.",
  },
  "/notifications": {
    title: "Exam Notifications | Worldwise Education Consultants",
    description: "Review exam updates and notification guidance, and verify details on official sources.",
  },
  "/contact": {
    title: "Contact Worldwise Education Consultants",
    description: "Contact Worldwise Education Consultants for course and preparation guidance.",
  },
  "/jeemocktest": {
    title: "JEE Mock Tests | Worldwise Education Consultants",
    description: "Practise Physics, Chemistry, and Mathematics with subject-wise JEE mock tests.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Worldwise Education Consultants",
    description: "Read how Worldwise Education Consultants handles information and browser storage.",
  },
  "/cookie-policy": {
    title: "Cookie Policy | Worldwise Education Consultants",
    description: "Learn about necessary browser storage used by the website.",
  },
  "/terms-of-service": {
    title: "Terms of Service | Worldwise Education Consultants",
    description: "Read the terms for using Worldwise Education Consultants resources and mock tests.",
  },
};

const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const basePath = `/${pathname.split("/")[1] || ""}`.replace(/\/$/, "") || "/";
    const meta = pageMeta[pathname] ?? pageMeta[basePath] ?? {
      title: `${siteName} | Exam Preparation`,
      description: "Exam preparation guidance, courses, resources, and practice tests.",
    };
    const canonical = `${siteUrl}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;

    document.title = meta.title;
    const setMeta = (name, content) => {
      let element = document.head.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };
    setMeta("description", meta.description);
    setMeta("robots", "index,follow");
    setMeta("theme-color", "#7f1d1d");
    const setProperty = (property, content) => {
      let element = document.head.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.content = content;
    };
    setProperty("og:title", meta.title);
    setProperty("og:description", meta.description);
    setProperty("og:url", canonical);

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;

    let schema = document.head.querySelector("script[data-site-schema]");
    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.dataset.siteSchema = "true";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/favicon.svg`,
      email: "info@worldwiseedu.org",
      telephone: "+91-9911091380",
      address: {
        "@type": "PostalAddress",
        streetAddress: "G-93 2nd Floor Ramphal Chowk Road, Palam Extention Dwarka",
        postalCode: "110077",
        addressCountry: "IN",
      },
    });
  }, [pathname]);

  return null;
};

export default SeoManager;
