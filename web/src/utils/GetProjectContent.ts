import axios from "axios";
import {
  NavLinksURL,
  FooterURL,
  ProjectsURL,
} from "../constants/Endpoints";

export default async function getProjectContent(id: string) {
  const requestURLS = [
    NavLinksURL,
    FooterURL,
    `${ProjectsURL}/${id}`
  ];

  const requests = requestURLS.map((url) => axios.get(url));

  const [navReq, footerReq, projectReq] =
    await Promise.all(requests);

  const data = [
    navReq.data,
    footerReq.data,
    projectReq.data
  ];

  return data;
}


