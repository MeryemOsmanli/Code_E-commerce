import React from "react";
import { Accordion, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, addToWishlist } from "../../../redux/slices/userSlice";
import toast from "react-hot-toast";
import {
  searchProducts,
  sortProducts2,
} from "../../../redux/slices/productSlice";
import { Link } from "react-router-dom";
function Shop() {
  const { products } = useSelector((state) => state.products);
  const { userToken } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  return (
    // <div className='shopcls'>
    //   {/* <img src="https://faryita.wpengine.com/wp-content/themes/faryita/assets/images/category-msk-imgs.png" alt="" className='salam' /> */}
    //   <div className="salam"></div>
    // </div>
    <>
      {/* start first sec shop page  */}
      <div className="shop-first-sec-background">
        <div className="shop-first-sec">
          <div className="shop-first-sec-melon">
            <img
              src="https://faryita.wpengine.com/wp-content/uploads/2024/03/melon-img-01.png"
              alt=""
            />
          </div>
          <div className="shop-first-sec-shopping">
            <h1>Shopping</h1>
          </div>
          <div className="shop-first-sec-lemon">
            <img
              src="https://faryita.wpengine.com/wp-content/uploads/2024/03/orange-tree-01.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* end first sec shop page  */}
      {/* start second sec shop page  */}
      <div className="shop-second-sec-background">
        <div className="shop-second-sec">
          <div className="shop-second-sec-first-box">
            <div className="shop-first-box-image">
              <img
                src="https://faryita.wpengine.com/wp-content/uploads/2024/03/h2-img-01.png"
                alt=""
              />
            </div>
          </div>

          <div className="shop-second-sec-second-box">
            <div className="shop-second-box-image">
              <img
                src="https://faryita.wpengine.com/wp-content/uploads/2024/03/h2-img-02.png"
                alt=""
              />
            </div>
          </div>

          <div className="shop-second-sec-third-box">
            <div className="shop-third-box-image">
              <img
                src="https://faryita.wpengine.com/wp-content/uploads/2024/03/h2-img-04.png"
                alt=""
              />
            </div>
          </div>

          <div className="shop-second-sec-fourth-box">
            <div className="shop-fourth-box-image">
              <img
                src="https://faryita.wpengine.com/wp-content/uploads/2024/03/h2-img-03.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* end second sec shop page  */}
      {/* start main shop section  */}
      <div className="shop_background container">
        <div className="shop_contain">
          <div className="shop_body ">
            <div className="shop_accordion">
              <Accordion defaultActiveKey={"2"}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>aboutjuice</Accordion.Header>
                  <Accordion.Body>
                    Freshly squeezed juices made from vegetables, fruits and
                    leafy greens are an easy-to-digest energy kick for in
                    between meals - packed with plenty of nutrients.
                    Furthermore, fresh juices are simply delicious.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>filter</Accordion.Header>
                  <Accordion.Body>
                    <InputGroup size="sm" className="mb-3">
                      <Form.Control
                        onChange={(e) => {
                          dispatch(searchProducts(e.target.value));
                        }}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </InputGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>abouticecream</Accordion.Header>
                  <Accordion.Body>
                    This is the creamiest homemade French Vanilla Ice Cream
                    recipe you’ll ever eat! Even vanilla ice cream haters will
                    love this. This custard-based ice cream has an equal ratio
                    of cream and whole milk to provide a perfectly rich base
                    with just enough eggs to stay nice and smooth.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>sorted</Accordion.Header>
                  <Accordion.Body>
                    <div className="shop_sort_btn_box">
                      <Form.Select
                        onChange={(e) => {
                          dispatch(sortProducts2(e.target.value));
                        }}
                        aria-label="Default select example"
                      >
                        <option value="" selected hidden>
                          sorting
                        </option>
                        <option value="df"> default</option>
                        <option value="A-Z"> a-z</option>
                        <option value="Z-A"> z-a</option>
                        <option value="0-9">0-9</option>
                        <option value="9-0"> 9-0</option>
                        <option value="Juice"> typejuice</option>
                      <option value="Ice-cream"> typeicecream</option>
                      </Form.Select>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="shop_products">
              <div className="shop_products_contain">
                
              {products?.map((item, index) => {
                    return (
                      <div key={index} className="shop_products_box">
                        <div className="product_img">
                          <img src={item.images} alt="" />
                        </div>
                        <span>
                          <Link to={`/${item._id}`} style={{ color: "black" }}>
                            {" "}
                            {item.title}
                          </Link>{" "}
                          - ${item.price}
                        </span>
                        <div
                          className="shop_product_btn
                   "
                        >
                          <button
                            onClick={async () => {
                              const token = localStorage.getItem("token");
                              if (userToken && token) {
                                const basket = {
                                  id: item._id,
                                  product: item,
                                  count: 1,
                                  totalPrice: item.price,
                                };
                                dispatch(
                                  addToBasket({ id: item._id, newData: basket })
                                );
                                toast.success("Product added to the basket");
                              } else {
                                toast.error(
                                  "Oops! It seems like you're not logged in. Please log in to access your basket."
                                );
                              }
                            }}
                          >
                           addbasket
                          </button>

                          <div>
                            <i
                              className={` ${(() => {
                                if (userToken.isLogin) {
                                  const filtering = userToken?.wishlist?.find(
                                    (x) => x._id == item._id
                                  );
                                  return filtering
                                    ? "fa-heart fa-solid  "
                                    : "fa-regular fa-heart";
                                } else {
                                  return "fa-heart  fa-regular";
                                }
                              })()}`}
                              style={{ color: "#ff0000" }}
                              onClick={async () => {
                                const token = localStorage.getItem("token");

                                if (userToken && token) {
                                  const filterWishlist =
                                    userToken?.wishlist?.some(
                                      (items) => items._id == item?._id
                                    );
                                  if (filterWishlist) {
                                    toast.error(
                                      "Product is already in the wishlist"
                                    );
                                  } else {
                                    await dispatch(
                                      addToWishlist({ id: item?._id })
                                    );
                                    toast.success(
                                      "Product added to the wishlist"
                                    );
                                  }
                                } else {
                                  toast.error(
                                    "Oops! It seems like you're not logged in. Please log in to access your wishlist."
                                  );
                                }
                              }}
                            ></i>
                          </div>
                        </div>
                      </div>
                    );
                  })}


                {/* <div className="shop_products_box">
                  <div className="product_img">
                    <img
                      src="https://dt-faryita.myshopify.com/cdn/shop/files/imgicon01_db5e7103-ab82-4bdb-a1b5-dc77c036d589_200x200.png?v=165511063"
                      alt=""
                    />
                  </div>
                  <span>Orange Juice- $10</span>
                  <div
                    className="shop_product_btn
                   "
                  >
                    <button>Addbasket</button>

                    <div>
                    <i class="fa-regular fa-heart" style={{ color: "#ff0000" }}></i>
                    </div>
                  </div>
                </div>
                <div className="shop_products_box">
                  <div className="product_img">
                    <img
                      src="https://dt-faryita.myshopify.com/cdn/shop/files/imgicon01_db5e7103-ab82-4bdb-a1b5-dc77c036d589_200x200.png?v=165511063"
                      alt=""
                    />
                  </div>
                  <span>Orange Juice- $10</span>
                  <div
                    className="shop_product_btn
                   "
                  >
                    <button>Addbasket</button>

                    <div>
                    <i class="fa-regular fa-heart" style={{ color: "#ff0000" }}></i>
                    </div>
                  </div>
                </div>
                <div className="shop_products_box">
                  <div className="product_img">
                    <img
                      src="https://dt-faryita.myshopify.com/cdn/shop/files/imgicon01_db5e7103-ab82-4bdb-a1b5-dc77c036d589_200x200.png?v=165511063"
                      alt=""
                    />
                  </div>
                  <span>Orange Juice- $10</span>
                  <div
                    className="shop_product_btn
                   "
                  >
                    <button>Addbasket</button>

                    <div>
                    <i class="fa-regular fa-heart" style={{ color: "#ff0000" }}></i>
                    </div>
                  </div>
                </div>
                <div className="shop_products_box">
                  <div className="product_img">
                    <img
                      src="https://dt-faryita.myshopify.com/cdn/shop/files/imgicon01_db5e7103-ab82-4bdb-a1b5-dc77c036d589_200x200.png?v=165511063"
                      alt=""
                    />
                  </div>
                  <span>Orange Juice- $10</span>
                  <div
                    className="shop_product_btn
                   "
                  >
                    <button>Addbasket</button>

                    <div>
                    <i class="fa-regular fa-heart" style={{ color: "#ff0000" }}></i>
                    </div>
                  </div>
                </div>
                <div className="shop_products_box">
                  <div className="product_img">
                    <img
                      src="https://dt-faryita.myshopify.com/cdn/shop/files/imgicon01_db5e7103-ab82-4bdb-a1b5-dc77c036d589_200x200.png?v=165511063"
                      alt=""
                    />
                  </div>
                  <span>Orange Juice- $10</span>
                  <div
                    className="shop_product_btn
                   "
                  >
                    <button>Addbasket</button>

                    <div>
                    <i class="fa-regular fa-heart" style={{ color: "#ff0000" }}></i>
                    </div>
                  </div>
                </div>
                <div className="shop_products_box">
                  <div className="product_img">
                    <img
                      src="https://dt-faryita.myshopify.com/cdn/shop/files/imgicon01_db5e7103-ab82-4bdb-a1b5-dc77c036d589_200x200.png?v=165511063"
                      alt=""
                    />
                  </div>
                  <span>Orange Juice- $10</span>
                  <div
                    className="shop_product_btn
                   "
                  >
                    <button>Addbasket</button>

                    <div>
                    <i class="fa-regular fa-heart" style={{ color: "#ff0000" }}></i>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* start main shop section  */}
    </>
  );
}

export default Shop;
