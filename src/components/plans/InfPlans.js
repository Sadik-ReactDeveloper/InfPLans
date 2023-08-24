import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import LayoutOne from "../../layouts/LayoutOne";
import planLeftImg from "../../assets/imgs/plans/elite-network-img.png";
import planRighttImg from "../../assets/imgs/plans/inf-logo.png";
import premier from "../../assets/imgs/plans/premier-img.png";
import travelImg from "../../assets/imgs/plans/travel-img.png";
import standardImg from "../../assets/imgs/plans/standard-img.png";
// import HeroSliderTwentyNineSingle from "../../components/hero-slider/HeroSliderTwentyNineSingle.js";
import axiosConfig from "../../axiosConfig";
const InfPlan = () => {
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
    <LayoutOne headerTop="visible">
      <div className="slider-area">
        <div className="slider-active nav-style-1">
          <section
            class="home-hero-section-bg sectionPart"
            alt="Find the righ  t coverage for your trip"
            id="Inf-plans"
          >
            <div id="plans-section-1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="plans-container">
                      <h2 className="text-blue text-center">
                        Explore Insurance for Visitors
                      </h2>
                      <p className="text-center">
                        We offer insurance plans for international visitors
                        traveling worldwide outside their home countries, from
                        most countries in the world. You should consider
                        International Visitors Accident and Sickness Insurance
                        when traveling outside your home country- especially
                        when staying for a defined period of time. It is
                        important to find an insurance plan which fits your
                        needs. For over 30 years, INF has provided unique and
                        innovative accident & sickness insurance to individuals
                        from across the world visiting anywhere outside their
                        home country.
                      </p>
                      <p className="text-center">
                        *INF Elite, Traveler, Standard, & Premier are not
                        available to US residents and are only available to
                        non-US residents
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="plans-section-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="plan-container ">
                    <div className="row">
                      <div className="box"></div>
                      <div className="col-lg-3">
                        <div className="">
                          <img src={planLeftImg} alt="ddd" />
                        </div>
                        <p className="text-center plans-title">Elite Network</p>
                      </div>
                      <div className="col-lg-6">
                        <h4>
                          Insurance Benefits underwritten by Crum & Forster,
                          SPC:
                        </h4>
                        <ul className="UlList">
                          <li>Coverage for non-US residents ages 0-99 years</li>

                          <li>
                            Short-term travel medical coverage (90 days to 364
                            days)
                          </li>
                          <li>
                            Utilizes UnitedHealthcare Options PPO (including
                            Direct Billing)
                          </li>

                          <li>
                            Maximum Limits of $75,000 (Age 70-99), or $150,000,
                            $250,000, $300,000, $500,000, $1,000,000 (Age 0-69)
                          </li>

                          <li>
                            Includes Pre-Existing Condition coverage (see plan
                            details)
                          </li>
                          <li>
                            Pre-Existing Conditions Coverage up to $20,000 (Age
                            70-99) or $25,000, $30,000, $40,000, or $50,000 (Age
                            0-69)
                          </li>
                        </ul>
                        <h4>
                          Non-Insurance Benefits (not associated with Crum &
                          Forster SPC):
                        </h4>
                        <ul className="UlList">
                          <li>
                            24/7/365 Medical Concierge INF-Robin Assist, which
                            makes appointments and arranges direct billing for
                            members
                          </li>

                          <li>
                            Priority Pass Airport Lounge Access as an addon
                          </li>
                          <li>
                            VIP Airport Assistance as an addon (when requested
                            and organized by INF-Robin Assist at available
                            airports)
                          </li>

                          <li>
                            Telehealth Provided by Doctor Please! (available
                            while visiting anywhere worldwide)
                          </li>

                          <li>
                            Dental, Vision, Hearing, and Prescription Discount
                            coordinated by Careington International (available
                            while visiting the US only)
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="plans-logo">
                          <img src={planRighttImg} alt="right" />
                        </div>
                        <p className="text-center plans-title">Elite Network</p>
                        <button className=" plan-btn">Plan Details</button>
                        <a href="#">
                          <button className=" get-btn">Get a Quate</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="plans-section-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="plan-container ">
                    <div className="row">
                      <div className="box"></div>
                      <div className="col-lg-3">
                        <div className="">
                          <img src={premier} alt="premier" />
                        </div>
                        <p className="text-center plans-title">Premier</p>
                      </div>
                      <div className="col-lg-6">
                        <h4>
                          Insurance Benefits underwritten by Crum & Forster,
                          SPC:
                        </h4>
                        <ul className="UlList">
                          <li>Coverage for non-US residents ages 0-99 years</li>

                          <li>
                            Short-term travel medical coverage (90 days to 364
                            days)
                          </li>
                          <li>
                            Direct Billing may be available from providers
                          </li>

                          <li>
                            Maximum Limits of $100,000, $150,000, $300,000,
                            $500,000, and $1,000,000
                          </li>

                          <li>
                            Pre-Existing Limits of $15,000 and $25,000 (Age
                            70-99) or $20,000, $30,000, $40,000, $50,000,
                            $100,000, $150,000 or $200,000
                          </li>
                          <li>
                            Includes Pre-Existing Condition Coverage (See plan
                            details)
                          </li>
                        </ul>
                        <h4>
                          Non-Insurance Benefits (not associated with Crum &
                          Forster SPC):
                        </h4>
                        <ul className="UlList">
                          <li>
                            24/7/365 Medical Concierge INF-Robin Assist, which
                            makes appointments and arranges direct billing for
                            members
                          </li>

                          <li>
                            Priority Pass Airport Lounge Access as an addon
                          </li>
                          <li>
                            VIP Airport Assistance as an addon (when requested
                            and organized by INF-Robin Assist at available
                            airports)
                          </li>

                          <li>
                            Telehealth Provided by Doctor Please! (available
                            while visiting anywhere worldwide)
                          </li>

                          <li>
                            Dental, Vision, Hearing, and Prescription Discount
                            coordinated by Careington International (available
                            while visiting the US only)
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="plans-logo">
                          <img src={planRighttImg} alt="right" />
                        </div>
                        <p className="text-center plans-title">Premier</p>
                        <button className=" plan-btn">Plan Details</button>
                        <a href="#">
                          <button className=" get-btn">Get a Quate</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="plans-section-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="plan-container ">
                    <div className="row">
                      <div className="box"></div>
                      <div className="col-lg-3">
                        <div className="">
                          <img src={travelImg} alt="premier" />
                        </div>
                        <p className="text-center plans-title">Traveler USA</p>
                      </div>
                      <div className="col-lg-6">
                        <h4>
                          Insurance Benefits underwritten by Crum & Forster,
                          SPC:
                        </h4>
                        <ul className="UlList">
                          <li>Coverage for non-US residents ages 0-99 years</li>

                          <li>
                            Short-term travel medical coverage (90 days to 364
                            days)
                          </li>
                          <li>
                            Utilizes UnitedHealthcare Options PPO (including
                            Direct Billing)
                          </li>

                          <li>
                            Maximum Limits of $75,000 (Age 70-99) or $150,000,
                            $250,000, or $300,000 (Age 0-69)
                          </li>
                        </ul>
                        <h4>
                          Non-Insurance Benefits (not associated with Crum &
                          Forster SPC):
                        </h4>
                        <ul className="UlList">
                          <li>
                            24/7/365 Medical Concierge INF-Robin Assist, which
                            makes appointments and arranges direct billing for
                            members
                          </li>

                          <li>
                            Telehealth Provided by Doctor Please! (available
                            while visiting anywhere worldwide)
                          </li>
                          <li>
                            Dental, Vision, Hearing, and Prescription Discount
                            coordinated by Careington International (available
                            while visiting the US only)
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="plans-logo">
                          <img src={planRighttImg} alt="right" />
                        </div>
                        <p className="text-center plans-title">Traveler USA</p>
                        <button className=" plan-btn">Plan Details</button>
                        <a href="#">
                          <button className=" get-btn">Get a Quate</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="plans-section-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="plan-container ">
                    <div className="row">
                      <div className="box"></div>
                      <div className="col-lg-3">
                        <div className="">
                          <img src={standardImg} alt="premier" />
                        </div>
                        <p className="text-center plans-title">Standard</p>
                      </div>
                      <div className="col-lg-6">
                        <h4>
                          Insurance Benefits underwritten by Crum & Forster,
                          SPC:
                        </h4>
                        <ul className="UlList">
                          <li>Coverage for non-US residents ages 0-99 years</li>

                          <li>
                            Short-term travel medical coverage (30 days to 364
                            days)
                          </li>
                          <li>
                            Direct Billing may be available from providers
                          </li>

                          <li>
                            Maximum Limits of $50,000, $100,000, or $150,000
                          </li>
                        </ul>
                        <h4>
                          Non-Insurance Benefits (not associated with Crum &
                          Forster SPC):
                        </h4>
                        <ul className="UlList">
                          <li>
                            24/7/365 Medical Concierge INF-Robin Assist, which
                            makes appointments and arranges direct billing for
                            members
                          </li>

                          <li>
                            Telehealth Provided by Doctor Please! (available
                            while visiting anywhere worldwide)
                          </li>
                          <li>
                            Dental, Vision, Hearing, and Prescription Discount
                            coordinated by Careington International (available
                            while visiting the US only)
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="plans-logo">
                          <img src={planRighttImg} alt="right" />
                        </div>
                        <p className="text-center plans-title">Standard</p>
                        <button className=" plan-btn">Plan Details</button>
                        <a href="#">
                          <button className=" get-btn">Get a Quate</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </LayoutOne>
  );
};

export default InfPlan;
