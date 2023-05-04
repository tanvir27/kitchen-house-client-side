import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RecipeDetails = ({ data }) => {
    const [favorite, setFavorite] = useState(false);
    const { recipe_image, recipe_name, rating, ingredients, cooking_method } = data;
    
const handleAddToFavorite = () => {
    setFavorite(true);
//    toast.success("Successfully toasted!");
    toast("Add to Favorite!");
  };
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={recipe_image} />
        <Card.Body>
          <Card.Title className="text-center  fw-bold fs-4">
            {recipe_name}{" "}
          </Card.Title>
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
            <h5 className="">
              Rating:{" "}
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            </h5>
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
        <Button
          onClick={handleAddToFavorite}
          disabled={favorite}
          variant="primary"
        >
          Favorite
        </Button>
        <ToastContainer />
      </Card>
    </div>
  );
};

export default RecipeDetails;
