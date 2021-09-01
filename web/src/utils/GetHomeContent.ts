import axios from "axios";
import {
  NavLinksURL,
  CarouselURL,
  AboutBlobURL,
  ImpactURL,
  FooterURL,
  PillarsURL
} from "../constants/Endpoints";

export default async function getHomeContent() {
  const requestURLS = [
    NavLinksURL,
    CarouselURL,
    AboutBlobURL,
    ImpactURL,
    PillarsURL,
    FooterURL,
  ];

  const requests = requestURLS.map((url) => axios.get(url));

  const [
    navReq,
    carouselReq,
    aboutBlobReq,
    impactReq,
    pillarsReq,
    footerReq,
  ] = await Promise.all(requests);

  const data = [
    navReq.data,
    carouselReq.data,
    aboutBlobReq.data,
    impactReq.data,
    pillarsReq.data,
    footerReq.data,
  ];

  return data;
}
