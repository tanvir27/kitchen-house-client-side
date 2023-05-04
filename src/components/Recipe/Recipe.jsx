import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import LazyLoad from "react-lazy-load";
const Recipe = () => {
  const loader = useLoaderData();
  const {
    id,
    chef_name,
    chef_bio,
    chef_picture,
    number_of_recipes,
    total_likes,
    years_of_experience,
  } = loader;
  return (
    <div>
      <Container>
        <Row>
          <Col className="my-auto" md={4}>
            <Card className="text-center shadow card-bg-color">
              <LazyLoad
                offset={300}
                threshold={0.95}
                onContentVisible={() => {
                  console.log("loaded!");
                }}
              >
                <Card.Img
                  className="p-3 rounded-5"
                  variant="top"
                  src={chef_picture}
                />
              </LazyLoad>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h3 className="text-primary fw-bold">{chef_name}</h3>{" "}
                </Card.Title>
                <Card.Text>{chef_bio}</Card.Text>
                <Row>
                  <Col md={4}>
                    <p>
                      <span className="text-primary fw-semibold">
                        Total Likes:
                      </span>{" "}
                      {total_likes}
                    </p>
                  </Col>
                  <Col md={4}>
                    <p>
                      <span className="text-primary ">Total Recipes:</span>{" "}
                      {number_of_recipes}
                    </p>
                  </Col>
                  <Col md={4}>
                    <p>
                      {" "}
                      <span className="text-primary fw-semibold">
                        Experienced:
                      </span>{" "}
                      {years_of_experience}{" "}
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <h2 className="text-center text-primary fw-bold mb-4">
              <i> {chef_name} Recipes</i>
            </h2>
            <div className="row row-col-sm-1 row-cols-lg-3">
              {loader.recipes.map((data, index) => (
                <RecipeDetails data={data} key={index}></RecipeDetails>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Recipe;
