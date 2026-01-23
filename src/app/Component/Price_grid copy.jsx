import React from "react";

const Price_grid = ({result}) => {
 
  return (
    <>
        <div className="pricing-grid">
{
      result.map((data)=>{
        const {active,product,unit_amount,recurring} = data;
        const {name,description} = product;
        const {interval} = recurring;
        return <> 
         <div className="plan-card">
          <div className="plan-header">
            <h3 className="fs-35">{name}</h3>
            <p>{description}</p>
            <div className="price">
              ${unit_amount/100}<small>/{interval}</small>
            </div>
          </div>
          {/* <ul className="plan-features">
            <li>
              <span>{description}</span>
            </li> */}
            {/* <li>
              <span>Unlimited appointments</span>
            </li>
            <li>
              <span>Smart area-locking schedule engine</span>
            </li>
            <li>
              <span>Calendar sync (Google, Apple, Outlook)</span>
            </li>
            <li>
              <span>Automated customer reminders</span>
            </li>
            <li>
              <span>Basic route optimization</span>
            </li>
            <li>
              <span>Email support</span>
            </li> */}
          {/* </ul> */}
          {/* <p>Best For: 10–20 appointments per month</p> */}
          <div className="plan-cta">
            <button  className="c-btn">
              Get Started
            </button>
          </div>
        </div>
        </>
      })
    }
        </div>
    
      {/* <div className="pricing-grid">
        <div className="plan-card">
          <div className="plan-header">
            <h3 className="fs-35">Starter</h3>
            <p>For solo inspectors who want automated scheduling.</p>
            <div className="price">
              $19<small>/month</small>
            </div>
          </div>
          <ul className="plan-features">
            <li>
              <span>1 seat</span>
            </li>
            <li>
              <span>Unlimited appointments</span>
            </li>
            <li>
              <span>Smart area-locking schedule engine</span>
            </li>
            <li>
              <span>Calendar sync (Google, Apple, Outlook)</span>
            </li>
            <li>
              <span>Automated customer reminders</span>
            </li>
            <li>
              <span>Basic route optimization</span>
            </li>
            <li>
              <span>Email support</span>
            </li>
          </ul>
          <p>Best For: 10–20 appointments per month</p>
          <div className="plan-cta">
            <a href="#" className="c-btn">
              Get Started
            </a>
          </div>
        </div>

        <div className="plan-card featured">
          <div className="plan-header">
            <h3 className="fs-35">
              Growth <span>MOST POPULAR</span>{" "}
              <span className="bg-blue">
                <img alt="" src="bg-blue.png" />
              </span>
            </h3>
            <p>Our most popular plan — ideal for small, growing businesses.</p>
            <div className="price">
              $49<small>/month</small>
            </div>
          </div>
          <ul className="plan-features">
            <li>
              <span>Up to 3 seats</span>
            </li>
            <li>
              <span>Advanced routing & day-zone automation</span>
            </li>
            <li>
              <span>Advanced routing & day-zone automation</span>
            </li>

            <li>
              <span>Text message reminders</span>
            </li>
            <li>
              <span>Custom service areas</span>
            </li>
            <li>
              <span>Embeddable booking widget for your website</span>
            </li>
            <li>
              <span>Priority support</span>
            </li>
            <li>
              <span>1 Boost Day/month (optional feature)</span>
            </li>
          </ul>
          <p>Best For: 20–60 appointments per month</p>
          <div className="plan-cta">
            <a href="#" className="c-btn">
              Join Growth
            </a>
          </div>
        </div>

        <div className="plan-card">
          <div className="plan-header">
            <h3 className="fs-35">Pro</h3>
            <p>For established inspection companies and multi-tech teams.</p>

            <div className="price">
              $99<small>/month</small>
            </div>
          </div>
          <ul className="plan-features">
            <li>Up to 10 seats</li>
            <li className="main-sub-flow">
              <span> Advanced analytics dashboard</span>
              <ul className="sub-menu-data">
                <li>
                  <span>Zone utilization</span>
                </li>
                <li>
                  <span>Mileage reduction</span>
                </li>
                <li>
                  <span>Appointment density</span>
                </li>
              </ul>
            </li>
            <li>
              <span>Multi-inspector route optimization</span>
            </li>
            <li>
              <span>White-label booking page</span>
            </li>
            <li>
              <span>API access</span>
            </li>
            <li>
              <span>5 Boost Days/month</span>
            </li>
          </ul>
          <p>Best For: 60+ appointments or multi-inspector operations</p>
          <div className="plan-cta">
            <a href="#" className="c-btn">
              Upgrade to Pro
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Price_grid;
