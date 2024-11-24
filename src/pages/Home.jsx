  import React, { useEffect, useState } from 'react'
  import Calandar from '../components/Calandar'
import axios from 'axios';


export default function Home() {
  const [packages, setPackages] = useState([]); // State to store fetched packages
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch packages from API
  const fetchPackages = async () => {
    try {
      const response = await axios.get("http://localhost:3000/packages");
      setPackages(response.data.data); // Store the data in the state
      setLoading(false);
    } catch (err) {
      setError("Failed to load packages");
      setLoading(false);
    }
  };

  // Call fetchPackages on component mount
  useEffect(() => {
    fetchPackages();
  }, []); // Empty dependency array ensures it runs only on mount

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-5 text-danger">{error}</div>;
  }
    return (
      <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">
                  Enjoy Your Vacation With Us
                </h1>
                <p className="fs-4 text-white mb-4 animated slideInDown">
                Discover Your Perfect Getaway – Where Adventure Meets Comfort!
              
                </p>
                <div className="position-relative w-75 mx-auto animated slideInDown">
                  <div>
                  <Calandar/>
                  </div>
                 
                  
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                    style={{ marginTop: 7 }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
              {/* About Start */}
      
      {/* About End */}
      {/* Service Start */}
    
      {/* Service End */}
      {/* Destination Start */}
      
      {/* Destination Start */}
      {/* Package Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Packages
            </h6>
            <h1 className="mb-5">Awesome Packages</h1>
          </div>
          <div className="row g-4 justify-content-center">
             {/* Render loading spinner, error message, or the package list */}
             {loading && (
              <div className="text-center py-5">Loading...</div>
            )}
            {error && (
              <div className="text-center py-5 text-danger">{error}</div>
            )}
            {!loading &&
              !error &&
              packages.map((pkg) => (
                <div
                  key={pkg._id}
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="package-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid"
                        src={
                          pkg.images.length > 0
                            ? pkg.images[0].filepath // Use the first image if available
                            : "placeholder.jpg" // Fallback image
                        }
                        alt={pkg.name}
                      />
                    </div>
                    <div className="d-flex border-bottom">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        {pkg.location}
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-calendar-alt text-primary me-2" />
                        {pkg.max_people} People
                      </small>
                      <small className="flex-fill text-center py-2">
                        <i className="fa fa-user text-primary me-2" />
                        {pkg.price_per_day} DNT / day
                      </small>
                    </div>
                    <div className="text-center p-4">
                      <h3 className="mb-0">{pkg.price_per_day} DNT</h3>
                      <p>{pkg.description}</p>
                      <div className="d-flex justify-content-center mb-2">
                        <a
                          href="#"
                          className="btn btn-sm btn-primary px-3 border-end"
                          style={{ borderRadius: "30px 0 0 30px" }}
                        >
                          Read More
                        </a>
                        <a
                          href="#"
                          className="btn btn-sm btn-primary px-3"
                          style={{ borderRadius: "0 30px 30px 0" }}
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* Package End */}
      {/* Booking Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="booking p-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-6 text-white">
                <h6 className="text-white text-uppercase">Booking</h6>
                <h1 className="text-white mb-4">Online Booking</h1>
                <p className="mb-4">
                Don't miss out on this exclusive offer—create unforgettable vacation memories with us!
                </p>
                <p className="mb-4">
                Seize this unique opportunity—your dream vacation awaits with us!
                </p>
                <a className="btn btn-outline-light py-3 px-5 mt-2" href="">
                  Read More
                </a>
              </div>
              <div className="col-md-6">
                <h1 className="text-white mb-4">Book A Tour</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent"
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
                          className="form-control bg-transparent"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="form-floating date"
                        id="date3"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control bg-transparent datetimepicker-input"
                          id="datetime"
                          placeholder="Date & Time"
                          data-target="#date3"
                          data-toggle="datetimepicker"
                        />
                        <label htmlFor="datetime">Date &amp; Time</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select bg-transparent"
                          id="select1"
                        >
                          <option value={1}>tozeur</option>
                          <option value={2}>hammamet</option>
                          <option value={3}>sousse</option>
                        </select>
                        <label htmlFor="select1">Destination</label>
                      </div>  
                    </div>
                    <div className="col-12">
                     
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-outline-light w-100 py-3"
                        type="submit"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Start */}
      {/* Process Start */}
    
      {/* Process Start */}
      {/* Team Start */}
    
      {/* Team End */}
      {/* Testimonial Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          
          <div className="owl-carousel testimonial-carousel position-relative">
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-1.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-2.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-3.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-4.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}  
      </div>
    )
  }
