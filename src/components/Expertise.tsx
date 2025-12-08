import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faCloud,
  faCode,
  faBrain,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = ["Python", "SQL", "JavaScript"];
const labelsSecond = ["Snowflake", "ETL Design", "Docker", "CI/CD", "Git", "REST APIs"];
const labelsThird = [
  "Machine Learning (Regression, Classification)",
  "LLMs",
  "Transformer Models",
  "FastAPI",
  "Streamlit",
  "Web Scraping",
];
const labelsFourth = [
  "Power BI (Advanced, DAX, Power Query)",
  "PowerApps (Canvas)",
  "Power Automate",
];
const labelsFifth = ["English (C1)", "German (B1 learning)"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertises</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <h3>Programming Languages</h3>
            <div className="flex-chips">
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCloud} size="3x" />
            <h3>Data Engineering & Cloud</h3>
            <div className="flex-chips">
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />
            <h3>AI & Frameworks</h3>
            <div className="flex-chips">
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faChartSimple} size="3x" />
            <h3>Business Intelligence</h3>
            <div className="flex-chips">
              {labelsFourth.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faLanguage} size="3x" />
            <h3>Languages</h3>
            <div className="flex-chips">
              {labelsFifth.map((label, index) => (
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
