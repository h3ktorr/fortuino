import React from "react";
import { Link } from "react-router-dom";
import { informations, Portfolio } from "../data";

const Home = () => {
  return (
    <main>
      <div className="welcome-text page-center">
        <p>
          The capital entrusted to us is not merely currency; it represents the
          aspirations of diverse individuals across various regions, each
          striving for their paramount financial objectives. With a presence in
          50 offices spanning 20 locations, our local proficiency is fortified
          by a commitment to global service. We provide investment solutions,
          cutting-edge technology, and empowering tools, assisting countless
          individuals in fulfilling immediate financial needs, constructing
          wealth, and securing a steadfast retirement.
        </p>
      </div>
      <div className="welcome-image">
        <h3>
          At Fortuino, you're not just a client, you're a valued member.
          Fortuino is more than a firm; it's a community owned by those who
          trade with us.*
        </h3>
        <p>
          As members, you gain exclusive access to tailored financial guidance,
          top-tier investment opportunities, cutting-edge tools for financial
          planning, and timely market insights. Build a prosperous future with
          Fortuino for yourself and your loved ones.
        </p>
      </div>
      <div className="page-center main-page">
        <button className="btn ">
          <Link to="/register">Register</Link>
        </button>
        <h3>PORTFOLIOS AT YOUR SERVICE</h3>
        <p className="main-text">
          Portfolios are tailored to align with individual investment objectives
          and preferences. Recognizing the uniqueness of each investor's
          journey, we stand by our clients as dedicated partners, attentively
          listening to their stories. Our diverse array of portfolios
          exemplifies our commitment to assisting a wide spectrum of investors
          in crafting robust financial futures.
          <br />
          <br />
          Each portfolio is designed to cater to different investment
          preferences and risk appetites, providing clients with a range of
          options to align with their financial goals.
        </p>
        <div>
          {Portfolio.map(item => {
            const {id, title, description, features} = item;
            return <div key={id}>
              <h3>{title}</h3>
              <p>Description: {description}</p>
              <p>Key Features: {features}</p>
            </div>
          })}
        </div>
      </div>
      <ul className="main-information">
        {informations.map((information) => {
          const { id, name, route } = information;
          return (
            <li key={id} className="btn information-btn">
              <Link to={route}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
