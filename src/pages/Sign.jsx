import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

function Sign() {
  const { setIsLogin } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/register", formData);

      if (response.status === 201) {
        const { data } = response.data;

        // Update context and local storage
        setIsLogin(true);
        localStorage.setItem("user_id", data._id);

        setSuccessMessage("Registration successful!");

        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          password: "",
        });

        navigate("/");
      } else {
        setError(response.data.message || "An error occurred during registration");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during registration");
      setSuccessMessage("");
    }
  };

  return (
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-6 bg-white p-4 rounded">
            <h2 className="text-center mb-4">Créer un compte</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="first_name" className="form-label">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  placeholder="Entrez votre prénom"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="last_name" className="form-label">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  placeholder="Entrez votre nom"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Entrez votre e-mail"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Entrez votre mot de passe"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Entrez votre numéro de mobile"
                />
              </div>
              <div className="d-grid mb-4">
                <button type="submit" className="btn btn-primary">Inscrire</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
