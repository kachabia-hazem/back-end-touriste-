import React, { useEffect, useState, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../components/AuthContext";

function Packages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isLogin } = useContext(AuthContext);

  const startDate = searchParams.get("start_date");
  const endDate = searchParams.get("end_date");

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get("http://localhost:3000/packages");
        setPackages(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load packages");
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const reserve = async (pkg) => {
    const userId = localStorage.getItem("user_id");

    if (!isLogin || !userId) {
      // Redirect to login page and pass current location for redirection after login
      navigate("/login", { state: { redirectTo: "/packages" } });
      return;
    }
    console.log({id_user: userId,
      id_package: pkg._id,
      date_depart: startDate,
      date_arrive: endDate})
    try {
      const response = await axios.post("http://localhost:3000/reservations/create", {
        id_user: userId,
        id_package: pkg._id,
        date_depart: startDate,
        date_arrive: endDate,
      });
      
      if (response.status === 201) {
        alert("Reservation created successfully!");
      }
    } catch (err) {
      alert("Failed to create reservation: " + (err.response?.data?.message || err.message));
    }
  };

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
              <h1 className="display-3 text-white animated slideInDown">Packages</h1>
              {startDate && endDate && (
                <p className="text-white">
                  Selected Dates: {startDate} - {endDate}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title text-primary">Packages</h6>
            <h1 className="mb-5">Awesome Packages</h1>
          </div>
          <div className="row g-4">
            {packages.map((pkg) => (
              <div key={pkg._id} className="col-lg-4 col-md-6">
                <div className="package-item">
                  <img
                    className="img-fluid"
                    src={
                      pkg.images.length > 0
                        ? pkg.images[0].filepath
                        : "placeholder.jpg"
                    }
                    alt={pkg.name}
                  />
                  <div className="text-center p-4">
                    <h3>{pkg.name}</h3>
                    <p>{pkg.description}</p>
                    <p>{pkg.price_per_day} DNT per day</p>
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                    <button
                      onClick={() => reserve(pkg)}
                      className="btn btn-primary"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
