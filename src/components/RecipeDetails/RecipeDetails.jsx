import React from "react";
import { Button, Card } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RecipeDetails = ({ data }) => {
  const { recipe_image, recipe_name, rating, ingredients, cooking_method } =
    data;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={recipe_image} />
        <Card.Body>
          <Card.Title className="text-center  fw-bold fs-4">{recipe_name} </Card.Title>
                  <Card.Text>
                      <p className="fs-5">Ingredients: </p>
            <ul className="">
              <li>{ingredients[0]}</li>
              <li>{ingredients[1]}</li>
              <li>{ingredients[2]}</li>
              <li>{ingredients[3]}</li>
              <li>{ingredients[4]}</li>
            </ul>
          </Card.Text>
          <div className="py-2">
            <h5 className="">Rating: {rating}</h5>
          </div>
                  <Card.Text>
                      <p className="fs-5">Cooking Method:</p>
            <ul className="">
              <li>{cooking_method[0]}</li>
              <li>{cooking_method[1]}</li>
              <li>{cooking_method[2]}</li>
              <li>{cooking_method[3]}</li>
              <li>{cooking_method[4]}</li>
            </ul>
          </Card.Text>
        </Card.Body>
        <Button variant="primary">Favorite</Button>
      </Card>
    </div>
  );
};

export default RecipeDetails;
