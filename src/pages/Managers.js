import React from "react";
import { Link } from "react-router-dom";
import { managers } from "../data";
import Reveal from "../components/Reveal";

const Managers = () => {
  return (
    <Reveal>
      <section className="page-center">
        <h2>Portfolio Managers</h2>
        <ul className="managers">
          {managers.map((manager) => {
            const { id, name, image, position } = manager;
            return (
              <li key={id} className="single-manager">
                <Link to={`/manager/${id}`}>
                  <img src={image} className="manager-img" />
                  <h3>
                    {name}, {position}
                  </h3>
                  <p>Read More</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </Reveal>
  );
};

export default Managers;
