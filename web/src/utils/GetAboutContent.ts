import axios from "axios";
import {
  AboutFullURL,
  NavLinksURL,
  FooterURL,
  PillarsURL,
  FounderURL,
  CoreTeamURL,
} from "../constants/Endpoints";

export default async function getAboutContent() {
  const requestURLS = [
    NavLinksURL,
    AboutFullURL,
    PillarsURL,
    FounderURL,
    CoreTeamURL,
    FooterURL,
  ];

  const requests = requestURLS.map((url) => axios.get(url));

  const [navReq, aboutFullReq, pillarsReq, founderReq, coreTeamReq, footerReq] =
    await Promise.all(requests);

  const data = [
    navReq.data,
    aboutFullReq.data,
    pillarsReq.data,
    founderReq.data,
    coreTeamReq.data,
    footerReq.data,
  ];

  return data;
}
