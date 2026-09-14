import "../index.css";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <div className="text-black flex justify-around items-start">
      <div className="w-full bg-gray-100  text-black">

        <div className="max-w-7xl mx-auto px-4  py-1">

          {/* ================= MOBILE ================= */}
          <div className="flex md:hidden items-center justify-between text-sm">

            {/* Landline */}
            <a
              href="tel:9891775177"
              className="flex items-center gap-1 hover:text-blue-600 transition no-underline text-black"
            >
              <span>☎</span>
              <span>98917 75177</span>
            </a>

            {/* Visit Us */}
            <a
              href="https://www.worldwiseedu.in/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition no-underline text-black"
            >
              Visit Us
            </a>

          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:flex flex-wrap items-center justify-between gap-4 text-sm">

            {/* Phone */}
            <div className="flex flex-wrap items-center gap-2">

              <a
                href="tel:01121980242"
                className="flex items-center gap-1 hover:text-blue-600 transition no-underline text-black"
              >
                <span>☎</span>
                <span>011219 80242</span>
              </a>

              <span>|</span>

              <a
                href="tel:9891775177"
                className="flex items-center gap-1 hover:text-blue-600 transition no-underline text-black"
              >
                <span>☎</span>
                <span>98917 75177</span>
              </a>

            </div>

            {/* Email */}
            <a
              href="mailto:worldwiseindia@gmail.com"
              className="flex items-center gap-1 hover:text-blue-600 transition no-underline text-black"
            >
              <span>✉</span>
              <span>worldwiseindia@gmail.com</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/worldwisse.india/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-blue-600 transition no-underline text-black"
            >
              <span>◎</span>
              <span>Instagram</span>
            </a>

            {/* Visit Us */}
            <a
              href="https://www.worldwiseedu.in/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 w-fit hover:text-blue-600 transition no-underline text-black"
            >
              <span>Visit Us</span>
            </a>

            {/* Contact + E-Brochure */}
            <div className="flex justify-center items-end">
              <ul className="flex gap-5 list-none m-0 p-0">

                <li>
                  <Link
                    to="/contact"
                    className="text-black hover:text-blue-600 transition no-underline"
                  >
                    Contact
                  </Link>
                </li>

                <span className="text-black">|</span>

                <li>
                  <Link
                    to="/brochure"
                    className="text-black hover:text-blue-600 transition no-underline"
                  >
                    E-Brochure
                  </Link>
                </li>

              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Head;