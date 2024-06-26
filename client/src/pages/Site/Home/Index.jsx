import React from "react";

function Home() {
  return (
    <>
      {/* <Helmet>
        <title>{t("home")} </title>  
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet> */}
      {/*  start first section grayfurt */}
      <div className="grayfurt-sec-background">
        <div className="grayfurt-sec">
          <div className="left-box-grayfurt">
            <img
              src="https://ohlala.bold-themes.com/main-demo/wp-content/uploads/sites/3/2017/09/ice_cream_gallery_01.jpg"
              alt=""
            />
          </div>
          <div className="middle-box-grayfurt">
            <img
              src="https://ohlala.bold-themes.com/main-demo/wp-content/uploads/sites/3/2017/09/ice_cream_gallery_04.jpg"
              alt=""
            />
            <div className="middle-box-grayfurt-hover">
              <span>!NEW!NEW!NEW!NEW!NEW!NEW</span>
              <h1>Fruit Havors!</h1>
            </div>
          </div>
          <div className="right-box-grayfurt">
            <img
              src="https://ohlala.bold-themes.com/main-demo/wp-content/uploads/sites/3/2017/09/ice_cream_gallery_06.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/*  end first section grayfurt */}
      {/*  start second section melon */}

      <div className="melon-sec-background">
        <div className="melon-sec">
          <div className="left-box-melon">
            <img
              src="https://ohlala.bold-themes.com/main-demo/wp-content/uploads/sites/3/2017/09/ice_cream_gallery_02.jpg"
              alt=""
            />
            <div className="left-box-melon-hover">
              <h1>Delivery!</h1>
            </div>
          </div>
          <div className="middle-box-melon">
            <img
              src="https://ohlala.bold-themes.com/main-demo/wp-content/uploads/sites/3/2017/09/ice_cream_gallery_05.jpg"
              alt=""
            />
          </div>
          <div className="right-box-melon">
            <img
              src="https://ohlala.bold-themes.com/main-demo/wp-content/uploads/sites/3/2017/09/ice_cream_gallery_03.jpg"
              alt=""
            />
            <div className="right-box-melon-hover">
              <h1>Check out our monthly menu!</h1>
            </div>
          </div>
        </div>
      </div>
      {/*  end second section melon */}

      {/* start third section chocolate ice cream */}
      <div className="chocolate-sec-background">
        <div className="chocolate-sec">
          <div className="left-box-chocolate">
            <div>
              <span>THIS SUMMER OUR SPECIALTY</span>
              <h1>Chocolate is the world's favorite flavor!</h1>
              <button>DISCOVER</button>
            </div>
          </div>
          <div className="right-box-chocolate">
            <img
              src="https://ohlala.bold-themes.com/main-demo/wp-content/uploads/sites/3/2017/09/inner_ice_creams_09.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* end third section chocolate ice cream */}

      {/* start fourth section colorfull ice cream */}
      <div className="colorfull-sec-background">
        <div className="colorfull-sec">
          <div className="left-box-colorfull">
            <img
              src="https://ohlala.bold-themes.com/main-demo/wp-content/uploads/sites/3/2017/09/inner_ice_creams_01.jpg"
              alt=""
            />
          </div>
          <div className="right-box-colorfull">
            <div>
              <span>THIS SUMMER OUR SPECIALTY</span>
              <h1>Chocolate is the world's favorite flavor!</h1>
              <button>DISCOVER</button>
            </div>
          </div>
        </div>
      </div>
      {/* end fourth section colorfull ice cream */}
    </>
  );
}

export default Home;
