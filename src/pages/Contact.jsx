import React from 'react'

function Contact() {
  return (
    <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            Contact Us
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
      {/* Contact Start */}
      <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Contact Us
          </h6>
          <h1 className="mb-5">Contact For Any Question</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <h5>Get In Touch</h5>
            <p className="mb-4">
              we are here:
            </p>
            <div className="d-flex align-items-center mb-4">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                style={{ width: 50, height: 50 }}
              >
                <i className="fa fa-map-marker-alt text-white" />
              </div>
              <div className="ms-3">
                <h5 className="text-primary">Office</h5>
                <p className="mb-0">avenue hedi el nwira,jasmin,nabeul</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                style={{ width: 50, height: 50 }}
              >
                <i className="fa fa-phone-alt text-white" />
              </div>
              <div className="ms-3">
                <h5 className="text-primary">Mobile</h5>
                <p className="mb-0">+216 72600600</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                style={{ width: 50, height: 50 }}
              >
                <i className="fa fa-envelope-open text-white" />
              </div>
              <div className="ms-3">
                <h5 className="text-primary">Email</h5>
                <p className="mb-0">WeTravel@agency.gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
  <iframe
    className="position-relative rounded w-100 h-100"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.573269087675!2d10.733046115495033!3d36.45615058024809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13d3c9a351f0b56b%3A0xc76edc1a4a7b739!2sNabeul%2C%20Tunisia!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
    frameBorder={0}
    style={{ minHeight: 300, border: 0 }}
    allowFullScreen=""
    aria-hidden="false"
    tabIndex={0}
  />
</div>

          <div
            className="col-lg-4 col-md-12 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 100 }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Contact End */}
    </div>
  )
}

export default Contact
