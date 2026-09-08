import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="container">
  <form className="mx-auto mt-5 p-4 shadow rounded" style={{ maxWidth: "500px" }}>

    <h2 className="text-center mb-4">Contact Us</h2>

    <div className="mb-3">
      <label className="form-label">Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter your name"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Email</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter your email"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Message</label>
      <textarea
        className="form-control"
        rows="4"
      ></textarea>
    </div>

    <button className="btn btn-primary w-100">
      Submit
    </button>

  </form>
</div>
    </>
  )
}

export default Contact
