import axios from "axios";
import {
  AboutFullURL,
  NavLinksURL,
  FooterURL,
  FounderURL,
  CoreTeamURL,
} from "../constants/Endpoints";

export default async function getAboutContent() {
  const requestURLS = [
    NavLinksURL,
    AboutFullURL,
    FounderURL,
    CoreTeamURL,
    FooterURL,
  ];

  const requests = requestURLS.map((url) => axios.get(url));

  const [navReq, aboutFullReq, founderReq, coreTeamReq, footerReq] =
    await Promise.all(requests);

  const data = [
    navReq.data,
    aboutFullReq.data,
    founderReq.data,
    coreTeamReq.data,
    footerReq.data,
  ];

  return data;
}
