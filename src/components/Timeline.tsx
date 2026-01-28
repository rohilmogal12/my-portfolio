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
            date="Apr 2024 – Oct 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Forschungspraktikum — AI and Data Analytics
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Universität Koblenz, Germany
            </h4>
            <p>
              Collected and structured unstructured financial data with
              JavaScript-based web scraping to create AI-ready datasets, applied
              transformer-based language models to extract features and
              insights, and analyzed model outputs to interpret market sentiment
              on complex, real-world data.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2023 – Mar 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Analyst — Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Vodafone, Düsseldorf, Germany (Hybrid)
            </h4>
            <p>
              Supported data analysis and reporting by developing interactive
              Tableau dashboards for Finance and Product Management, performed
              SQL-based data extraction and transformation for regular and
              ad-hoc reporting, and helped automate recurring data workflows to
              improve reporting efficiency.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2021 – Jan 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer — Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Zymr, Inc.</h4>
            <p>
              Assisted in developing, debugging, and documenting Python and
              SQL-based software modules for internal automation tools,
              supported API integration and data validation for reliable data
              exchange between applications, and conducted technical research on
              REST APIs, Git workflows, and CI/CD pipelines to enhance
              development efficiency and code quality.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
