import axios from "axios";
import {
  NavLinksURL,
  CarouselURL,
  AboutBlobURL,
  ImpactURL,
  ProjectTopicsURL,
  FooterURL,
} from "../constants/Endpoints";

export default async function getHomeContent() {
  const requestURLS = [
    NavLinksURL,
    CarouselURL,
    AboutBlobURL,
    ImpactURL,
    ProjectTopicsURL,
    FooterURL,
  ];

  const requests = requestURLS.map((url) => axios.get(url));

  const [
    navReq,
    carouselReq,
    aboutBlobReq,
    impactReq,
    projectTopicReq,
    footerReq,
  ] = await Promise.all(requests);

  const data = [
    navReq.data,
    carouselReq.data,
    aboutBlobReq.data,
    impactReq.data,
    projectTopicReq.data,
    footerReq.data,
  ];

  return data;
}
