import "./section.css";
import { useState } from "react";
import { submitContactForm } from "../services/contactService";

const Cuet = () => {
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
        form_source: "cuet_enquiry",
      });
      setStatus({ loading: false, message: result.message, error: "" });
      setFormData({ full_name: "", email: "", phone: "", preferred_time: "", message: "" });
    } catch (error) {
      console.error("CUET enquiry submission failed.", error);
      setStatus({ loading: false, message: "", error: error.message });
    }
  };

  return (
    <section className="cuet-hero">

      {/* Dark Overlay */}
      <div className="cuet-overlay"></div>

      <div className="cuet-hero-container">

        {/* =================================
            LEFT CONTENT
        ================================= */}
        <div className="cuet-hero-content">

          <h1>
            BEST CUET COACHING IN
            <br />
            DELHI
          </h1>

          <div className="cuet-line"></div>

          <p>
            CUET is the Common University Entrance Test conducted for
            admission to undergraduate programmes in universities across
            India. Preparing for CUET requires strong concepts, regular
            practice, proper time management, and a focused strategy for
            different sections of the examination.
          </p>

        </div>


        {/* =================================
            RIGHT FORM
        ================================= */}
        <div className="cuet-contact-wrapper">

          <form className="cuet-contact-form" onSubmit={handleSubmit}>

            <h2>Get in Touch</h2>

            <div className="cuet-form-line"></div>

            <div className="cuet-field">
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={(event) => setFormData({ ...formData, full_name: event.target.value })}
                required
                placeholder="Enter Full Name"
              />
            </div>

            <div className="cuet-field">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                required
                placeholder="Enter Email Address"
              />
            </div>

            <div className="cuet-field">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                required
                placeholder="Enter Phone Number"
              />
            </div>

            <div className="cuet-field">
              <input
                type="text"
                name="preferred_time"
                value={formData.preferred_time}
                onChange={(event) => setFormData({ ...formData, preferred_time: event.target.value })}
                placeholder="Preferred Time for a Call"
              />
            </div>

            <div className="cuet-field">
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



    </section>
  );
};

export default Cuet;