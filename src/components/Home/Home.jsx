import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import image from "../../assets/food-6.png";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
const Home = () => {
  return (
    <div className="container home-section">
      {/* banner section start */}
      <div className="banner-section">
        <Container fluid>
          <Row className="flex-column-reverse flex-lg-row">
            <Col lg={6} className="d-flex align-items-center">
              <Image
                src="https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?w=996&t=st=1683125531~exp=1683126131~hmac=41652cb264498cec2e1ddf707bce5711beb132e20616a0be336625820317ba2f"
                alt="Banner"
                fluid
              />
            </Col>
            <Col lg={6} className="d-flex align-items-center">
              <div className="banner-text">
                <h1 className="text-center fw-bold">Welcome to Kitchen House</h1>
                <p className="fs-5">
                  We're passionate about creating delicious and nutritious meals
                  using fresh, seasonal ingredients. Our experienced chefs have
                  a wealth of knowledge and expertise, and are dedicated to
                  providing you with the best possible dining experience.
                </p>
              
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* banner section end */}

      {/* chefs section  */}
      <div className="text-center pt-4">
        <h2 className="fw-bold">Meet Our Talented Chefs</h2>
      </div>
      {/* chefs section  card*/}
      <div className="row row-cols-1 row-cols-md-3 mt-2">
        <div className="">
          <div class="col rounded py-3 ">
            <div class="card shadow h-100 card-bg-color">
              <div className="p-3">
                <div>
                  <img className="img-fluid" src={image} alt="" />
                </div>
                <h2>Name: Tanvir Hasan</h2>

                <div className="">
                  <h5>Experience: 5years</h5> {""}
                  <h5>Recipes: 10 </h5>
                  <h5>Total Likes: 500</h5>
                </div>
                <div className="text-center">
                  {" "}
                  <Link to="/recipe">
                    {" "}
                    <button type="button" class="btn w-75 btn-primary">
                      View Recipes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* chefs section end here  */}
    </div>
  );
};

export default Home;
