import "./Showcase.css";
import ProductCards from "../ProductCards/ProductCards";
function Home() {
  return (
    <>
      <div className="showcase">
        <div className="container">
          <div className="sliderImg">
            <div className="caption">
              <div className="captionAll">
                <div className="captionBox">
                  <h1 className="mainTitle">
                    {" "}
                    We are Digital <br />
                    meets fasions
                  </h1>
                  <p>
                    <img
                      src="src/assets/arrow-down-right.svg"
                      alt="arrow-down-rightLogo"
                      width="24px"
                    />
                    <span className="mainSubTitle">
                      Show your Vstore pride, get high-quality swagdirectly from
                      the vstore foundation.
                    </span>
                  </p>
                </div>
                <div className="aboutProducts">
                  <span>Transforming into stylish & functional pieces</span>
                </div>
                <div className="expenceBtn">
                  <a href="#">
                    <span className="btn btn-light">Start shopping</span>{" "}
                    <img
                      src="src/assets/arrow-up-right.svg"
                      alt="arrow-up-right"
                      width="24px"
                    />
                  </a>
                  <span className="label">Top collections</span>
                </div>
              </div>

              <img
                src="src/assets/slider_1.png"
                alt="Slider 1"
                className="imgResponsive"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Products Cards */}
      <div className="ProductCateSection">
        <div className="container">
          <ProductCards />
        </div>
      </div>
    </>
  );
}

export default Home;
