import "../assets/css/pricing.css";
import Price_tab from "./Price_tab";

const Pricing = async () => {

  const res = await fetch("http://localhost:3000/api/plans", {
    cache: "no-store", // important for fresh data
  });

  const result = await res.json();

  // console.log("SERVER DATA:", result); 
  return (
    <>
      <section className="pricng">
        <div className="container">
          <div className="main-title-pricing">
            <h2 className="fs-40">
              <span>
                <img src="bg-blue.png" alt="" />
              </span>
              Two Ways to Pay Choose What Fits Your Business
            </h2>
            <p>
              We offer flexible payment options so you can run your business
              your way. Pick the method that works best for your needs and enjoy
              smooth, hassle-free transactions
            </p>
          </div>

          {/* sirf test ke liye */}
        

          <Price_tab result={result}/>
        </div>
      </section>
    </>
  );
};

export default Pricing;
