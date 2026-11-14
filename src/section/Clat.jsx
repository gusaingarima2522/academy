import "./section.css";
import { useState } from "react";
import { submitContactForm } from "../services/contactService";

const Clat = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    preferred_time: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, message: "", error: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: "", error: "" });

    try {
      const result = await submitContactForm({
        ...formData,
        form_source: "clat_enquiry",
      });
      setStatus({ loading: false, message: result.message, error: "" });
      setFormData({ full_name: "", email: "", phone: "", preferred_time: "", message: "" });
    } catch (error) {
      console.error("CLAT enquiry submission failed.", error);
      setStatus({ loading: false, message: "", error: error.message });
    }
  };

  return (
    <section className="clat-hero">

      {/* Dark Overlay */}
      <div className="clat-overlay"></div>

      <div className="clat-hero-container">

        {/* =================================
            LEFT CONTENT
        ================================= */}
        <div className="clat-hero-content">

          <h1>
            BEST CLAT COACHING IN
            <br />
            DELHI
          </h1>

          <div className="clat-line"></div>

          <p>
            CLAT 2027 is the exam for admission in undergraduate and
            postgraduate law programs of India. There are 120 questions in
            CLAT and the test duration is 2 hours, which means that you have
            1 minute per question to crack the exam. The CLAT preparation is
            no joke and needs to be done in the best way as every section
            requires a specific strategy or trick for the question to be
            completed within a minute.
          </p>

        </div>


        {/* =================================
            RIGHT FORM
        ================================= */}
        <div className="clat-contact-wrapper">

          <form className="clat-contact-form" onSubmit={handleSubmit}>

            <h2>Get in Touch</h2>

            <div className="clat-form-line"></div>

            <div className="clat-field">
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={(event) => setFormData({ ...formData, full_name: event.target.value })}
                required
                placeholder="Enter Full Name"
              />
            </div>

            <div className="clat-field">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                required
                placeholder="Enter Email Address"
              />
            </div>

            <div className="clat-field">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                required
                placeholder="Enter Phone Number"
              />
            </div>

            <div className="clat-field">
              <input
                type="text"
                name="preferred_time"
                value={formData.preferred_time}
                onChange={(event) => setFormData({ ...formData, preferred_time: event.target.value })}
                placeholder="Preferred Time for a Call"
              />
            </div>

            <div className="clat-field">
              <textarea
                name="message"
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                placeholder="Enter your message"
                rows="3"
              ></textarea>
            </div>

            {status.error && <p role="alert">{status.error}</p>}
            {status.message && <p role="status">{status.message}</p>}
            <button type="submit" disabled={status.loading}>
              {status.loading ? "Submitting..." : "Submit"}
            </button>

          </form>

        </div>

      </div>


      {/* =================================
          FLOATING CALL BUTTON

      {/* =================================
          FLOATING WHATSAPP BUTTON
      ================================= */}

    </section>
  );
};

export default Clat;