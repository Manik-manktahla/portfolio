import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const Experience = (props) => {

  return (
    <div className="experience-container" id="experience">
      <h1 className="text-color-blue">EXPERIENCE</h1>
      <Divider />
      <Timeline>
        {props.experience.map((exp) => {
          return (
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">
                  {exp.year.start}-{exp.year.end || "present"}
                </Typography>
                <Typography color="textSecondary">{exp.role}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="experience-text">
                <Typography>{exp.company_name}</Typography>
                <Typography>{exp.location}</Typography>
                <div className="exp-des">
                {exp.description.map((des) => {
                  return <Typography>{des}</Typography>;
                })}
                </div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
};

export default Experience;
