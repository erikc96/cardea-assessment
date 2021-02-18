import React from "react";
import { useQuery } from "react-apollo";
import { GET_JOBS } from "../features/job/query";
import { useParams } from "react-router-dom";
import { JobAccordion } from "../components/JobAccordion";
import { Job } from "../models.tsx/common";

export const List = () => {
  const { loading, error, data } = useQuery(GET_JOBS, {});
  let { id: listId } = useParams();
  const filteredList =
    !loading && !error
      ? data.jobs.filter((job: Job) =>
          job.lists.some((jobList) => jobList.id === listId)
        )
      : [];

  return (
    <>
      <nav className="bg-gray-400 col-span-1">Nav...</nav>
      <main className="bg-gray-500 col-span-8">
        {loading && <h1>Loading</h1>}
        {error && <h1>Error</h1>}
        {data && (
          <div className="py-16 mx-32 grid grid-flowrow md:grid-cols-3 gap-16">
            {filteredList.map((job: Job) => {
              return <JobAccordion job={job} />;
            })}
          </div>
        )}
      </main>
      <aside className="bg-gray-600 col-span-3"></aside>
      <footer className="bg-gray-300 row-auto col-span-12">Footer...</footer>
    </>
  );
};
