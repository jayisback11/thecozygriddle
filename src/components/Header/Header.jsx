import React from "react";
import "./Header.css";
import Carousel from "react-bootstrap/Carousel";
import MenuBtn from "../MenuBtn/MenuBtn";
import { Link } from "react-router-dom";
import data from "../../data.json";

function Header() {
  return (
    <header>
      <Carousel className="carousel-fade mt-5 mt-sm-0">
        <Carousel.Item
          className="vh-100"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${data.welcome.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Carousel.Caption className="h-100 pb-0">
            <div className="row h-100">
              <div className="col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5">
                <h2 className="fw-bold fs-3 text-center text-md-start">
                  Welcome to
                </h2>
                <h1 className="text-capitalize fw-bold text-center text-md-start">
                  {data.welcome.businessname}
                </h1>
                <p className="mb-4 text-center text-md-start">
                  {data.welcome.description}
                </p>
                <div className="d-flex flex-column flex-sm-row">
                  <MenuBtn />
                  <Link to="/contact">
                    <button
                      type="button"
                      className="btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow"
                    >
                      Contact us
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 d-none d-xl-block"></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className="vh-100"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${data.welcome.image2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Carousel.Caption className="h-100 pb-0">
            <div className="row h-100">
              <div className="col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5">
                <h2 className="fw-bold fs-3 text-center text-md-start">
                  Welcome to
                </h2>
                <h1 className="text-capitalize fw-bold text-center text-md-start">
                  {data.welcome.businessname}
                </h1>
                <p className="mb-4 text-center text-md-start">
                  {data.welcome.description2}
                </p>
                <div className="d-flex flex-column flex-sm-row">
                  <MenuBtn />
                  <Link to="/contact">
                    <button
                      type="button"
                      className="btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow"
                    >
                      Contact us
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 d-none d-xl-block"></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className="vh-100"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${data.welcome.image3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Carousel.Caption className="h-100 pb-0">
            <div className="row h-100">
              <div className="col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5">
                <h2 className="fw-bold fs-3 text-center text-md-start">
                  Welcome to
                </h2>
                <h1 className="text-capitalize fw-bold text-center text-md-start">
                  {data.welcome.businessname}
                </h1>
                <p className="mb-4 text-center text-md-start">
                  {data.welcome.description3}
                </p>
                <div className="d-flex flex-column flex-sm-row">
                  <MenuBtn />
                  <Link to="/contact">
                    <button
                      type="button"
                      className="btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow"
                    >
                      Contact us
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 d-none d-xl-block"></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}

export default Header;
