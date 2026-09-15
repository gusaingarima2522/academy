import "../index.css";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <header className="w-full bg-gray-100 text-black">

      <div className="mx-auto w-full max-w-7xl px-4 py-2">

        {/* =====================================================
            MOBILE / TABLET
            ONLY SECOND NUMBER + VISIT US
        ====================================================== */}

        <div className="flex items-center justify-between text-sm md:hidden">

          <a
            href="tel:9891775177"
            className="flex items-center gap-1 text-black no-underline transition hover:text-red-900"
          >
            <span>☎</span>
            <span>98917 75177</span>
          </a>

          <a
            href="https://www.worldwiseedu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black no-underline transition hover:text-red-900"
          >
            Visit Us
          </a>

        </div>


        {/* =====================================================
            DESKTOP
        ====================================================== */}

        <div className="hidden flex-wrap items-center justify-between gap-4 text-sm md:flex">

          {/* PHONE NUMBERS */}

          <div className="flex items-center gap-2">

            <a
              href="tel:01121980242"
              className="flex items-center gap-1 text-black no-underline transition hover:text-red-900"
            >
              <span>☎</span>
              <span>011219 80242</span>
            </a>

            <span>|</span>

            <a
              href="tel:9891775177"
              className="flex items-center gap-1 text-black no-underline transition hover:text-red-900"
            >
              <span>☎</span>
              <span>98917 75177</span>
            </a>

          </div>


          {/* EMAIL */}

          <a
            href="mailto:worldwiseindia@gmail.com"
            className="flex items-center gap-1 text-black no-underline transition hover:text-red-900"
          >
            <span>✉</span>
            <span>worldwiseindia@gmail.com</span>
          </a>


          {/* INSTAGRAM */}

          <a
            href="https://www.instagram.com/worldwisse.india/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-black no-underline transition hover:text-red-900"
          >
            <span>◎</span>
            <span>Instagram</span>
          </a>


          {/* VISIT US */}

          <a
            href="https://www.worldwiseedu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black no-underline transition hover:text-red-900"
          >
            Visit Us
          </a>


          {/* CONTACT + E-BROCHURE */}

          <div className="flex items-center">

            <ul className="m-0 flex list-none gap-4 p-0">

              <li>
                <Link
                  to="/contact"
                  className="text-black no-underline transition hover:text-red-900"
                >
                  Contact
                </Link>
              </li>

              <span>|</span>

              <li>
                <Link
                  to="/brochure"
                  className="text-black no-underline transition hover:text-red-900"
                >
                  E-Brochure
                </Link>
              </li>

            </ul>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Head;
