export interface NavLink {
  text: string;
  link: string;
}

export interface List {
  name: string;
  description: string;
  image: string;
  listCurator: string;
  id: string;
}

export interface Job {
  jobTitle: string;
  company: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  applyLink: string;
  lists: Array<List>;
  id: string;
}
