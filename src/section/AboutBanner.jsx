import React from "react";
import "./section.css";
import wwa from "../assets/wwa.mp4";

const AboutBanner = () => {
  return (
    <section className="About-Banner">

      {/* =====================================================
          ABOUT CONTENT
      ====================================================== */}

      <div className="About-Content">

        <h2>
          About World Wise Academy
        </h2>


        <p>
          World Wise Academy is an educational initiative that has grown from
          the vision and experience of World Wise Consultancy. We aim to guide
          students towards the right academic opportunities and help them build
          a strong foundation for their future.
        </p>


        <p>
          We offer focused entrance-exam preparation through CLAT and CUET
          courses. Our aim is not just to help students prepare for an
          examination, but to develop knowledge, confidence, discipline and
          essential skills.
        </p>


        <p>
          Whether students are preparing for CLAT to pursue a career in law or
          CUET to seek admission to leading universities, World Wise Academy
          strives to be a trusted partner throughout their preparation journey.
        </p>

      </div>


      {/* =====================================================
          VIDEO
      ====================================================== */}

      <div className="About-Video">

        <video
          controls
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >

          <source
            src={wwa}
            type="video/mp4"
          />

          Your browser does not support video playback.

        </video>

      </div>

    </section>
  );
};

export default AboutBanner;
