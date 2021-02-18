import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
//ts-ignore-next-line
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Job } from "../models.tsx/common";
import NumberFormat from "react-number-format";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

export const JobAccordion = ({ job }: { job: Job }) => {
  const classes = useStyles();

  return (
    <div className={classes.root + " jobAccordion"}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <span className={"text-gray-400 pr-4"}>{job.company}</span>
            {job.jobTitle}
            <span className="pl-2 font-bold text-gray-800">
              -{" "}
              <NumberFormat
                value={job.salaryMin}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />{" "}
              -{" "}
              <NumberFormat
                value={job.salaryMax}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={"text-center flex flex-col w-full"}>
            <h1>
              Work for{" "}
              <span className="text-xl tracking-wide">{job.company}!</span>{" "}
              <br />
              {job.location !== "Remote" ? (
                <>
                  In{" "}
                  <span className="text-xl tracking-wide">{job.location}!</span>{" "}
                </>
              ) : (
                <div className="text-xl tracking-wide shimmer">Remotely!</div>
              )}
            </h1>
            <div className={"mx-auto my-4"}>
              <a href={job.applyLink}>
                <Button>Apply Now</Button>
              </a>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default JobAccordion;
