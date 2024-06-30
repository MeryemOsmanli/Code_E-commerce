import React from "react";


function Basket() {
  return <>
     <div className="header_image_basket">
        <div className="overlay_shop">basket </div>
      </div>
      <div className="basket_section">
        <div className="basket_container">
          <div className="basket_left_image">
            <div>
              {/* <img
                src="https://dt-faryita.myshopify.com/cdn/shop/files/detail_bg1.png?v=1654586954"
                alt=""
              /> */}
            </div>
          </div>
          <div className="basket_data_container">

                <div  className="basket_box">
                  <div className="basket_data_image">
                    <img src="https://dt-faryita.myshopify.com/cdn/shop/files/imgicon01_db5e7103-ab82-4bdb-a1b5-dc77c036d589_200x200.png?v=165511063" alt="" />
                  </div>
                  <div className="basket_box_text">
                    <h5>Orange Juice</h5>

                    <p>price :$11</p>

                    <h4>total:0$</h4>
                  </div>
                  <div className="basket_box_btns">
                    <div className="basket_box_left_btns">
                      <div>
                        <button
                          className="button_basket_dec"

                        >
                          -
                        </button>
                        <button className="button_basket_count">
                          9
                        </button>
                        <button
                          className="button_basket_inc"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="basket_box_right_icon">
                      <div>
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "white" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>

          </div>
          <div className="basket_right_box"></div>
        </div>
        <div
          className="basket_footer_section"
   
        >
          <div className="total">
      
            total:$738
          </div>
        
          <button>checkout</button>
        </div>
      </div>
  </>;
}

export default Basket;
