export interface ProjectType {
  id: number;
  image: any;
  description: string;
  name: string;
  pillars: string[];
  project_countries: string[];
  projectstart: string;
}

export type ProjectsType = ProjectType[];

export type CountriesListType = string[];
