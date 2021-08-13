export type CoreTeamListType = Array<{
  img: string;
  name: string;
  desc: string;
}>;

export interface CoreTeamPerson {
  img: string;
  name: string;
  desc: string;
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
