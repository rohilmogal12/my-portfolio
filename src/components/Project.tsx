import React from "react";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/rohilmogal12/car-diagnosis-ai"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={pic1}
              className="zoom"
              alt="Car Fault Diagnosis Assistant thumbnail"
              width="100%"
            />
          </a>
          <h2>
            <a
              href="https://github.com/rohilmogal12/car-diagnosis-ai"
              target="_blank"
              rel="noreferrer"
            >
              Car Fault Diagnosis Assistant
            </a>
          </h2>
          <p>
            Built an AI-driven vehicle diagnosis system that transforms
            free-form symptom text into structured fault predictions using
            FastAPI, combining rule-based logic with LLM modules for hybrid
            reasoning and feature extraction, and delivered it as a
            production-ready application by containerizing the API, Streamlit
            dashboard, and local LLM with Docker Compose for reproducible
            deployment.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/rohilmogal12/Netflix-Exploratory-Data-Analysis-EDA"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={pic2}
              className="zoom"
              alt="Netflix EDA thumbnail"
              width="100%"
            />
          </a>
          <h2>
            <a
              href="https://github.com/rohilmogal12/Netflix-Exploratory-Data-Analysis-EDA"
              target="_blank"
              rel="noreferrer"
            >
              Netflix Exploratory Data Analysis (2025)
            </a>
          </h2>
          <p>
            Performed end-to-end exploratory data analysis on Netflix Movies and
            TV Shows in Python, cleaning, preprocessing, and standardizing raw
            datasets with Pandas and NumPy, uncovering trends in content type,
            ratings, genres, and release years, and communicating insights
            through clear visualizations built with Matplotlib and Seaborn to
            support data-driven content decisions.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/rohilmogal12/snowflake-youtube-pipeline"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={pic3}
              className="zoom"
              alt="ELT Pipeline YouTube Analytics thumbnail"
              width="100%"
            />
          </a>
          <h2>
            <a
              href="https://github.com/rohilmogal12/snowflake-youtube-pipeline"
              target="_blank"
              rel="noreferrer"
            >
              ELT Pipeline: YouTube Trend Analytics (2025)
            </a>
          </h2>
          <p>
            Developed a scalable ELT pipeline that extracts trending YouTube
            video data via APIs and loads it into Snowflake for cloud-based
            analytics, designed structured schemas and transformation logic in
            Python to optimize analytical querying, and enabled near real-time
            insight delivery through Power BI dashboards with live connections
            and automated data refresh from the cloud warehouse.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
