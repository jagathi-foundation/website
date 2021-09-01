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
  projectcount: number;
  volunteers: number;
  volunteerhours: number;
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
 