import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";

import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>Vehicle Diagnosis using AI 2025</h2>
          </a>
          <p>
            Built a FastAPI engine that turns free-form symptom text into
            keyword-matched faults with severity, safety, and concise AI
            guidance, backed by custom parsing, rules, and LLM modules.
            Containerized the API, Streamlit UI, and local LLM into a single
            Docker Compose stack and delivered a dashboard that highlights
            severity, safety, likely issues, costs, and mechanical faults.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/rohilmogal12/snowflake-youtube-pipeline"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/rohilmogal12/snowflake-youtube-pipeline"
            target="_blank"
            rel="noreferrer"
          >
            <h2>ELT Pipeline: YouTube Trend Analytics 2025</h2>
          </a>
          <p>
            Developed a full ELT pipeline for data integration using Python and
            APIs, ensuring reliable data extraction and schema design within
            Snowflake for efficient querying. Created interactive Power BI
            dashboards to visualize engagement metrics, utilizing a live data
            connection to the cloud data warehouse to guarantee automatic data
            fetching.
          </p>
        </div>
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
