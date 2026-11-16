import "./section.css";
import about from "../assets/about.jpeg";

const AboutBanner = () => {
  return (
    <section className="About-Banner">

      {/* =====================================================
          ABOUT CONTENT
      ====================================================== */}


      <div className="About-Content">
        <h2>About World Wise Academy</h2>

        <p>
          World Wise Academy is an educational initiative built on the vision
          and experience of World Wise Consultancy. We are committed to helping
          students achieve their academic goals through structured preparation,
          quality learning resources and reliable educational guidance.
        </p>

        <p>
          We provide focused preparation for competitive examinations,
          including CLAT, CUET and JEE. Our learning resources include
          comprehensive study notes, topic-wise practice questions, previous
          year question papers (PYQs), PYQ-based exam simulations and mock
          tests to help students strengthen their concepts, improve
          problem-solving skills and build confidence for their examinations.
        </p>

        <p>
          Beyond exam preparation, we offer career guidance and admission
          support to help students explore suitable academic opportunities,
          make informed decisions and take the right steps towards their
          future goals.
        </p>

        <p>
          At World Wise Academy, we believe that effective preparation goes
          beyond studying. It is about developing knowledge, confidence,
          consistency and the skills needed to move forward. Our aim is to
          bring learning resources, exam practice and educational guidance
          together in one place.
        </p>

        <h5>
          World Wise Academy – Prepare Better. Perform Better. Move Forward.
        </h5>
      </div>


      {/* =====================================================
          VIDEO
      ====================================================== */}

      <div className="About-Video">

        {/* <video
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
 */}
 <img src={about} alt="about"
           className="w-full h-full object-cover"
 />
      </div>

    </section>
  );
};

export default AboutBanner;
