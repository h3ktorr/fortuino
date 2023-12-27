import React from "react";
import { Link } from "react-router-dom";
import { informations, Portfolio } from "../data";
import { useGlobalContext } from "../context";
import Reveal from "../components/Reveal";

const Home = () => {
  const { forexNewsData, btcNewsData, loading } = useGlobalContext;
  return (
    <main className="main">
      <Reveal>
        <div className="welcome-text page-center">
          <p>
            The capital entrusted to us is not merely currency; it represents
            the aspirations of diverse individuals across various regions, each
            striving for their paramount financial objectives. With a presence
            in 50 offices spanning 20 locations, our local proficiency is
            fortified by a commitment to global service. We provide investment
            solutions, cutting-edge technology, and empowering tools, assisting
            countless individuals in fulfilling immediate financial needs,
            constructing wealth, and securing a steadfast retirement.
          </p>
        </div>
      </Reveal>
      <Reveal>
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
      </Reveal>
      <Reveal>
        <div className="welcome-image">
          <h3>
            At Fortuino, you're not just a client, you're a valued member.
            Fortuino is more than a firm; it's a community owned by those who
            trade with us.*
          </h3>
          <p>
            As members, you gain exclusive access to tailored financial
            guidance, top-tier investment opportunities, cutting-edge tools for
            financial planning, and timely market insights. Build a prosperous
            future with Fortuino for yourself and your loved ones.
          </p>
        </div>
      </Reveal>
      <Reveal>
        <div className="main-portfolio page-center">
          <button className="btn ">
            <Link to="/register">Register</Link>
          </button>
          <h3>PORTFOLIOS AT YOUR SERVICE</h3>
          <p className="portfolio-text">
            Portfolios are tailored to align with individual investment
            objectives and preferences. Recognizing the uniqueness of each
            investor's journey, we stand by our clients as dedicated partners,
            attentively listening to their stories. Our diverse array of
            portfolios exemplifies our commitment to assisting a wide spectrum
            of investors in crafting robust financial futures.
            <br />
            <br />
            Each portfolio is designed to cater to different investment
            preferences and risk appetites, providing clients with a range of
            options to align with their financial goals.
          </p>
          <div className="portfolios">
            {Portfolio.map((item) => {
              const { id, title, description, features } = item;
              return (
                <div key={id} className="single-portfolio">
                  <h3>{title}</h3>
                  <p>
                    <span>Description:</span> {description}
                  </p>
                  <p>
                    <span>Key Features:</span> {features}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="page-center">
          <div className="doings">
            <h3>Unified Goals</h3>
            <p>
              As our stakeholders are also our partners, our objectives are
              harmoniously intertwined, enabling us to prioritize your needs and
              aspirations.
            </p>
          </div>
          <div className="doings">
            <h3>Decisive Actions</h3>
            <p>
              With our investors as our co-owners, we execute decisions with
              unwavering confidence in alignment with the investment themes
              significant to you.
            </p>
          </div>
          <div className="doings">
            <h3>Enduring Vision</h3>
            <p>
              With investors doubling as owners, our attention spans the
              long-term horizon, steering clear of transient quarterly results
              in favor of enduring success.
            </p>
          </div>
          <div className="doings">
            <h3>Economical Solutions</h3>
            <p>
              Being owned by our investors empowers us to perpetually share the
              benefits of scale, consistently reducing the cost of investment,
              ensuring you retain a larger portion of your returns.
            </p>
          </div>
        </div>
      </Reveal>
    </main>
  );
};

export default Home;
