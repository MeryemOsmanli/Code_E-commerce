import React from 'react';
import {
    Badge,
    Button,
    Container,
    Form,
    Nav,
    NavDropdown,
    Navbar,
  } from "react-bootstrap";

function UserNavbar() {
  return (
    <>
          <Navbar sticky="top" expand="lg" className="bg-body ">
        <Container fluid>
          <Navbar.Brand href="#">MaRainbow</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="/">{t("home")}</Nav.Link> */}
              <Nav.Link href="/">Home</Nav.Link>
              {/* <Nav.Link href="/contact">{t("contact")}</Nav.Link> */}
              <Nav.Link href="/contact">contact</Nav.Link>
              {/* <Nav.Link href="/blogs">{t("blogs")}</Nav.Link> */}
              <Nav.Link href="/blogs">blogs</Nav.Link>
              {/* <Nav.Link href="/shop">{t("shop")}</Nav.Link> */}
              <Nav.Link href="/shop">shop</Nav.Link>
              <Nav.Link href="/faq">faq</Nav.Link>

      
              
                <NavDropdown
                //   title={t("registration")}
                  title="registration"
                  id="navbarScrollingDropdown"
                >
                  {/* <NavDropdown.Item href="/login">
                    {t("login")}
                  </NavDropdown.Item> */}
                   <NavDropdown.Item href="/login">
                   login
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="/register">
                    {t("register")}
                  </NavDropdown.Item> */}
                   <NavDropdown.Item href="/register">
                   register
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
          


              <Nav.Link href="/basket">
                <i
                  className="fa-solid fa-bag-shopping"
                  style={{ fontSize: "20px" }}
                >
   
                </i>
              </Nav.Link>
              <Nav.Link href="/wishlist">
                <i
                  className="fa-regular fa-heart"
                  style={{ color: "white" }}
                ></i>
              </Nav.Link>
              <Nav.Link>
                <div>
                  <button
                    className="langbtn"
                    // onClick={() => {
                    //   i18n.changeLanguage("az");
                    // }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1200px-Flag_of_Azerbaijan.svg.png"
                      alt=""
                    />
                  </button>
                  <button
                    className="langbtn"
                    // onClick={() => {
                    //   i18n.changeLanguage("en");
                    // }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/640px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                      alt=""
                    />
                  </button>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default UserNavbar