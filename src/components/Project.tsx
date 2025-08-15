import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";

import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://rohilmogal12.github.io/Netflix-Exploratory-Data-Analysis-EDA/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://rohilmogal12.github.io/Netflix-Exploratory-Data-Analysis-EDA/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Netflix Exploratory Data Analysis</h2>
          </a>
          <p>
            Conducted in-depth exploratory data analysis on Netflix’s content
            dataset to uncover trends in release patterns, content types,
            genres, and ratings. Utilized Python (Pandas, Matplotlib, Seaborn)
            to clean data, visualize key insights, and identify strategic
            content distribution across time and countries.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.kaggle.com/code/rohilmogal78/case-study-cyclistic-rental-company"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.kaggle.com/code/rohilmogal78/case-study-cyclistic-rental-company"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Case Study: Data Analysis of Cyclistic Bike Rental</h2>
          </a>
          <p>
            Analyzed one year of bike-share data to uncover usage patterns
            between casual riders and annual members. Cleaned and processed
            large datasets using R and SQL, generated visualizations, and
            identified key behavioral trends. Delivered actionable
            recommendations to support a marketing strategy focused on
            increasing annual memberships.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
