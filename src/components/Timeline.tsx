import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="April 2024 - October 2024"
            iconStyle={{ background: "#235789", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Research Intern - AI and Data Analytics
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Universität Koblenz - Koblenz, Germany
            </h5>
            <ul className="timeline-description">
              <li>Collected unstructured financial data using JavaScript web scraping to structure relevant data sources for AI analysis.</li>
              <li>Utilized transformer-based models (LLMs) to extract features, directly supporting the implementation of data-driven solutions.</li>
              <li>Analyzed model outputs to interpret market sentiment, demonstrating ability to analyze complex data within the context of technical applications.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="June 2021 - January 2022"
            iconStyle={{ background: "#235789", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer Intern
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Zymr, Inc. - Pune, India
            </h5>
            <ul className="timeline-description">
              <li>Assisted in coding, debugging, and documenting software modules using Python and SQL.</li>
              <li>Supported REST API integration and data validation tasks to ensure accurate data exchange between applications (data integration compliance).</li>
              <li>Conducted research on REST APIs, Git workflows, and CI/CD pipelines to improve project efficiency.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
