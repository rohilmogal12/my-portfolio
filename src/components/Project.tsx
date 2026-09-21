import React from "react";
import pic1 from "../assets/images/pic1.png";
import pic3 from "../assets/images/pic3.png";
import pic4 from "../assets/images/pic4.png";
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
              alt="Vehicle Diagnostics with AI thumbnail"
              width="100%"
            />
          </a>
          <h2>
            <a
              href="https://github.com/rohilmogal12/car-diagnosis-ai"
              target="_blank"
              rel="noreferrer"
            >
              Vehicle Diagnostics with AI
            </a>
          </h2>
          <p>
            Built a full-stack diagnostics system combining rule-based logic
            with AI-generated explanations, documented through a structured REST
            API for system integration, and containerized the application with
            Docker and Docker Compose for production deployment.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/rohilmogal12/uber-analytics-dashboard"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={pic4}
              className="zoom"
              alt="Uber Analytics Dashboard thumbnail"
              width="100%"
            />
          </a>
          <h2>
            <a
              href="https://github.com/rohilmogal12/uber-analytics-dashboard"
              target="_blank"
              rel="noreferrer"
            >
              Uber Analytics Dashboard
            </a>
          </h2>
          <p>
            Designed and developed an interactive Business Intelligence
            dashboard in Power BI, transforming raw trip data into insights on
            ride demand, peak usage times, and geographic distribution, and
            executed data cleaning, transformation, and data modeling using
            Power Query to build a high-quality dataset for tracking KPIs.
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
              ELT Pipeline: YouTube Trend Analytics
            </a>
          </h2>
          <p>
            Built a scalable ELT pipeline that extracts data via APIs and loads
            it into Snowflake using automated transformation logic to reduce
            manual effort, and developed Power BI dashboards with live
            connections and automated refresh cycles from cloud-based data
            warehouses for real-time KPI monitoring.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
