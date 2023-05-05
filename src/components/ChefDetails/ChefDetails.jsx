import React from "react";
import { Link } from "react-router-dom";

const ChefDetails = ({ data }) => {
  const {
    id,
    chef_name,
    chef_picture,
    number_of_recipes,
    total_likes,
    years_of_experience,
  } = data;

  return (
    <div className="">
      <div class="col rounded h-100 py-3 ">
        <div class="card shadow  card-bg-color">
          <div className="p-3">
            <div>
              <img className="img-fluid" src={chef_picture} alt="" />
            </div>
            <h2 className="text-center">{chef_name}</h2>

            <div className="">
              <div className="d-flex justify-content-around">
                <p className="">No of Recipes: {number_of_recipes}</p>
                <p className="">Total Likes: {total_likes}</p>
              </div>
              <h5 className="text-center">Experience: {years_of_experience} years</h5> {""}
            </div>
            <div className="text-center mt-3">
              {" "}
              <Link to={`/recipe/${id}`}>
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
  );
};

export default ChefDetails;
