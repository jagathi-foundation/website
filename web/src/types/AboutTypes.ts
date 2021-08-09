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
  img: string;
  name: string;
  desc: string;
}

export type PillarsListType = string[];

export interface AboutFullContentType {
  img: string;
  descs: Array<{
    name: string;
    desc: string;
  }>;
}
