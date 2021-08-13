import axios from "axios";
import { FounderURL } from "../constants/Endpoints";
import {
  AboutFullURL,
  NavLinksURL,
  FooterURL,
  PillarsURL,
} from "../constants/Endpoints";

export default async function getAboutContent() {
  const requestURLS = [
    NavLinksURL,
    AboutFullURL,
    PillarsURL,
    FounderURL,
    FooterURL,
  ];

  const requests = requestURLS.map((url) => axios.get(url));

  const [navReq, aboutFullReq, pillarsReq, founderReq, footerReq] =
    await Promise.all(requests);

  const data = [
    navReq.data,
    aboutFullReq.data,
    pillarsReq.data,
    founderReq.data,
    footerReq.data,
  ];

  return data;
}
