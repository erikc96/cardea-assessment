import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  AppBar,
} from "@material-ui/core";
import { List, Job } from "../models.tsx/common";
import { ListCard } from "../components/ListCard";
import { JobAccordion } from "../components/JobAccordion";
import ListSlider from "../components/ListSlider";
import JobAccordionContainer from "../components/JobAccordionContainer";
import { GET_LISTS_AND_JOBS } from "../apollo/queries";

export const JobsByLists = () => {
  const { loading, error, data } = useQuery(GET_LISTS_AND_JOBS, {});

  const [selected, setSelected] = useState(["0"]);
  const filteredList =
    !loading && !error
      ? data.jobs.filter((job: Job) =>
          job.lists.some((jobList) => selected.includes(jobList.id))
        )
      : [];

  const toggleSelected = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((each: string) => each !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <>
      <div className="col-span-2"></div>
      <main className="col-span-8">
        {loading && <h1>Loading</h1>}
        {error && <h1>Error</h1>}
        {data && (
          <div className="mt-32 shadow-lg grid grid-flow-row gap-16">
            <ListSlider>
              {[...data.lists, ...data.lists].map((list: List, index) => {
                return (
                  <div
                    key={index}
                    className="h-full"
                    onClick={() => toggleSelected(list.id)}
                  >
                    <ListCard
                      list={list}
                      checked={selected.includes(list.id)}
                    />
                  </div>
                );
              })}
            </ListSlider>
            <div className={"shadow-xs min-h-32 pb-32 px-8 text-center"}>
              <h1 className={"my-6 text-4xl"}>
                Jobs from the lists you've selected 🚀{" "}
              </h1>
              {filteredList.length != 0 ? (
                <JobAccordionContainer>
                  {filteredList.map((job: Job) => {
                    return <JobAccordion job={job} />;
                  })}
                </JobAccordionContainer>
              ) : (
                <h3 className={"text-lg text-center"}> No jobs! </h3>
              )}
            </div>
          </div>
        )}
      </main>
      <aside className="col-span-2"></aside>
    </>
  );
};

export default JobsByLists;
