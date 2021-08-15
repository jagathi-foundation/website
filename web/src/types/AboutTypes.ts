export type CoreTeamListType = Array<{
  image: any;
  name: string;
  description: string;
}>;

export interface CoreTeamPerson {
  image: any;
  name: string;
  description: string;
}

export interface FounderType {
  image: any;
  name: string;
  description: string;
}

export type PillarsListType = string[];

export interface AboutFullContentType {
  coverimg: any;
  ourvision: string;
  foundingstory: string;
  whatwedo: string;
}
