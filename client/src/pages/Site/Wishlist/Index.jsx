import React from "react";

function Wishlist() {
  return <>
     <div className="header_image_wishList">
        <div className="overlay_shop">favourite </div>
      </div>
      <div className="wishList_section">
        <div className="wishList_container">
          <div className="wishList_left_image">
            <div>
            </div>
          </div>
          <div className="wishList_data_container">
                <div  className="wishList_box">
                  <div className="wishList_data_image">
                    <img src="https://dt-faryita.myshopify.com/cdn/shop/files/imgicon01_db5e7103-ab82-4bdb-a1b5-dc77c036d589_200x200.png?v=165511063" alt="" />
                  </div>
                  <div className="wishList_box_text">
                    <h5>Orange Juice</h5>
                    <p>price :$11</p>
                    <button
                    >
                    addbasket
                    </button>
                  </div>
                  <div className="wishList_box_btns">
                    <div className="wishList_box_right_icon">
                      <div>
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "white", cursor: "pointer" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div  className="wishList_box">
                  <div className="wishList_data_image">
                    <img src="https://dt-faryita.myshopify.com/cdn/shop/files/imgicon01_db5e7103-ab82-4bdb-a1b5-dc77c036d589_200x200.png?v=165511063" alt="" />
                  </div>
                  <div className="wishList_box_text">
                    <h5>Orange Juice</h5>
                    <p>price :$11</p>
                    <button

                    >
                    addbasket
                    </button>
                  </div>
                  <div className="wishList_box_btns">
                    <div className="wishList_box_right_icon">
                      <div>
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "white", cursor: "pointer" }}

                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
        
          </div>
          <div className="wishList_right_box"></div>
        </div>
      </div>
  </>;
}

export default Wishlist;


