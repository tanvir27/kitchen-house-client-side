import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const Recipe = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300x300.png?text=Chef+Picture"
              />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h3>Tanvir Hasan</h3>{" "}
                </Card.Title>
                <Card.Text>
                  A short bio/description of the chef goes here. This should
                  include likes, number of recipes, and years of experience.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                  eligendi, debitis cum quos non atque.
                </Card.Text>
                <Row>
                  <Col md={4}>
                    <p>Likes: 500</p>
                  </Col>
                  <Col md={4}>
                    <p>Recipes: 50</p>
                  </Col>
                  <Col md={4}>
                    <p>Experience: 10</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <h2 className="text-center text-secondary fw-bold mb-4">Chef's Recipes</h2>
            <Row>
              <Col lg={4} md={6}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/300x200.png?text=Recipe+Image"
                  />
                  <Card.Body>
                    <Card.Title>Recipe Name: </Card.Title>
                    <Card.Text>
                      <ul className="">
                        <li>abc</li>
                        <li>abc</li>
                        <li>abc</li>
                        <li>abc</li>
                        <li>abc</li>
                      </ul>
                    </Card.Text>
                    <div className="d-flex justify-content-around px-2">
                      <p className="text-muted">Rating: 4.5</p>
                      <p className="text-muted">Cooking Method</p>
                    </div>
                  </Card.Body>
                  <Button variant="primary">Favorite</Button>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/300x200.png?text=Recipe+Image"
                  />
                  <Card.Body>
                    <Card.Title>Recipe Name</Card.Title>
                    <Card.Text>At least 5 ingredients</Card.Text>
                    <Button variant="primary">View Recipe</Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Rating: 4.0</small>
                  </Card.Footer>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/300x200.png?text=Recipe+Image"
                  />
                  <Card.Body>
                    <Card.Title>Recipe Name</Card.Title>
                    <Card.Text>At least 5 ingredients</Card.Text>
                    <Button variant="primary">View Recipe</Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Rating: 4.2</small>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Recipe;
