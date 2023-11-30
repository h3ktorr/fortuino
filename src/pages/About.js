import React from 'react'
import {Link} from 'react-router-dom'
import { missions } from '../data'
import { IoPeople } from "react-icons/io5"
import { PiChatsCircleDuotone } from "react-icons/pi"
import { SlGlobeAlt } from "react-icons/sl";

const About = () => {
  return (
    <>
      <div className="page-center">
        <h2>About Fortuino</h2>
        <div>
          <p>
            Fortuino is one of the world’s leading providers of investment,
            advisory and risk management solutions. We are a fiduciary to our
            clients. We’re investing for the future on behalf of our clients,
            inspiring our employees, and supporting our local communities.
          </p>
          <p>
            Our purpose is to help more and more people experience financial
            well-being. Together with our clients, we’re contributing to a more
            equitable and resilient world – today and for generations to come.
          </p>
        </div>
        <h3>Our Focus</h3>
        <div className="about-mission">
          {missions.map((mission) => {
            const { id, image, title, body } = mission;
            return (
              <div key={id} className="mission">
                <img src={image} className="mission-img" />
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
        <h3>Who we are</h3>
        <p>
          At Our Investment Platform, we believe in empowering individuals to
          achieve their financial goals through smart and strategic investments.
          Our mission is to provide a reliable and transparent platform where
          investors can grow their wealth and create a secure future.
          <br />
          <br />
          We understand that navigating the world of investments can be
          daunting, which is why we have made it our priority to simplify the
          process for you. With our user-friendly platform and expert guidance,
          you can confidently embark on your investment journey, even if you are
          new to the world of finance.
          <br />
          <br />
          We offer a range of investment opportunities carefully curated by our
          team of seasoned professionals. These opportunities span various
          sectors and markets, providing you with the flexibility to diversify
          your portfolio and mitigate risks. Our rigorous due diligence process
          ensures that we select investments with strong growth potential,
          giving you the best chance to maximize your returns.
          <br />
          <br />
          Transparency is at the core of everything we do. We believe in
          fostering trust and building long-lasting relationships with our
          investors. That's why we provide comprehensive information about each
          investment opportunity, including detailed reports, performance
          metrics, and risk assessments. You can make informed decisions and
          stay updated on the progress of your investments at all times.
          <br />
          <br />
          When you invest with us, you gain access to a supportive community of
          like-minded individuals. Our platform facilitates networking and
          knowledge sharing, allowing you to learn from experienced investors
          and industry experts. We believe that continuous learning is key to
          success, and we strive to provide educational resources and insights
          to empower you on your investment journey.
          <br />
          <br />
          We take the security of your investments seriously. Our platform is
          built with robust security measures to safeguard your funds and
          personal information. We adhere to industry best practices and ensure
          compliance with relevant regulations, providing you with peace of mind
          as you invest with us.
          <br />
          <br />
          We are excited to embark on this investment journey with you. Start
          exploring our platform, discover lucrative investment opportunities,
          and take the first step towards financial prosperity. Together, let's
          unlock the potential of your investments and build a brighter future.
          <br />
          <br />
        </p>

        <div className="who-we-serve">
          <h3>Who We Serve</h3>
          <article className="services">
            <IoPeople className="about-icons" />
            <h4>2000+ employees</h4>
            <p>In our office</p>
          </article>
          <article className="services">
            <PiChatsCircleDuotone className="about-icons" />
            <h4>1M+</h4>
            <p>
              We help more than 1 million individual and cooperation invest and
              save
            </p>
          </article>
          <article className="services">
            <SlGlobeAlt className="about-icons" />
            <h4>50000+ </h4>
            <p>
              Us financial advisors use Fortuino to help build client portfolio
            </p>
          </article>
        </div>
        <p>
          At Fortuino, we believe we’re at our best when our employees connect
          their personal purpose to their work and our firm’s purpose. In our
          “What’s Your Why” series, employees share how they bring their
          passions to what they do.
        </p>
        <div className="about-conclusion">
          <h3>Who we serve</h3>
          <div>
            <h4>Individual and Family</h4>
            <p>
              Providing choice for those investing for retirement, a new home or
              child education
            </p>
          </div>
          <div>
            <h4>Financial Advisors</h4>
            <p>Helping people at all income levels invest for their future</p>
          </div>
          <div>
            <h4>Education and Nonprofit organization</h4>
            <p>
              Providing choice for those investing for retirement, a new home or
              child education
            </p>
          </div>
          <div>
            <h4>Pension plans</h4>
            <p>
              Managing the retirement saving for teachers, doctors and workers
              and small house owners
            </p>
          </div>
          <div>
            <h4>Insurance Companies</h4>
            <p>Supporting people during life most difficult moments</p>
          </div>
          <div>
            <h4>Government</h4>
            <p>
              Financing new schools, hospital, road and other projects. helping
              to drive economic growth
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About
