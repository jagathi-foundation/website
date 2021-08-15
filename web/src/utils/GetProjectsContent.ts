import axios from "axios";
import { ProjectsURL } from "../constants/Endpoints";
import {
  NavLinksURL,
  FooterURL,
  PillarsURL,
  ProjectCountriesURL,
} from "../constants/Endpoints";

export default async function getProjectsContent() {
  const requestURLS = [
    NavLinksURL,
    PillarsURL,
    ProjectCountriesURL,
    ProjectsURL,
    FooterURL,
  ];

  const requests = requestURLS.map((url) => axios.get(url));

  const [navReq, pillarsReq, projectCountriesReq, projectsReq, footerReq] =
    await Promise.all(requests);

  const data = [
    navReq.data,
    pillarsReq.data,
    projectCountriesReq.data,
    projectsReq.data,
    footerReq.data,
  ];

  return data;
}
