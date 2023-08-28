import React from "react";
import LayoutOne from "../../../layouts/LayoutOne";
export default function GetQuote() {
  return (
    <LayoutOne headerTop="visible">
      <section id="get-quote">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h2 className="text-blue text-center">
                Why choose INF Insurance?
              </h2>
              <p className="text-black text-center">
                INF has provided insurance options for millions of travelers
                since 1988. Built during the early-ages of the internet, INF has
                always been a technology first company. INF was the first
                company to allow insurance applications Online and over fax, and
                the first company to incorporate technology into their claims
                process. INF uses technology to bring better products, services,
                and customer experience to travelers across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </LayoutOne>
  );
}
