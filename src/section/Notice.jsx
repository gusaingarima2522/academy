import clat_announce from "../assets/clat_announce.pdf";
import cuet_announce from "../assets/cuet_announce.pdf";
import { Link } from "react-router-dom";

const Notice = () => {
  return (
    <div className="notification w-full overflow-hidden">

      {/* =====================================================
          NOTIFICATION TITLE
      ====================================================== */}

      <div className="topic shrink-0">
        <h1>Notification!</h1>
      </div>


      {/* =====================================================
          NOTIFICATION LINKS
      ====================================================== */}

      <div className="crouse-notification">

        <div className="notification-track">

          {/* CLAT PDF */}

          <a
            href={clat_announce}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            CLAT Batch Announcement
          </a>


          <span className="separator">
            &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
          </span>


          {/* CUET PDF */}

                    <a
                        href={cuet_announce}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CUET Batch Announcement
                    </a>
                    <span className="separator"> &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    <Link to='/contact'>Contact Us</Link>

        </div>

      </div>

    </div>
  );
};

export default Notice;
