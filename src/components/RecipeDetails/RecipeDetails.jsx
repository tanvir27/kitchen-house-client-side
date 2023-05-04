import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { Toaster, toast } from "react-hot-toast";
const RecipeDetails = ({ data }) => {
    const [favorite, setFavorite] = useState(false);
    const { recipe_image, recipe_name, rating, ingredients, cooking_method } = data;
    
const handleAddToFavorite = () => {
    setFavorite(true);
   toast.success("Added To Favorite!");
   
  };
  return (
    <div>
      <Card className="shadow card-bg-color">
        <Card.Img variant="top" src={recipe_image} />
        <Card.Body>
          <Card.Title className="text-center text-primary fw-bold fs-4">
            {recipe_name}{" "}
          </Card.Title>
          <Card.Text>
            <p className="fs-5 fw-semibold">Ingredients: </p>
            <ul className="">
              <li>{ingredients[0]}</li>
              <li>{ingredients[1]}</li>
              <li>{ingredients[2]}</li>
              <li>{ingredients[3]}</li>
              <li>{ingredients[4]}</li>
            </ul>
          </Card.Text>
          <div className="py-2 ">
            <p className="text-danger fs-4 fw-semibold">
              Rating:{" "}
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            </p>
          </div>
          <Card.Text>
            <p className="fs-5 fw-semibold">Cooking Method:</p>
            <ul className="">
              <li>{cooking_method[0]}</li>
              <li>{cooking_method[1]}</li>
              <li>{cooking_method[2]}</li>
              <li>{cooking_method[3]}</li>
              <li>{cooking_method[4]}</li>
            </ul>
          </Card.Text>
        </Card.Body>
        <Button
          onClick={handleAddToFavorite}
          disabled={favorite}
          variant="primary"
        >
          Favorite
        </Button>
        <Toaster position="top-center" reverseOrder={false} />
      </Card>
    </div>
  );
};

export default RecipeDetails;
