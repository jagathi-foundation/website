export interface ProjectTopicType {
  name: string;
  desc: string;
  img: string;
}

export type ProjectTopicTypeList = Array<{
  name: string;
  desc: string;
  img: string;
}>;

export interface ImpactDataType {
  servedpeople: number;
  volunteers: number;
  workhours: number;
}

export interface AboutBlobContentType {
  image: any;
  description: string;
}

export interface SlideItemType {
  name: string;
  image: any;
}

export type SlideItemTypeList = Array<{
  name: string;
  image: any;
}>;
