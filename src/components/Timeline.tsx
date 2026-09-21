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
              Research Intern, Universität Koblenz
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Universität Koblenz, Germany
            </h4>
            <p>
              Built data pipelines to gather, clean, and structure financial and
              market data from multiple sources using Python, SQL, and
              JavaScript, designed an LLM-based sentiment-analysis workflow that
              turns unstructured news data into structured insights, and
              evaluated forecasting models to improve prediction accuracy by up
              to 25%.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2021 – Aug 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Zymr, Inc., Pune, India
            </h4>
            <p>
              Automated data processing and reporting workflows using Python and
              SQL, built and validated API integrations for reliable data
              exchange between teams and stakeholders, and developed REST API
              workflows with Git version control and CI/CD pipelines to support
              platform maintenance.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
