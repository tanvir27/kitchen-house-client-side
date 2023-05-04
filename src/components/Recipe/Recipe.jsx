import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
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
          <Col md={4}>
            <Card className="text-center">
              <Card.Img variant="top" src={chef_picture} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h3>{chef_name}</h3>{" "}
                </Card.Title>
                <Card.Text>{chef_bio}</Card.Text>
                <Row>
                  <Col md={4}>
                    <p>Total Likes: {total_likes}</p>
                  </Col>
                  <Col md={4}>
                    <p>No of Recipes: {number_of_recipes}</p>
                  </Col>
                  <Col md={4}>
                    <p> Experienced: {years_of_experience} </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <h2 className="text-center text-secondary fw-bold mb-4">
              Chef's Recipes
            </h2>
            <div className="row row-cols-3">
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
