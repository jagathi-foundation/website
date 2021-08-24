export interface ProjectTopicType {
  name: string;
  description: string;
  img: any;
}

export type ProjectTopicTypeList = Array<{
  name: string;
  description: string;
  image: any;
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
  media: any;
  video: boolean
}

export type SlideItemTypeList = Array<{
  name: string;
  media: any;
  video: boolean
}>;
 