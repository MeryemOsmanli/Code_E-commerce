import React from "react";

function OrderSuccess() {
  return <>
    <div className="success_background">
        <div className="success_contain">
          <div className="success_check_icon">
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <h3>Thank you for choosing our website</h3>
          </div>
          <div className="succes_footer_image">
            <div className="overlay_success">
              <h3>Recommended</h3>
              <a href="#recommended">
                {" "}
                <i className="fa-solid fa-angles-down"></i>
              </a>
            </div>
          </div>
          <div className="success_recomendded_product" id="recommended">
                <div className="succes_product_box">
                  <div className="success_product_box_image">
                    <img src="https://dt-faryita.myshopify.com/cdn/shop/files/imgicon01_db5e7103-ab82-4bdb-a1b5-dc77c036d589_200x200.png?v=165511063" alt="" />
                  </div>
                  <div className="success_product_box_empty">
                    <h4>otange juice</h4>
                  </div>
                </div>
                <div className="succes_product_box">
                  <div className="success_product_box_image">
                    <img src="https://dt-faryita.myshopify.com/cdn/shop/files/imgicon01_db5e7103-ab82-4bdb-a1b5-dc77c036d589_200x200.png?v=165511063" alt="" />
                  </div>
                  <div className="success_product_box_empty">
                    <h4>otange juice</h4>
                  </div>
                </div>
                <div className="succes_product_box">
                  <div className="success_product_box_image">
                    <img src="https://dt-faryita.myshopify.com/cdn/shop/files/imgicon01_db5e7103-ab82-4bdb-a1b5-dc77c036d589_200x200.png?v=165511063" alt="" />
                  </div>
                  <div className="success_product_box_empty">
                    <h4>otange juice</h4>
                  </div>
                </div>
                <div className="succes_product_box">
                  <div className="success_product_box_image">
                    <img src="https://dt-faryita.myshopify.com/cdn/shop/files/imgicon01_db5e7103-ab82-4bdb-a1b5-dc77c036d589_200x200.png?v=165511063" alt="" />
                  </div>
                  <div className="success_product_box_empty">
                    <h4>otange juice</h4>
                  </div>
                </div>
          </div>
        </div>
      </div>
  </>;
}

export default OrderSuccess;
