import React from 'react';
import './App.css';

function App() {
  let data = [
    {
      title: "Free",
      price: "$0/month",
      button: "primary",
      description: [
        "Single User",
        "5GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "X Unlimited Private Projects",
        "X Dedicated Phone Support",
        "X Free Subdomain",
        "X Monthly Status Reports"
      ]     
    },
    {
      title: "Plus",
      price: "$9/month",
      button: "primary",
      description: [
        "5 Users",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "X Monthly Status Reports"
      ]      
    },
    {
      title: "Pro",
      price: "$49/month",
      button: "primary active",
      description: [
        "Unlimited Users",
        "150GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Unlimited Free Subdomains",
        "Monthly Status Reports"
      ]
     
    }
  ];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {data.map((pricing, index) => (
            <div className="col-lg-4" key={index}>
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">{pricing.title}</h5>
                  <h6 className="card-price text-center">{pricing.price}</h6>
                  <hr />
                  <ul className="fa-ul">
                    {pricing.description.map((feature, idx) => (
                      <li key={idx} className={feature.startsWith("X") ? "text-muted" : ""}>
                        <span className="fa-li">
                          <i className={`fas ${feature.startsWith("X") ? "fa-times" : "fa-check"}`}></i>
                        </span>
                        {feature.replace("X ", "")}
                      </li>
                    ))}
                  </ul>
                  <div className="d-grid text-center">
                    <a href="#" className={`btn btn-${pricing.button} text-uppercase text-center`} >Button</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;