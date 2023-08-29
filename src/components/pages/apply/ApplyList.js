import React, { useState } from "react";
import planRighttImg from "../../../assets/imgs/plans/inf-logo.png";
import classnames from "classnames";
import LayoutOne from "../../../layouts/LayoutOne";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
export default function ApplyList() {
  const [currentActiveTab, setCurrentActiveTab] = useState("1");
  const [list, setList] = useState("1");
  const toggle = tab => {
    console.log(tab);
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };
  const toggleList = tab => {
    console.log(tab);
    if (list !== tab) setList(tab);
  };
  return (
    <LayoutOne headerTop="visible">
      <section id="plans-section-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="plan-container ">
                <div className="row">
                  <div className="box"></div>

                  <div className="col-lg-12">
                    <h1 className="">Apply for INF Visitor Insurance</h1>
                    <div className="plans-logo">
                      <img src={planRighttImg} alt="right" />
                    </div>
                    <div id="headList">
                      <h4>
                        Insurance is offered to persons traveling on a limited
                        duration trip (364 days or less) to the US, Canada or
                        Mexico.
                      </h4>
                      <p>
                        Please note that INF Premier and Elite plans require
                        minimum 90 days enrollment; and Standard and Safe
                        Traveler USA require minimum 30 days enrollment.
                      </p>
                    </div>
                    <div className="container tabmain" id="centerDiv">
                      <div className=" bmi-apply-tab">
                        <div className="row">
                          <Nav tabs>
                            <NavItem>
                              <div className="">
                                <NavLink
                                  className={classnames({
                                    active: currentActiveTab === "1",
                                    TabBmiApply: "TabBmiApply",
                                  })}
                                  onClick={() => toggle("1")}
                                >
                                  <span> Select Plan</span>
                                </NavLink>
                              </div>
                            </NavItem>
                            <NavItem>
                              <div className="">
                                <NavLink
                                  className={classnames({
                                    active: currentActiveTab === "2",
                                    TabBmiApply: "TabBmiApply",
                                  })}
                                  onClick={() => {
                                    toggle("2");
                                  }}
                                >
                                  <span> VISITOR INFORMATION</span>
                                </NavLink>
                              </div>
                            </NavItem>
                            <NavItem>
                              <div className="">
                                <NavLink
                                  className={classnames({
                                    active: currentActiveTab === "3",
                                    TabBmiApply: "TabBmiApply",
                                  })}
                                  onClick={() => {
                                    toggle("3");
                                  }}
                                >
                                  <span> DEPENTAND DETAILS</span>
                                </NavLink>
                              </div>
                            </NavItem>
                            <NavItem>
                              <div className="">
                                <NavLink
                                  className={classnames({
                                    active: currentActiveTab === "4",
                                    TabBmiApply: "TabBmiApply",
                                  })}
                                  onClick={() => {
                                    toggle("4");
                                  }}
                                >
                                  PAYMENT DETAILS
                                </NavLink>
                              </div>
                            </NavItem>
                          </Nav>
                          <div className="container">
                            <TabContent activeTab={currentActiveTab}>
                              <TabPane tabId="1">
                                <Row className="px-3">
                                  <Col lg="6" md="6" sm="12">
                                    <div>
                                      <label>Trip Start Time </label>
                                      <input type="date" name="date" />
                                    </div>
                                    <div>
                                      <label>DOB (Age)</label>
                                      <input type="date" name="date" />
                                    </div>

                                    <h5>PRE-EXISTING COVER</h5>
                                    <div className="mt-2">
                                      <select aria-label="Default select example">
                                        <option value="1">
                                          Pre-exiting Cover
                                        </option>
                                        <option value="2">
                                          Pre-ex Coverage Included(select Pre-ex
                                          limitation amount Below)
                                        </option>
                                        <option value="3">
                                          Pre-ex Coverage Not Included
                                        </option>
                                      </select>
                                    </div>
                                    <h5 className="py-2">POLICY DEDUCTIBLE:</h5>
                                    <div className="mt-2">
                                      <select aria-label="Default select example">
                                        <option value="1">
                                          Pre-exiting Cover
                                        </option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg="6" md="6" sm="12">
                                    <div>
                                      <label>Trip End Time </label>
                                      <input type="date" name="date" />
                                    </div>
                                    <div className="my-2 mb-4">
                                      <select aria-label="Default select example">
                                        <option selected>Select Plan</option>
                                        <option value="1">INF Standard</option>
                                        <option value="2">
                                          INF SAFE TRAVELLER USA 90
                                        </option>
                                        <option value="3">
                                          INF SAFE TRAVELLER USA
                                        </option>
                                        <option value="4">
                                          INF PREMIER PLUS
                                        </option>
                                        <option value="5">INF PREMIER</option>
                                        <option value="6">
                                          INF ELITE PLUS
                                        </option>
                                        <option value="7">INF ELITE 90</option>
                                        <option value="8">INF ELITE </option>
                                      </select>
                                    </div>
                                    <div>
                                      <div className="my-2 mb-4">
                                        <h5 className="py">POLICY MAXIMUM:</h5>
                                        <select aria-label="Default select example">
                                          <option selected>Select Plan</option>
                                          <option value="1">
                                            INF Standard
                                          </option>
                                          <option value="2">
                                            INF SAFE TRAVELLER USA 90
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="my-2 mb-4">
                                        <h5 className="py">
                                          PREEX DEDUCTIBLE/ MAX:
                                        </h5>
                                        <select aria-label="Default select example">
                                          <option selected>Select Plan</option>
                                        </select>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg="6" md="6" sm="6">
                                    <button className="btn get-btn">
                                      Previous
                                    </button>
                                  </Col>
                                  <Col lg="6" md="6" sm="6">
                                    <button className="btn get-btn">
                                      Next
                                    </button>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="2">
                                <Row>
                                  <Col lg="12" sm="12">
                                    <ul className="tabList">
                                      <li className="disc">
                                        The Beneficiary must always and without
                                        exception contact the Emergency Central,
                                        who in turn will coordinate a virtual
                                        appointment by Telemedicine.
                                      </li>
                                      <li className="disc">
                                        According to the opinion provided by the
                                        Medical Department, if the Beneficiary
                                        presents symptoms related to COVID-19,
                                        the Assistance Center will coordinate
                                        the relevant medical consultation,
                                        according to the safety and health
                                        protocols of each country.
                                      </li>
                                      <li className="disc">
                                        We will cover the expenses incurred up
                                        to the coverage limit indicated in the
                                        voucher.
                                      </li>
                                    </ul>
                                    <h3 className="p-3">
                                      The following expenses will be covered
                                      under the same limit:
                                    </h3>
                                    <ul className="tabList">
                                      <li className="disc">
                                        Hospital Expenses for COVID-19: In case
                                        of requiring hospitalization to
                                        stabilize the Beneficiary's condition.
                                      </li>
                                      <li className="disc">
                                        Mechanical respirator fees: If the
                                        Medical Department, together with the
                                        treating doctor, considers the use of a
                                        mechanical respirator necessary, the
                                        Central will authorize and cover said
                                        expense.
                                      </li>
                                    </ul>
                                    <div className="text-center bmi-bg">
                                      <h3>Important Notice</h3>
                                      <p>
                                        Vouchers purchased after arrival are
                                        subject to a 5-day waiting period for
                                        new sickness coverage and 15-day waiting
                                        period for COVID-19 Coverage.
                                      </p>
                                      <p>
                                        Vouchers must be extended before
                                        expiration to avoid waiting period for
                                        new sickness coverage.
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="3">
                                <Row>
                                  <Col lg="12" sm="12">
                                    <h3 className="p-4">
                                      The coverage provided for chronic and / or
                                      pre-existing diseases includes the
                                      following eventualities:
                                    </h3>
                                    <ul className="tabList">
                                      <li className="disc">
                                        Acute episode or unpredictable event
                                      </li>
                                      <li className="disc">A Chronic issue</li>
                                      <li className="disc">
                                        A Pre-existing diseases known
                                      </li>
                                      <li className="disc">
                                        A previously asymptomatic pre-existing
                                        condition
                                      </li>
                                    </ul>
                                    <div className="text-center bmi-bg">
                                      <h3>Important Notice</h3>
                                      <p>
                                        Vouchers purchased after arrival are
                                        subject to a 5-day waiting period for
                                        new sickness coverage and 15-day waiting
                                        period for COVID-19 Coverage.
                                      </p>
                                      <p>
                                        Vouchers must be extended before
                                        expiration to avoid waiting period for
                                        new sickness coverage.
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                              </TabPane>
                            </TabContent>
                          </div>
                        </div>
                        {/* <div className="container tabmain" id="centerDiv">
                          <div className="bmi-list-tab">
                            <div className="row">
                              <Nav tabs>
                                <NavItem className="w-50">
                                  <div className="">
                                    <NavLink
                                      className={classnames({
                                        active: list === "1",
                                        TabBmi: "TabBmi",
                                      })}
                                      onClick={() => toggleList("1")}
                                    >
                                      PLAN Description
                                    </NavLink>
                                  </div>
                                </NavItem>
                                <NavItem className="w-50">
                                  <div className="">
                                    <NavLink
                                      className={classnames({
                                        active: list === "2",
                                        TabBmi: "TabBmi",
                                      })}
                                      onClick={() => {
                                        toggleList("2");
                                      }}
                                    >
                                      Discount Services
                                    </NavLink>
                                  </div>
                                </NavItem>
                              </Nav>
                              <div className="container">
                                <TabContent activeTab={list}>
                                  <TabPane tabId="1">
                                    <Row>
                                      <Col lg="12" sm="12">
                                        <p>
                                          INF Elite 90% IVAS Plan is our
                                          flagship insurance program for INF
                                          Health Care for people visiting
                                          anywhere worldwide. INF Elite 90 IVAS
                                          provides coverage for pre-existing
                                          conditions as defined in the plan, as
                                          per policy limitations, exclusions and
                                          maximums, with no benefit waiting
                                          period.
                                        </p>
                                        <Row>
                                          <Col lg="6">
                                            <div>abc</div>
                                          </Col>
                                          <Col lg="6">
                                            <div>abc1222</div>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </TabPane>
                                  <TabPane tabId="2">
                                    <Row>
                                      <Col lg="12" sm="12">
                                        <ul className="tabList">
                                          <li className="disc">
                                            The Beneficiary must always and
                                            without exception contact the
                                            Emergency Central, who in turn will
                                            coordinate a virtual appointment by
                                            Telemedicine.
                                          </li>

                                          <li className="disc">
                                            We will cover the expenses incurred
                                            up to the coverage limit indicated
                                            in the voucher.
                                          </li>
                                        </ul>
                                      </Col>
                                    </Row>
                                  </TabPane>
                                </TabContent>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutOne>
  );
}
