import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import image from '../../assets/food-6.png'
const Home = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 mt-2 bg-secondary">
        <div className="">
          <div class="col rounded py-3">
            <div class="card shadow h-100">
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

        <div className="">
          <div class="col rounded py-3">
            <div class="card shadow h-100">
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
                      View Chef Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div class="col rounded py-3">
            <div class="card shadow h-100">
              <div className="p-3">
                <div>
                  <img className="img-fluid" src={image} alt="" />
                </div>
                <h2>Name: Tanvir Hasan</h2>

                <div className="">
                  <h5>Experience: 5years</h5> {""}
                  <h5>Total Recipes: 10 </h5>
                  <h5>Total Likes: 500</h5>
                </div>
                <div className="text-center">
                  {" "}
                  <Link to="/recipe">
                    {" "}
                    <button type="button" class="btn w-75 btn-primary">
                      View Chef Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
