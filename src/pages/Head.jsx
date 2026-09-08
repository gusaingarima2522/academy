import "../index.css";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <div className="bg-gray-100 py-4 flex justify-around items-start">
      
      {/* Copyright */}
      <p className="text-center text-gray-600 text-sm mb-3">
        © 2026 My App. All Rights Reserved.
      </p>

      {/* Links */}
      <div className="flex justify-center items-end">
        <ul className="flex gap-6 list-none m-0 p-0">
          
          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition no-underline"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/brochure"
              className="text-gray-700 hover:text-blue-600 transition no-underline"
            >
              E-Brochure
            </Link>
          </li>

        </ul>
      </div>

    </div>
  );
};

export default Head;