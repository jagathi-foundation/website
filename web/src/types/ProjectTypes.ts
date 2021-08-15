export interface Project {
  image: any;
  description: string;
  name: string;
  pillars: string[];
  project_countries: string[];
  projectstart: string;
}

export type ProjectsType = Project[];

export type CountriesListType = string[];
