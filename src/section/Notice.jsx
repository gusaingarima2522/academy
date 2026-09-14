import React from "react";
import clat_announce from "../assets/clat_announce.pdf";
import cuet_announce from "../assets/cuet_announce.pdf";
import { Link } from "react-router-dom";


const Notice = () => {
    return (
        <div className="notification">

            <div className="topic">
                <h1>Notification!</h1>
            </div>

            <div className="crouse-notification">
                <div className="notification-track">

                    <a
                        href={clat_announce}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CLAT Batch Announcement
                    </a>

                    <span className="separator"> &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; </span>

                    <a
                        href={cuet_announce}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CUET Batch Announcement
                    </a>
                    <span className="separator"> &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    <Link to='/contact#contact-section'>Contact Us</Link>

                </div>
            </div>

        </div>
    );
};

export default Notice;