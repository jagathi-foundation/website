import axios from "axios";
import {
  NavLinksURL,
  FooterURL,
  PillarsURL,
  ProjectCountriesURL,
} from "../constants/Endpoints";

export default async function getProjectsContent() {
  const requestURLS = [NavLinksURL, PillarsURL, ProjectCountriesURL, FooterURL];

  const requests = requestURLS.map((url) => axios.get(url));

  const [navReq, pillarsReq, projectCountriesReq, footerReq] =
    await Promise.all(requests);

  const data = [
    navReq.data,
    pillarsReq.data,
    projectCountriesReq.data,
    footerReq.data,
  ];

  return data;
}
