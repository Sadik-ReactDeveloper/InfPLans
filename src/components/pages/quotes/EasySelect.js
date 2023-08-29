import React, { useState } from "react";
import LayoutOne from "../../../layouts/LayoutOne";
import "../../../assets/scss/easySelect.scss";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
export default function EasySelect() {
  const [filter, setFilter] = useState("1");
  const toggle = ele => {
    if (filter !== ele) setFilter(ele);
  };

  const OnHandleClick = () => {
    var ActiveBtn = document.getElementById("btnList");
    var btns = ActiveBtn.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  };
  return (
    <LayoutOne headerTop="visible">
      <section id="quote-section-1">
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-12">
              <ul className=" Btn-list" id="btnList">
                <li>
                  <a
                    className="filter-btn"
                    href=""
                    onClick={() => OnHandleClick()}
                  >
                    Filter
                  </a>
                </li>
                <li>
                  <a className="filter-btn" href="">
                    All
                  </a>
                </li>
                <li>
                  <a href="" className="filter-btn">
                    TRAVELASSIST
                  </a>
                </li>
                <li>
                  <a href="" className="filter-btn">
                    FIXED
                  </a>
                </li>
                <li>
                  <a href="" className="filter-btn">
                    NETWORK
                  </a>
                </li>
                <li>
                  <a href="" className="filter-btn">
                    BASIC
                  </a>
                </li>
                <li>
                  <a href="" className="filter-btn">
                    PRE-EX
                  </a>
                </li>
                <li>
                  <a href="" className="filter-btn">
                    EMAIL Quote
                  </a>
                </li>
              </ul>
              {/* <section> */}
              <div className="container my-5 tableDesign">
                <Row>
                  <Col lg="12" md="12" sm="12">
                    <div>
                      <h3 className="my-2">BMI CLASSICO</h3>
                      <hr />
                      <Row>
                        <Col lg="7" md="6" sm="12">
                          <ul className="center-block">
                            <li>
                              A Travel Assistance Plan for Visitors Traveling to
                              USA.
                            </li>
                            <li>Pre-Existing Conditions Coverage $300)</li>
                            <li>Covers COVID-19 Testing & Treatment</li>
                            <li>BMI Makes all Appointments</li>
                            <li>
                              Pays 100% of all Eligible Medical Expense directly
                              to provides
                            </li>
                            <li>Policy Maximums up to $10,000</li>
                            <li> Emergency Dental Benefits</li>
                            <li> Trip Interruption Benefit</li>
                            <li>
                              No Claims Hassle as BMI Handles all claims
                              directly
                            </li>
                            <li>
                              Quotes are based on 5 days min purchase and buying
                              more days get you reduced prices.
                            </li>
                          </ul>
                        </Col>
                        <Col lg="5" md="6" sm="12">
                          <Row>
                            <Col lg="6" md="12">
                              <h3> Plan Maximum:</h3>
                              <select
                                class="form-control"
                                aria-label="Default select example"
                              >
                                <option value="1000">1000</option>
                              </select>
                            </Col>
                            <Col lg="6" md="12">
                              <h3> Plan Deductible:</h3>
                              <select
                                class="form-control"
                                aria-label="Default select example"
                              >
                                <option value="0">0</option>
                              </select>
                            </Col>
                            <Col lg="12" md="12" sm="12">
                              <div className="subheading">
                                <h3>Prex-Deductible: $0</h3>
                                <h3>Prex-Coverage Amt: $300</h3>
                              </div>
                            </Col>
                            <Col lg="6" md="12" sm="12" className="mt-2 ">
                              <button className="custombtn">
                                Add to Compare
                              </button>
                            </Col>
                            <Col lg="6" md="12" sm="12" className="mt-2  ">
                              <button className="custombtn">Purchase </button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col lg="5" md="6" sm="12" className="my-5 ">
                    <Row>
                      <Col lg="6" md="6" sm="12" className="">
                        <a href="#">
                          <button className="custombtn">Plan Details </button>
                        </a>
                      </Col>
                      <Col lg="6" md="6" sm="12" className=" ">
                        <a href="#">
                          <button className="custombtn">View Brochure </button>
                        </a>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="7" md="6" sm="12" className="">
                    <Row className="mt-5 productRow">
                      <Col lg="6" md="6" sm="12" className="my-5">
                        <h5>
                          <div className="form-group">
                            <Label> Coverage Period:</Label>
                            <p className="form-control-static">5</p>
                          </div>
                        </h5>
                      </Col>
                      <Col lg="6" md="6" sm="12" className="my-5 ">
                        <h5>
                          <div className="form-group">
                            <Label>Total</Label>
                            <p className="form-control-static">$55</p>
                          </div>{" "}
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="container my-5">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="quote-container">
                      <h2 className="text-center text-blue py-3">
                        Direct billing via 24/7/365 Medical Concierge
                      </h2>
                      <p className="text-black">
                        <p className="text-black">
                          INF Plans come with 24/7/365 medical concierge via
                          INF-Robin Assist. INF-Robin Assist will arrange for
                          direct billing and provides 24/7 responsive claims,
                          emergency travel and medical assistance from any
                          device, any time, any place.
                        </p>
                        <p className="text-black">
                          INF-Robin Assist will process your claim, coordinate
                          with the medical providers around the globe, determine
                          eligibility,and even handle evacuation and
                          repatriation services.
                        </p>
                      </p>
                      <h2 className="text-center text-blue py-2">
                        Statement on COVID-19 Coverage
                      </h2>
                      <h3>Statement on COVID-19 Testing</h3>
                      <p className="text-black">
                        The plans may cover medically necessary testing for
                        COVID-19 in accordance with the plan terms, conditions
                        and exclusions, while the person is in the US. Medically
                        necessary COVID-19 testing and screening will be covered
                        without any cost-sharing (deductible / copay /
                        coinsurance).
                      </p>
                      <p className="text-black">
                        All cost-sharing for office, urgent care center,
                        laboratory, hospital and emergency room visits will be
                        waived when testing for COVID-19, but only to the extent
                        such items and services relate to the furnishing or
                        administration of such testing or to the evaluation of
                        such individual for purposes of determining the need of
                        such individual for such testing.
                      </p>
                      <h3 className="text-black">
                        Statement on COVID-19 Treatment
                      </h3>
                      <p className="text-black">
                        The plans may cover medically necessary treatment for
                        COVID-19 in accordance with the plan terms, conditions
                        and exclusions, while the person is in the US. COVID-19
                        treatment may be covered in the program as any other
                        eligible sickness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* </section> */}
              {/* <Nav tabs>
              <NavItem className="filterList">
                <NavLink
                  className={classnames({
                    active: filter === "1",
                    Tablehead: "Tablehead",
                  })}
                  onClick={() => toggle("1")}
                >
                  All
                </NavLink>
              </NavItem>
              <NavItem className="filterList">
                <NavLink
                  className={classnames({
                    active: filter === "2",
                    Tablehead: "Tablehead",
                  })}
                  onClick={() => toggle("2")}
                >
                  TRAVEASSIST
                </NavLink>
              </NavItem>
              <NavItem className="filterList">
                <NavLink
                  className={classnames({
                    active: filter === "3",
                    Tablehead: "Tablehead",
                  })}
                  onClick={() => toggle("3")}
                >
                  FIXED
                </NavLink>
              </NavItem>
              <NavItem className="filterList">
                <NavLink
                  className={classnames({
                    active: filter === "4",
                    Tablehead: "Tablehead",
                  })}
                  onClick={() => toggle("4")}
                >
                  NETWORK
                </NavLink>
              </NavItem>
              <NavItem className="filterList">
                <NavLink
                  className={classnames({
                    active: filter === "5",
                    Tablehead: "Tablehead",
                  })}
                  onClick={() => toggle("5")}
                >
                  BASIC
                </NavLink>
              </NavItem>
              <NavItem className="filterList">
                <NavLink
                  className={classnames({
                    active: filter === "6",
                    Tablehead: "Tablehead",
                  })}
                  onClick={() => toggle("6")}
                >
                  PRE-EX
                </NavLink>
              </NavItem>
            </Nav> */}
              {/* <TabContent activeTab={filter}>
              <TabPane tabId="1">
                <Row>
                  <Col lg="12" md="12" sm="12">
                    <div>
                      <h3 className="my-2">BMI CLASSICO</h3>
                      <hr />
                      <Row>
                        <Col lg="7" md="6" sm="12">
                          <ul>
                            <li>
                              A Travel Assistance Plan for Visitors Traveling to
                              USA.
                            </li>
                            <li>Pre-Existing Conditions Coverage $300)</li>
                            <li>Covers COVID-19 Testing & Treatment</li>
                            <li>BMI Makes all Appointments</li>
                            <li>
                              Pays 100% of all Eligible Medical Expense directly
                              to provides
                            </li>
                            <li>Policy Maximums up to $10,000</li>
                            <li> Emergency Dental Benefits</li>
                            <li> Trip Interruption Benefit</li>
                            <li>
                              No Claims Hassle as BMI Handles all claims
                              directly
                            </li>
                            <li>
                              Quotes are based on 5 days min purchase and buying
                              more days get you reduced prices.
                            </li>
                          </ul>
                        </Col>
                        <Col lg="5" md="6" sm="12">
                          <Row>
                            <Col lg="6" md="12">
                              <h3> Plan Maximum:</h3>
                              <input
                                type="number"
                                placeholder=""
                                value="1000"
                              />
                            </Col>
                            <Col lg="6" md="12">
                              <h3> Plan Deductible:</h3>
                              <input type="number" placeholder="" value="0" />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4">
                <Row>
                  <Col sm="12">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="5">
                <Row>
                  <Col sm="12">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="6">
                <Row>
                  <Col sm="12">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent> */}
            </div>
          </div>
        </div>
      </section>
    </LayoutOne>
  );
}
