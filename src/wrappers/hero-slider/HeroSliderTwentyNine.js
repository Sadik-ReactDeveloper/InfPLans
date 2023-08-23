import React, { useEffect, useState } from "react";

// import HeroSliderTwentyNineSingle from "../../components/hero-slider/HeroSliderTwentyNineSingle.js";
import axiosConfig from "../../axiosConfig";
const HeroSliderTwentyNine = () => {
  // const [sliderData, setSliderData] = useState([]);

  // useEffect(() => {
  //   axiosConfig
  //     .get("/admin/getbanner")
  //     .then(response => {
  //       setSliderData(response.data.data);
  //     })
  //     .catch(error => {
  //       console.log("error", error);
  //     });
  // }, []);
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,

    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    ),
  };
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <section
          class="home-hero-section-bg"
          alt="Find the righ  t coverage for your trip"
          id="home-hero-section-background"
        >
          <div id="home-hero-section">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="text-white text-center">
                    FIND THE RIGHT COVERAGE <br />
                    FOR YOUR TRIP WORLDWIDE
                  </h1>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="get-a-quote-container row py-2">
                  <div className="form-group col-md-3 col-xs-12 qelement">
                    <div input-group input-daterange id="cFrom">
                      <div className="form-row">
                        <div className="row ">
                          <div className="col-md-6 col-lg-6 pl-0 start-date-title ">
                            <lable className="dates">Start Date</lable>
                            <input
                              type="date"
                              name="cqs-date"
                              className="dropped form-control"
                            />
                          </div>
                          <div className="col-md-6 col-lg-6 pl-0 start-date-title ">
                            <lable className="dates">End Date</lable>
                            <input
                              type="date"
                              name="cqs-date"
                              className="dropped form-control"
                              data-toggle="dropdown"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <lable className="CoverageArea">Coverage Area</lable>

                    <details className="DetailsDropdown">
                      <summary>Coverage (for:International ,Below:)</summary>
                      <div className="py-2">
                        <label>Area:</label>
                        <select
                          class="form-control form-select "
                          aria-label="Default select example"
                        >
                          <option selected value="1">
                            One
                          </option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="py-2 mt-1">
                        <label>Maximum:</label>
                        <select
                          class="form-control form-select"
                          aria-label="Default select example"
                        >
                          <option selected value="1">
                            One
                          </option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </details>
                  </div>
                  <div className="col-md-4">
                    <lable className="CoverageArea">DOB</lable>
                    <input
                      type="date"
                      name="cqs-date"
                      className="dropped form-control"
                    />
                  </div>
                </div>
                <div
                  className=" row py-4"
                  style={{
                    backgroundColor: "#252362",
                    justifyContent: "center",
                  }}
                >
                  <div className="col-md-5 pt-2 col-xs-12 ">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      className="EmailInput"
                    />
                  </div>
                  <div className="col-md-3">
                    <button className="custombtn2 text-white">Get Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSliderTwentyNine;
