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

const Education = (props) => {
  return (
    <div className="experience-container" id="education">
      <h1 className="text-color-blue">EDUCATION</h1>
      <Divider />
      <Timeline>
        {props.education.map((education) => {
          return (
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">
                  {education.year.start}-{education.year.end}
                </Typography>
                <Typography color="textSecondary">{education.Field}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="experience-text">
                <Typography>{education.Institute_Name}</Typography>
                <Typography>{education.marks}</Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
};

export default Education;
