import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Python",
  "SQL",
  "JavaScript",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Data Pipelines",
  "ELT Pipelines",
  "Snowflake",
  "Data Modeling",
  "REST APIs",
  "API Integration",
];

const labelsSecond = [
  "Power BI",
  "Power Query",
  "Tableau",
  "Excel",
  "Git",
  "GitHub CI/CD",
  "Docker",
  "Docker Compose",
  "Linux",
  "Process Automation",
];

const labelsThird = [
  "LLM Agents",
  "RAG Pipelines",
  "Prompt Engineering",
  "Sentiment Analysis",
  "ARIMA",
  "Forecasting Models",
  "LangChain",
  "Hugging Face",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Programming & Data Engineering</h3>
            <p>
              I build reliable data pipelines and ETL workflows using Python,
              SQL, and JavaScript—covering ingestion, modeling, and quality
              assurance so raw data becomes structured, decision-ready assets.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Business Intelligence & DevOps</h3>
            <p>
              I turn data into insight with Power BI, Power Query, and Tableau,
              and ship reliably with Git, Docker, and CI/CD so analytics reach
              stakeholders through automated, production-grade workflows.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>AI & Machine Learning</h3>
            <p>
              I apply modern AI and machine learning—LLM agents, RAG pipelines,
              prompt engineering, and forecasting models—to extract insight from
              unstructured data and automate decision-making.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
