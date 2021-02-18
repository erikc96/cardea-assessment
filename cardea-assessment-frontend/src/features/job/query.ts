import gql from "graphql-tag";
export const GET_JOBS = gql`
  query GetJobs {
    jobs {
      jobTitle
      company
      location
      salaryMin
      salaryMax
      applyLink
      lists {
        id
      }
    }
  }
`;
