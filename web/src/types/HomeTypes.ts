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
  people: number;
  volunteers: number;
  workhours: number;
}

export interface AboutBlobContentType {
  img: string;
  desc: string;
}

export interface SlideItemType {
  src: string;
  alt: string;
}

export type SlideItemTypeList = Array<{
  src: string;
  alt: string;
}>;
