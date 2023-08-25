import React from "react";
import LayoutOne from "../../../layouts/LayoutOne";
import planRighttImg from "../../../assets/imgs/plans/inf-logo.png";
import travelImg from "../../../assets/imgs/plans/travel-img.png";
import { Button } from "reactstrap";
export default function EliteNetwork() {
  return (
    <LayoutOne headerTop="visible">
      <section id="plans-section-2 elite-section1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="plan-container ">
                <div className="row">
                  <div className="col-lg-12">
                    <div>
                      <h2>
                        What is the INF Elite International Visitor Accident &
                        Sickness Insurance (IVAS)?
                      </h2>
                    </div>
                    {/* <div className="">
                      <img src={planRighttImg} alt="ddd" />
                    </div>
                    <p className="text-center plans-title">Elite Network</p> */}
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-8 col-md-8">
                      <p className="text-black">
                        INF Elite IVAS Plan is our flagship insurance program
                        for INF members visiting the USA, Canada, or Mexico.
                      </p>
                      <p className="text-black">
                        INF Elite IVAS Plan is not available to US residents and
                        is <b>only available to non-US residents</b>
                      </p>
                      <p className="text-black">
                        INF Elite IVAS provides coverage for pre-existing
                        conditions as defined in the plan, as per policy
                        limitations, exclusions and maximums, with no benefit
                        waiting period.
                      </p>
                      <a href="#" className="read-more">
                        Read More
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <img src={planRighttImg} alt="ddd" />
                      <p className="text-blue text-center">
                        INF Elite IVAS Plan
                      </p>
                      <Button className="plan-btn">
                        Click to Get a Quote{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="elite-section2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>
                As a plan member you will also have access to additional
                Non-Insurance Features when traveling to the USA including:
              </h3>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6">
                <ul>
                  <li>
                    Access to a Careington discount program at no additional
                    cost with the INF Elite IVAS Plan. Careington coordinates
                    this discount program, which provides savings on Dental,
                    Vision, Prescription, & Hearing products & services in the
                    United States. For example, you may see savings of up to 50%
                    for Dental procedures! For more information on benefits of
                    the discount program, please visit our page on the Discount
                    Card Program. This Discount card program is not an insurance
                    product and is not insured by Crum & Forster SPC. This is
                    not insurance.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <img src={travelImg} alt="premier" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutOne>
  );
}
