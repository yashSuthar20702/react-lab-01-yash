import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">My React App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Jumbotron */}
      <div className="container mt-5">
        <div className="p-5 mb-4 bg-light rounded-3 shadow">
          <div className="container-fluid py-5 text-center">
            <h1 className="display-4">Welcome to My React App</h1>
            <p className="lead">Explore this beautifully styled app using Bootstrap components.</p>
            <button className="btn btn-primary btn-lg">Learn More</button>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="container">
        <h2 className="text-center my-4">Our Features</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img src="img1.jpg" className="card-img-top" alt="Feature 1" />
              <div className="card-body">
                <h5 className="card-title">Feature 1</h5>
                <p className="card-text">Description of Feature 1 with some engaging text.</p>
                <button className="btn btn-outline-primary">Read More</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img src="img.jpg" className="card-img-top" alt="Feature 2" />
              <div className="card-body">
                <h5 className="card-title">Feature 2</h5>
                <p className="card-text">Description of Feature 2 with some engaging text.</p>
                <button className="btn btn-outline-primary">Read More</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img src="img.jpg" className="card-img-top" alt="Feature 3" />
              <div className="card-body">
                <h5 className="card-title">Feature 3</h5>
                <p className="card-text">Description of Feature 3 with some engaging text.</p>
                <button className="btn btn-outline-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light py-3 mt-5">
        <div className="container text-center">
          <p className="mb-0">&copy; 2025 My React App. All rights reserved.</p>
          <small>Follow us on <a href="#" className="text-light text-decoration-underline">Social Media</a>.</small>
        </div>
      </footer>
    </>
  );
}

export default App;
