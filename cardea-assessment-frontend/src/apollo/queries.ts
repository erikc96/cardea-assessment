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

export const GET_LISTS = gql`
  query GetLists {
    lists {
      name
      description
      image
      listCurator
      id
    }
  }
`;

export const GET_LISTS_AND_JOBS = gql`
  query GetListsAndJobs {
    lists {
      name
      description
      image
      listCurator
      id
    }

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
