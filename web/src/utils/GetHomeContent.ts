import axios from "axios";
import {
  NavLinksURL,
  CarouselURL,
  AboutBlobURL,
  ImpactURL,
} from "../constants/Endpoints";
import "../constants/CMSURL";

export default async function getHomeContent() {
  const [navReq, carouselReq, aboutBlobReq, impactReq] = await Promise.all([
    axios.get(NavLinksURL),
    axios.get(CarouselURL),
    axios.get(AboutBlobURL),
    axios.get(ImpactURL),
  ]);

  return [navReq.data, carouselReq.data, aboutBlobReq.data, impactReq.data];
}
