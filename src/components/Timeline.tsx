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
            date="08/2024 - 01/2025"
            iconStyle={{ background: "#235789", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Warehouse Associate
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Amazon Logistics - Koblenz, Germany
            </h5>
            <p>
              Proficient in using PDAs, scanners, and Microsoft Office 365 for
              efficient warehouse operations, handling dangerous goods and
              managing inbound logistics using Amazon warehouse software.
              Coordinated delivery, package fulfillment, and shipment tracking
              in collaboration with the operations
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="04/2024 - 08/2024"
            iconStyle={{ background: "#235789", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Research Internship – Equity Analysis with AI
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Universität Koblenz - Koblenz, Germany
            </h5>
            <p>
              Data Collection, Data Cleaning and Preparation, Exploratory Data
              Analysis, Statistical Measurement, Visualization and Reporting,
              Insights and Decision Support
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="05/2021 – 07/2022"
            iconStyle={{ background: "#235789", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Product Data Analyst
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Zymr, Inc. - Pune, India
            </h5>
            <p>
              Data extraction, cleaning, SQL, Python (Pandas), Tableau
              dashboards, anomaly detection, trend analysis, workflow
              optimization, real-time analytics.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
